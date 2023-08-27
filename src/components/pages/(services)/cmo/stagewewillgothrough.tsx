"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Stage1 from "./(stages)/stage1";
import Stage2 from "./(stages)/stage2";
import Stage3 from "./(stages)/stage3";

const StageWeWillGoThrough = () => {
  return (
    <>
      <section className="md:mt-16 mt-8 bg-[#F0F7FB] md:px-6 md:py-12 py-8">
        <div className="md:container px-4">
          <div className="text-center mx-auto md:max-w-2xl space-y-6">
            <Typography
              id="how"
              variant="h2"
              className="md:text-4xl text-2xl font-extrabold"
            >
              <TextColor>
                The <span className="text-blue-500">Stages</span> We Will Go
                Through Together To Build Your Marketing Machine
              </TextColor>
            </Typography>
            <Typography>
              It's like starting a train - it takes time and effort to get it up
              and running, but once it starts moving, it becomes an unstoppable
              force.
            </Typography>
            <Typography>
              <TextColor>Founder Friendly | Execution Included</TextColor>
            </Typography>
          </div>
          <div className="max-w-fit mx-auto pt-6 pb-12">
            <Image
              src="/assets/images/part-time-cmo/process-fractional-cmo-2048x1355.png.webp"
              alt="process of fractional cmo picture"
              width={1100}
              height={794}
              // sizes="(min-width: 740px) 42.125rem, calc(95.48vw - 18px)"
            />
          </div>
        </div>
      </section>
      <Stage1 />
      <Stage2 />
      <Stage3 />
    </>
  );
};

export default StageWeWillGoThrough;
