'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import { DonationDialog } from './DonationDialog';
import NextImage from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/50 rounded-full blur-3xl dark:bg-rose-900/20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl dark:bg-blue-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold dark:bg-rose-950/30 dark:text-rose-400 mb-6">
              <Heart className="h-4 w-4 fill-rose-600" />
              Together we can make a difference
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1]">
              Empower Communities, <br />
              <span className="text-rose-600">Transform Lives.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              Join our global movement to provide clean water, quality education, and sustainable livelihoods to those who need it most. Your support creates lasting impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <DonationDialog 
              trigger={
                <Button size="lg" className="h-14 px-8 bg-rose-600 hover:bg-rose-700 text-lg rounded-full group">
                  Start Donating
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-zinc-200 dark:border-zinc-800">
              Become a Volunteer
            </Button>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-20 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black z-10" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-0">
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden group">
                  <NextImage 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
                    alt="Helping hands" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden group md:translate-y-12">
                  <NextImage 
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Children playing" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden group">
                  <NextImage 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=1000&auto=format&fit=crop" 
                    alt="Sustainable future" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-32 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-zinc-100 dark:border-zinc-800 pt-12"
            >

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                <Users className="h-6 w-6 text-rose-600" />
                50K+
              </div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Active Volunteers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                <Globe className="h-6 w-6 text-blue-600" />
                25+
              </div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Countries Reached</p>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                <Heart className="h-6 w-6 text-rose-600" />
                $2.5M+
              </div>
              <p className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Funds Raised</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
