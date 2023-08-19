"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const AboutHeading = () => {
  return (
    <section className="lg:bg-[url('/assets/images/bungee-jumping-nazmul-ahmed-du.jpg.webp')] lg:p-64 md:p-48 bg-cover bg-center bg-no-repeat md:flex md:justify-end">
      <Image
        className="lg:hidden block mx-auto"
        src="/assets/images/bungee-jumping-nazmul-ahmed-du.jpg.webp"
        alt="bungee-jumping-nazmul-ahmed-du"
        width={1000}
        height={100}
      />
      <div className="bg-white md:px-7 px-3 md:py-10 py-5 md:max-w-xs">
        <Typography
          variant="h1"
          className="md:text-5xl text-2xl font-black md:font-bold md:pb-6 pb-2"
        >
          <TextColor>
            Najm <br className="md:block hidden" /> Consultant
          </TextColor>
        </Typography>
        <Typography variant="h6" className="text-blue-400 md:pb-6 pb-1">
          Take A Leap Of Faith
        </Typography>
        <Typography>
          “You can replace everything in your company. But one thing you can't
          replace is your clients. You ALWAYS need clients, doesn't matter what
          business you are in.”
        </Typography>
      </div>
    </section>
  );
};

export default AboutHeading;
