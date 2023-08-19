"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import ClientSuccessStoryYouTube from "../../shared/client-success-story-ytube/client-success-story-ytube";
import FiveStarRating from "../../shared/five-star-rating";

const WhatMyClientSayAboutTheirGrowth = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] md:bg-[url('/assets/images/part-time-cmo/video-section-bg.svg')] md:bg-no-repeat md:bg-cover md:p-40 py-24 mb-4">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Typography variant="h2" className="md:text-4xl text-2xl">
              <TextColor>
                What My Clients Have To Say About Their Revenue Growth
              </TextColor>
            </Typography>
          </div>
        </div>
      </div>

      <ClientSuccessStoryYouTube
        embadedURL1="https://www.youtube.com/embed/fsSuGoTpyQg"
        title1="Southtech CEO Syed Mamnun Quader talks about Najm | Marketing Consultant"
        embadedURL2="https://www.youtube.com/embed/nkk2ASQOUHg"
        title2="What you didn&#39;t know about Najm Consultant. Shahed Islam CEO of SJ Innovaton LLC shared his opinion"
        embadedURL3="https://www.youtube.com/embed/p8owDD4OJrc"
        title3="Ramin Jahedi CEO of Optictour Google Trusted Agency talks about Nazmul"
      />

      <div className="max-w-fit mx-auto text-center my-24 space-y-6">
        <Typography variant="h2" className="md:text-4xl text-2xl">
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
    </section>
  );
};

export default WhatMyClientSayAboutTheirGrowth;
