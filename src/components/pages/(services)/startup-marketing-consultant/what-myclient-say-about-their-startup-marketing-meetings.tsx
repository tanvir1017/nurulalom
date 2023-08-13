"use client";

import { TextColor } from "@/lib/customColorFunc";
import { StarIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const WhatMyClientSayAboutTheirStartupMarketingMeetings = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] bg-[url('/assets/images/part-time-cmo/video-section-bg.svg')] bg-no-repeat bg-cover p-40">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Typography variant="h2">
              <TextColor>
                What My Clients Have To Say About Their Startup Marketing
                Meetings
              </TextColor>
            </Typography>
          </div>
        </div>
      </div>

      <div className="max-w-fit mx-auto ">
        <div className="-mt-28">
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

          <div className=" grid grid-cols-2 gap-5 pt-6">
            <iframe
              className="rounded-xl"
              width="540"
              height="304"
              src="https://www.youtube.com/embed/i9ViiRbBY7Y"
              title="Ariq Mansur, Director of Invogue Software talks about Najm | Marketing Consultant"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              className="rounded-xl"
              width="540"
              height="304"
              src="https://www.youtube.com/embed/Mqy1Y-XoKU4"
              title="Stick on Founder talks about Najm | Marketing Consultant"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center my-24 space-y-6">
        <Typography variant="h4">
          <TextColor>
            "Najm made my marketing team. He built us an ecosystem and that
            ecosystem never stopped generating leads."{" "}
          </TextColor>
        </Typography>
        <div>
          <Typography variant="h6">
            <TextColor>- Raisul Kabir</TextColor>
          </Typography>
          <Typography>Founder & CEO, Brain Station</Typography>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-start">
            {[1, 2, 3, 4, 5].map((_: number) => (
              <StarIcon
                key={_}
                strokeWidth={2.5}
                fill="#F0AD4E"
                className={`h-5 w-5 transition-transform  text-orange-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMyClientSayAboutTheirStartupMarketingMeetings;
