import FoundersThinkAboutROIMoreThanAnythingElse from "@/components/pages/(services)/digital-marketing-consultant/founders-think-about-ROI-more-than-anything-else";
import LetsBuildMarketingStrategy from "@/components/pages/(services)/digital-marketing-consultant/let's-build-marketing-strategy";
import MeetYOurDigitalConsultantNAJMForDMSC from "@/components/pages/(services)/digital-marketing-consultant/meet-your-digital-consultant";
import ReadyToBuildContactForm from "@/components/pages/(services)/digital-marketing-consultant/ready-to-build-contact-form";
import StepsToBookAndGetTheConsultation from "@/components/pages/(services)/digital-marketing-consultant/steps-to-book-and-get-the-consultation";
import TestimonialOfShubhoAlFarooque from "@/components/pages/(services)/digital-marketing-consultant/testimonial-of-shubho-al-farooque";
import WhatYouWillGetInThisMarketingStrategyConsultation from "@/components/pages/(services)/digital-marketing-consultant/what-you-will-get-in-this-marketing-strategy-consultation";
import UnfairAdvantages from "@/components/pages/(services)/marketing-plan-advisor/unfair-advantage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy Consultation | Najm Consultant",
  description: "Digital Marketing Consultation",
};

const DigitalMarketingStrategy = () => {
  return (
    <main className="App">
      <LetsBuildMarketingStrategy />
      <TestimonialOfShubhoAlFarooque />
      <WhatYouWillGetInThisMarketingStrategyConsultation />
      <StepsToBookAndGetTheConsultation />
      <UnfairAdvantages />
      <MeetYOurDigitalConsultantNAJMForDMSC />
      <FoundersThinkAboutROIMoreThanAnythingElse />
      <ReadyToBuildContactForm />
    </main>
  );
};

export default DigitalMarketingStrategy;
