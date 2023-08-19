import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import StageHeading from "./stageheading";

const Stage3 = () => {
  return (
    <section className="md:mt-24 mb-28">
      <div className="container">
        <div className="mx-w-6xl  mx-auto ">
          <div className="text-center">
            <StageHeading
              stageLevel="Stage 3"
              title="Execution To Growth"
              period="Time Period: 9 Months"
              text="At this stage, it's all about execution. With a clear marketing strategy in place, I will work with the marketing team that I hired, to implement the tactics and strategies we have identified and drive growth for your business."
            />
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-5 flex flex-col-reverse place-items-start mt-20">
              <div className="max-w-lg">
                <Typography
                  variant="h2"
                  className="text-start md:text-4xl text-2xl md:mt-0 mt-6"
                >
                  <TextColor>
                    Build A Brand, Generate More Leads & Convert More Clients
                  </TextColor>
                </Typography>
                <Typography className="pt-6">
                  Working tirelessly in your marketing efforts but seeing not
                  much of a result? (that is, few sales?) I'll help you develop
                  the right resources for you to generate more leads that will
                  ultimately result in more sales.
                </Typography>
                <div className="mt-16 border-l-2 border-l-blue-500 bg-[#F0F7FB] rounded-lg p-5 space-y-5">
                  <p>
                    Convert More Visitors into <strong>Qualified Leads</strong>
                  </p>
                  <p>
                    Enable <strong>CRM</strong>, close more sales
                  </p>
                  <p>
                    Marketing <strong>funnel</strong> - Guide your prospects
                  </p>
                </div>
              </div>
              <Image
                src="/assets/images/part-time-cmo/funnel-for-mobile.svg"
                alt="audit and stategy illustration"
                width={550}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stage3;
