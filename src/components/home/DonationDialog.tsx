'use client';

import { useState, useEffect, useCallback } from 'react';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getStripe } from '@/lib/stripe';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const PRESET_AMOUNTS = [1000, 2500, 5000, 10000];

interface DonationDialogProps {
  trigger?: React.ReactNode;
  className?: string;
}

function PaymentForm({ amount, onSuccess }: { amount: number; onSuccess: () => void }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setErrorMessage(null);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message || 'Validation failed');
      setIsLoading(false);
      return;
    }

    const res = await fetch('/api/payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();
    if (data.error) {
      setErrorMessage(data.error);
      setIsLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret: data.clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/donate/success`,
      },
      redirect: 'if_required',
    });

    if (error) {
      setErrorMessage(error.message || 'Payment failed');
      setIsLoading(false);
    } else {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-zinc-50/50 dark:bg-zinc-900/50 max-h-[320px] overflow-y-auto">
        <PaymentElement 
          options={{
            layout: 'tabs',
          }}
        />
      </div>
      {errorMessage && (
        <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
          {errorMessage}
        </div>
      )}
      <Button
        type="submit"
        disabled={isLoading || !stripe || !elements}
        className="w-full h-12 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-semibold text-base"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            Processing...
          </>
        ) : (
          <>
            <Heart className="h-5 w-5 mr-2 fill-white" />
            Donate ${(amount / 100).toFixed(2)}
          </>
        )}
      </Button>
    </form>
  );
}

function DonationContent() {
  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isLoadingIntent, setIsLoadingIntent] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const amount = isCustom && customAmount ? Math.round(parseFloat(customAmount) * 100) : selectedAmount;
  const isValidAmount = amount >= 100;

  const createPaymentIntent = useCallback(async () => {
    if (!isValidAmount) return;
    
    setIsLoadingIntent(true);
    try {
      const res = await fetch('/api/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    } finally {
      setIsLoadingIntent(false);
    }
  }, [amount, isValidAmount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isValidAmount) {
        createPaymentIntent();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [amount, isValidAmount, createPaymentIntent]);

  const handlePresetClick = (value: number) => {
    setSelectedAmount(value);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setCustomAmount(value);
    setIsCustom(true);
  };

  if (showSuccess) {
    return (
      <div className="py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Thank You!</h3>
        <p className="text-zinc-600 dark:text-zinc-400">
          Your donation of ${(amount / 100).toFixed(2)} will help transform lives.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
          Select donation amount
        </label>
        <div className="grid grid-cols-2 gap-3">
          {PRESET_AMOUNTS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => handlePresetClick(value)}
              className={cn(
                "h-12 rounded-xl font-semibold text-lg transition-all border-2",
                selectedAmount === value && !isCustom
                  ? "bg-rose-600 text-white border-rose-600"
                  : "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700 hover:border-rose-300 dark:hover:border-rose-700"
              )}
            >
              ${value / 100}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
          Or enter custom amount
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">$</span>
          <Input
            type="text"
            inputMode="decimal"
            placeholder="Other amount"
            value={customAmount}
            onChange={handleCustomChange}
            className={cn(
              "pl-8 h-12 text-lg rounded-xl border-2",
              isCustom && customAmount
                ? "border-rose-600 ring-2 ring-rose-100 dark:ring-rose-900/50"
                : "border-zinc-200 dark:border-zinc-700"
            )}
          />
        </div>
        {isCustom && customAmount && !isValidAmount && (
          <p className="text-sm text-red-500 mt-1">Minimum donation is $1.00</p>
        )}
      </div>

      {isValidAmount && (
        <div className="pt-2">
          {isLoadingIntent || !clientSecret ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin text-rose-600" />
              <span className="ml-2 text-zinc-600 dark:text-zinc-400">Preparing payment...</span>
            </div>
          ) : (
            <Elements
              stripe={getStripe()}
              options={{
                clientSecret,
                appearance: {
                  theme: 'stripe',
                  variables: {
                    colorPrimary: '#e11d48',
                    colorBackground: '#ffffff',
                    colorText: '#18181b',
                    borderRadius: '12px',
                    fontFamily: 'system-ui, sans-serif',
                  },
                },
              }}
            >
              <PaymentForm amount={amount} onSuccess={() => setShowSuccess(true)} />
            </Elements>
          )}
        </div>
      )}
    </div>
  );
}

export function DonationDialog({ trigger, className }: DonationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button className={cn("bg-rose-600 hover:bg-rose-700 text-white rounded-full", className)}>
            Donate Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Heart className="h-5 w-5 text-rose-600 fill-rose-600" />
            Make a Donation
          </DialogTitle>
          <DialogDescription>
            Your generosity helps us create lasting change in communities around the world.
          </DialogDescription>
        </DialogHeader>
        <DonationContent />
      </DialogContent>
    </Dialog>
  );
}
