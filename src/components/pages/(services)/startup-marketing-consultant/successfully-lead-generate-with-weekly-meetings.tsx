"use client";
import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { SuccessFullyGenerateLeadsWithWeeklyMeetingCardDataType as cardDataType } from "@/types/globaltypes";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const SuccessFullyGenerateLeadsWithWeeklyMeetingCard: cardDataType[] = [
  {
    image: "/assets/images/marketing-advisor/Need_urgent_help_illustration.svg",
    title: "Set Goals",
    desc: "We start the conversation with quarter goals then monthly and then weekly goals.",
  },
  {
    image: "/assets/images/marketing-advisor/deploy-strategy.svg",
    title: "Deploy Strategy",
    desc: "Will have specific target for the team & help them with the “right plan” or steps to get more customers.",
  },
  {
    image: "/assets/images/marketing-advisor/Set-Goals_.svg",
    title: "Measure Progress",
    desc: "Track progress of every week and see what we need to improve. In time, we see leads coming in.",
  },
];

const HowToSuccessfullyGenerateLeadsWithTheseWeeklyMeetings = () => {
  return (
    <section className="container mt-28">
      <div className="max-w-2xl mx-auto text-center">
        <Typography variant="h2" className="pb-6">
          <TextColor>
            Here Is How To Successfully Generate Leads With These Weekly
            Meetings
          </TextColor>
        </Typography>
        <Typography>
          I build the strategy with you and help your team to execute it on our
          weekly meetings. Here is the step by step recipe.
        </Typography>
      </div>

      <div className="max-w-5xl mx-auto my-28">
        <div className="grid grid-cols-3 gap-5">
          {SuccessFullyGenerateLeadsWithWeeklyMeetingCard.map(
            (item: cardDataType, index: number) => (
              <div className="shadow-md px-5 py-8 rounded-lg" key={index}>
                <Typography
                  variant="h5"
                  className="text-blue-500 pb-6 text-center"
                >
                  Step {index + 1}
                </Typography>
                <div className="py-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={100}
                    className="mx-auto"
                  />
                </div>
                <div className="space-y-5">
                  <Typography variant="h3">{item.title}</Typography>
                  <Typography>{item.desc}</Typography>
                </div>
              </div>
            )
          )}
        </div>
        <div className="max-w-fit mx-auto mt-16">
          <DefaultButton>
            Let's have a meeting
            <ArrowRightIcon
              strokeWidth={2.5}
              className={`h-5 w-5 transition-transform ml-3 inline-flex`}
            />
          </DefaultButton>
        </div>
      </div>
    </section>
  );
};

export default HowToSuccessfullyGenerateLeadsWithTheseWeeklyMeetings;
