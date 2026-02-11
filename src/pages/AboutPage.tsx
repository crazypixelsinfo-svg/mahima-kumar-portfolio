import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Learn about Bellamkonda Mahima Kumar - BFA Animation graduate, Motion Graphics & Video Editor at SocioShout." />
      </Helmet>
      <div className="pt-20">
        <AboutSection />
        <ExperienceSection />
      </div>
    </>
  );
};

export default AboutPage;
