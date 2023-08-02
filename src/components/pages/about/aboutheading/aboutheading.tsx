"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const AboutHeading = () => {
  return (
    <section className="lg:bg-[url('/assets/images/bungee-jumping-nazmul-ahmed-du.jpg.webp')] lg:p-64 md:p-48 bg-cover bg-center bg-no-repeat flex justify-end">
      <Image
        className="lg:hidden block mx-auto"
        src="/assets/images/bungee-jumping-nazmul-ahmed-du.jpg.webp"
        alt="bungee-jumping-nazmul-ahmed-du"
        width={1000}
        height={100}
      />
      <div className="bg-white px-7 py-10 max-w-xs">
        <div className="pb-6">
          <Typography variant="h1">
            <TextColor>
              Najm <br /> Consultant
            </TextColor>
          </Typography>
        </div>
        <div className="pb-6">
          <Typography variant="h6" className="text-blue-400">
            Take A Leap Of Faith
          </Typography>
        </div>
        <Typography variant="paragraph">
          “You can replace everything in your company. But one thing you can’t
          replace is your clients. You ALWAYS need clients, doesn’t matter what
          business you are in.”
        </Typography>
      </div>
    </section>
  );
};

export default AboutHeading;
