"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const WantMeAsYourCmo = () => {
  return (
    <section className="bg-gradient-to-l to-blue-100   from-white p-40">
      <div className="container">
        <div className="max-w-fit mx-auto text-center">
          <Image
            src="/assets/images/part-time-cmo/fev-icon.png.webp"
            alt="fev-icon-small"
            width={200}
            height={200}
            className="rounded-full mx-auto "
          />
          <div className="space-y-5 pt-6">
            <Typography variant="h2">
              <TextColor>Want Me As Your Next CMO?</TextColor>
            </Typography>
            <Typography variant="h5">
              <TextColor>
                There's No Harm In Talking. Book A Meeting Today!
              </TextColor>
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WantMeAsYourCmo;
