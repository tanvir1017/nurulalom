"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import DefaultButton from "../../shared/button/default-button";
import WhatYouWillGetInThisMarketingStrategyConsultationCard from "./what-you-will-get-in-this-marketing-strategy-consultation-card";

const WhatYouWillGetInThisMarketingStrategyConsultation = () => {
  return (
    <section className="container my-28">
      <div className="max-w-2xl mx-auto text-center">
        <div className="space-y-5">
          <Typography variant="h2">
            <TextColor>
              What You Will Get In This Marketing Strategy Consultation.
            </TextColor>
          </Typography>
          <Typography>
            <TextColor>
              Most founders know digital marketing. But they don't know where to
              start. Where do you start? You start here today by working with me
              to understand what you need to do each week to achieve your
              quarterly and yearly sales goals.
            </TextColor>
          </Typography>
          <Typography>
            <TextColor>
              Let me help you increase your leads. Double, triple, or even 10X
              your revenue.
            </TextColor>
          </Typography>
        </div>
      </div>
      <WhatYouWillGetInThisMarketingStrategyConsultationCard />

      <div className="max-w-xl mx-auto text-center space-y-3">
        <Typography variant="h6" className="text-blue-500">
          Most Importantly
        </Typography>
        <Image
          src="/assets/images/digital-marketing-consultant/free-consultation.svg"
          alt="free consultation illustration image"
          width={500}
          height={100}
        />

        <div className="space-y-5">
          <Typography variant="h2" className="mt-20 ">
            <TextColor>
              4. Get A Bulletproof Digital Marketing Strategy
            </TextColor>
          </Typography>
          <Typography variant="h5" className="">
            <TextColor>
              Address Specific Long-Term Marketing & Lead Generation Goals
            </TextColor>
          </Typography>
          <Typography className="">
            These are more painful advice as they sound easy at 1st. But you
            need to do these every day and every week. They will solve the other
            40% of your other problems. Do this and bring more sustainable
            revenue growth.
          </Typography>

          <div className="pt-5">
            <DefaultButton>Book Consultation</DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillGetInThisMarketingStrategyConsultation;
