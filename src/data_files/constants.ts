import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "Ribhya",
  tagline: "Bringing Prudence to FinSecOps",
  description:
    "Ribhya is a sophisticated C-Suite Copilot that enhances hybrid cloud cost management through advanced AI analytics. It offers key features like seamless integration and strategic cost-reduction tools, helping c-suite enforce financial policies and make data-driven decisions.",
  description_short:
    "Ribhya is a sophisticated C-Suite Copilot that enhances hybrid cloud cost management through advanced AI analytics.",
  url: "https://ribhya.com",
  author: "Sarvex",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Master Your Digital Spend: Optimize, Innovate, and Thrive with Ribhya`,
  description:
    "Ribhya is a sophisticated C-Suite Copilot that enhances hybrid cloud cost management through advanced AI analytics. This SaaS platform automates monitoring and optimizes spending across hybrid cloud environments. It offers key features like seamless integration and strategic cost reduction tools, helping c-suite enforce financial policies and make data-driven decisions. Essential for businesses aiming to leverage digital investments efficiently, Ribhya drives operational efficiency and sustainable growth in the digital era.",
  image: ogImageSrc,
};
