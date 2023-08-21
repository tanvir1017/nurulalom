import { TextColor } from "@/lib/customColorFunc";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type HowDoWeDoItCardDataType = {
  title: string;
  image: string;
  description: string;
  item: string[];
};

const HowDoWeDoItCardData: HowDoWeDoItCardDataType[] = [
  {
    title: "Build A Marketing Strategy",
    item: ["Decide The Activities", "Then Decide Who To Hire"],
    image: "/assets/images/build-marketing-team/Strategy.svg",
    description:
      "We can keep giving ads on Facebook but clients won't come if they are not there. This is why we need to first know what the strategy is.",
  },
  {
    title: "Team Hiring, Training & KPI Placement",
    item: ["Hiring", "Training", "Setup KPIs"],
    image: "/assets/images/part-time-cmo/free-consultation_mobile.svg",
    description:
      "I will help you find the ideal talent, offer training and motivation, and make sure your team is ready to achieve the best results for your business. The team will be yours; employed directly by you.",
  },
  {
    title: "Build A Marketing Strategy",
    item: ["Focus On Quantity", "Weekly Execution"],
    image: "assets/images/part-time-cmo/kickstart-marketing.svg",
    description:
      "Here is when we start executing. Most of your marketing activities will start from this phase. The goal will be to hit the quantity & start building our marketing presence.",
  },
];

const HowDoWeDoIt = () => {
  return (
    <section className="container md:mt-28 mt-12">
      <div className="max-w-fit mx-auto text-center">
        <h5 className="text-blue-500 pb-6 font-bold text-lg">
          How Do We Do It?
        </h5>
        <h2 className="pb-6 md:text-4xl text-xl md:font-bold font-extrabold max-w-2xl mx-auto  md:leading-[3.5rem]">
          <TextColor>
            We Not Only Hire, We Future Proof Your Marketing Department.
          </TextColor>
        </h2>
        <p className="pb-6 font-semibold">
          <TextColor>Time Period: 4 Months</TextColor>
        </p>

        <p className="pb-6 max-w-2xl mx-auto text-center md:block hidden">
          We identify your business goals, target audience, and industry
          specifics to build a tailored plan that will serve as the foundation
          of your team.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 max-w-6xl mx-auto text-start py-10">
          {HowDoWeDoItCardData.map(
            (item: HowDoWeDoItCardDataType, index: number) => (
              <div
                key={index}
                className="shadow-lg border-t-4 border-blue-500 rounded-lg px-5 py-10"
              >
                <h5 className="text-xl text-blue-500 pb-6 font-black uppercase ">
                  Step {index + 1}
                </h5>
                <div className="pb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={index === 2 ? 120 : 150}
                    height={100}
                  />
                </div>
                <h2 className="font-bold text-3xl pb-6">
                  <TextColor>{item.title}</TextColor>
                </h2>
                <div
                  className={cn(
                    `flex flex-wrap  items-center justify-start pb-6`,
                    [1, 2].includes(index) ? "md:space-x-3" : ""
                  )}
                >
                  {item.item.map((text: string, i: number) => (
                    <span key={i} className="flex items-center md:m-0 m-1">
                      <CheckIcon className="w-4 h-4 text-white bg-blue-500 rounded-full mr-2" />{" "}
                      <p>{text}</p>
                    </span>
                  ))}
                </div>
                <p>{item.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HowDoWeDoIt;
