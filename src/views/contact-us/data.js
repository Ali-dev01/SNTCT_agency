import ContactMail from "@/icons/ContactMail";
import ContactPhone from "@/icons/ContactPhone";
import LocationIcon from "@/icons/LocationIcon";

export const contactInfo = [
  {
    icon: <ContactMail />,
    title: "Email",
    desc: "Hate contact forms?",
    linkTitle: "info@sntct.com",
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=info@sntct.com`,
  },
  {
    icon: <ContactPhone />,
    title: "Phone",
    desc: "Hate contact forms?",
    linkTitle: "‎+44-7793467120‎",
    link: "#",
  },
  {
    icon: <LocationIcon />,
    title: "Location",
    desc: (
      <>
        Unit 3 K34 Premier House, Rolfe Street, Smethwick, West Midlands, United Kingdom,
        <br />
        B66 2AA
      </>
    ),
  },
];

export const options = [
  {
    label: "Social Media Marketing",
    value: "social media marketing",
  },
  {
    label: "Website Development",
    value: "website development",
  },
  {
    label: "Search Engine Optimization",
    value: "search engine optimization",
  },
  {
    label: "UI/UX Design",
    value: "UI/UX design",
  },
  {
    label: "Graphics Design",
    value: "graphics design",
  },
  {
    label: "Google Ads",
    value: "google ads",
  },
];
