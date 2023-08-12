"use client";

import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const BuildMarketingHeadingSection = () => {
  return (
    <section className="bg-[#F0F7FB] p-10">
      <div className="container mt-16">
        <div className="max-w-fit mx-auto text-center">
          <h5 className="italic pb-6 text-xl">
            <TextColor>
              Struggling To Ensure An Ongoing Inflow Of Clients?
            </TextColor>
          </h5>

          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold leading-[4.5rem] pb-6">
              <TextColor>
                Hire{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-900 via-[#00589E]  to-[#008D9E]">
                  In-House
                </span>{" "}
                Verified Marketing Team
              </TextColor>
            </h1>

            <p className="pb-6">
              I will help you build your own onsite marketing department to
              execute every type of marketing activity needed to skyrocket your
              revenue.
            </p>
            <p className="font-semibold pb-6">
              <TextColor>
                20 Hours A Month & 2 Lac Taka Per Month (Total 4 Months)
              </TextColor>
            </p>
            <Button
              className="py-4 rounded-full hover:bg-[#0C304A]  shadow-lg  duration-300 flex items-center normal-case tracking-wider mx-auto"
              size="lg"
              color="blue"
            >
              Build Your Own Marketing Department In Just 4 Months
              <ArrowRightIcon
                strokeWidth={2.5}
                className={`h-5 w-5 transition-transform ml-3`}
              />
            </Button>

            <div className="pt-10">
              <Image
                className="rounded-lg"
                src="/assets/images/build-marketing-team/marketing-consultant-najm-team-meeting.webp"
                alt="marketing-consultant-najm-team-meeting"
                width={850}
                height={100}
                priority
              />
            </div>
          </div>
          <div className="pt-6 flex items-center justify-center space-x-5 max-w-fit mx-auto pb-10">
            <span className="flex items-center ">
              <CheckIcon className="w-4 h-4 text-white bg-blue-500 rounded-full mr-2" />
              <p className="text-sm">Hiring + Training Included</p>
            </span>
            <span className="flex items-center ">
              <CheckIcon className="w-4 h-4 text-white bg-blue-500 rounded-full mr-2" />
              <p className="text-sm">Non-marketer Founder Friendly</p>
            </span>
            <span className="flex items-center ">
              <CheckIcon className="w-4 h-4 text-white bg-blue-500 rounded-full mr-2" />
              <p className="text-sm">Inbound, outbound, do it all.</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildMarketingHeadingSection;
