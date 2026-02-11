import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Bellamkonda Mahima Kumar | Creative Video Editor & Motion Graphics Designer</title>
        <meta 
          name="description" 
          content="Creative Video Editor specializing in After Effects and Premiere Pro. BFA Animation graduate exploring AI tools and digital marketing for brand growth." 
        />
        <meta property="og:title" content="Bellamkonda Mahima Kumar | Creative Video Editor" />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection />
      <AboutSection compact />
      <WorkSection />
      <SkillsSection />
      <ContactSection compact />
    </>
  );
};

export default Index;
