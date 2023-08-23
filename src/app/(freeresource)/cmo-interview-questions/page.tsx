import AskTheRightQuestion from "@/components/pages/(free-resources)/cmo-interview-questions/ask-the-right-question";
import TwoDimensionalSection from "@/components/pages/(free-resources)/cmo-interview-questions/two-dimensional-section";
import WhyListenToMe from "@/components/pages/(free-resources)/cmo-interview-questions/why-listen-to-me";

import TrustedByForCMO from "@/components/pages/(services)/cmo/trustedbyforcmo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMO Interview Question",
};

const CmoInterview = () => {
  return (
    <main className="App">
      <AskTheRightQuestion />
      <TwoDimensionalSection />
      <WhyListenToMe />
      <span className="md:px-0 container">
        <TrustedByForCMO />
      </span>
    </main>
  );
};

export default CmoInterview;
