"use client";

import DefaultButton from "@/shared/button/default-button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const MeetYOurDigitalConsultantNAJM = () => {
  return (
    <section className="md:container md:my-20 md:px-32 px-0.5">
      <div className="">
        <div
          className="flex flex-col-reverse md:grid md:grid-cols-2 md:place-items-center"
          style={{
            justifyItems: "end",
          }}
        >
          <div className="md:p-10 p-3">
            <div className="mb-6">
              <Typography variant="h2" className="text-2xl md:text-4xl">
                Meet Your Digital Consultant - Najm
              </Typography>
            </div>

            <div className="mt-6">
              <Typography className="mb-6">
                I believe small businesses should thrive as much as the large
                businesses. You just need to do it different by marketing hacks.
              </Typography>
              <Typography className="mb-6">
                By using your own resources as much as possible & by taking
                advantage of the free and less expensive tools provided by large
                enterprises.
              </Typography>{" "}
              <Typography className="mb-6">
                I m an Ex-CMO & Ex-CEO turned into a consultant with more than
                13+ years of experience. Get in touch today!
              </Typography>
              <div className="mt-12">
                <DefaultButton className="md:py-4 py-3">
                  Book for consultation{" "}
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
      </div>
    </section>
  );
};

export default MeetYOurDigitalConsultantNAJM;
