import BrandIcon from "@/icons/services/BrandIcon";
import CustomArtIcon from "@/icons/services/CustomArtIcon";
import DigitalIcon from "@/icons/services/DigitalIcon";
import SpinerIcon from "@/icons/services/SpinerIcon";

export const cardsData = [
  {
    icon: <SpinerIcon />,
    title: "Logo Design",
    desc: "Create a logo that tells your brand’s story.",
  },
  {
    icon: <BrandIcon />,
    title: "Brand Identity",
    desc: "We’ll build a look that makes your business unforgettable.",
  },
  {
    icon: <DigitalIcon />,
    title: "Digital Design",
    desc: "From social media posts to website graphics, we’ll bring your online presence to life.",
  },
  {
    icon: <CustomArtIcon />,
    title: "Custom Art & Illustrations",
    desc: "Add a unique touch to your brand with personalized illustrations.",
  },
];

export const processData = [
  {
    title: "Step 01",
    value: 1,
    desc: (
      <>
        <b>Discovery and Consultation –</b> We start by learning about your brand, your
        goals, and your audience.
      </>
    ),
    letter: "S",
    img: "graphics/letter-s-bg.webp",
  },
  {
    title: "Step 02",
    value: 2,
    desc: (
      <>
        <b>Concept Development –</b> We sketch out ideas and present concepts that align
        with your vision.
      </>
    ),
    letter: "N",
    img: "graphics/letter-n-bg.webp",
  },
  {
    title: "Step 03",
    value: 3,
    desc: (
      <>
        <b>Refinement and Collaboration –</b> We work with you to perfect the design,
        ensuring it reflects your brand and speaks to your audience.
      </>
    ),
    letter: "T",
    img: "graphics/letter-t-bg.webp",
  },
  {
    title: "Step 04",
    value: 4,
    desc: (
      <>
        <b>Final Delivery –</b> Once you’re thrilled with the result, we provide you with
        the final files and guidelines to ensure consistent use across all platforms.
      </>
    ),
    letter: "C",
    img: "graphics/letter-c-bg.webp",
  },
];
