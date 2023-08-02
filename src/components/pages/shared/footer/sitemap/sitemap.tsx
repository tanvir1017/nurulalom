import { siteMapData } from "@/data/footerdata";
import { TextColor } from "@/lib/customColorFunc";
import { SiteMapType } from "@/types/globaltypes";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const SiteMap = () => {
  return (
    <div>
      <div className="mb-6">
        <Typography variant="h5">Site Map</Typography>
      </div>
      <TextColor>
        <ul className="space-y-3 ml-5">
          {siteMapData.map((item: SiteMapType, i: number) => (
            <li key={i} className="">
              <Link href={item.href}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </TextColor>{" "}
    </div>
  );
};

export default SiteMap;
