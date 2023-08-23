"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FaHandPointUp } from "react-icons/fa";

const WhyListenToMe = () => {
  return (
    <section className="md:container px-1 md:my-20 my-10 md:px-32">
      <div className=" bg-[#F0F7FB]">
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:place-items-center"
          style={{
            justifyItems: "end",
          }}
        >
          <div className="md:p-10 px-3 md:order-1 order-2">
            <div className="md:mb-6 my-5">
              <Typography variant="h5" className="text-lg md:text-xl pb-6">
                <TextColor>Hi There! My Name Is Najm</TextColor>
              </Typography>
              <Typography
                variant="h2"
                className="text-xl md:text-4xl md:leading-[3.3rem]"
              >
                <TextColor>
                  Why Listen To <span className="text-blue-500">Me?</span>
                </TextColor>
              </Typography>
            </div>

            <div className="mb-6">
              <span className="space-y-3">
                <Typography>
                  I am a former CMO of multiple $10M revenue companies and
                  former CEO of a digital marketing company.
                </Typography>
                <Typography>
                  Over the last 36 months, Najm has: Invested over $25,000 on
                  marketing tests, generated tens of thousands of unique
                  visitors, Sent well over 100 thousand emails, and run
                  approximately 100 split and multi-variant tests.
                </Typography>{" "}
                <Typography>
                  I'm also a highly sought-after speaker and consultant whose
                  work has impacted over 200 businesses in the past 4 years.
                </Typography>
              </span>
              <div className="mt-16">
                <Button className="rounded-full flex items-center" color="blue">
                  Get access to training{" "}
                  <FaHandPointUp className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="md:order-2 order-1">
            <Image
              src="/assets/images/najm-consultant-at-work.jpg.webp"
              alt=""
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyListenToMe;
