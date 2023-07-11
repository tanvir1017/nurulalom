import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
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
          <ul className="space-y-3">
            <li className="flex items-center">
              {" "}
              <ArrowRightIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-blue-500 mr-3"
              />{" "}
              <span>
                <b> Marketing Strategy</b> : 3 hours total
              </span>
            </li>
            <li className="flex items-center">
              {" "}
              <ArrowRightIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-blue-500 mr-3"
              />{" "}
              <span>
                <b>Startup Marketing Consultant</b>: 1 hour weekly
              </span>
            </li>
            <li className="flex items-center">
              {" "}
              <ArrowRightIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-blue-500 mr-3"
              />{" "}
              <span>
                <b>Marketing Advisor</b>: 2 hours weekly
              </span>
            </li>
            <li className="flex items-center">
              {" "}
              <ArrowRightIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-blue-500 mr-3"
              />{" "}
              <span>
                <b>Hire In-House Marketing Team</b>: 5 hours weekly
              </span>
            </li>
            <li className="flex items-center">
              {" "}
              <ArrowRightIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-blue-500 mr-3"
              />{" "}
              <span>
                <b>Hire as CMO</b>: 10 hours weekly
              </span>
            </li>
          </ul>
        </TextColor>{" "}
      </div>
      <FreeMarketingResources />
    </div>
  );
};

export default Services;
