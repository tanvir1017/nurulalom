import PricePlan from "@/components/pages/price/priceplan";
import StillNotSure from "@/components/pages/price/stillnotsure";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Consultant Fees",
  description: "Digital Marketing Consultant",
};

const Price = () => {
  return (
    <div className="App">
      <PricePlan />
      <div className="border-b border"></div>
      <StillNotSure />
    </div>
  );
};

export default Price;
