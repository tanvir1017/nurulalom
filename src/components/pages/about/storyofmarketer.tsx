"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const StoryOfMarketer = () => {
  return (
    <div className="md:container px-2 mt-20">
      <div className="bg-[#0C304A] md:px-10 px-4 md:py-20 py-8  rounded-xl text-center text-white max-w-6xl mx-auto">
        <Image
          src="/assets/images/brand-logo.webp"
          alt="Brand logo"
          width={300}
          sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
          height={100}
          className="md:block hidden mx-auto pb-6"
        />
        <Image
          src="/assets/images/brand-logo.webp"
          alt="Brand logo"
          width={250}
          height={100}
          sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
          className="md:hidden block mx-auto pb-6"
        />
        <Typography
          variant="h2"
          className="max-w-xl mx-auto pb-6 md:text-4xl text-2xl "
        >
          The Story Of How I Became The Marketer I Am Today.
        </Typography>
        <Typography className="max-w-lg mx-auto">
          I can think of three good reasons why I am here. One, I love
          marketing. Two, I love people. Three, a combination of these two means
          I am great at getting you customers. I love that too.
        </Typography>
      </div>
    </div>
  );
};

export default StoryOfMarketer;
