import WhyListenToMe from "@/components/pages/(free-resources)/cmo-interview-questions/why-listen-to-me";
import Free_Marketing_Budgeting_Template from "@/components/pages/(free-resources)/marketing-budget-tamplate/free-marketing-mudgeting-template";
import TrustedByForCMO from "@/components/pages/(services)/cmo/trustedbyforcmo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Budget Template",
};

const MarketingBudgetTemplate = () => {
  return (
    <main className="App">
      <Free_Marketing_Budgeting_Template />
      <WhyListenToMe />
      <span className="md:px-0 container">
        <TrustedByForCMO />
      </span>
    </main>
  );
};

export default MarketingBudgetTemplate;
