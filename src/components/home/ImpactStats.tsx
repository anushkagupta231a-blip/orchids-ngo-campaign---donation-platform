'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ImpactReport {
  title: string;
  metric_value: number;
  metric_unit: string;
  description: string;
}

const COLORS = ['#e11d48', '#2563eb', '#16a34a', '#ca8a04'];

export default function ImpactStats({ reports }: { reports: ImpactReport[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = reports.map((r, i) => ({
    name: r.title,
    value: Number(r.metric_value),
    color: COLORS[i % COLORS.length]
  }));

  if (!mounted) return null;

  return (
    <section id="impact" className="py-24 bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Our Transparent Impact</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            We believe in complete transparency. See how your contributions are being utilized to create real-world change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                      <h3 className="font-bold text-zinc-900 dark:text-zinc-50">{report.title}</h3>
                    </div>
                    <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                      {report.metric_value.toLocaleString()} <span className="text-lg font-medium text-zinc-500">{report.metric_unit}</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{report.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
