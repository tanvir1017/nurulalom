export type CmoCardDataType = {
  image: string;
  title: string;
  time: string;
  wm: string;
  price: string;
  shortDescription: string;
  href: string;
  category: "small" | "mid";
};

export const cmoCardData: CmoCardDataType[] = [
  {
    title: "Marketing Strategy",
    image: "/assets/images/cmo/marketing-sales-funnel-hacking.jpg.webp",
    time: "3 Hours",
    wm: "- One Time",
    price: "25,000 Tk.",
    href: "/",
    shortDescription: "Good for marketing strategy. Founders work with me.",
    category: "small",
  },
  {
    title: "Startup Marketing",
    image: "/assets/images/cmo/startup-mini.jpg.webp",
    time: "1 Hour",
    wm: "weekly",
    price: "25,000 Tk.",
    href: "/",
    shortDescription: "Get More Customers For Your Startup Or Small Business.",
    category: "small",
  },
  {
    title: "Marketing Advisor",
    image: "/assets/images/cmo/package-strategy.jpg.webp",
    time: "2 Hours",
    wm: "Weekly",
    price: "50,000 Tk.",
    href: "/",
    shortDescription: "Attract customers with content & see organic growth.",
    category: "small",
  },
  {
    title: "Build Marketing Team",
    image: "/assets/images/cmo/marketing-consultant-najm-team-meeting.webp",
    time: "5 Hours",
    wm: "Weekly",
    price: "1 Lakh Tk.",
    href: "/",
    shortDescription: "Hire In-House Verified Marketing Team",
    category: "small",
  },
  {
    title: "Marketing Advisor",
    image: "/assets/images/cmo/package-strategy.jpg.webp",
    time: "2 Hours",
    wm: "Weekly",
    price: "50,000 Tk.",
    href: "/",
    shortDescription: "Attract customers with content & see organic growth.",
    category: "mid",
  },
  {
    title: "Build Marketing Team",
    image: "/assets/images/cmo/marketing-consultant-najm-team-meeting.webp",
    time: "5 Hours",
    wm: "weekly",
    price: "1 Lakh Tk.",
    href: "/",
    shortDescription: "Hire In-House Verified Marketing Team. ",
    category: "mid",
  },
  {
    title: "I'm Your CMO",
    image: "/assets/images/cmo/najm-ennovision.jpg",
    time: "10 Hours",
    wm: "Weekly",
    price: "2 Lakh Tk.",
    href: "/",
    shortDescription:
      "Build your own team and get a complete marketing Solution.",
    category: "mid",
  },
];
