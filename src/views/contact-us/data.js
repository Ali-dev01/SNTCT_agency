import ContactMail from "@/icons/ContactMail";
import ContactPhone from "@/icons/ContactPhone";
import LocationIcon from "@/icons/LocationIcon";

export const contactInfo = [
  {
    icon: <ContactMail />,
    title: "Email",
    desc: "Hate contact forms?",
    linkTitle: "info@sntct.com",
    link: "#",
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
    value: "1",
  },
  {
    label: "Website Development",
    value: "2",
  },
  {
    label: "Search Engine Optimization",
    value: "3",
  },
  {
    label: "UI/UX Design",
    value: "4",
  },
  {
    label: "Graphics Design",
    value: "5",
  },
  {
    label: "Google Ads",
    value: "6",
  },
];
