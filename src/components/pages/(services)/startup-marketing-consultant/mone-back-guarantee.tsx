"use client";
import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const HundredPercentMoneyBackGuarantee = () => {
  return (
    <section className="bg-[#F3F7FB] md:px-10 px-5 py-24">
      <div className="md:container ">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 md:place-items-center max-w-5xl mx-auto">
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
            <div className="pt-10 pb-5">
              <DefaultButton className="md:py-4 py-3">
                Request Consultation{" "}
                <ArrowRightIcon
                  strokeWidth={2.5}
                  className={`h-5 w-5 transition-transform ml-3 inline-flex`}
                />
              </DefaultButton>
            </div>

            <Typography>
              <TextColor>*Total only 5 slots.</TextColor>
            </Typography>
          </div>
          <div>
            <Image
              src="/assets/images/marketing-advisor/money-back-guarantee.svg"
              alt="money back guarantee illustration"
              width={300}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HundredPercentMoneyBackGuarantee;
