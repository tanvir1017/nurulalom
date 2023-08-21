import MyPhilosophies from "@/components/pages/(services)/marketing-plan-advisor/my-philosophies";
import UnfairAdvantages from "@/components/pages/(services)/marketing-plan-advisor/unfair-advantage";
import AreYouAFounderButMarketingIsNotOneOfYourStrengths from "@/components/pages/(services)/startup-marketing-consultant/are-you-a-founder";
import FounderFriendlyMentorShipAndMarketingGuidanceForATeam from "@/components/pages/(services)/startup-marketing-consultant/founder-friendly-mentorship";
import MeetYOurDigitalConsultantNAJM from "@/components/pages/(services)/startup-marketing-consultant/meet-your-digital-consultant";
import HundredPercentMoneyBackGuarantee from "@/components/pages/(services)/startup-marketing-consultant/mone-back-guarantee";
import NoFakePromisesOnlyMarketingAdvisingAndMentorshipIncluded from "@/components/pages/(services)/startup-marketing-consultant/no-fake-promises-only-marketing-advising-and-mentorship-included";
import OneThingAllMyPreviousStartupClientsToldMe from "@/components/pages/(services)/startup-marketing-consultant/startup-clients-review";
import StartupMarketingConsultantHeadingSection from "@/components/pages/(services)/startup-marketing-consultant/startup-marketing-consultant-heading";
import HowToSuccessfullyGenerateLeadsWithTheseWeeklyMeetings from "@/components/pages/(services)/startup-marketing-consultant/successfully-lead-generate-with-weekly-meetings";
import WhatMyClientSayAboutTheirStartupMarketingMeetings from "@/components/pages/(services)/startup-marketing-consultant/what-myclient-say-about-their-startup-marketing-meetings";
import InboundMarketingConsultation from "@/shared/inbound-marketing-consultation/inbound-marketing-consultation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Marketing Consultant For Your Business Ang Grow Leads",
  description: "Digital Marketing Consultant",
};

const StartupMarketingConsultant = () => {
  return (
    <main className="App">
      <StartupMarketingConsultantHeadingSection />
      <FounderFriendlyMentorShipAndMarketingGuidanceForATeam />
      <AreYouAFounderButMarketingIsNotOneOfYourStrengths />
      <HowToSuccessfullyGenerateLeadsWithTheseWeeklyMeetings />
      <HundredPercentMoneyBackGuarantee />
      <OneThingAllMyPreviousStartupClientsToldMe />
      <NoFakePromisesOnlyMarketingAdvisingAndMentorshipIncluded />
      <UnfairAdvantages />
      <MeetYOurDigitalConsultantNAJM />
      <WhatMyClientSayAboutTheirStartupMarketingMeetings />
      {/* InBoundConsultation OR Book a meeting form start 🌟*/}
      <div className="bg-gradient-to-r from-blue-100 to-blue-gray-50 md:px-10 px-2 md:py-28 py-10 my-10">
        <div className="md:container">
          <InboundMarketingConsultation />
        </div>
      </div>
      {/* InBoundConsultation OR Book a meeting form end 🔚*/}
      <MyPhilosophies />
    </main>
  );
};

export default StartupMarketingConsultant;
