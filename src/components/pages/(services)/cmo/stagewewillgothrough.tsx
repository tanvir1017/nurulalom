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
      <section className="mt-16 bg-[#F0F7FB] px-6 py-12">
        <div className="container">
          <div className="text-center mx-auto max-w-2xl space-y-6">
            <Typography variant="h2">
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
              // className="mx-auto"
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
