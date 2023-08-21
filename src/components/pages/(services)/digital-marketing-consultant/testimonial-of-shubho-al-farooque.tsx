"use client";

import { TextColor } from "@/lib/customColorFunc";
import FiveStarRating from "@/shared/five-star-rating";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const TestimonialOfShubhoAlFarooque = () => {
  return (
    <section className="bg-[#f0fbf7] md:py-28 py-8 md:px-10 px-4">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl md:px-12 md:py-16">
          <div className="md:grid md:grid-cols-3 md:gap-3 md:place-items-center flex flex-col">
            <div className="md:col-span-1">
              <Image
                src="/assets/images/digital-marketing-consultant/zantrik-co-founders.jpg.webp"
                alt="zantrik-co-founders group picture with victory sign by two fingers"
                height={100}
                width={250}
                className="rounded-xl block mx-auto pt-3"
              />
            </div>
            <div className="md:col-span-2 md:ml-10 px-4">
              <div className="text-6xl font-black mt-4">
                <TextColor>&#x1F676;</TextColor>
              </div>
              <span className=" flex  items-center pb-6">
                <FiveStarRating />
              </span>
              <div className="space-y-5">
                <Typography
                  variant="h4"
                  className="italic pb-6 font-semibold text-lg md:text-2xl"
                >
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
