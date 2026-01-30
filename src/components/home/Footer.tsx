'use client';

import { Heart, Mail, MapPin, Phone, Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-rose-500 fill-rose-500" />
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">HopeCircle</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Empowering communities through sustainable initiatives and global cooperation. Join us in making the world a better place.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 rounded-full bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-rose-50 hover:text-rose-600 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#campaigns" className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 transition-colors">Ongoing Campaigns</Link></li>
              <li><Link href="#impact" className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 transition-colors">Impact Reports</Link></li>
              <li><Link href="#volunteer" className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 transition-colors">Become a Volunteer</Link></li>
              <li><Link href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-500 shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">123 Charity Lane, Giving City, GC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-500 shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rose-500 shrink-0" />
                <span className="text-zinc-600 dark:text-zinc-400">hello@hopecircle.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-50 mb-6">Newsletter</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">Get updates on our latest projects and impact reports.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-rose-500/20"
              />
              <button className="w-full px-4 py-2.5 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-black rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2026 HopeCircle NGO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
