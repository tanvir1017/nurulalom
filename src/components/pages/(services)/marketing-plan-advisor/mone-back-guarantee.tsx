"use client";
import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const MoneyBackGuarantee = () => {
  return (
    <section className="bg-[#F3F7FB] md:px-10 px-4 md:py-24 py-14">
      <div className="md:container ">
        <div className="grid md:grid-cols-2 gap-5 place-items-center max-w-5xl mx-auto">
          <div>
            <Typography variant="h3">
              <TextColor>100% Money-Back Guarantee</TextColor>
            </Typography>
            <p className="py-6">
              <TextColor>
                If within the <strong>2nd week</strong>, it appears that we are
                not fit for each other, I will return the full amount deposited.
                No questions asked. Why take the money if I can't help you.
                Request Consultation
              </TextColor>
            </p>
            <div className="pt-10 md:block hidden">
              <DefaultButton>
                Request Consultation{" "}
                <ArrowRightIcon
                  strokeWidth={2.5}
                  className={`h-5 w-5 transition-transform ml-3 inline-flex`}
                />
              </DefaultButton>
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/marketing-advisor/money-back-guarantee.svg"
              alt="money back guarantee illustration"
              width={300}
              height={100}
            />

            <DefaultButton className="md:hidden block md:mt-0 mt-7">
              Request Consultation{" "}
              <ArrowRightIcon
                strokeWidth={2.5}
                className={`h-5 w-5 transition-transform ml-3 inline-flex`}
              />
            </DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyBackGuarantee;
