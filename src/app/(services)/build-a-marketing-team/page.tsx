import BuildMarketingHeadingSection from "@/components/pages/(services)/build-marketing-team/buildmarketingheadingsection";
import FindingMarketer from "@/components/pages/(services)/build-marketing-team/findingmarketer";
import HowDoWeDoIt from "@/components/pages/(services)/build-marketing-team/howdowedoit";
import ProudlyBuiltTeams from "@/components/pages/(services)/build-marketing-team/proudlybuilt32teams";
import StrugglesOfCompanyForBuildMarket from "@/components/pages/(services)/build-marketing-team/strugglesofcompany";
import TheStageWeWillGo from "@/components/pages/(services)/build-marketing-team/thestagewewillgo";

const BuildAMarketingTeam = () => {
  return (
    <main className="App">
      <BuildMarketingHeadingSection />
      <ProudlyBuiltTeams />
      <StrugglesOfCompanyForBuildMarket />
      <HowDoWeDoIt />
      <TheStageWeWillGo />
      <FindingMarketer />
    </main>
  );
};

export default BuildAMarketingTeam;
