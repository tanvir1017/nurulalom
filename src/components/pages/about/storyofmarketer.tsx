"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const StoryOfMarketer = () => {
  return (
    <div className="container mt-20">
      <div className="bg-[#0C304A] px-10 py-20  rounded-xl text-center text-white max-w-6xl mx-auto">
        <Image
          src="/assets/images/brand-logo.webp"
          alt="Brand logo"
          width={300}
          height={100}
          className="block mx-auto pb-6"
        />
        <Typography variant="h2" className="max-w-xl mx-auto pb-6">
          The Story Of How I Became The Marketer I Am Today.
        </Typography>
        <Typography variant="paragraph" className="max-w-lg mx-auto">
          I can think of three good reasons why I am here. One, I love
          marketing. Two, I love people. Three, a combination of these two means
          I am great at getting you customers. I love that too.
        </Typography>
      </div>
    </div>
  );
};

export default StoryOfMarketer;
