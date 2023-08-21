import StruggleFace from "@/icons/part-time-cmo/struggleface";
import { TextColor } from "@/lib/customColorFunc";
import Image from "next/image";

const strugglesData: string[] = [
  "Don't know the right question to ask",
  "Don't know what to say when the team asks a marketing question",
  "No one to lead the marketing team",
  "Missing marketing process after hiring is complete",
  "No reporting & measuring of success",
  "Thinks hiring 1 marketing intern can bring him $$",
];

const StrugglesOfCompanyForBuildMarket = () => {
  return (
    <section className="bg-[#F0F7FB] px-6 py-12 mt-16 md:block hidden">
      <div className="container">
        <div>
          <Image
            src="/assets/images/part-time-cmo/struggle.svg"
            alt="struggle illustration"
            width={350}
            height={100}
            className="block mx-auto"
          />
          <h2 className="text-center mx-auto max-w-[45rem] text-4xl font-extrabold leading-[3.5rem]">
            <TextColor>
              Struggles Of A Non-Marketer{" "}
              <span className="text-blue-500">Founder</span> Who Needs A
              Marketing Team
            </TextColor>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mt-10 pb-12">
          <div className="grid grid-cols-2 gap-8">
            {strugglesData.map((item: string, i: number) => (
              <div
                key={i}
                className="shadow-lg bg-white px-3 py-5 rounded-lg flex items-center"
              >
                <StruggleFace /> <b className="ml-5">{item}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrugglesOfCompanyForBuildMarket;
