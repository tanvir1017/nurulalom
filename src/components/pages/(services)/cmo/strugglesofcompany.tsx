import StruggleFace from "@/icons/part-time-cmo/struggleface";
import { TextColor } from "@/lib/customColorFunc";
import Image from "next/image";

const strugglesData: string[] = [
  "No one to lead the marketing team",
  "Missing marketing process",
  "Marketing is not lead generation driven",
  "No reporting & measuring of success",
  "Lack of a good team to execute",
  "Growth has been slow for the past few years",
];

const StrugglesOfCompany = () => {
  return (
    <section className="bg-[#F0F7FB] px-6 py-12 mt-16">
      <div className="container">
        <div>
          <Image
            src="/assets/images/part-time-cmo/struggle.svg"
            alt="struggle illustration"
            width={350}
            height={100}
            className="block mx-auto"
          />
          <h2 className="text-center mx-auto max-w-[37.5rem] text-4xl font-extrabold leading-[2.8rem]">
            <TextColor>
              Struggles Of Company{" "}
              <span className="text-blue-500">Founders</span> Who Are Not
              Marketers
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

export default StrugglesOfCompany;
