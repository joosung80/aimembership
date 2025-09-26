import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CourseShowcase from '@/components/CourseShowcase';
import PricingSection from '@/components/PricingSection';
import SocialProof from '@/components/SocialProof';
import InstructorSection from '@/components/InstructorSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CourseShowcase />
        <PricingSection />
        <SocialProof />
        <InstructorSection />
      </main>
      <Footer />
    </div>
  );
}