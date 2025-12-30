import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Bellamkonda Mahima Kumar - Professional Experience</title>
        <meta 
          name="description" 
          content="Professional experience of Bellamkonda Mahima Kumar - Motion Graphics Editor at SocioShout and freelance animation work." 
        />
      </Helmet>

      <CursorGlow />
      <main className="bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <div className="pt-20">
          <ExperienceSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Experience;
