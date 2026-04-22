import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import JsonLd from "@/components/JsonLd";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Learn about Bellamkonda Mahima Kumar - BFA Animation graduate, Motion Graphics & Video Editor at SocioShout." />
        <link rel="canonical" href="https://mahimakumarportfolio.lovable.app/about" />
        <meta property="og:title" content="About | Bellamkonda Mahima Kumar" />
        <meta property="og:description" content="BFA Animation graduate, Motion Graphics & Video Editor at SocioShout." />
        <meta property="og:url" content="https://mahimakumarportfolio.lovable.app/about" />
        <meta property="og:image" content="https://mahimakumarportfolio.lovable.app/og-about.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About | Bellamkonda Mahima Kumar" />
        <meta name="twitter:description" content="BFA Animation graduate, Motion Graphics & Video Editor at SocioShout." />
        <meta name="twitter:image" content="https://mahimakumarportfolio.lovable.app/og-about.jpg" />
      </Helmet>
      <JsonLd page="about" />
      <div className="pt-20">
        <AboutSection />
        <ExperienceSection />
      </div>
    </>
  );
};

export default AboutPage;
