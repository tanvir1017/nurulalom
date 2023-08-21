"use client";

import DefaultButton from "@/shared/button/default-button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const MeetYOurDigitalConsultantNAJMForDMSC = () => {
  return (
    <section className="md:container px-0.5 my-20 md:px-32">
      <div
        className="flex flex-col-reverse md:grid md:grid-cols-2 md:place-items-center"
        style={{
          justifyItems: "end",
        }}
      >
        <div className="md:p-10 p-5">
          <div className="mb-6">
            <Typography variant="h2" className="text-2xl md:text-4xl">
              Meet Your Digital Consultant - Najm
            </Typography>
          </div>

          <div className="mt-6">
            <Typography className="mb-6">
              I am a consultant with a proven track record in doubling
              customers. I have been working with businesses like yours for the
              last 13 years and I work diligently to learn how to get more
              customers.
            </Typography>
            <Typography className="mb-6">
              I even had my own startup for 3 years (Ennovision LLC & LTD),
              which gives me the advantage of thinking like a founder.
            </Typography>{" "}
            <p className="mb-6">
              <b>
                Still Not Sure If This Is Good For You? Let’s Just Talk & Figure
                Out How To Increase Your Revenue.
              </b>
            </p>
            <div className="mt-12">
              <DefaultButton className="md:py-4 py-3">
                Book a meeting{" "}
                <ArrowRightIcon className={` h-5 w-5 ml-3 inline`} />
              </DefaultButton>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src="/assets/images/najm-consultant-at-work.jpg.webp"
            alt="Najm Digital consultant of your business"
            width={500}
            height={100}
            className="md:rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetYOurDigitalConsultantNAJMForDMSC;
