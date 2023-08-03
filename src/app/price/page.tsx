import PricePlan from "@/components/pages/price/priceplan";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Consultant Fees",
  description: "Digital Marketing Consultant",
};

const Price = () => {
  return (
    <div className="App">
      <PricePlan />
    </div>
  );
};

export default Price;
