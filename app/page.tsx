import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { JoinSection } from "./components/JoinSection";
import { LandingBanner } from "./components/LandingBanner";
import { LandingFooter } from "./components/LandingFooter";
import { LandingHeader } from "./components/LandingHeader";

export default function Home() {
  return (
    <>
      <LandingBanner />
      <LandingHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <JoinSection />
      </main>
      <LandingFooter />
    </>
  );
}
