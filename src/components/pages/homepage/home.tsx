"use client";
import { ThemeProvider } from "@material-tailwind/react";
import AffordCMO from "./affordCMO/affordCMO";
import Consulting from "./consulting/consulting";

import GetMoreLeads from "./get-more-leads/get-more-leads";
import Introduce from "./introduce/introduce";
import MeetYourMarketer from "./meetyourmarker/meetyourmarker";
import Testimonial from "./testimonial/testimonial";
import TestimonialCard from "./testimonial/testimonialcard";
import TrustedBy from "./trustedby/trustedby";

const HomePage = () => {
  return (
    <ThemeProvider>
      <main className="App">
        <Introduce />
        <TrustedBy />
        <GetMoreLeads />
        <Consulting />
        <AffordCMO />
        <Testimonial />
        <TestimonialCard />
        <MeetYourMarketer />
      </main>
    </ThemeProvider>
  );
};

export default HomePage;
