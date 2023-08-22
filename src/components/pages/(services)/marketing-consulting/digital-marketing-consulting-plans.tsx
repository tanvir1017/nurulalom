"use client";
import CmoCard from "@/components/materialtailwind/cmocard";
import { cmoCardData } from "@/data/cmocarddata";
import { TextColor } from "@/lib/customColorFunc";
import { cn } from "@/lib/utils";
import { CmoCardDataType } from "@/types/globaltypes";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

const DigitalMarketingConsultingPlans = () => {
  const [filterByCG, setFilterByCG] = useState<string>("small");
  return (
    <section className="bg-[#F3F7FB] md:p-10 py-6 ">
      <div className="md:container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="md:text-5xl text-3xl font-bold md:py-6 pb-8">
            <TextColor>Digital Marketing Consulting Plans</TextColor>
          </h1>
          <p>
            I work with you and your team <b>every week</b> to take your
            marketing to the next level. I give fixed hours to each of my
            clients. E.g. For a monthly <b>40-hours</b> plan, I will give{" "}
            <b>10 hours</b> every week.
          </p>
          <h5 className="my-5">SELECT YOUR COMPANY SIZE</h5>
          <div className="pt-5">
            <Image
              className=" mx-auto rotate-45"
              src="/assets/images/arrow.svg"
              alt="arrow indicate two options small company or mid size company"
              height={80}
              width={80}
            />
          </div>
        </div>

        <div className="flex items-center justify-center pt-6 md:space-x-4 space-x-2 ">
          <Button
            variant={filterByCG === "small" ? "filled" : "outlined"}
            className="md:text-sm text-xs  md:py-4 rounded-full  font-light normal-case"
            onClick={() => setFilterByCG("small")}
            color="blue"
          >
            Small Company
          </Button>
          <Button
            variant={filterByCG === "mid" ? "filled" : "outlined"}
            className="md:text-sm text-xs  md:py-4 rounded-full  font-light normal-case"
            onClick={() => setFilterByCG("mid")}
            color="blue"
          >
            Mid-Size Company
          </Button>
        </div>
        <div
          className={cn(`mx-auto`, {
            "max-w-5xl": filterByCG !== "small",
            "max-w-7xl": filterByCG !== "mid",
          })}
        >
          <div
            className={`grid ${
              filterByCG !== "mid"
                ? "grid-cols-1 md:grid-cols-4"
                : "grid-cols-1 md:grid-cols-3"
            } gap-3  mt-10`}
          >
            {cmoCardData
              .filter((item) => item.category === filterByCG)
              .map((item: CmoCardDataType, i: number) => (
                <CmoCard key={i} item={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingConsultingPlans;
