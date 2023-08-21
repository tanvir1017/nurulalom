"use client";
import MarketingActivitiesIcon from "@/icons/digital-marketing-consultant/marketing-activities";
import QuestionAnswer from "@/icons/digital-marketing-consultant/question-answer";
import Suggestion from "@/icons/digital-marketing-consultant/suggestion";
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
    svgIcon: <MarketingActivitiesIcon />,
    title: "Audit On Existing Marketing Activities",
    desc: "I will tell you what's going wrong so that you can fix the mistakes & will also tell you what things are going right so that you can keep working on them.",
  },
  {
    svgIcon: <Suggestion />,
    title: "Suggestions On Where You Need Work",
    desc: "Fix these, and you will solve 60% of your problems. These problems are different from business to business. They depend on founds, industries & target clients.",
  },
  {
    svgIcon: <QuestionAnswer />,
    title: "All Critical Marketing Questions Answered",
    desc: "One-to-one meetings will give you access to ask any questions. The deeper the questions, the better I can help build your digital marketing department for your company.",
  },
];

const WhatYouWillGetInThisMarketingStrategyConsultationCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto my-16 ">
      {FounderFriendlyMentorshipCard.map(
        (item: FounderFriendlyMentorshipCardDataType, i: number) => (
          <div
            key={i}
            className={`md:px-6 px-2 md:py-3 ${
              i === 1 && "border  border-gray-200 border-t-0 border-b-0 "
            }`}
          >
            <span className="pb-6 block">{item.svgIcon}</span>
            <Typography variant="h5" className="md:text-center">
              <TextColor>
                {i + 1}. {item.title}
              </TextColor>
            </Typography>
            <Typography className="py-6 md:text-center">{item.desc}</Typography>
          </div>
        )
      )}
    </div>
  );
};

export default WhatYouWillGetInThisMarketingStrategyConsultationCard;
