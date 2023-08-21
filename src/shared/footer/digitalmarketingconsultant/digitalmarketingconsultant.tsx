import { Typography } from "@material-tailwind/react";
import Image from "next/image";

import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const DigitalMarketingConsultant = () => {
  return (
    <div>
      <div className="mb-6">
        <Image
          priority
          src="/assets/images/cmo/marketing-consultant-najm-team-meeting.webp"
          alt="Digital Marketing Consultant"
          height={100}
          width={281}
        />
      </div>
      <div>
        <div className="mb-6">
          <Typography variant="h5">Digital Marketing Consultant</Typography>
        </div>
        <div className="mb-6">
          <Typography>
            <TextColor>
              With over 14+ years of experience in digital marketing, I help
              both small and mid-size companies grow sales pipeline and revenue
              through performance based marketing consulting.
            </TextColor>
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
              Ex-CMO of a 700+ employee company
            </li>
            <li className="flex items-center">
              {" "}
              <ArrowRightIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-blue-500 mr-3"
              />{" "}
              Ex-CEO of a digital marketing company for 3 years
            </li>
            <li className="flex items-center">
              {" "}
              <ArrowRightIcon
                strokeWidth={3.5}
                className="h-3 w-3 text-blue-500 mr-3"
              />{" "}
              HubSpot certified digital marketing consultant
            </li>
          </ul>
        </TextColor>{" "}
      </div>
    </div>
  );
};

export default DigitalMarketingConsultant;
