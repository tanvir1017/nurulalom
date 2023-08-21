"use client";
import BePatientCLockIcon from "@/icons/marketing-advisor-plan/be-patient-clock";
import BusinessSuitCase from "@/icons/marketing-advisor-plan/business-suitcase";
import ExecutionTeamIcon from "@/icons/marketing-advisor-plan/execution-team";
import FounderCEONeedsIcons from "@/icons/marketing-advisor-plan/founder-ceo-needs";
import RightExecutionSetting from "@/icons/marketing-advisor-plan/right-execution-setting";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

type MustMakeThisWorkDataType = {
  icon: ReactNode;
  text: string;
};

const mustMakeThisWorkData: MustMakeThisWorkDataType[] = [
  {
    icon: <ExecutionTeamIcon />,
    text: "Your own execution team. Minimum 1 full time employee for marketing",
  },
  {
    icon: <FounderCEONeedsIcons />,
    text: "Founder or CEO needs to be involved in the meetings",
  },
  {
    icon: <BePatientCLockIcon />,
    text: "Be patient. It will take 3 months to see the result. Usually, clients see the result in 1.5 months. But no promises",
  },
];
const whatYouWillGet: MustMakeThisWorkDataType[] = [
  {
    icon: <BusinessSuitCase />,
    text: "Business consultancy. I can't help you fix your business. I can fix your marketing & sales",
  },
  {
    icon: <RightExecutionSetting />,
    text: "Execution. I can help you with that as well. But in that case, you might want to explore my other marketing consulting plans.",
  },
];

const NoFakePromises = () => {
  return (
    <section className="md:container px-3 md:mt-0 mt-14">
      <Typography
        variant="h2"
        className="max-w-xl mx-auto text-center md:text-4xl text-2xl"
      >
        <TextColor>
          No Fake Promises. Only Expert Marketing Advising & Mentorship
          Included.
        </TextColor>
      </Typography>

      <div className="max-w-5xl mx-auto md:mt-24 mt-14">
        <div className="grid md:grid-cols-2 gap-6 bg-[#f0fbf7] md:p-10 p-5 rounded-lg">
          <div className="space-y-5 md:border-r-2 border-gray-200 md:pr-5">
            <Typography variant="h5">
              <TextColor>What Is Must To Make This Work:</TextColor>
            </Typography>

            <ul className="space-y-6">
              {mustMakeThisWorkData.map(
                (item: MustMakeThisWorkDataType, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="inline-flex mr-5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                )
              )}
            </ul>
          </div>{" "}
          <div className="space-y-5 md:pl-5">
            <Typography variant="h5">
              <TextColor>What You Will Not Get:</TextColor>
            </Typography>

            <ul className="space-y-6">
              {whatYouWillGet.map(
                (item: MustMakeThisWorkDataType, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="inline-flex mr-5">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoFakePromises;
