import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MetricsSection from '@/components/MetricsSection';
import SolutionsSection from '@/components/SolutionsSection';
import FeaturesSection from '@/components/FeaturesSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SocialProofNotifications from '@/components/SocialProofNotifications';
import TypebotBubble from '@/components/TypebotBubble';

export default function Home() {
  return (
    <>
      <SocialProofNotifications />
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <SolutionsSection />
        <FeaturesSection />
        <GuaranteesSection />
        <CTASection />
      </main>
      <Footer />
      <TypebotBubble />
    </>
  );
}
