"use client";

import { TextColor } from "@/lib/customColorFunc";
import ClientSuccessStoryYouTube from "@/shared/client-success-story-ytube/client-success-story-ytube";
import FiveStarRating from "@/shared/five-star-rating";
import { Typography } from "@material-tailwind/react";

const WhatMyClientSayAboutTheirStartupMarketing = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] md:bg-[url('/assets/images/part-time-cmo/video-section-bg.svg')] md:bg-no-repeat md:bg-cover md:p-40 p-2">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center px-2 py-5">
            <Typography variant="h2" className="md:text-4xl text-xl ">
              <TextColor>
                What My Clients Have To Say About Their Startup Marketing
                Meetings
              </TextColor>
            </Typography>
          </div>
        </div>
      </div>

      <div className="max-w-fit mx-auto ">
        <div className="md:-mt-28 -mt-0">
          <ClientSuccessStoryYouTube
            embadedURL1="https://www.youtube.com/embed/gIBgfT1lbB4"
            title1="Sheba.xyz Co-founder Adnan I. Halim talks about Najm"
            embadedURL2="https://www.youtube.com/embed/i9ViiRbBY7Y"
            title2="Ariq Mansur, Director of Invogue Software talks about Najm | Marketing Consultant"
            embadedURL3="https://www.youtube.com/embed/3R4kuJo7bcg"
            title3="Shubho Al-Farooque- Co-Founder, CEO of Zantrik talks about Najm | Marketing Consultant"
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center my-24 space-y-6 md:block hidden">
        <Typography variant="h4" className="text-lg md:text-xl">
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
            <FiveStarRating />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMyClientSayAboutTheirStartupMarketing;
