import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const MinimumClientPerMonth = () => {
  return (
    <section className="container md:mt-28 mt-14">
      <div className="max-w-fit mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-6 ">
          <h2 className="md:text-4xl text-2xl font-bold ">
            <TextColor>6 Clients Per Month, Max!</TextColor>
          </h2>
          <p>
            As I give my own time, I can take maximum 6 clients per month. So,
            my digital marketing consulting slots are limited. Book now before
            someone else does.
          </p>
        </div>

        <Image
          className="my-12 shadow-xl"
          src="/assets/images/marketing-consulting/consulting-schedule-2021.svg"
          alt="Consulting Schedule plan"
          height={100}
          width={1100}
        />

        <div className="max-w-fit mx-auto text-center space-y-4">
          <div className="relative">
            <p>Each plan is specifically designed to achieve specific goals.</p>
            <Image
              className="hidden md:block mx-auto -rotate-[13] absolute top-5  "
              src="https://res.cloudinary.com/djbcnjkin/image/upload/v1690994194/xtxfow6u2ozsmafu8prb.webp"
              alt="arrow indicate two options small company or mid size company"
              height={80}
              width={80}
            />
          </div>
          <div className="py-4">
            <DefaultButton className="md:py-4 py-3">
              Book consulting slot{" "}
              <ArrowRightIcon className={` h-5 w-5 ml-3 inline`} />
            </DefaultButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimumClientPerMonth;
