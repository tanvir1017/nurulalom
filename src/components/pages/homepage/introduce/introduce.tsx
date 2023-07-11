// @ts-nocheck
"use client";
import { TextColor } from "@/lib/customColorFunc";
import { StarIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

const Introduce = () => {
  return (
    <section className="container mt-20">
      <div className="grid grid-cols-5 place-items-center px-20">
        <div className="col-span-3">
          <div className="pb-4">
            <Typography variant="h5">Hi There!</Typography>
          </div>
          <div className="pb-6">
            <Typography variant="h1">
              <TextColor>
                <span className="font-bold">
                  My Name Is Najm & I&#39;m Your <br /> Digital Marketing
                  Consultant
                </span>
              </TextColor>
            </Typography>
          </div>
          <div className="pb-12">
            <p>
              As a <strong>fractional CMO</strong>, I help companies build
              marketing departments that are highly <br /> effective at
              generating quality <strong>leads</strong> and converting them into
              <strong>clients</strong>.
            </p>
          </div>
          <div className="flex items-center justify-start mt-5 pb-6">
            <Image
              className="-ml-10 -mt-9"
              src="/assets/images/big_arrow.webp"
              alt="Arrow indicate to explore growth plans!"
              height={80}
              width={80}
            />
            <Button
              className="py-4 rounded-full bg-[#0C304A] text-xs  ml-5 mt-5 shadow-lg hover:scale-110 duration-300"
              size="lg"
            >
              Explore Growth Plans!
            </Button>
          </div>
          <div className="flex items-center justify-start">
            <Typography>50+ Reviews by founders </Typography>
            <span className="ml-3 flex items-center">
              {[...Array(5).keys()].map((_, i) => (
                <div key={i}>
                  <StarIcon
                    strokeWidth={2.5}
                    fill="#F0AD4E"
                    className={`h-5 w-5 transition-transform  text-orange-300`}
                  />
                </div>
              ))}
            </span>
          </div>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-2xl"
            priority
            src="/assets/images/digital-marketing-consultant-meeting.webp"
            alt=""
            height={500}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
