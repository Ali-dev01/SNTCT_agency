import PrototypingIcon from "@/icons/services/PrototypingIcon";
import UiIcon from "@/icons/services/UiIcon";
import UxIcon from "@/icons/services/UxIcon";
import WebOptimizationIcon from "@/icons/services/WebOptimizationIcon";

export const cardsData = [
  {
    icon: <UiIcon />,
    title: "User Interface Design (UI)",
    desc: "Visually stunning, easy-to-use interfaces that your customers will love.",
  },
  {
    icon: <UxIcon />,
    title: "User Experience Design (UX)",
    desc: "Making every interaction smooth, logical, and enjoyable.",
  },
  {
    icon: <PrototypingIcon />,
    title: "Prototyping & Wireframing:",
    desc: "Visual mockups to bring your ideas to life before development.",
  },
  {
    icon: <WebOptimizationIcon />,
    title: "Mobile & Web Optimization",
    desc: "Ensuring your site or app works beautifully on any device.",
  },
];

export const processData = [
  {
    title: "Step 01",
    value: 1,
    desc: (
      <>
        <b>Designing Intuitively:</b> Crafting layouts that make sense from the first
        click.
      </>
    ),
    letter: "S",
    img: "ui-design/letter-s-bg.webp",
  },
  {
    title: "Step 02",
    value: 2,
    desc: (
      <>
        <b>Building Prototypes:</b> Bringing the design to life so you can see how it
        works.
      </>
    ),
    letter: "N",
    img: "ui-design/letter-n-bg.webp",
  },
  {
    title: "Step 03",
    value: 3,
    desc: (
      <>
        <b>Testing & Improving:</b> Testing with real users to catch any bumps in the
        road.
      </>
    ),
    letter: "T",
    img: "ui-design/letter-t-bg.webp",
  },
  {
    title: "Step 04",
    value: 4,
    desc: (
      <>
        <b>Delivering a Polished Product:</b> A final design that’s ready to impress.
      </>
    ),
    letter: "C",
    img: "ui-design/letter-c-bg.webp",
  },
];
