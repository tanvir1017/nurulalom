import { NavType } from "@/types/globaltypes";
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
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Client success",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "blue",
    icon: FlagIcon,
    title: "About",
    description: "Learn about our story and our mission statement.",
  },
];

type FreeResourceType = { title: string; href: string };
export const freeResource: FreeResourceType[] = [
  {
    title: "Build a marketing team (Free Guide)",
    href: "/",
  },
  {
    title: "Build a Marketing Strategy Free Course ",
    href: "/",
  },
  {
    title: "Digital Marketing (Free Course)",
    href: "/",
  },
  {
    title: "Marketing Budget Template",
    href: "/",
  },
  {
    title: "Buyer Persona Template",
    href: "/",
  },
  {
    title: "Marketing Blogs",
    href: "/",
  },
];

export const Services: FreeResourceType[] = [
  {
    title: "Part-time CMO - Weekly 10 hours",
    href: "/",
  },
  {
    title: "Hire In-House Marketing Team",
    href: "/",
  },
  {
    title: "Advisor - Weekly 2 hours",
    href: "/",
  },
  {
    title: "Startup - Weekly 1 hour",
    href: "/",
  },
  {
    title: "marketing strategy",
    href: "/",
  },
];
