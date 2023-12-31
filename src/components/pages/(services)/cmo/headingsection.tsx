"use client";
import { TextColor } from "@/lib/customColorFunc";
import {
  ArrowRightIcon,
  BanknotesIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const HeadingSection = () => {
  return (
    <section className="md:container px-4 mt-16">
      <div className="md:grid md:grid-cols-2 md:gap-5 place-items-center flex flex-col-reverse">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mx-auto ">
            <Typography
              variant="h1"
              className="md:text-5xl text-2xl font-extrabold pb-6 md:leading-[4rem]"
            >
              <TextColor>
                As Your <span className="text-blue-500">Fractional CMO,</span> I
                Will Build Your Marketing Department
              </TextColor>
            </Typography>

            <div className="space-y-3">
              <Typography className="text-gray-700 flex items-center ">
                <i>
                  <ClockIcon className="h-5 w-5 mr-3" />
                </i>{" "}
                40 Hours Monthly Retainer
              </Typography>
              <Typography className="text-gray-700 flex items-center ">
                <i>
                  <BanknotesIcon className="h-5 w-5 mr-3" />
                </i>{" "}
                $2,000 Per Month
              </Typography>
              <Typography>
                Let,s assemble a marketing team and develop systems to help you
                reach your customer acquisition goals.
              </Typography>
            </div>
            <Link href="#how">
              <Button
                color="blue"
                className="rounded-full normal-case tracking-wider flex items-center hover:bg-[#0C304A]  duration-300 mt-10"
              >
                Explore Now <ArrowRightIcon className="h-5 w-5 ml-3" />
              </Button>
            </Link>
          </div>{" "}
        </div>
        <div>
          <Image
            src="/assets/images/part-time-cmo/fractional-cmo.png"
            alt="Author png picture"
            width={1200}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeadingSection;
