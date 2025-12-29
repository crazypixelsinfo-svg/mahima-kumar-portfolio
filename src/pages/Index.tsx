import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mahima Kumar | Creative Video Editor & Motion Graphics Designer</title>
        <meta 
          name="description" 
          content="Creative Video Editor specializing in After Effects and Premiere Pro. BFA Animation graduate exploring AI tools and digital marketing for brand growth." 
        />
        <meta name="keywords" content="video editor, motion graphics, after effects, premiere pro, animation, hyderabad, freelance" />
        <meta property="og:title" content="Mahima Kumar | Creative Video Editor" />
        <meta property="og:description" content="Creative Video Editor specializing in After Effects and Premiere Pro. Exploring AI tools for brand growth." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mahimakumar.com" />
      </Helmet>

      <main className="bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
