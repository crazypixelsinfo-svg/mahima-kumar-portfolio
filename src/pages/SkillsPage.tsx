import { Helmet } from "react-helmet-async";
import SkillsSection from "@/components/SkillsSection";
import JsonLd from "@/components/JsonLd";

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Skills and tools - After Effects, Premiere Pro, Blender, Maya, AI tools and more." />
        <link rel="canonical" href="https://mahimakumarportfolio.lovable.app/skills" />
        <meta property="og:title" content="Skills | Bellamkonda Mahima Kumar" />
        <meta property="og:description" content="After Effects, Premiere Pro, Blender, Maya, AI tools and more." />
        <meta property="og:url" content="https://mahimakumarportfolio.lovable.app/skills" />
        <meta property="og:image" content="https://mahimakumarportfolio.lovable.app/og-skills.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Skills | Bellamkonda Mahima Kumar" />
        <meta name="twitter:description" content="After Effects, Premiere Pro, Blender, Maya, AI tools and more." />
        <meta name="twitter:image" content="https://mahimakumarportfolio.lovable.app/og-skills.jpg" />
      </Helmet>
      <JsonLd page="skills" />
      <div className="pt-20">
        <SkillsSection />
      </div>
    </>
  );
};

export default SkillsPage;
