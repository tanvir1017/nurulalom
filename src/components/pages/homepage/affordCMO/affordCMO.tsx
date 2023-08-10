"use client";
import CmoCard from "@/components/materialtailwind/cmocard";
import { cmoCardData } from "@/data/cmocarddata";
import { TextColor } from "@/lib/customColorFunc";
import { CmoCardDataType } from "@/types/globaltypes";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";

const AffordCMO = () => {
  const [filterByCG, setFilterByCG] = useState<string>("small");

  return (
    <section className="container my-14">
      <div className="text-center">
        <div className="pb-6">
          <TextColor>
            <Typography variant="h2">
              Can&#39;t Afford A Top-Of-The Line CMO? <br /> Now You Can.
            </Typography>
          </TextColor>
        </div>
        <div className="max-w-2xl mx-auto pb-6">
          <Typography>
            Whether you want a CMO or just someone to take your startup to the
            desired level, I can help you revolutionize your digital marketing
            strategy and marketing goals like no other.
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          SELECT YOUR COMPANY SIZE
        </Typography>

        <div className="pt-5">
          <Image
            className="block mx-auto rotate-45"
            src="https://res.cloudinary.com/djbcnjkin/image/upload/v1690994194/xtxfow6u2ozsmafu8prb.webp"
            alt="arrow indicate two options small company or mid size company"
            height={80}
            width={80}
          />
        </div>
        <div className="pt-6 space-x-4">
          <Button
            variant={filterByCG === "small" ? "filled" : "outlined"}
            className="text-sm py-4 rounded-full font-light"
            onClick={() => setFilterByCG("small")}
          >
            Small Company
          </Button>
          <Button
            variant={filterByCG === "mid" ? "filled" : "outlined"}
            className="text-sm py-4 rounded-full font-light"
            onClick={() => setFilterByCG("mid")}
          >
            Mid-Size Company
          </Button>
        </div>
      </div>

      <div
        className={`grid ${
          filterByCG !== "mid" ? "grid-cols-4" : "grid-cols-3"
        } gap-3  mt-10`}
      >
        {cmoCardData
          .filter((item) => item.category === filterByCG)
          .map((item: CmoCardDataType, i: number) => (
            <CmoCard key={i} item={item} />
          ))}
      </div>
    </section>
  );
};

export default AffordCMO;
