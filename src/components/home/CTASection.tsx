'use client';

import { DonationDialog } from './DonationDialog';
import VolunteerForm from './VolunteerForm';

export function CTASection() {
  return (
    <section id="volunteer" className="py-24 bg-rose-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to make a difference?</h2>
        <p className="text-rose-100 text-xl mb-10 leading-relaxed">
          Whether you donate your resources or your time, your contribution is invaluable to the communities we serve. Join our team of dedicated volunteers today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <DonationDialog
            trigger={
              <button className="h-14 px-10 bg-white text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-colors shadow-lg shadow-rose-900/20">
                Donate Funds
              </button>
            }
          />
          <VolunteerForm />
        </div>
      </div>
    </section>
  );
}
