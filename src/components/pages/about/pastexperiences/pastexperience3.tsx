"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const PastExperience3 = () => {
  return (
    <section className="md:container px-5 mt-16">
      <Image
        src="/assets/images/about/hire-cmo.jpg.webp"
        alt="Past experience big image"
        width={1150}
        height={100}
        sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
        className="block mx-auto"
      />

      <div className="md:mt-16 mt-8 md:px-32">
        <p className="font-extrabold text-gray-500 pb-6">Current</p>
        <div className="relative overflow-hidden flex items-center pb-4">
          <div className="w-[3px] h-20 bg-blue-500 md:mr-10 mr-3"></div>
          <Typography
            variant="h2"
            className="max-w-2xl font-extrabold md:text-4xl text-2xl"
          >
            <TextColor>Najm Consultant</TextColor>
          </Typography>
        </div>
        <Typography variant="lead" className="pb-6">
          <TextColor>Digital Marketing Consultant</TextColor>
        </Typography>
        <div className="space-y-6">
          <Typography>
            By taking a leap of faith. Being a marketing consultant for the past
            5 years and a half has shown me that small and medium companies also
            deserve to grow and generate revenue like the large ones. One
            solution I put a huge emphasis on is adopting marketing automation
            by using readily available tools. That works wonders. The other
            complaint I keep hearing of is the age-old, not having enough
            customers. Now as a certified marketer, I can vouch for my expertise
            and help you solve your problem areas.
          </Typography>
          <Typography variant="lead" className="md:text-xl text-sm">
            Need to build a marketing team? Or a marketing department?
            Conversion optimization? Lead generation? Sales? I have the answers,
            the tips and tricks, and the mistakes, prepared for you.
          </Typography>{" "}
          <p>
            My end goal is to know that a client has benefitted from my
            learnings, and now can’t stop answering the customers flooding at
            their doorsteps! Its always amazing to see how inbound marketing can
            help so many people at a time, be it a medium enterprise or a
            startup stuck at <strong>growth stage</strong>. And I love making it
            happen every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastExperience3;
