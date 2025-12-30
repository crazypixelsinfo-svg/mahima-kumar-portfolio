import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Bellamkonda Mahima Kumar - Software & Creative Skills</title>
        <meta 
          name="description" 
          content="Explore the skills and tools of Bellamkonda Mahima Kumar - After Effects, Premiere Pro, Blender, Maya, and AI workflow tools." 
        />
      </Helmet>

      <CursorGlow />
      <main className="bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <div className="pt-20">
          <SkillsSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Skills;
