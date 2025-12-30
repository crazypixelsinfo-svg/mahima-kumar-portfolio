import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Bellamkonda Mahima Kumar - Get In Touch</title>
        <meta 
          name="description" 
          content="Contact Bellamkonda Mahima Kumar for freelance projects, collaborations, and full-time opportunities in video editing and motion graphics." 
        />
      </Helmet>

      <CursorGlow />
      <main className="bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <div className="pt-20">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
