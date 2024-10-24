import AttachmentIcon from "@/icons/services/AttachmentIcon";
import NotebookIcon from "@/icons/services/NotebookIcon";
import OptimizationIcon from "@/icons/services/OptimizationIcon";
import SearchIcon from "@/icons/services/SearchIcon";

export const cardsData = [
  {
    icon: <SearchIcon />,
    title: "Keyword Research",
    desc: "We find the exact words and phrases your customers are using to search for your products or services.",
  },
  {
    icon: <OptimizationIcon />,
    title: "On-Page Optimization",
    desc: "We optimize your website’s content and structure to make it more search-engine friendly.",
  },
  {
    icon: <AttachmentIcon />,
    title: "Link Building",
    desc: "We build high-quality links to your site, which helps increase your website’s authority and ranking.",
  },
  {
    icon: <NotebookIcon />,
    title: "Content Creation",
    desc: "We create valuable content that attracts visitors and keeps them engaged.",
  },
];

export const processData = [
  {
    title: "Step 01",
    value: 1,
    desc: (
      <>
        <b>Audit and Analysis –</b> We start by analyzing your current online presence and
        identifying areas for improvement.
      </>
    ),
    letter: "S",
    img: "seo/letter-s-bg.webp",
  },
  {
    title: "Step 02",
    value: 2,
    desc: (
      <>
        <b>Strategy Development –</b> We create a tailored SEO strategy that aligns with
        your business goals.
      </>
    ),
    letter: "N",
    img: "seo/letter-n-bg.webp",
  },
  {
    title: "Step 03",
    value: 3,
    desc: (
      <>
        <b>Implementation –</b> We put the strategy into action, optimizing your website
        and content for better search rankings.
      </>
    ),
    letter: "T",
    img: "seo/letter-t-bg.webp",
  },
  {
    title: "Step 04",
    value: 4,
    desc: (
      <>
        <b> Monitoring and Reporting –</b> We continuously monitor your site’s performance
        and make adjustments as needed, providing clear reports on your progress.
      </>
    ),
    letter: "C",
    img: "seo/letter-c-bg.webp",
  },
];
