"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import BrandImage from "./brandimage";

const FewClients = () => {
  return (
    <div className="md:container px-3 mt-24">
      <div className="md:max-w-xl  mx-auto text-center">
        <Typography
          variant="h2"
          className="md:text-4xl text-2xl md:font-bold font-semibold mb-3 md:mb-0"
        >
          <TextColor>A Few Clients I Have Worked With</TextColor>
        </Typography>

        <Typography className="">
          Southtech, JoBike, CutOutWiz, Cramstack, OpticTour (Texas, USA),
          Unique Asset Strategies (Chicago, USA), Jobike, Sheba, Brainstation
          23, & Service Chai are some of the startups I had the pleasure of
          working with. My corporate clients include Prothom Alo, Olympic
          Industries, Keya Industries and a few more.
        </Typography>
      </div>
      <BrandImage />
    </div>
  );
};

export default FewClients;
