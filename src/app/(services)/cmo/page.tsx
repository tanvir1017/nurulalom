import ExpertMarketingExecution from "@/components/pages/(services)/cmo/expertmarketingexecution";
import HeadingSection from "@/components/pages/(services)/cmo/headingsection";
import MeetYourFractionalCMO from "@/components/pages/(services)/cmo/meetyourfractionalcmo";
import PricingStages from "@/components/pages/(services)/cmo/pricingstages";
import StageWeWillGoThrough from "@/components/pages/(services)/cmo/stagewewillgothrough";
import StrugglesOfCompany from "@/components/pages/(services)/cmo/strugglesofcompany";
import TrustedByForCMO from "@/components/pages/(services)/cmo/trustedbyforcmo";
import WantMeAsYourCmo from "@/components/pages/(services)/cmo/wantmeasyourcmo";
import WhatMyClientSayAboutTheirGrowth from "@/components/pages/(services)/cmo/whatmyclientsayabouttheirgrowth";
import WhoShouldHire from "@/components/pages/(services)/cmo/whoshouldhire";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire me as your fractional CMO, Build a marketing department",
  description: "Nurul alam Digital Marketing Consultant",
};
const CMO = () => {
  return (
    <main className="App">
      <HeadingSection />
      <StrugglesOfCompany />
      <ExpertMarketingExecution />
      <StageWeWillGoThrough />
      <WhoShouldHire />
      <PricingStages />
      <MeetYourFractionalCMO />
      <TrustedByForCMO />
      <WhatMyClientSayAboutTheirGrowth />
      <WantMeAsYourCmo />
    </main>
  );
};

export default CMO;
