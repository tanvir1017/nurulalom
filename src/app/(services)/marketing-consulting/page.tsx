import DigitalMarketingConsultingPlans from "@/components/pages/(services)/marketing-consulting/digital-marketing-consulting-plans";
import ILearnItHardWay from "@/components/pages/(services)/marketing-consulting/i-learn-it-hard-way";
import MinimumClientPerMonth from "@/components/pages/(services)/marketing-consulting/minimum-client-per-month";
import StillConfuseWhichPlanToTake from "@/components/pages/(services)/marketing-consulting/still-confuse-which-plan-to-take";
import ThisIsHowDigitalMarketingConsultingHelpedAFewOfMyPastClients from "@/components/pages/(services)/marketing-consulting/this-Is-how-digital-marketing-consulting-helped-a-few-of-my-past-clients";

const MarketingConsulting = () => {
  return (
    <main className="App">
      <DigitalMarketingConsultingPlans />
      <ThisIsHowDigitalMarketingConsultingHelpedAFewOfMyPastClients />
      <MinimumClientPerMonth />
      <ILearnItHardWay />
      <StillConfuseWhichPlanToTake />
    </main>
  );
};

export default MarketingConsulting;
