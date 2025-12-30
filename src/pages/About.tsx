import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Bellamkonda Mahima Kumar - Creative Video Editor</title>
        <meta 
          name="description" 
          content="Learn about Bellamkonda Mahima Kumar - BFA Animation graduate specializing in motion graphics, video editing, and AI-assisted creative workflows." 
        />
      </Helmet>

      <CursorGlow />
      <main className="bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <div className="pt-20">
          <AboutSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default About;
