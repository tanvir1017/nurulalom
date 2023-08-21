"use client";

import { TextColor } from "@/lib/customColorFunc";
import ClientSuccessStoryYouTube from "@/shared/client-success-story-ytube/client-success-story-ytube";
import FiveStarRating from "@/shared/five-star-rating";
import { Typography } from "@material-tailwind/react";

const WhatMyClientSayAboutTheirGrowthBuildMarketingTeam = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] md:bg-[url('/assets/images/part-time-cmo/video-section-bg.svg')] md:bg-no-repeat md:bg-cover md:p-40 px-4 py-10">
        <div className="md:container">
          <div className="max-w-xl mx-auto text-center">
            <Typography variant="h2" className="md:text-4xl text-2xl">
              <TextColor>
                What My Clients Have To Say About Their Revenue Growth
              </TextColor>
            </Typography>
          </div>
        </div>

        <div className="max-w-fit mx-auto md:mt-0 mt-10">
          <ClientSuccessStoryYouTube
            embadedURL1="https://www.youtube.com/embed/fsSuGoTpyQg"
            title1="Southtech CEO Syed Mamnun Quader talks about Najm | Marketing Consultant"
            embadedURL2="https://www.youtube.com/embed/rvNdnejqC6o"
            title2="Raisul Kabir Founder &amp; CEO of Brainstation 23 talks about Najm | Marketing Consultant"
            embadedURL3="https://www.youtube.com/embed/3R4kuJo7bcg"
            title3="Shubho Al-Farooque- Co-Founder, CEO of Zantrik talks about Najm | Marketing Consultant"
          />
        </div>

        <div className="max-w-fit mx-auto text-center md:my-24 mt-16 mb-6 space-y-6">
          <Typography variant="h2" className="text-2xl md:text-4xl">
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
      <div className="container md:block hidden">
        <div className="max-w-4xl mx-auto">
          <hr className="my-28 border-gray-400 " />
        </div>
      </div>
    </section>
  );
};

export default WhatMyClientSayAboutTheirGrowthBuildMarketingTeam;
