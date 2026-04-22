import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  page?: "home" | "about" | "works" | "skills" | "contact";
}

const BASE_URL = "https://mahimakumarportfolio.lovable.app";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bellamkonda Mahima Kumar",
  url: BASE_URL,
  jobTitle: "Creative Video Editor & Motion Graphics Designer",
  description:
    "BFA Animation graduate specializing in After Effects and Premiere Pro. Exploring AI tools and digital marketing for brand growth.",
  sameAs: [
    "https://www.linkedin.com/in/bellamkonda-mahima-kumar",
    "https://vimeo.com/1150100962",
    "https://bellamkondamahimak.wixsite.com/carzypixels-1",
  ],
  knowsAbout: [
    "Video Editing",
    "Motion Graphics",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Blender",
    "Maya",
    "Digital Marketing",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bellamkonda Mahima Kumar Portfolio",
  url: BASE_URL,
};

const breadcrumbByPage: Record<string, object> = {
  about: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
    ],
  },
  works: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Works", item: `${BASE_URL}/works` },
    ],
  },
  skills: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Skills", item: `${BASE_URL}/skills` },
    ],
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  },
};

const JsonLd = ({ page = "home" }: JsonLdProps) => {
  const schemas = [personSchema, websiteSchema];
  if (page !== "home" && breadcrumbByPage[page]) {
    schemas.push(breadcrumbByPage[page] as any);
  }

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default JsonLd;
