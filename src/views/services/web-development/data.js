import CartIcon from "@/icons/services/CartIcon";
import FrameIcon from "@/icons/services/FrameIcon";
import MobileIcon from "@/icons/services/MobileIcon";
import SettingIcon from "@/icons/services/SettingIcon";

export const cardsData = [
  {
    icon: <FrameIcon />,
    title: "Custom Website Development",
    desc: "We create custom websites tailored to your business goals—whether you're looking for a sleek, modern design or complex functionality, we’ve got you covered",
  },
  {
    icon: <CartIcon />,
    title: "E-Commerce Solutions",
    desc: "We build e-commerce platforms that make online shopping smooth, secure, and simple for your customers.",
  },
  {
    icon: <MobileIcon />,
    title: "Mobile Optimization",
    desc: "Your customers are browsing on their phones—our websites are fully optimized for mobile, so you don’t lose out on mobile traffic.",
  },
  {
    icon: <SettingIcon />,
    title: "Website Maintenance & Support",
    desc: "We don’t just build your site and leave—we provide ongoing support to ensure your website stays secure, fast, and up-to-date.",
  },
];

export const processData = [
  {
    title: "Step 01",
    value: 1,
    desc: (
      <>
        <b>Discovery:</b> We begin by learning about your business goals, customers, and
        vision for your website.
      </>
    ),
    letter: "S",
    img: "web-dev/letter-s-bg.webp",
  },
  {
    title: "Step 02",
    value: 2,
    desc: (
      <>
        <b>Design & Development:</b> Our designers create a mockup of your site, and once
        approved, our developers bring it to life.
      </>
    ),
    letter: "N",
    img: "web-dev/letter-n-bg.webp",
  },
  {
    title: "Step 03",
    value: 3,
    desc: (
      <>
        <b>Testing & Launch:</b> We rigorously test your site to ensure it’s fast, secure,
        and fully optimized before it goes live.
      </>
    ),
    letter: "T",
    img: "web-dev/letter-t-bg.webp",
  },
  {
    title: "Step 04",
    value: 4,
    desc: (
      <>
        <b>Ongoing Support:</b> After launch, we continue to support you, offering
        maintenance and updates to keep your site performing at its best.
      </>
    ),
    letter: "C",
    img: "web-dev/letter-c-bg.webp",
  },
];
