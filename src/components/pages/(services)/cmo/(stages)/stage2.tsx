import { Stage2Accordion } from "@/components/materialtailwind/stage2accordion";
import { TextColor } from "@/lib/customColorFunc";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import StageHeading from "./stageheading";

const Stage2 = () => {
  return (
    <section className="md:mt-16 mt-5">
      <div className="md:container px-3">
        <StageHeading
          stageLevel="Stage 2"
          period="Time Period: 3 Months"
          title="Strategy To Execution"
          text=" We are now beginning to implement the strategy we developed, as
              well as initiating the marketing activities that were part of that
              strategy."
        />

        {/* Cards of stage 2 section */}

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto py-16">
          <div className="shadow-md border-t-4 border-blue-500 px-5 py-8 rounded-lg ">
            <Typography variant="h5" className="text-blue-500 pb-6">
              STEP 2.1:
            </Typography>
            <Image
              src="/assets/images/part-time-cmo/free-consultation_mobile.svg"
              alt="free consultation illustration"
              width={300}
              height={100}
              sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
              className="pb-6"
            />
            <Typography
              variant="h3"
              className="text-blue-500 pb-6 md:text-3xl text-2xl"
            >
              <TextColor>Building A Marketing Team</TextColor>
            </Typography>
            <div className="flex items-center justify-start space-x-5 pb-6">
              <span>
                {" "}
                <CheckIcon className="w-5 h-5 text-blue-500 inline" /> Hiring{" "}
              </span>
              <span>
                {" "}
                <CheckIcon className="w-5 h-5 text-blue-500 inline" /> Training
              </span>
              <span>
                {" "}
                <CheckIcon className="w-5 h-5 text-blue-500 inline" /> Setup
                KPIs
              </span>
            </div>

            <Typography>
              I will help you find the ideal talent, offer training and
              motivation, and make sure your team is ready to achieve the best
              results for your business. The team will be yours; employed
              directly by you.
            </Typography>

            <Stage2Accordion />
          </div>{" "}
          <div className="shadow-md border-t-4 border-blue-500 px-5 py-8 rounded-lg ">
            <Typography variant="h5" className="text-blue-500 pb-6">
              STEP 2.1:
            </Typography>
            <Image
              src="/assets/images/part-time-cmo/kickstart-marketing.svg"
              alt="free consultation illustration"
              width={200}
              height={100}
              sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
              className="pb-6"
            />
            <Typography
              variant="h3"
              className="text-blue-500 pb-6 md:text-3xl text-2xl"
            >
              <TextColor>Kickstart Marketing Activities</TextColor>
            </Typography>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:space-x-5 space-y-3 pb-6">
              <span>
                {" "}
                <CheckIcon className="w-5 h-5 text-blue-500 inline" /> Focus On
                Quantit{" "}
              </span>
              <span>
                {" "}
                <CheckIcon className="w-5 h-5 text-blue-500 inline" /> Weekly
                Execution
              </span>
            </div>

            <Typography>
              Here is when we start executing. Most of your marketing activities
              will start from this phase. The goal will be to hit the quantity &
              start building our marketing presence.
            </Typography>

            <Image
              src="/assets/images/part-time-cmo/Digital-marketing-consulting-for-B2Bs-Illustration.svg"
              alt="Digital marketing consulting for B2Bs Illustration"
              width={500}
              height={100}
              sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
              className="pt-6"
            />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Stage2;
