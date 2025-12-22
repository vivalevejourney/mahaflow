import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { DecorativeBackground } from '@/components/ui/DecorativeBackground';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { FounderSection } from '@/components/landing/FounderSection';
import { Programacao2026Section } from '@/components/landing/Programacao2026Section';
import { VideoSection } from '@/components/landing/VideoSection';
import { HowToJoinSection } from '@/components/landing/HowToJoinSection';
import { MahaVIPSection } from '@/components/landing/MahaVIPSection';
import { MahaTinderSection } from '@/components/landing/MahaTinderSection';
import { MeetingsSection } from '@/components/landing/MeetingsSection';
import { MyAccountSection } from '@/components/landing/MyAccountSection';
import { ShopSection } from '@/components/landing/ShopSection';
import { BlogSection } from '@/components/landing/BlogSection';
import { ExperiencesSection } from '@/components/landing/ExperiencesSection';
import { SponsorsSection } from '@/components/landing/SponsorsSection';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DecorativeBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FounderSection />
        <Programacao2026Section />
        <VideoSection />
        <HowToJoinSection />
        <MahaTinderSection />
        <MeetingsSection />
        <MyAccountSection />
        <ShopSection />
        <BlogSection />
        <ExperiencesSection />
        <SponsorsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
