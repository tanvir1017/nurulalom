"use client";

import { clientReviewYoutube } from "@/data/clientreview";
import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const MarketingSuccess = () => {
  return (
    <section className="mt-16">
      <div className="max-w-xl mx-auto text-center">
        <Typography
          variant="h1"
          className="pb-6 md:text-4xl text-2xl md:font-bold font-black"
        >
          <TextColor>Marketing Success Stories</TextColor>
        </Typography>
        <Typography>
          A story is not successful if it doesn't surprise you. Let's hear my
          clients tell theirs.
        </Typography>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-y-3 mt-16 place-items-center">
          {clientReviewYoutube.map((_: string, i: number) => (
            <div key={i}>
              <iframe
                className="rounded-xl md:w-[33.375rem] md:h-[18.8125rem] w-[20.875rem] h-[11.6875rem]"
                src={_}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="my-20  flex flex-col-reverse  md:flex-row items-center justify-between  shadow-xl p-10 rounded-xl">
          <div className="space-y-5 ">
            <Typography variant="h5" className="text-blue-500 font-extrabold">
              Need Urgent Help?
            </Typography>
            <div className="max-w-xl mx-auto md:space-y-5 space-y-0">
              <Typography variant="h3" className="md:text-5xl text-xl">
                <TextColor>Get Your 1st Meeting Within 24 Hours</TextColor>
              </Typography>
              <Typography>
                Inbound Marketing for small & medium businesses.
              </Typography>
            </div>
            <Link href="/inbound-marketing-consultation" className="block">
              <Button
                className="py-3 rounded-full hover:bg-[#0C304A] shadow-lg flex items-center capitalize tracking-wider"
                size="md"
                color="blue"
              >
                Book Consultation
                <ArrowRightIcon
                  strokeWidth={2.5}
                  className={`h-5 w-5 transition-transform ml-3`}
                />
              </Button>
            </Link>
          </div>
          <div className="md:mb-0 mb-10">
            <Image
              src="/assets/images/Need_urgent_help_illustration.svg"
              alt="Need_urgent_help_illustration"
              width={270}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSuccess;
