import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import CampaignCard from '@/components/home/CampaignCard';
import ImpactStats from '@/components/home/ImpactStats';
import Footer from '@/components/home/Footer';
import { CTASection } from '@/components/home/CTASection';
import { supabase } from '@/lib/supabase';

async function getCampaigns() {
  const { data } = await supabase
    .from('campaigns')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

async function getImpactReports() {
  const { data } = await supabase
    .from('impact_reports')
    .select('*')
    .order('year', { ascending: false });
  return data || [];
}

export default async function Home() {
  const campaigns = await getCampaigns();
  const impactReports = await getImpactReports();

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-rose-100 selection:text-rose-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Campaigns Section */}
        <section id="campaigns" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Ongoing & Upcoming Campaigns</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Directly support our most urgent initiatives. Every contribution, no matter the size, helps us reach our goal and create lasting change.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Ongoing
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Upcoming
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign: any) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </section>

        {/* Impact Stats Section */}
        <ImpactStats reports={impactReports} />

        {/* Call to Action Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
