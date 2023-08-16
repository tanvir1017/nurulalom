// @ts-nocheck
"use client";

import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import DefaultButton from "../../shared/button/default-button";
import FiveStarRating from "../../shared/five-star-rating";

const TestimonialCard = () => {
  return (
    <div className="container mt-56 mb-14 text-center">
      <div className="mt-20 ">
        <Typography variant="h4">
          <TextColor>
            &#34;Nobody takes ownership like Najm does.&#34;
          </TextColor>
        </Typography>
      </div>
      <Image
        className="rounded-full mx-auto block mt-5"
        alt="shubo testimonial"
        src="/assets/images/shubho.jpeg"
        width={80}
        height={80}
      />
      <p className="mt-10">
        <strong> - Shubho Al-Farooque</strong> <br />
        <span> Founder & CEO, Zantrik</span>
      </p>

      <div className="my-6">
        <span className="ml-3 flex justify-center items-center">
          <FiveStarRating />
        </span>
      </div>

      <div className="flex items-center justify-center mt-5 pb-6">
        <Image
          className="-ml-14 -mt-9"
          src="https://res.cloudinary.com/djbcnjkin/image/upload/v1690994194/xtxfow6u2ozsmafu8prb.webp"
          alt="Arrow indicate 50+ reviews"
          height={80}
          width={80}
        />
        <DefaultButton className="ml-10 hover:scale-110">
          50+ Reviews & Case Studies{" "}
          <ArrowRightIcon
            strokeWidth={2.5}
            className={`h-5 w-5 transition-transform ml-3 inline`}
          />
        </DefaultButton>
      </div>
    </div>
  );
};

export default TestimonialCard;
