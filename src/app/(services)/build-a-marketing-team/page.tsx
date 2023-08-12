import BuildMarketingHeadingSection from "@/components/pages/(services)/build-marketing-team/buildmarketingheadingsection";
import FindingMarketer from "@/components/pages/(services)/build-marketing-team/findingmarketer";
import HowDoWeDoIt from "@/components/pages/(services)/build-marketing-team/howdowedoit";
import MeetYourFractionalCMOForMarketingTeamBuild from "@/components/pages/(services)/build-marketing-team/meetyourfractionalcmoformarketingteambuild";
import ProudlyBuiltTeams from "@/components/pages/(services)/build-marketing-team/proudlybuilt32teams";
import ReadyToBuildContactForm from "@/components/pages/(services)/build-marketing-team/readytobuildcontactform";
import StrugglesOfCompanyForBuildMarket from "@/components/pages/(services)/build-marketing-team/strugglesofcompany";
import TheStageWeWillGo from "@/components/pages/(services)/build-marketing-team/thestagewewillgo";
import WhatMyClientSayAboutTheirGrowthBuildMarketingTeam from "@/components/pages/(services)/build-marketing-team/whatmyclientsayabouttheirgrowthbuildmarketingteam";
import YourTeamsLookDependingOnMarketingNeeds from "@/components/pages/(services)/build-marketing-team/yourteamslookdependingonmarketingneeds";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire In-House Marketing Team",
  description: "Digital Marketing Consultant",
};

const BuildAMarketingTeam = () => {
  return (
    <main className="App">
      <BuildMarketingHeadingSection />
      <ProudlyBuiltTeams />
      <StrugglesOfCompanyForBuildMarket />
      <HowDoWeDoIt />
      <TheStageWeWillGo />
      <FindingMarketer />
      <YourTeamsLookDependingOnMarketingNeeds />
      <MeetYourFractionalCMOForMarketingTeamBuild />
      <WhatMyClientSayAboutTheirGrowthBuildMarketingTeam />
      <ReadyToBuildContactForm />
    </main>
  );
};

export default BuildAMarketingTeam;
