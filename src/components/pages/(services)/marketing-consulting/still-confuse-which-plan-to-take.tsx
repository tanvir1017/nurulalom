"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { PiScalesLight } from "react-icons/pi";

const StillConfuseWhichPlanToTake = () => {
  return (
    <div className="md:bg-[url('/assets/images/marketing-consulting/Still_not_sure_Decor.svg')] md:bg-cover md:bg-no-repeat md:p-40 p-4 md:mb-0 mb-16">
      <div className="max-w-4xl mx-auto text-center shadow-xl px-8 py-20 bg-white">
        <Image
          src="/assets/images/fev-icon-small.png.webp"
          alt="author image"
          width={120}
          height={100}
          className="rounded-full mx-auto"
        />
        <h2 className="text-center md:text-4xl font-bold text-2xl py-6 max-w-xl mx-auto">
          <TextColor>Still Confused Which Plan To Take?</TextColor>
        </h2>
        <p className="pb-8">
          Let me help you guide through all the packages and benefits so that
          you can decide.
        </p>
        <Button
          color="blue"
          className="rounded-full md:py-4 py-2 px-10"
          variant="outlined"
        >
          Compare Prices{" "}
          <PiScalesLight
            className="w-6 h-6 text-blue-500 inline-flex ml-3"
            strokeWidth={3.5}
          />
        </Button>
      </div>
    </div>
  );
};

export default StillConfuseWhichPlanToTake;
