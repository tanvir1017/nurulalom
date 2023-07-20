export type SiteMapType = {
  title: string;
  href: string;
};

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

export type NavType = {
  color: string;
  icon: any;
  title: string;
  description: string;
  href: string;
};

export type NestedNavType = { title: string; href: string };
