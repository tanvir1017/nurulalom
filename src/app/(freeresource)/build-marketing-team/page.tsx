import FreeGuideForBuildingDigitalMarketing from "@/components/pages/(free-resources)/build-marketing-team/free-guide-for-building-digital-marketing";
import TwoDimensionalSection from "@/components/pages/(free-resources)/build-marketing-team/two-dimensional-section";
import WhyListenToMe from "@/components/pages/(free-resources)/cmo-interview-questions/why-listen-to-me";

import TrustedByForCMO from "@/components/pages/(services)/cmo/trustedbyforcmo";

const BuildMarketingTeam = () => {
  return (
    <main className="App">
      <FreeGuideForBuildingDigitalMarketing />
      <TwoDimensionalSection />
      <WhyListenToMe />
      <span className="md:px-0 container">
        <TrustedByForCMO />
      </span>
    </main>
  );
};

export default BuildMarketingTeam;
