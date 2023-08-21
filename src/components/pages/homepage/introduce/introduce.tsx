// @ts-nocheck
"use client";
import { TextColor } from "@/lib/customColorFunc";
import FiveStarRating from "@/shared/five-star-rating";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

const Introduce = () => {
  return (
    <section className="container mt-20">
      <div className="grid md:grid-cols-5 grid-cols-1 place-items-center md:px-20">
        <div className="col-span-3 md:order-1 order-2">
          <div className="pb-4">
            <Typography variant="h5" className="text-base md:text-2xl">
              Hi There!
            </Typography>
          </div>
          <div className="pb-6">
            <Typography
              variant="h1"
              className="text-base md:text-5xl md:leading-[3.5rem]"
            >
              <TextColor>
                My Name Is Najm & I&#39;m Your <br /> Digital Marketing
                Consultant
              </TextColor>
            </Typography>
          </div>
          <div className="md:pb-12">
            <p>
              As a <strong>fractional CMO</strong>, I help companies build
              marketing departments that are highly <br /> effective at
              generating quality <strong>leads</strong> and converting them into
              <strong>clients</strong>.
            </p>
          </div>
          <div className="flex items-center justify-start mt-5 pb-6">
            <Image
              className="-ml-10 -mt-9 hidden md:block"
              src="https://res.cloudinary.com/djbcnjkin/image/upload/v1690994194/xtxfow6u2ozsmafu8prb.webp"
              alt="Arrow indicate to explore growth plans!"
              height={80}
              width={80}
            />
            <Button
              className="mx-auto md:mx-0    py-4 rounded-full bg-[#0C304A] text-xs  md:ml-5 md:mt-5 shadow-lg hover:scale-110 duration-300"
              size="lg"
            >
              Explore Growth Plans!
            </Button>
          </div>
          <div className="flex items-center justify-start">
            <Typography>50+ Reviews by founders </Typography>
            <span className="ml-3 flex items-center">
              <FiveStarRating />
            </span>
          </div>
        </div>
        <div className="col-span-2 md:order-2 order-1">
          <Image
            className="rounded-2xl hidden md:block"
            priority
            src="/assets/images/digital-marketing-consultant-meeting.webp"
            alt=""
            height={100}
            width={350}
          />
          <Image
            className="block mb-5 md:hidden md:mb-0 "
            priority
            src="/assets/images/startup-marketing-consultant/3-hour-wide.jpg.webp"
            alt=""
            height={100}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
