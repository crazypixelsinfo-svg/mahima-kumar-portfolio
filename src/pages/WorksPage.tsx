import { Helmet } from "react-helmet-async";
import WorkSection from "@/components/WorkSection";

const WorksPage = () => {
  return (
    <>
      <Helmet>
        <title>Works | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Portfolio of motion graphics, video editing, and creative projects by Bellamkonda Mahima Kumar." />
      </Helmet>
      <div className="pt-20">
        <WorkSection showAll />
      </div>
    </>
  );
};

export default WorksPage;
