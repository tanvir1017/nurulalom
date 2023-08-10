"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const PastExperience2 = () => {
  return (
    <div className="container mt-16">
      <Image
        src="/assets/images/about/grameenphone-accelerator-nazmul-ahmed.jpg"
        alt="Past experience big image"
        width={1150}
        height={100}
        className="block mx-auto"
      />

      <div className="mt-16 px-32">
        <p className="font-extrabold text-gray-500 pb-6">Past Experience</p>
        <div className="relative overflow-hidden flex items-center pb-4">
          <div className="w-[3px] h-20 bg-blue-500 mr-10"></div>
          <Typography variant="h2" className="max-w-2xl font-extrabold">
            <TextColor>Former Founder & CEO</TextColor>
          </Typography>
        </div>
        <Typography variant="lead" className="pb-6">
          <TextColor>Ennovision Ltd & LLC</TextColor>
        </Typography>
        <div className="space-y-6">
          <Typography>
            My dream venture was a user experience design company that went by
            the name Ennovision. It was the craziest experience I ever had. So
            much to do and no one to mentor me. Get Co-founders. Hire Employees.
            Come up with new products. Keep Selling. Market the heck out of your
            products. Build the brand. Build something that customers really
            want. Did I mention I had to keep selling?
          </Typography>
          <Typography variant="lead">
            More than me building Ennovision into a business, it was the company
            that built a founder out of me.
          </Typography>{" "}
          <Typography>
            I had a first-hand insight into the endless pile of responsibilities
            a CEO has to deal with, the first and foremost to bring customers,
            and the last but not the least, still bringing more customers! And
            even before I closed it down, I knew what I wanted to do next.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PastExperience2;
