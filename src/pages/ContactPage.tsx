import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/ContactSection";
import JsonLd from "@/components/JsonLd";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Bellamkonda Mahima Kumar</title>
        <meta name="description" content="Get in touch with Bellamkonda Mahima Kumar for freelance projects, collaborations, and opportunities." />
        <link rel="canonical" href="https://mahimakumarportfolio.lovable.app/contact" />
      </Helmet>
      <JsonLd page="contact" />
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage;
