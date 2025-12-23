import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import OurStorySection from "@/components/sections/OurStorySection";
import LocationSection from "@/components/sections/LocationSection";
import GiftListSection from "@/components/sections/GiftListSection";
import RsvpSection from "@/components/sections/RsvpSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OurStorySection />
        <LocationSection />
        <GiftListSection />
        <RsvpSection />
      </main>
      <Footer />
    </div>
  );
}
