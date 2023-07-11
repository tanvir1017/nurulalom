import { marketingResourceData } from "@/data/footerdata";
import { TextColor } from "@/lib/customColorFunc";
import { SiteMapType } from "@/types/globaltypes";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Tooltip, Typography } from "@material-tailwind/react";
import Link from "next/link";

const FreeMarketingResources = () => {
  return (
    <div className="mt-10">
      <div className="mb-6">
        <Typography variant="h5">
          <TextColor>Free Marketing Resources</TextColor>
        </Typography>
      </div>
      <TextColor>
        <ul className="space-y-3">
          {marketingResourceData.map((item: SiteMapType, i: number) => (
            <li key={i} className="flex items-center">
              {" "}
              <ArrowRightIcon
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

export default FreeMarketingResources;
