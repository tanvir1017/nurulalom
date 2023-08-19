"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const WhoShouldHire = () => {
  return (
    <section className="md:container px-5">
      <div className="max-w-fit mx-auto text-center space-y-5">
        <Typography variant="h4" className="text-blue-500 md:text-xl text-lg">
          Who Should You Hire?
        </Typography>
        <Typography
          variant="h2"
          className="md:text-4xl text-2xl font-extrabold md:font-bold"
        >
          <TextColor>Fractional CMO VS Full-Time CMO</TextColor>
        </Typography>
        <Typography className="">
          The good news: No need to hire an $7K/ month CMO. Let's work together
          and I will prove the power of outbound marketing.
        </Typography>
      </div>
      <div className="my-28">
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
          <div className="shadow border-gray-400 md:p-10 p-6">
            <Image
              src="/assets/images/part-time-cmo/Najm-consultant-working.svg"
              alt="Najm consultant working illustration"
              width={450}
              height={100}
              className="mx-auto"
            />
            <div className="py-12">
              <Typography variant="h3" className="md:text-3xl text-xl">
                <TextColor>Najm - Your Fractional CMO</TextColor>
              </Typography>
              <div className="mt-8 space-y-5">
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/lets-start.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>Lets start tomorrow!</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/Video.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>Proof of success on video</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/hand-on-love.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>Ex-Founder so I know YOUR pain</p>
                </div>{" "}
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/no-extra-charge.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>Only consulting fee. No extra charges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow md:p-10 p-6 bg-[#F0F7FB]">
            <Image
              src="/assets/images/part-time-cmo/full-time-cmo.svg"
              alt="Najm consultant working illustration"
              width={450}
              height={100}
              className="mx-auto"
            />
            <div className="py-12">
              <Typography variant="h3" className="md:text-3xl text-xl">
                <TextColor>$10K Regular Full Time CMO</TextColor>
              </Typography>
              <div className="mt-8 space-y-5">
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/calendar.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>Needs 2 months notice to leave the previous job</p>
                </div>{" "}
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/dislike.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>No experience as Founder</p>
                </div>{" "}
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/brand.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>Keeps branding 1st, lead gen 2nd</p>
                </div>{" "}
                <div className="flex items-center">
                  <Image
                    src="/assets/images/part-time-cmo/car.svg"
                    alt="Najm consultant working illustration"
                    width={30}
                    height={30}
                    className="mr-3"
                  />
                  <p>Needs a car, laptop, and other investments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldHire;
