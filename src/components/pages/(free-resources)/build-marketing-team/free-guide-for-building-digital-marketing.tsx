"use client";

import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";

const whatInsideData: string[] = [
  "The process of structuring your Marketing team.",
  "What does an awesome Digital Marketing Team look like?",
  "Marketer's needs and wants from your company.",
  "How many people should you hire and why?",
  "The process of structuring your Marketing team.",
  "HR/ hiring system recommendations.",
  "Free Templates for all marketing positions.",
  "The ideal selection process.",
];

const FreeGuideForBuildDigitalMarketingTeam = () => {
  return (
    <section className="container md:mt-16 mt-6">
      <div className="max-w-4xl mx-auto text-center my-7">
        <h5 className="text-xl font-bold text-[#09304C] pb-6">
          - Build Your Own Marketing Team -
        </h5>
        <h1 className="md:text-4xl text-2xl font-bold text-[#09304C] pb-6">
          FREE Guide On Building A Digital Marketing Team (With 13 Job
          Descriptions)
        </h1>
        <p>
          Are you looking to scale your business but failing to hire a good
          marketing team? Or maybe the current team you have is not bringing any
          conversational leads for your business? Don't worry, I've got you
          covered.
        </p>
      </div>
      <div className="max-w-fit mx-auto">
        <Image
          src="/assets/images/building-marketing-team/hire-cmo-long.jpg.webp"
          alt="Author interviewing"
          width={1150}
          height={10}
          priority
          sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
        />
      </div>

      <div className="max-w-6xl mx-auto md:my-28 my-14">
        <div className=" md:grid md:grid-cols-2 md:gap-6 flex flex-col-reverse ">
          <div className="md:pr-5 pt-6 ">
            <h2 className="md:text-3xl text-2xl font-bold pb-6">
              <TextColor>Made For Founders</TextColor>
            </h2>
            <p>
              If you're a founder who's looking to build a marketing team for
              your business but don't know where to start then this video is
              exclusively for you.
            </p>

            <h2 className="md:text-3xl text-2xl font-bold py-6">
              <TextColor>What's Inside?</TextColor>
            </h2>
            <ul className="space-y-2">
              {whatInsideData.map((item, i: number) => (
                <li className="md:text-base text-sm" key={i}>
                  {" "}
                  <ArrowRightIcon
                    className="text-blue-500 md:w-5 w-4 md:h-5 h-4 inline-flex mr-2"
                    strokeWidth={3.5}
                  />{" "}
                  {item}
                </li>
              ))}
              <li className="md:text-base text-sm">
                {" "}
                <ArrowRightIcon
                  className="text-blue-500 md:w-5 w-4 md:h-5 h-4 inline-flex mr-2"
                  strokeWidth={3.5}
                />{" "}
                Job Description template for CMO Position
              </li>
              <li>
                {" "}
                <ArrowRightIcon
                  className="text-blue-500 md:w-5 w-4 md:h-5 h-4 inline-flex mr-2"
                  strokeWidth={3.5}
                />{" "}
                Interview questions to ask in the interview
              </li>
              <li>
                {" "}
                <ArrowRightIcon
                  className="text-blue-500 md:w-5 w-4 md:h-5 h-4 inline-flex mr-2"
                  strokeWidth={3.5}
                />{" "}
                Step By Step Guide to hiring the right CMO
              </li>
            </ul>
          </div>
          <div className="bg-[#F3F7FB] border border-[#d1e3f5]  md:px-8 px-4 py-16 space-y-4">
            <h4 className="text-xl font-bold">
              <TextColor>Subscribe And Download The Free Resource</TextColor>
            </h4>
            <div className="space-y-5">
              <Input size="lg" label="name" color="blue" />
              <Input size="lg" label="email" color="blue" />

              <Button
                color="blue"
                className="rounded-full w-full text-xs md:text-sm"
              >
                Show me the CMO Interview Questions & JD Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeGuideForBuildDigitalMarketingTeam;
