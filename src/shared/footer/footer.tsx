"use client";

import { Typography } from "@material-tailwind/react";

import { TextColor } from "@/lib/customColorFunc";
import Connect from "./connect/connect";
import DigitalMarketingConsultant from "./digitalmarketingconsultant/digitalmarketingconsultant";
import Services from "./services/services";
import SiteMap from "./sitemap/sitemap";

const Footer = () => {
  return (
    <footer>
      <section className="bg-[#F0F7FB] md:px-10 py-14">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 space-y-5 md:space-y-0 ">
            <DigitalMarketingConsultant />
            <Services />
            <SiteMap />
            <Connect />
          </div>
        </div>
      </section>
      <section className="bg-[#E6ECEF] px-3 py-5">
        <div className="container">
          <div className="flex-row md:flex items-center justify-between text-center md:space-y-0 space-y-5">
            <Typography variant="small">
              <TextColor>Privacy Policy</TextColor>
            </Typography>
            <Typography variant="small">
              <TextColor>
                Copyright © 2010-2023 All rights Reserved | Najm Consultant
              </TextColor>
            </Typography>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
