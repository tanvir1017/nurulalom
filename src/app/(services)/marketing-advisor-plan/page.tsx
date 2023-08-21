import AreYouAFounder from "@/components/pages/(services)/marketing-plan-advisor/are-you-a-founder";
import FounderFriendlyMentorship from "@/components/pages/(services)/marketing-plan-advisor/founder-friendly-mentorship";
import MarketingAdvisor from "@/components/pages/(services)/marketing-plan-advisor/marketing-advisor";
import MarketingAdvisorPlan from "@/components/pages/(services)/marketing-plan-advisor/marketing-avisor-plan";
import MidSizeClientReview from "@/components/pages/(services)/marketing-plan-advisor/mid-size-clients-review";
import MoneyBackGuarantee from "@/components/pages/(services)/marketing-plan-advisor/mone-back-guarantee";
import MyPhilosophies from "@/components/pages/(services)/marketing-plan-advisor/my-philosophies";
import NoFakePromises from "@/components/pages/(services)/marketing-plan-advisor/no-fake-promises";
import SuccessFullyGenerateLeadsWithWeeklyMeeting from "@/components/pages/(services)/marketing-plan-advisor/successfully-lead-generate-with-weekly-meetings";
import UnfairAdvantages from "@/components/pages/(services)/marketing-plan-advisor/unfair-advantage";
import WhatMyClientSayAboutTheirStartupMarketing from "@/components/pages/(services)/marketing-plan-advisor/what-myclient-say-about-their-startup-marketing";
import InboundMarketingConsultation from "@/shared/inbound-marketing-consultation/inbound-marketing-consultation";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Advisor Plan - Consultant For Your Business To Grow",
  description: "Digital Marketing Consultant",
};

const MarketingAdvisorPlanPage = () => {
  return (
    <main className="App">
      <MarketingAdvisor />
      <FounderFriendlyMentorship />
      <AreYouAFounder />
      <SuccessFullyGenerateLeadsWithWeeklyMeeting />
      <MoneyBackGuarantee />
      <MidSizeClientReview />
      <NoFakePromises />
      <UnfairAdvantages />
      <MarketingAdvisorPlan />
      <WhatMyClientSayAboutTheirStartupMarketing />
      {/* InBoundConsultation OR Book a meeting form start 🌟*/}
      <div className="bg-gradient-to-r from-blue-100 to-blue-gray-50 md:px-10 px-3 py-16 md:py-28 md:mt-0 mt-5">
        <div className="md:container px-0.5">
          <InboundMarketingConsultation />
        </div>
      </div>
      {/* InBoundConsultation OR Book a meeting form end 🔚*/}
      <MyPhilosophies />
    </main>
  );
};

export default MarketingAdvisorPlanPage;
