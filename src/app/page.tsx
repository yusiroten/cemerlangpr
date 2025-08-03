import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import DirectorsSection from '@/components/sections/directors';
import ProductsSection from '@/components/sections/products';
import LicensesSection from '@/components/sections/licenses';
import ProjectsSection from '@/components/sections/projects';
import ClientsSection from '@/components/sections/clients';
import ActivitiesSection from '@/components/sections/activities';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <DirectorsSection />
        <ProductsSection />
        <LicensesSection />
        <ProjectsSection />
        <ClientsSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
