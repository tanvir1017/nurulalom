"use client";

import { TextColor } from "@/lib/customColorFunc";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

const MeetYourFractionalCMO = () => {
  return (
    <section className="container  my-20 px-32">
      <div className=" bg-[#F0F7FB]">
        <div
          className="grid grid-cols-2 place-items-center"
          style={{
            justifyItems: "end",
          }}
        >
          <div className="p-10">
            <div className="mb-6">
              <Typography variant="h2">
                <TextColor>
                  Meet Your Fractional CMO - Nazmul Ahmed (Najm)
                </TextColor>
              </Typography>
            </div>

            <div className="mb-6">
              <Typography>
                As a former founder and seasoned marketer, I understand the
                unique challenges and pain points that business owners face –
                and I’m here to help you overcome them.
              </Typography>
            </div>
            <hr className="border-b-black border" />

            <div className="mt-6">
              <Typography variant="h4">
                <TextColor>
                  Why Work With <span className="text-blue-500">Me</span>?
                </TextColor>
              </Typography>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  {" "}
                  <ArrowRightIcon
                    strokeWidth={3.5}
                    className="h-3 w-3 text-blue-500 mr-3"
                  />{" "}
                  Former CMO of 700+ employee tech company
                </li>
                <li className="flex items-center">
                  {" "}
                  <ArrowRightIcon
                    strokeWidth={3.5}
                    className="h-3 w-3 text-blue-500 mr-3"
                  />{" "}
                  Former CEO of a web design company in Austin, TX.
                </li>
                <li className="flex items-center">
                  {" "}
                  <ArrowRightIcon
                    strokeWidth={3.5}
                    className="h-3 w-3 text-blue-500 mr-3"
                  />{" "}
                  Been building marketing teams for the past 7+ years.
                </li>{" "}
                <li className="flex items-center">
                  {" "}
                  <ArrowRightIcon
                    strokeWidth={3.5}
                    className="h-3 w-3 text-blue-500 mr-3"
                  />{" "}
                  I'm a practitioner who executes marketing every day.
                </li>{" "}
                <li className="flex items-center">
                  {" "}
                  <ArrowRightIcon
                    strokeWidth={3.5}
                    className="h-3 w-3 text-blue-500 mr-3"
                  />{" "}
                  Certified marketer by Australian Marketing Institute, HubSpot
                  & DigitalMarketer
                </li>
              </ul>

              <Button
                className="py-3 rounded-full bg-blue-500 text-xs hover:shadow-none shadow-none flex items-center mt-12 "
                size="lg"
              >
                Book a Meting{" "}
                <ArrowRightIcon
                  strokeWidth={2.5}
                  className={` h-3 w-3 transition-transform ml-3`}
                />
              </Button>
            </div>
          </div>

          <div className="">
            <Image
              src="/assets/images/najm-consultant-at-work.jpg.webp"
              alt=""
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourFractionalCMO;
