import { Helmet } from "react-helmet-async";
import WorkSection from "@/components/WorkSection";
import PostersSection from "@/components/PostersSection";
import JsonLd from "@/components/JsonLd";

const WorksPage = () => {
  return (
    <>
      <Helmet>
        <title>Works | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Portfolio of motion graphics, video editing, and creative projects by Bellamkonda Mahima Kumar." />
        <link rel="canonical" href="https://mahimakumarportfolio.lovable.app/works" />
      </Helmet>
      <JsonLd page="works" />
      <div className="pt-20">
        <WorkSection showAll />
        <PostersSection />
      </div>
    </>
  );
};

export default WorksPage;
