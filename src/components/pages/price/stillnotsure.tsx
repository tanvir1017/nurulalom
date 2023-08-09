"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const StillNotSure = () => {
  return (
    <section className=" bg-[url('/assets/images/Still_not_sure_Decor.svg')] bg-no-repeat bg-center my-32">
      <div className="container bg-[url('/assets/images/Still_not_sure_bg_shape.svg')] bg-no-repeat bg-center  ">
        <div className="max-w-3xl shadow-xl bg-white mx-auto p-10 py-32 rounded-lg">
          <Image
            src="/assets/images/fev-icon-small.png.webp"
            alt="fev-icon-small"
            width={150}
            height={150}
            className="rounded-full block mx-auto "
          />
          <div className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-center max-w-xl mx-auto">
              <TextColor>
                Still Not Sure Which Consulting Plan To Take?
              </TextColor>
            </h2>
            <p className="text-center max-w-xl mx-auto">
              Let me help guide you through all the packages and benefits so
              that you can decide.
            </p>
            <Button
              className="py-4 rounded-full hover:bg-[#0C304A] ml-5  mt-5 shadow-lg hover:scale-110 duration-300 flex items-center normal-case tracking-wider mx-auto"
              color="blue"
            >
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StillNotSure;
