import { Helmet } from "react-helmet-async";
import SkillsSection from "@/components/SkillsSection";

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Skills and tools - After Effects, Premiere Pro, Blender, Maya, AI tools and more." />
      </Helmet>
      <div className="pt-20">
        <SkillsSection />
      </div>
    </>
  );
};

export default SkillsPage;
