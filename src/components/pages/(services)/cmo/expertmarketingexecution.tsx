"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const ExpertMarketingExecution = () => {
  return (
    <section className="md:mt-16 mt-8 md:container px-5">
      <div className="max-w-3xl mx-auto text-center">
        <Typography
          variant="h2"
          className="md:text-4xl text-xl md:leading-[3.3rem] font-extrabold"
        >
          <TextColor>
            Expert Marketing <span className="text-blue-500">Execution</span>{" "}
            Without The Commitment And Cost Of A Full-Time CMO.
          </TextColor>
        </Typography>

        <Typography className="pt-6">
          You don't want a marketer; You want a marketing department. As your
          fractional Chief Marketing Officer, I am here to help you build and
          shape your marketing department.
        </Typography>
      </div>
      <div className="pt-6 pb-12">
        <div className="max-w-fit mx-auto">
          <iframe
            className="rounded-xl md:w-[51.25rem] md:h-[28.875rem] w-[20.875rem] h-[11.6875rem]"
            src="https://www.youtube.com/embed/sQuacEHjSlQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ExpertMarketingExecution;
