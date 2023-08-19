import { Stage1Accordion } from "@/components/materialtailwind/stage1accordion";
import Image from "next/image";
import StageHeading from "./stageheading";

const Stage1 = () => {
  return (
    <section className="mt-16 mb-28">
      <div className="container">
        <div className="mx-w-6xl text-center mx-auto ">
          <StageHeading
            stageLevel="Stage 1"
            title="Audit & Strategy"
            period="Time Period: 1 Month"
            text="Without the right strategy building, a team is a bad idea. 1st we
              decide on the tasks and tactics then we build the
              team."
          />
          <div className="max-w-7xl mx-auto">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse  md:gap-5 md:place-items-center mt-16">
              <div className="max-w-md ">
                <Stage1Accordion />
              </div>
              <Image
                src="/assets/images/part-time-cmo/audit-and-stategy-v2-01.svg"
                alt="audit and stategy illustration"
                width={600}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stage1;
