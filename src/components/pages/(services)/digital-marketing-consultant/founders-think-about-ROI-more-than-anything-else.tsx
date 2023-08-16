"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import FiveStarRating from "../../shared/five-star-rating";

const FoundersThinkAboutROIMoreThanAnythingElse = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] bg-[url('/assets/images/part-time-cmo/video-section-bg.svg')] bg-no-repeat bg-cover p-40">
        <div className="container">
          <div className="max-w-xl mx-auto text-center pb-6">
            <Typography variant="h2">
              <TextColor>
                Founders Think About ROI More Than Anything Else.
              </TextColor>
            </Typography>
          </div>
        </div>

        <div className="max-w-fit mx-auto ">
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/gIBgfT1lbB4"
            title="Sheba.xyz Co-founder Adnan I. Halim talks about Najm"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl"
          ></iframe>

          <div className="grid grid-cols-2 gap-5 pt-6">
            <iframe
              className="rounded-xl"
              width="540"
              height="304"
              src="https://www.youtube.com/embed/3R4kuJo7bcg"
              title="Shubho Al-Farooque- Co-Founder, CEO of Zantrik talks about Najm | Marketing Consultant"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              className="rounded-xl"
              width="540"
              height="304"
              src="https://www.youtube.com/embed/rvNdnejqC6o"
              title="Raisul Kabir Founder &amp; CEO of Brainstation 23 talks about Najm | Marketing Consultant"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="max-w-fit mx-auto text-center my-24 space-y-6">
          <Typography variant="h2">
            <TextColor>Najm built us an inbound marketing machine!</TextColor>
          </Typography>
          <div>
            <Typography variant="h6">
              <TextColor>- Syam Anupom</TextColor>
            </Typography>
            <Typography>CEO, Timetackle</Typography>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center justify-start">
              <FiveStarRating />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersThinkAboutROIMoreThanAnythingElse;
