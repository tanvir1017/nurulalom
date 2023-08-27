import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import FreeMarketingResources from "../freemarketingresources/freemarketingresources";

const Services = () => {
  return (
    <div>
      <div>
        <div className="mb-6">
          <Typography variant="h5">
            <TextColor>Services</TextColor>
          </Typography>
        </div>
        <TextColor>
          <ul>
            <Link href="/digital-marketing-strategy-consultant">
              <li className="flex items-center mb-3">
                {" "}
                <ArrowRightIcon
                  strokeWidth={3.5}
                  className="h-3 w-3 text-blue-500 mr-3"
                />{" "}
                <span>
                  <b> Marketing Strategy</b> : 3 hours total
                </span>
              </li>
            </Link>
            <Link href="/startup-marketing-consultant">
              <li className="flex items-center  mb-3">
                {" "}
                <ArrowRightIcon
                  strokeWidth={3.5}
                  className="h-3 w-3 text-blue-500 mr-3"
                />{" "}
                <span>
                  <b>Startup Marketing Consultant</b>: 1 hour weekly
                </span>
              </li>
            </Link>
            <Link href="/marketing-advisor-plan">
              <li className="flex items-center  mb-3">
                {" "}
                <ArrowRightIcon
                  strokeWidth={3.5}
                  className="h-3 w-3 text-blue-500 mr-3"
                />{" "}
                <span>
                  <b>Marketing Advisor</b>: 2 hours weekly
                </span>
              </li>
            </Link>
            <Link href="/build-a-marketing-team">
              <li className="flex items-center  mb-3">
                {" "}
                <ArrowRightIcon
                  strokeWidth={3.5}
                  className="h-3 w-3 text-blue-500 mr-3"
                />{" "}
                <span>
                  <b>Hire In-House Marketing Team</b>: 5 hours weekly
                </span>
              </li>
            </Link>
            <Link href="/cmo">
              <li className="flex items-center  mb-3">
                {" "}
                <ArrowRightIcon
                  strokeWidth={3.5}
                  className="h-3 w-3 text-blue-500 mr-3"
                />{" "}
                <span>
                  <b>Hire as CMO</b>: 10 hours weekly
                </span>
              </li>
            </Link>
          </ul>
        </TextColor>{" "}
      </div>
      <FreeMarketingResources />
    </div>
  );
};

export default Services;
