import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Get in touch with Bellamkonda Mahima Kumar for freelance projects, collaborations, and opportunities." />
      </Helmet>
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage;
