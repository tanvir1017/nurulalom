import DataDriveIcon from "@/icons/marketing-consulting-icons/data-driven-icons";
import OptimizationIcon from "@/icons/marketing-consulting-icons/optimization-icon";
import TikMark from "@/icons/marketing-consulting-icons/tik-mark-icon";
import UserCertificate from "@/icons/marketing-consulting-icons/user-certificate";
import { TextColor } from "@/lib/customColorFunc";
import React from "react";

type CardDataType = { title: string; svg: React.ReactNode; desc: string };

const cardData: CardDataType[] = [
  {
    svg: <TikMark />,
    desc: "I go to all lengths to help your team bring the targeted result.",
    title: "COMPLETE STRATEGY WITH EXECUTION",
  },
  {
    svg: <DataDriveIcon />,
    desc: "Findings. Statistics. Analytics. I suggest the best fit solutions.",
    title: "DATA DRIVEN DECISION MAKING",
  },
  {
    svg: <OptimizationIcon />,
    desc: "Let's turn your visitors into leads, and leads into customers.",
    title: "CONVERSION OPTIMIZATION",
  },
  {
    svg: <UserCertificate />,
    desc: "Inbound Marketer at your service. Trust HubSpot for trusting me.",
    title: "CERTIFIED COACHING",
  },
];

const ILearnItHardWay = () => {
  return (
    <section className="container md:mt-28">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="md:text-4xl text-2xl font-bold pb-6">
          <TextColor>
            I Learnt It The Hard Way. Your Business Growth Will Be Easy Now.
          </TextColor>
        </h2>
        <p>
          That simple goal can seem unreachable when you don't have the right
          players with the right tools. Take one of my digital marketing
          consulting packages and see how you can grow your leads like never
          before.
        </p>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-5">
          {cardData.map((item: CardDataType) => (
            <div
              key={item.title}
              className="border px-4 py-7 space-y-3 hover:shadow-xl duration-300"
            >
              <i>{item.svg}</i>
              <h5 className="font-bold">
                <TextColor>{item.title}</TextColor>
              </h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ILearnItHardWay;
