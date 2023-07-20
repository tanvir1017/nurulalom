"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const Certificate = () => {
  return (
    <div className="container">
      <div className="mt-16">
        <Typography variant="h2" className="max-w-xl text-center mx-auto pb-6">
          <TextColor>
            Nazmul Ahmed Aka Najm's Marketing Certifications
          </TextColor>
        </Typography>

        <Typography className="max-w-2xl text-center mx-auto">
          It took years to get where I am because I learned digital marketing by
          studying and then executing every aspect of it. From market research
          to running Facebook ads, I did it all to be a master 360 expert in
          digital marketing.
        </Typography>

        <div className="flex items-center justify-center space-x-12 py-16 ">
          {[
            "/assets/images/certificate/hubspot.png",
            "/assets/images/certificate/customer-aquisition-specialist.png.webp",
            "/assets/images/certificate/hubspot1.png",
            "/assets/images/certificate/hubspot2.png",
          ].map((item: string, key: number) => (
            <div key={key}>
              <Image
                src={item}
                alt="certified brand images"
                width={key !== 1 ? 220 : 150}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
