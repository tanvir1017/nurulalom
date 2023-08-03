import ClientSuccess from "@/components/pages/clientsuccess/clientsuccess";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Marketing case studies by Nurul Alom. My clients thrive with customers",
  description: "Digital Marketing Consultant",
};

const MarketingCaseStudies = () => {
  return (
    <div className="App">
      <div className="container">
        <ClientSuccess />
      </div>
    </div>
  );
};

export default MarketingCaseStudies;
