"use client";

import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import BrandImage from "./brandimage";

const FewClients = () => {
  return (
    <div className="container mt-24">
      <div className="max-w-xl mx-auto">
        <Typography variant="h2" className="pb-6">
          <TextColor>A Few Clients I Have Worked With</TextColor>
        </Typography>

        <Typography className="text-center">
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
