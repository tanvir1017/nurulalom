"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const Testimonial = () => {
  return (
    <section
      //   id="TESTIMONIAL"
      className="my-14 bg-[url('/assets/images/video-section-bg.svg')] p-24 bg-[#F3F7FB] bg-center bg-contain bg-no-repeat relative "
    >
      <div className="container">
        <div className=" text-center py-44">
          <Typography variant="h2">
            <TextColor>
              These Companies Understood The Real <br /> Meaning Of "Growth"
              When They Worked <br /> With Najm Consultant.
            </TextColor>
          </Typography>
        </div>

        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] translate-y-[50%]">
          <iframe
            width="743"
            height="413"
            src="https://www.youtube.com/embed/fsSuGoTpyQg"
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

export default Testimonial;
