import GlobalBackground from "@/components/GlobalBackground";
import HeroSystemCanvas from "@/components/HeroSystemCanvas";
import WhatIsEngnf1 from "@/components/WhatIsEngnf1";
import ArchitectureGraph from "@/components/ArchitectureGraph";
import PillarsSection from "@/components/PillarsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-transparent min-h-screen text-gray-200 relative">
      <GlobalBackground />
      <HeroSystemCanvas />
      <WhatIsEngnf1 />
      <PillarsSection />
      <ArchitectureGraph />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
