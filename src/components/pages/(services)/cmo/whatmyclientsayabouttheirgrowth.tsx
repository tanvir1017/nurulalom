"use client";

import { TextColor } from "@/lib/customColorFunc";
import { StarIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const WhatMyClientSayAboutTheirGrowth = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] bg-[url('/assets/images/part-time-cmo/video-section-bg.svg')] bg-no-repeat bg-cover p-40">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Typography variant="h2">
              <TextColor>
                What My Clients Have To Say About Their Revenue Growth
              </TextColor>
            </Typography>
          </div>
        </div>
      </div>

      <div className="max-w-fit mx-auto ">
        <div className="-mt-28">
          <iframe
            className="rounded-lg"
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/fsSuGoTpyQg"
            title="Southtech CEO Syed Mamnun Quader talks about Najm | Marketing Consultant"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div className="grid grid-cols-2 gap-5 pt-6">
            <iframe
              className="rounded-lg"
              width="540"
              height="304"
              src="https://www.youtube.com/embed/nkk2ASQOUHg"
              title="What you didn&#39;t know about Najm Consultant. Shahed Islam CEO of SJ Innovaton LLC shared his opinion"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              className="rounded-lg"
              width="540"
              height="304"
              src="https://www.youtube.com/embed/p8owDD4OJrc"
              title="Ramin Jahedi CEO of Optictour Google Trusted Agency talks about Nazmul"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
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
            <StarIcon
              strokeWidth={2.5}
              fill="#F0AD4E"
              className={`h-5 w-5 transition-transform  text-orange-300`}
            />
            <StarIcon
              strokeWidth={2.5}
              fill="#F0AD4E"
              className={`h-5 w-5 transition-transform  text-orange-300`}
            />
            <StarIcon
              strokeWidth={2.5}
              fill="#F0AD4E"
              className={`h-5 w-5 transition-transform  text-orange-300`}
            />
            <StarIcon
              strokeWidth={2.5}
              fill="#F0AD4E"
              className={`h-5 w-5 transition-transform  text-orange-300`}
            />
            <StarIcon
              strokeWidth={2.5}
              fill="#F0AD4E"
              className={`h-5 w-5 transition-transform  text-orange-300`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMyClientSayAboutTheirGrowth;
