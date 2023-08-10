"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const ExpertMarketingExecution = () => {
  return (
    <section className="mt-16">
      <div className="container ">
        <div className="max-w-2xl mx-auto text-center">
          <Typography variant="h2">
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
              className="rounded-xl"
              width="820"
              height="462"
              src="https://www.youtube.com/embed/sQuacEHjSlQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertMarketingExecution;
