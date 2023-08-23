import { NavType, NestedNavType } from "@/types/globaltypes";
import {
  FaceSmileIcon,
  FlagIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export const navListMenuItems: NavType[] = [
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Price",
    description: "Checkout our products that helps a startup running.",
    href: "/price",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Client success",
    description: "Set of beautiful icons that you can use in your project.",
    href: "/marketing-case-studies",
  },
  {
    color: "blue",
    icon: FlagIcon,
    title: "About",
    description: "Learn about our story and our mission statement.",
    href: "/about",
  },
];

export const Services: NestedNavType[] = [
  {
    title: "Part-time CMO - Weekly 10 hours",
    href: "/cmo",
  },
  {
    title: "Hire In-House Marketing Team",
    href: "/build-a-marketing-team",
  },
  {
    title: "Advisor - Weekly 2 hours",
    href: "/marketing-advisor-plan",
  },
  {
    title: "Startup - Weekly 1 hour",
    href: "/startup-marketing-consultant",
  },
  {
    title: "marketing strategy",
    href: "/digital-marketing-strategy-consultant",
  },
];

export const freeResource: NestedNavType[] = [
  {
    title: "CMO Interview Question & JD Template",
    href: "/cmo-interview-questions",
  },
  {
    title: "Build a marketing team (Free Guide)",
    href: "/build-marketing-team",
  },
  {
    title: "Marketing Budget Template",
    href: "/marketing-budget-template",
  },
  {
    title: "Buyer Persona Template",
    href: "/buyer-persona-template-for-download",
  },
  // {
  //   title: "Marketing Blogs",
  //   href: "/blog",
  // },
];
