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

export type AboutCardDataType = {
  image: string;
  title: string;
  description: string;
};

export type TableData = {
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
  fourthColumn: string;
  fifthColumn: string;
  company?: "mid" | "small";
};

export type TABLE_ROWS_Type = {
  firstColumn: {
    label: string;
    labelText: string;
  };
  secondColumn: boolean;
  thirdColumn: boolean;
  fourthColumn: boolean;
  fifthColumn: boolean;
  company?: "mid" | "small";
};

export type AccordionDataType = { title: string; desc: string };
