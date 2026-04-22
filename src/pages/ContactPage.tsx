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
        <meta property="og:title" content="Contact | Bellamkonda Mahima Kumar" />
        <meta property="og:description" content="Get in touch for freelance projects, collaborations, and opportunities." />
        <meta property="og:url" content="https://mahimakumarportfolio.lovable.app/contact" />
        <meta property="og:image" content="https://mahimakumarportfolio.lovable.app/og-contact.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Bellamkonda Mahima Kumar" />
        <meta name="twitter:description" content="Get in touch for freelance projects, collaborations, and opportunities." />
        <meta name="twitter:image" content="https://mahimakumarportfolio.lovable.app/og-contact.jpg" />
      </Helmet>
      <JsonLd page="contact" />
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  );
};

export default ContactPage;
