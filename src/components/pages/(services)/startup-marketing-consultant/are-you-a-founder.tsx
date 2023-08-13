"use client";
import StruggleFace from "@/icons/part-time-cmo/struggleface";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const reasonOfYourLowStrengthsInMarketing: string[] = [
  "You are following NO tactics. No real goal to achieve or no proper plan on how to get there.",
  "Have a Facebook page. No website. Red flag! You are not building a sustainable business.",
  "So many things in marketing, no idea where to even start.",
  "One day you are boosting the Facebook post, and another day you are THINKING about emailing all the prospects.",
];

const AreYouAFounderButMarketingIsNotOneOfYourStrengths = () => {
  return (
    <section className="bg-[#F0F7FB] px-10 py-28">
      <div className="max-w-lg mx-auto ">
        <div className="bg-white shadow-lg px-6 py-10 rounded-sm">
          <Typography variant="h2">
            <TextColor>
              Are You A <span className="text-blue-500">Founder</span>? But
              Marketing Is NOT One Of Your Strengths.
            </TextColor>
          </Typography>

          <div className="space-y-5 mt-6">
            {reasonOfYourLowStrengthsInMarketing.map(
              (item: string, index: number) => (
                <div key={index} className="flex items-center">
                  <div className="inline-flex mr-4">
                    <StruggleFace />{" "}
                  </div>{" "}
                  <TextColor>{item}</TextColor>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreYouAFounderButMarketingIsNotOneOfYourStrengths;
