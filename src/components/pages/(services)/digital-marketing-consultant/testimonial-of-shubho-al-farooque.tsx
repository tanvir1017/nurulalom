"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import FiveStarRating from "../../shared/five-star-rating";

const TestimonialOfShubhoAlFarooque = () => {
  return (
    <section className="bg-[#f0fbf7] py-28 px-10">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl px-12 py-16">
          <div className="grid grid-cols-3 gap-3 place-items-center">
            <div className="col-span-1">
              <Image
                src="/assets/images/digital-marketing-consultant/zantrik-co-founders.jpg.webp"
                alt="zantrik-co-founders group picture with victory sign by two fingers"
                height={100}
                width={250}
                className="rounded-xl"
              />
            </div>
            <div className="col-span-2 ml-10">
              <div className="text-6xl font-black">
                <TextColor>&#x1F676;</TextColor>
              </div>
              <span className=" flex  items-center pb-6">
                <FiveStarRating />
              </span>
              <div className="space-y-5">
                <Typography variant="h4" className="italic pb-6 font-semibold">
                  <TextColor>
                    He Gives Precise & Honest Feedback. What I Loved Most About
                    Him Is How Much Ownership He Takes About Your Business.
                  </TextColor>
                </Typography>
                <div>
                  <Typography variant="h6">
                    <TextColor>Shubho Al-Farooque</TextColor>
                  </Typography>
                  <Typography>
                    <TextColor>Founder, Zantrik</TextColor>
                  </Typography>
                </div>
              </div>
              <div className="text-6xl font-black flex justify-end">
                <TextColor>&#x1F677;</TextColor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOfShubhoAlFarooque;
