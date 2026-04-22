import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import PostersSection from "@/components/PostersSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Bellamkonda Mahima Kumar | Creative Video Editor & Motion Graphics Designer</title>
        <meta 
          name="description" 
          content="Creative Video Editor specializing in After Effects and Premiere Pro. BFA Animation graduate exploring AI tools and digital marketing for brand growth." 
        />
        <link rel="canonical" href="https://mahimakumarportfolio.lovable.app/" />
        <meta property="og:title" content="Bellamkonda Mahima Kumar | Creative Video Editor" />
        <meta property="og:description" content="Creative Video Editor specializing in After Effects and Premiere Pro. BFA Animation graduate exploring AI tools and digital marketing for brand growth." />
        <meta property="og:url" content="https://mahimakumarportfolio.lovable.app/" />
        <meta property="og:image" content="https://mahimakumarportfolio.lovable.app/og-home.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bellamkonda Mahima Kumar | Creative Video Editor" />
        <meta name="twitter:description" content="Creative Video Editor specializing in After Effects and Premiere Pro." />
        <meta name="twitter:image" content="https://mahimakumarportfolio.lovable.app/og-home.jpg" />
      </Helmet>
      <JsonLd page="home" />

      <HeroSection />
      <AboutSection compact />
      <WorkSection />
      <PostersSection />
      <SkillsSection />
      <ContactSection compact />
    </>
  );
};

export default Index;
