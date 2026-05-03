import HeroSystemCanvas from "@/components/HeroSystemCanvas";
import ProblemSimulation from "@/components/ProblemSimulation";
import SolutionTransition from "@/components/SolutionTransition";
import ArchitectureGraph from "@/components/ArchitectureGraph";
import ApplicationsSection from "@/components/ApplicationsSection";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen">
      <HeroSystemCanvas />
      <ProblemSimulation />
      <ApplicationsSection />
      <SolutionTransition />
      <ArchitectureGraph />
      <ResearchSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
