"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const PastExperience = () => {
  return (
    <div className="container mt-16">
      <Image
        src="/assets/images/about/najm-marketing-consulting-2020.jpg.webp"
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
            <TextColor>
              Former CMO Of Several Prominent Global Tech Companies
            </TextColor>
          </Typography>
        </div>
        <Typography variant="lead" className="pb-6">
          <TextColor>
            Brain Station 23, Experience Bangladesh, Southtech Etc.
          </TextColor>
        </Typography>
        <Typography>
          My experience in digital marketing and being able to run large
          marketing departments was largely shaped by the companies were I
          worked for many years. My journey through the intricate landscape of
          multinational corporations has provided me with a unique perspective
          on driving growth, building brand awareness, and fostering customer
          loyalty in today’s fiercely competitive global market.
        </Typography>
      </div>
    </div>
  );
};

export default PastExperience;
