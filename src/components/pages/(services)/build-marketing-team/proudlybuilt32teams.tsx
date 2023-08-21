import { TextColor } from "@/lib/customColorFunc";
import TrustedByForCMO from "../cmo/trustedbyforcmo";

const ProudlyBuiltTeams = () => {
  return (
    <section className="md:container px-3 mt-16">
      <div className="max-w-fit mx-auto text-center">
        <h3 className="text-4xl pb-6">😇</h3>
        <h2 className="md:text-3xl text-xl font-bold">
          <TextColor>
            Proudly Built 32 Teams Between 2022 - 2023 ⭐️⭐️⭐️⭐️⭐️
          </TextColor>
        </h2>
        <div className="py-6">
          <TrustedByForCMO />
        </div>
      </div>
    </section>
  );
};

export default ProudlyBuiltTeams;
