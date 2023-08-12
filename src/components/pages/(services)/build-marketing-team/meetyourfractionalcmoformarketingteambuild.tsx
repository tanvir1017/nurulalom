"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FaNetworkWired, FaRegCalendarAlt } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { IoContrastOutline } from "react-icons/io5";
import { MdArrowRightAlt } from "react-icons/md";

const MeetYourFractionalCMOForMarketingTeamBuild = () => {
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
              <Typography variant="h6" className="pb-6">
                <TextColor>
                  Why I Am The Right One To Build Your Team?
                </TextColor>
              </Typography>
              <Typography variant="h2">
                <TextColor>
                  Meet Your Fractional CMO - Nazmul Ahmed (Najm)
                </TextColor>
              </Typography>
              <hr className="border-b-black border my-8" />
            </div>

            <div className="mt-6">
              <Typography variant="h4" className="mb-6">
                <TextColor>
                  Why Work With <span className="text-blue-500">Me</span>?
                </TextColor>
              </Typography>
              <Typography className="mb-6">
                Team is yours even if you stop working with me. They get
                employed by you and paid by you. I just help build the marketing
                department & make sure it's running smoothly.
              </Typography>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center">
                  {" "}
                  <FaRegCalendarAlt
                    strokeWidth={3.5}
                    className="h-5 w-5 text-[#0C304A] mr-3"
                  />{" "}
                  Been building marketing teams for the past 7 years
                </li>
                <li className="flex items-center">
                  {" "}
                  <FaChalkboardUser
                    strokeWidth={3.5}
                    className="h-5 w-5 text-[#0C304A] mr-3"
                  />{" "}
                  Have my own marketing team so I know how this works
                </li>
                <li className="flex items-center">
                  {" "}
                  <FaNetworkWired
                    strokeWidth={3.5}
                    className="h-5 w-5 text-[#0C304A] mr-3"
                  />{" "}
                  Extremely good at hiring & training marketers and creators
                </li>{" "}
                <li className="flex items-center">
                  {" "}
                  <IoContrastOutline
                    strokeWidth={3.5}
                    className="h-5 w-5 text-[#0C304A] mr-3"
                  />{" "}
                  I put transparency and accountability 1st
                </li>{" "}
              </ul>

              <Button
                className="py-3 rounded-full bg-blue-500 text-xs hover:shadow-none shadow-none flex items-center mt-12 "
                size="lg"
              >
                Book a Meting <MdArrowRightAlt className={` h-5 w-5 ml-3`} />
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

export default MeetYourFractionalCMOForMarketingTeamBuild;
