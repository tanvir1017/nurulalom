"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import TrustedByForCMO from "../cmo/trustedbyforcmo";

const StartupMarketingConsultantHeadingSection = () => {
  return (
    <>
      <section className="bg-[#F0F7FB] py-10">
        <div className="md:container px-5 md:mt-20 mt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="md:text-5xl text-2xl md:font-bold font-black pb-6">
              <TextColor>Startup Marketing Consultant</TextColor>
            </h1>
            <h4 className="pb-6 md:text-2xl text-xl md:font-normal font-bold">
              <TextColor>
                Get More Customers For Your Startup Or Small Business.
              </TextColor>
            </h4>
          </div>
          <Typography className="max-w-2xl mx-auto text-center pb-6">
            I sit with you once a week which will help you build a solid
            marketing plan and execute it to bring you more customers.
          </Typography>
          <Typography
            variant="h5"
            className="text-blue-500 text-center pb-6 md:text-2xl text-lg"
          >
            Weekly 1 Hour Meeting | 25,000 Taka, Monthly Retainer
          </Typography>
        </div>
      </section>
      <div className="md:-mb-[22rem] -mb-[5.2rem]">
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
            src="/assets/images/startup-marketing-consultant/3-hour-wide.jpg.webp"
            alt="pretend like  quick consultation group picture"
            width={750}
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

export default StartupMarketingConsultantHeadingSection;
