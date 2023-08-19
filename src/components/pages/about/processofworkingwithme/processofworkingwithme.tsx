"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import ProcessOfWorkingWithMeCard from "./processofworkingwithmecard";

const ProcessOfWorkingWithMe = () => {
  return (
    <div className="container mt-24">
      <Typography
        variant="h2"
        className="text-center pb-6 text-2xl md:text-4xl"
      >
        <TextColor>Process Of Working With Me</TextColor>
      </Typography>
      <Typography className="text-center max-w-md mx-auto">
        The steps that I take to start bringing the desired outcomes are very
        crucial and I believe this is where it gets me the most success.
      </Typography>

      <ProcessOfWorkingWithMeCard />
    </div>
  );
};

export default ProcessOfWorkingWithMe;
