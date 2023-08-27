"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const StillNotSure = () => {
  return (
    <section className="md:bg-[url('/assets/images/Still_not_sure_Decor.svg')] bg-no-repeat bg-center md:my-32 my-16">
      <div className="md:container md:bg-[url('/assets/images/Still_not_sure_bg_shape.svg')] bg-no-repeat bg-center  p-10 md:p-10">
        <div className="max-w-3xl shadow-xl bg-white mx-auto md:px-10 px-7 md:py-32 py-16 rounded-lg">
          <Image
            src="/assets/images/fev-icon-small.png.webp"
            alt="fev-icon-small"
            width={100}
            height={100}
            className="rounded-full block mx-auto "
          />
          <div className="space-y-6 pt-6">
            <h2 className="md:text-3xl text-xl font-bold text-center max-w-xl mx-auto">
              <TextColor>
                Still Not Sure Which Consulting Plan To Take?
              </TextColor>
            </h2>
            <p className="text-center max-w-xl mx-auto">
              Let me help guide you through all the packages and benefits so
              that you can decide.
            </p>
            <Link href="/inbound-marketing-consultation">
              <Button
                className="py-4 rounded-full hover:bg-[#0C304A] ml-5  mt-5 shadow-lg hover:scale-110 duration-300 flex items-center normal-case tracking-wider mx-auto"
                color="blue"
              >
                Book a Meeting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StillNotSure;
