import Link from 'next/link';
import { CheckCircle2, Heart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DonationSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white dark:from-zinc-900 dark:to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-300">
          <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Thank You for Your Generosity!
        </h1>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Your donation has been successfully processed. Together, we&apos;re creating lasting change in communities around the world.
        </p>
        
        <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 mb-8 border border-zinc-100 dark:border-zinc-700">
          <div className="flex items-center justify-center gap-2 text-rose-600 dark:text-rose-400 mb-3">
            <Heart className="h-5 w-5 fill-rose-600 dark:fill-rose-400" />
            <span className="font-semibold">Your Impact</span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Your contribution helps provide clean water, education, and sustainable livelihoods to those in need. A confirmation email has been sent to your inbox.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto rounded-full px-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="#campaigns">
            <Button className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6">
              View Our Campaigns
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
