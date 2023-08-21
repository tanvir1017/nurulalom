"use client";

import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const MarketingAdvisorPlan = () => {
  return (
    <section className="md:container px-0.5 my-20">
      <div className="max-w-6xl mx-auto">
        <div className=" bg-[#F0F7FB]">
          <div
            className="flex flex-col-reverse md:grid md:grid-cols-2 place-items-center"
            style={{
              justifyItems: "end",
            }}
          >
            <div className="md:p-10 p-5">
              <div className="mb-6">
                <Typography variant="h2" className="text-2xl md:text-4xl">
                  <TextColor>Marketing Advisor Plan:</TextColor>
                </Typography>
              </div>

              <div className="mt-6">
                <ul className="my-6">
                  <li>
                    <strong>Time:</strong> Weekly 2 Hours Meeting
                  </li>{" "}
                  <li>
                    <strong>Investment:</strong> 50,000 Taka
                  </li>{" "}
                  <li>
                    <strong>Frequency:</strong> Monthly Retainer (Minimum 3
                    Months)
                  </li>
                </ul>
                <Typography className="mb-6">
                  Get yourself a CMO at the fraction of the cost. I am an Ex-CMO
                  & Ex-CEO turned into a consultant with more than 14+ years of
                  experience. Here is whats included:
                </Typography>
                <ul className="mt-6 space-y-3">
                  <li className="">
                    {" "}
                    <ArrowRightIcon
                      strokeWidth={3.5}
                      className="h-5 w-5 text-blue-500 mr-3 inline-flex"
                    />{" "}
                    <strong>Hiring & Training Team</strong>: Build team that
                    delivers.
                  </li>
                  <li className="">
                    {" "}
                    <ArrowRightIcon
                      strokeWidth={3.5}
                      className="h-5 w-5 text-blue-500 mr-3 inline-flex"
                    />{" "}
                    <strong> Marketing Strategy</strong>: Know The best path to
                    success.
                  </li>
                  <li className="">
                    {" "}
                    <ArrowRightIcon
                      strokeWidth={3.5}
                      className="h-5 w-5 text-blue-500 mr-3 inline-flex"
                    />{" "}
                    <strong>Marketing Audit</strong>: Find & Fix Mistakes.
                  </li>{" "}
                  <li className="">
                    {" "}
                    <ArrowRightIcon
                      strokeWidth={3.5}
                      className="h-5 w-5 text-blue-500 mr-3 inline-flex"
                    />{" "}
                    <strong>Marketing Templates</strong>: Years of knowledge.
                  </li>{" "}
                  <li className="">
                    {" "}
                    <ArrowRightIcon
                      strokeWidth={3.5}
                      className="h-5 w-5 text-blue-500 mr-3 inline-flex"
                    />{" "}
                    <strong>WhatsApp 1-to-1 Access</strong>: Anytime for quick
                    feedback.
                  </li>{" "}
                </ul>

                <div className="mt-12">
                  <DefaultButton>
                    Book for consultation{" "}
                    <ArrowRightIcon className={` h-5 w-5 ml-3 inline`} />
                  </DefaultButton>
                </div>
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
      </div>
    </section>
  );
};

export default MarketingAdvisorPlan;
