import MarketingAdvisor from "@/components/pages/(services)/marketing-plan-advisor/marketingadvisor";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Advisor Plan - Consultant For Your Business To Grow",
  description: "Digital Marketing Consultant",
};

const MarketingAdvisorPlanPage = () => {
  return (
    <main className="App">
      <MarketingAdvisor />
    </main>
  );
};

export default MarketingAdvisorPlanPage;
