"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import TrustedByForCMO from "../cmo/trustedbyforcmo";

const MarketingAdvisor = () => {
  return (
    <>
      <section className="bg-[#F0F7FB]  md:py-10 py-5">
        <div className="md:container md:mt-20 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="md:text-4xl text-2xl md:leading-[3.2rem] pb-6">
              <TextColor>
                <b> Marketing Advisor:</b> Drive Growth With Tailored Guidance
                And Effective Team-Building
              </TextColor>
            </h1>
          </div>
          <Typography className="max-w-2xl mx-auto text-center pb-6">
            Hire and Train your marketing team and build a strategy to get more
            customers for your business through weekly marketing advisory
            meetings.
          </Typography>
          <Typography
            variant="h5"
            className="text-blue-500 text-center text-lg md:text-3xl"
          >
            Weekly 2 Hours Meetings | 50,000 Taka, Monthly Retainer
          </Typography>
        </div>
      </section>
      <div className="lg:-mb-[22rem] -mb-[5.2rem] md:-mb-[8.2rem]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F0F7FB"
            fillOpacity="1"
            d="M0,128L120,149.3C240,171,480,213,720,208C960,203,1200,149,1320,122.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
      <section className="container">
        <div className="">
          <Image
            src="/assets/images/marketing-advisor/quick-consultation.jpg.webp"
            alt="pretend like  quick consultation group picture"
            width={850}
            height={100}
            className="mx-auto rounded-lg"
          />
        </div>

        <div className="md:my-20 my-10">
          <TrustedByForCMO />
        </div>
      </section>
    </>
  );
};

export default MarketingAdvisor;
