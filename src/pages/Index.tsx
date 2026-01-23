import { lazy, Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { DecorativeBackground } from '@/components/ui/DecorativeBackground';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';

// Lazy load sections below the fold for better performance
const FounderSection = lazy(() => import('@/components/landing/FounderSection').then(m => ({ default: m.FounderSection })));
const Programacao2026Section = lazy(() => import('@/components/landing/Programacao2026Section').then(m => ({ default: m.Programacao2026Section })));
const VideoSection = lazy(() => import('@/components/landing/VideoSection').then(m => ({ default: m.VideoSection })));
const HowToJoinSection = lazy(() => import('@/components/landing/HowToJoinSection').then(m => ({ default: m.HowToJoinSection })));
const VemSerMahaSection = lazy(() => import('@/components/landing/VemSerMahaSection').then(m => ({ default: m.VemSerMahaSection })));
const MeetingsSection = lazy(() => import('@/components/landing/MeetingsSection').then(m => ({ default: m.MeetingsSection })));
const MyAccountSection = lazy(() => import('@/components/landing/MyAccountSection').then(m => ({ default: m.MyAccountSection })));
const ShopSection = lazy(() => import('@/components/landing/ShopSection').then(m => ({ default: m.ShopSection })));
const BlogSection = lazy(() => import('@/components/landing/BlogSection').then(m => ({ default: m.BlogSection })));
const ExperiencesSection = lazy(() => import('@/components/landing/ExperiencesSection').then(m => ({ default: m.ExperiencesSection })));
const SponsorsSection = lazy(() => import('@/components/landing/SponsorsSection').then(m => ({ default: m.SponsorsSection })));

// Minimal loading placeholder - optimized for lazy loading
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DecorativeBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<SectionLoader />}>
          <FounderSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Programacao2026Section />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <VideoSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowToJoinSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <VemSerMahaSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MeetingsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <MyAccountSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ShopSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ExperiencesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <SponsorsSection />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
