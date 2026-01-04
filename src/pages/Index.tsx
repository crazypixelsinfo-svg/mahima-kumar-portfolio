import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Bellamkonda Mahima Kumar | Video Editor & Motion Graphics Designer
        </title>
        <meta
          name="description"
          content="Video Editor & Motion Graphics Designer specializing in After Effects, Premiere Pro, and AI-enhanced creative workflows."
        />
        <meta
          name="keywords"
          content="video editor, motion graphics, after effects, premiere pro, animation, hyderabad, freelance, bellamkonda mahima kumar"
        />
        <meta
          property="og:title"
          content="Bellamkonda Mahima Kumar | Video Editor & Motion Graphics Designer"
        />
        <meta
          property="og:description"
          content="Video Editor & Motion Graphics Designer crafting stories through motion, visuals & creativity."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mahimakumar.com" />
      </Helmet>

      <main className="bg-background text-foreground">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ToolsSection />
        <PortfolioSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
