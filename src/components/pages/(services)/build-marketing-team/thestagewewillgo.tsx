"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const TheStageWeWillGo = () => {
  return (
    <section className="bg-[#F0F7FB] p-10">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <Typography variant="h2" className="pb-6">
            <TextColor>
              The <span className="text-blue-500">Stages</span> We Will Go
              Through Together To Build Your Marketing Team
            </TextColor>
          </Typography>
          <Typography className="pb-6">
            I work closely with you to create a customized blueprint for your
            ideal marketing department. We identify your business goals, target
            audience, and industry specifics to build a tailored plan that will
            serve as the foundation of your team.
          </Typography>
        </div>
        <div className="max-w-fit mx-auto py-14">
          <Image
            className="rounded-lg"
            src="/assets/images/build-marketing-team/process-team-hiring.png"
            alt="process team hiring picture"
            width={900}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default TheStageWeWillGo;
