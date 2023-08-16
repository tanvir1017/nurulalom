"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import TrustedByForCMO from "../cmo/trustedbyforcmo";

const LetsBuildMarketingStrategy = () => {
  return (
    <section className="container">
      <div className="max-w-4xl mx-auto text-center space-y-5 my-28">
        <h1 className="text-5xl leading-[3.5rem] pb-6">
          <TextColor>
            <b>Let's Build Your Marketing Strategy.</b> Outperform Your
            Competitors!
          </TextColor>
        </h1>
        <p>
          I'll thoroughly audit your existing marketing activities, analyze
          competitors, and collaboratively create a realistic, achievable
          year-long strategy for business success.
        </p>
        <Typography variant="h6" className="font-bold text-blue-500">
          25,000 Taka | One-Time Engagement
        </Typography>
      </div>
      <div className="my-16">
        <TrustedByForCMO />
      </div>
    </section>
  );
};

export default LetsBuildMarketingStrategy;
