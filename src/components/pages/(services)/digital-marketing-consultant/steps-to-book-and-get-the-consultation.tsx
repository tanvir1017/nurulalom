"use client";
import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { SuccessFullyGenerateLeadsWithWeeklyMeetingCardDataType as cardDataType } from "@/types/globaltypes";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const SuccessFullyGenerateLeadsWithWeeklyMeetingCard: cardDataType[] = [
  {
    image: "/assets/images/digital-marketing-consultant/step-2-payment.svg",
    title: "Order Your Consultation",
    desc: "1st thing 1st. Fill out the form below to book a time that works for you.",
  },
  {
    image: "/assets/images/digital-marketing-consultant/deploy-strategy.svg",
    title: "Payment & Booking Confirmation",
    desc: "I'll send payment instructions via email. When payment is received, book a slot on my calendar.",
  },
  {
    image: "/assets/images/digital-marketing-consultant/step-3-info.svg",
    title: "Collecting Your Information",
    desc: "The more precise information you give, the deeper we can go into your problems.",
  },
  {
    image: "/assets/images/digital-marketing-consultant/step-4-audit.svg",
    title: "Audit, Research & Analysis",
    desc: "Based on the information you give, I'll do some research on the solution you need to get more customers.",
  },
  {
    image:
      "/assets/images/digital-marketing-consultant/step-5-consultation.svg",
    title: "Strategy Consultation Meeting",
    desc: "I answer all your questions and or we lay down a 3 to 12 months marketing plan for your company to succeed.",
  },
  {
    image: "/assets/images/digital-marketing-consultant/start.svg",
    title: "Lets Start Today",
    desc: "Book Consultation",
  },
];

const StepsToBookAndGetTheConsultation = () => {
  return (
    <section className="container md:mt-28">
      <div className="max-w-2xl mx-auto text-center">
        <Typography variant="h2" className="pb-6 text-2xl md:text-4xl">
          <TextColor>Steps To Book And Get The Consultation.</TextColor>
        </Typography>
      </div>

      <div className="max-w-5xl mx-auto md:my-28 my-12">
        <div className="grid md:grid-cols-3 gap-5">
          {SuccessFullyGenerateLeadsWithWeeklyMeetingCard.map(
            (item: cardDataType, index: number) => (
              <div className="shadow-md px-5 py-8 rounded-lg" key={index}>
                {index !== 5 && (
                  <Typography
                    variant="h5"
                    className="text-blue-500 pb-6 md:text-center"
                  >
                    Step {index + 1}
                  </Typography>
                )}
                <div className="py-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={100}
                    className="md:mx-auto"
                  />
                </div>
                <div className="space-y-5">
                  <Typography
                    variant="h4"
                    className={`md:text-center text-lg md:text-2xl ${
                      index !== 5 ? "" : " text-blue-500"
                    }`}
                  >
                    {item.title}
                  </Typography>
                  {index !== 5 ? (
                    <Typography>{item.desc}</Typography>
                  ) : (
                    <div className="md:text-center">
                      <DefaultButton className="md:py-4 py-2">
                        {item.desc}
                      </DefaultButton>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StepsToBookAndGetTheConsultation;
