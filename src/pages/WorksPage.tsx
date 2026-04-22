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
        <meta property="og:title" content="Works | Bellamkonda Mahima Kumar" />
        <meta property="og:description" content="Portfolio of motion graphics, video editing, and creative projects." />
        <meta property="og:url" content="https://mahimakumarportfolio.lovable.app/works" />
        <meta property="og:image" content="https://mahimakumarportfolio.lovable.app/og-works.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Works | Bellamkonda Mahima Kumar" />
        <meta name="twitter:description" content="Portfolio of motion graphics, video editing, and creative projects." />
        <meta name="twitter:image" content="https://mahimakumarportfolio.lovable.app/og-works.jpg" />
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
