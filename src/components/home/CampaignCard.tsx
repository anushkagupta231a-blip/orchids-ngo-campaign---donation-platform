'use client';

import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CampaignProps {
  title: string;
  description: string;
  image_url: string;
  goal_amount: number;
  current_amount: number;
  status: 'ongoing' | 'upcoming';
}

export default function CampaignCard({ title, description, image_url, goal_amount, current_amount, status }: CampaignProps) {
  const progress = (current_amount / goal_amount) * 100;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image_url}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              status === 'ongoing' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400'
            }`}>
              {status}
            </span>
          </div>
        </div>
        <CardHeader className="p-6 pb-2">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 line-clamp-1">{title}</h3>
        </CardHeader>
        <CardContent className="p-6 pt-0 flex-grow">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-2">
            {description}
          </p>
          {status === 'ongoing' && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-zinc-900 dark:text-zinc-50">${current_amount.toLocaleString()} raised</span>
                <span className="text-zinc-500">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-zinc-100 dark:bg-zinc-800" />
              <p className="text-xs text-zinc-500 text-right font-medium">Goal: ${goal_amount.toLocaleString()}</p>
            </div>
          )}
          {status === 'upcoming' && (
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Launching Soon</p>
              <p className="text-sm text-zinc-900 dark:text-zinc-50">Stay tuned for this campaign.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button className={`w-full rounded-full font-semibold ${
            status === 'ongoing' ? 'bg-rose-600 hover:bg-rose-700 text-white' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-50'
          }`}>
            {status === 'ongoing' ? 'Donate Now' : 'Notify Me'}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
