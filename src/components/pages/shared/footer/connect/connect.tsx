import { siteMapData } from "@/data/footerdata";
import { TextColor } from "@/lib/customColorFunc";
import { SiteMapType } from "@/types/globaltypes";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Tooltip, Typography } from "@material-tailwind/react";
import Link from "next/link";

const Connect = () => {
  return (
    <div>
      <div className="mb-6">
        <Typography variant="h5">Let's Connect</Typography>
      </div>
      <TextColor>
        <ul className="space-y-3 ml-5">
          {siteMapData.map((item: SiteMapType, i: number) => (
            <li key={i} className="flex items-center">
              {" "}
              <LinkIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-gray-700 mr-3"
              />{" "}
              <Tooltip content={item.title}>
                <Link href={item.href}>
                  <span>{item.title}</span>
                </Link>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TextColor>{" "}
    </div>
  );
};

export default Connect;
