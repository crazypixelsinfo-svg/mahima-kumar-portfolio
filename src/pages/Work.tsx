import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Bellamkonda Mahima Kumar - Motion Graphics & Video Work</title>
        <meta 
          name="description" 
          content="View the portfolio of Bellamkonda Mahima Kumar - motion graphics, video editing, promotional videos, and creative projects." 
        />
      </Helmet>

      <CursorGlow />
      <main className="bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <div className="pt-20">
          <WorkSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Work;
