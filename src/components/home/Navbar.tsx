'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DonationDialog } from './DonationDialog';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 dark:bg-black/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-rose-500 fill-rose-500" />
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">HopeCircle</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#campaigns" className="text-sm font-medium text-zinc-600 hover:text-rose-600 transition-colors dark:text-zinc-400 dark:hover:text-rose-400">Campaigns</Link>
            <Link href="#impact" className="text-sm font-medium text-zinc-600 hover:text-rose-600 transition-colors dark:text-zinc-400 dark:hover:text-rose-400">Our Impact</Link>
            <Link href="#volunteer" className="text-sm font-medium text-zinc-600 hover:text-rose-600 transition-colors dark:text-zinc-400 dark:hover:text-rose-400">Volunteer</Link>
            <DonationDialog className="px-6" />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600 dark:text-zinc-400 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link href="#campaigns" onClick={() => setIsOpen(false)} className="block text-base font-medium text-zinc-600 dark:text-zinc-400">Campaigns</Link>
              <Link href="#impact" onClick={() => setIsOpen(false)} className="block text-base font-medium text-zinc-600 dark:text-zinc-400">Our Impact</Link>
              <Link href="#volunteer" onClick={() => setIsOpen(false)} className="block text-base font-medium text-zinc-600 dark:text-zinc-400">Volunteer</Link>
              <DonationDialog 
                trigger={
                  <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-full">Donate Now</Button>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
