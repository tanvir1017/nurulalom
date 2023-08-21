"use client";

import { TextColor } from "@/lib/customColorFunc";
import ClientSuccessStoryYouTube from "@/shared/client-success-story-ytube/client-success-story-ytube";
import FiveStarRating from "@/shared/five-star-rating";
import { Typography } from "@material-tailwind/react";

const FoundersThinkAboutROIMoreThanAnythingElse = () => {
  return (
    <section>
      <div className="bg-[#F0F7FB] md:bg-[url('/assets/images/part-time-cmo/video-section-bg.svg')] md:bg-no-repeat md:bg-cover md:p-40 p-6">
        <div className="md:container px-4">
          <div className="max-w-xl mx-auto text-center pb-6">
            <Typography variant="h2" className="text-2xl md:text-4xl">
              <TextColor>
                Founders Think About ROI More Than Anything Else.
              </TextColor>
            </Typography>
          </div>
        </div>

        <div className="max-w-fit mx-auto ">
          <ClientSuccessStoryYouTube
            embadedURL1="https://www.youtube.com/embed/gIBgfT1lbB4"
            title1="Sheba.xyz Co-founder Adnan I. Halim talks about Najm"
            embadedURL2="https://www.youtube.com/embed/3R4kuJo7bcg"
            title2="Shubho Al-Farooque- Co-Founder, CEO of Zantrik talks about Najm | Marketing Consultant"
            embadedURL3="https://www.youtube.com/embed/rvNdnejqC6o"
            title3="Raisul Kabir Founder &amp; CEO of Brainstation 23 talks about Najm | Marketing Consultant"
          />
        </div>

        <div className="max-w-fit mx-auto text-center my-24 space-y-6 md:block hidden">
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
