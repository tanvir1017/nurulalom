"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import TrustedByForCMO from "../cmo/trustedbyforcmo";

const LetsBuildMarketingStrategy = () => {
  return (
    <section className="md:container px-4">
      <div className="max-w-4xl mx-auto text-center space-y-5 md:my-28 my-12">
        <h1 className="md:text-5xl text-2xl md:leading-[3.5rem] pb-6">
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

        <div className="md:hidden block">
          <iframe
            className="w-[20.875rem] h-[11.6875rem] md:w-[33.75rem] md:h-[19rem] mx-auto"
            src="https://www.youtube.com/embed/-VpoDonCjwg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="my-16">
        <TrustedByForCMO />
      </div>
    </section>
  );
};

export default LetsBuildMarketingStrategy;
