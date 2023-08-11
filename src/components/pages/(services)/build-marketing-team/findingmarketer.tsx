"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const FindingMarketer = () => {
  return (
    <section className="container mt-20">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="pb-6 text-4xl font-bold">
          <TextColor>
            It's Not About Finding A Marketer, It's About Creating A Marketing
            Department.
          </TextColor>
        </h2>
        <Typography className="pb-6">
          A team solely committed to your project, maximizing efficiency and
          focus.
        </Typography>
      </div>
    </section>
  );
};

export default FindingMarketer;
