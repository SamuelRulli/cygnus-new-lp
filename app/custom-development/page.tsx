import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomDevelopmentHero from '@/components/CustomDevelopmentHero';
import CustomDevelopmentSection from '@/components/CustomDevelopmentSection';
import CertificationsSection from '@/components/CertificationsSection';
import CTASection from '@/components/CTASection';
import ClientsCarousel from '@/components/ClientsCarousel';

export default function CustomDevelopmentPage() {
  return (
    <>
      <Header />
      <main>
        <CustomDevelopmentHero />
        <CustomDevelopmentSection />
        <ClientsCarousel />
        <CertificationsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
