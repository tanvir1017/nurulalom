import AskTheRightQuestion from "@/components/pages/(free-resources)/ask-the-right-question";
import TwoDimensionalSection from "@/components/pages/(free-resources)/two-dimensional-section";
import WhyListenToMe from "@/components/pages/(free-resources)/why-listen-to-me";
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
    </main>
  );
};

export default CmoInterview;
