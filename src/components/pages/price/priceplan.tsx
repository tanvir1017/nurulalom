"use client";

import { PricePlanTable } from "@/components/materialtailwind/priceplantable";
import { TextColor } from "@/lib/customColorFunc";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

const PricePlan = () => {
  const [filterByCG, setFilterByCG] = useState<string>("small");
  return (
    <section className="container bg-[url('/assets/images/home-banner-bg.svg')] bg-no-repeat bg-cover">
      <div className="max-w-xl mx-auto">
        <h1 className="font-bold pb-6 mt-16 md:text-5xl text-2xl text-center leading-tight">
          <TextColor>Monthly Retainers For Companies Of All Sizes</TextColor>
        </h1>
      </div>
      <div className="max-w-2xl mx-auto">
        <p className="text-center">
          I provide monthly marketing consulting services on an ongoing retainer
          basis. You pay a set fee each month for our advice or execution
          depending on the consulting plan you select.
        </p>
        <h5 className="text-center mt-6 font-semibold hidden">
          <TextColor>SELECT YOUR COMPANY SIZE</TextColor>
        </h5>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="pt-5">
          <Image
            className="block mx-auto rotate-45"
            src="https://res.cloudinary.com/djbcnjkin/image/upload/v1690994194/xtxfow6u2ozsmafu8prb.webp"
            alt="arrow indicate two options small company or mid size company"
            height={60}
            width={60}
          />
        </div>
        <div className="pt-6 flex items-center justify-center space-x-5">
          <Button
            variant={filterByCG === "mid" ? "filled" : "outlined"}
            className="md:text-sm text-xs md:py-4 py-2 rounded-full font-light"
            onClick={() => setFilterByCG("mid")}
          >
            Mid-Size Company
          </Button>
          <Button
            variant={filterByCG === "small" ? "filled" : "outlined"}
            className="md:text-sm text-xs md:py-4 py-2 rounded-full font-light"
            onClick={() => setFilterByCG("small")}
          >
            Small Company
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16">
        <PricePlanTable companySize={filterByCG} />
      </div>
    </section>
  );
};

export default PricePlan;
