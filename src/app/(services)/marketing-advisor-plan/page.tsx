import AreYouAFounder from "@/components/pages/(services)/marketing-plan-advisor/are-you-a-founder";
import FounderFriendlyMentorship from "@/components/pages/(services)/marketing-plan-advisor/founder-friendly-mentorship";
import MarketingAdvisor from "@/components/pages/(services)/marketing-plan-advisor/marketing-advisor";
import MarketingAdvisorPlan from "@/components/pages/(services)/marketing-plan-advisor/marketing-avisor-plan";
import MidSizeClientReview from "@/components/pages/(services)/marketing-plan-advisor/mid-size-clients-review";
import MoneyBackGuarantee from "@/components/pages/(services)/marketing-plan-advisor/mone-back-guarantee";
import NoFakePromises from "@/components/pages/(services)/marketing-plan-advisor/no-fake-promises";
import SuccessFullyGenerateLeadsWithWeeklyMeeting from "@/components/pages/(services)/marketing-plan-advisor/successfully-lead-generate-with-weekly-meetings";
import UnfairAdvantages from "@/components/pages/(services)/marketing-plan-advisor/unfair-advantage";
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
    </main>
  );
};

export default MarketingAdvisorPlanPage;
