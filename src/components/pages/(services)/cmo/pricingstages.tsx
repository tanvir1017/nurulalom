"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const PricingStages = () => {
  return (
    <section className="bg-[#F0F7FB] md:px-10 px-4 md:py-24 py-10">
      <div className="md:container max-w-fit mx-auto text-center">
        <div className="space-y-5">
          <Typography variant="h3" className="md:text-3xl text-xl">
            🧠 Pricing & Stages
          </Typography>
          <Typography className="max-w-xl mx-auto ">
            It's like starting a train - it takes time and effort to get it up
            and running, but once it starts moving, it becomes an unstoppable
            force.
          </Typography>
        </div>
        <Image
          src="/assets/images/part-time-cmo/2kprice-2048x728.png"
          alt="2k dollar per month"
          width={200}
          height={100}
          sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
          className="mx-auto py-6"
        />
        <Image
          src="/assets/images/part-time-cmo/pricing-with-hours-2048x718.png.webp"
          alt="2k dollar per month"
          width={1100}
          height={100}
          className="mx-auto py-10"
        />
      </div>
    </section>
  );
};

export default PricingStages;
