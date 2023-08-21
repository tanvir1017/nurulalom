"use client";

import DefaultButton from "@/shared/button/default-button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const MeetYOurDigitalConsultantNAJMForDMSC = () => {
  return (
    <section className="container  my-20 px-32">
      <div className="">
        <div
          className="grid grid-cols-2 place-items-center"
          style={{
            justifyItems: "end",
          }}
        >
          <div className="p-10">
            <div className="mb-6">
              <Typography variant="h2">
                Meet Your Digital Consultant - Najm
              </Typography>
            </div>

            <div className="mt-6">
              <Typography className="mb-6">
                I am a consultant with a proven track record in doubling
                customers. I have been working with businesses like yours for
                the last 13 years and I work diligently to learn how to get more
                customers.
              </Typography>
              <Typography className="mb-6">
                I even had my own startup for 3 years (Ennovision LLC & LTD),
                which gives me the advantage of thinking like a founder.
              </Typography>{" "}
              <p className="mb-6">
                <b>
                  Still Not Sure If This Is Good For You? Let’s Just Talk &
                  Figure Out How To Increase Your Revenue.
                </b>
              </p>
              <div className="mt-12">
                <DefaultButton>
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
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYOurDigitalConsultantNAJMForDMSC;
