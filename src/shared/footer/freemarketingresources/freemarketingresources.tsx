import { marketingResourceData } from "@/data/footerdata";
import { TextColor } from "@/lib/customColorFunc";
import { SiteMapType } from "@/types/globaltypes";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
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
        <ul>
          {marketingResourceData.map((item: SiteMapType, i: number) => (
            <li key={i} className="mb-3">
              {" "}
              <Link href={item.href} className="flex items-center">
                <ArrowRightIcon
                  strokeWidth={3.5}
                  className="h-3 w-3 text-gray-700 mr-3"
                />{" "}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </TextColor>{" "}
    </div>
  );
};

export default FreeMarketingResources;
