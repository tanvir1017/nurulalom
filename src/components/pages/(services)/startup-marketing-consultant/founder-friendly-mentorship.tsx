"use client";
import DataDriveLaptopIcon from "@/icons/marketing-advisor-plan/data-driven";
import EnterPriseLevelCmoIcon from "@/icons/marketing-advisor-plan/enterprise-level-cmo";
import PlanIcon from "@/icons/marketing-advisor-plan/plan";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

type FounderFriendlyMentorshipCardDataType = {
  svgIcon: ReactNode;
  title: string;
  desc: string;
};

const FounderFriendlyMentorshipCard: FounderFriendlyMentorshipCardDataType[] = [
  {
    svgIcon: <PlanIcon />,
    title: "Strategy Planning",
    desc: "No idea where to start marketing? You will get step by step plan on how to reach out to your customers and gain their trust.",
  },
  {
    svgIcon: <DataDriveLaptopIcon />,
    title: "Data Driven Marketing",
    desc: "Convert more prospects into leads and leads into customers. A small change in this can bring a big result.",
  },
  {
    svgIcon: <EnterPriseLevelCmoIcon />,
    title: "An Enterprise Level CMO",
    desc: "Can't afford a CMO? Now you can. That too whenever you want. Let's dive deep into your problems, and together, we fix them.",
  },
];

const FounderFriendlyMentorShipAndMarketingGuidanceForATeam = () => {
  return (
    <section className="md:container px-6 md:mt-32 mt-16">
      <div className="max-w-xl mx-auto md:text-center pb-14">
        <Typography variant="h2" className="pb-6 md:text-4xl text-2xl">
          <TextColor>
            Founder Friendly Mentorship & Guidance On Marketing
          </TextColor>
        </Typography>
        <Typography>
          One to one meeting will give you access to ask any questions as a
          marketing expert. The deeper the questions the better I can help.
        </Typography>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 ">
        {FounderFriendlyMentorshipCard.map(
          (item: FounderFriendlyMentorshipCardDataType, i: number) => (
            <div
              key={i}
              className={`px-6 py-3 ${
                i === 1 &&
                "md:border  md:border-gray-200 md:border-t-0 md:border-b-0 "
              }`}
            >
              <span className="pb-6 block">{item.svgIcon}</span>
              <Typography variant="h5" className="md:text-center">
                <TextColor>{item.title}</TextColor>
              </Typography>
              <Typography className="py-6 md:text-center">
                {item.desc}
              </Typography>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default FounderFriendlyMentorShipAndMarketingGuidanceForATeam;
