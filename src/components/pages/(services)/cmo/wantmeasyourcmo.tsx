"use client";
import { TextColor } from "@/lib/customColorFunc";
import BookAMeeting from "@/shared/book-a-metting/book-a-meeting";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const WantMeAsYourCmo = () => {
  return (
    <section className="bg-gradient-to-l to-blue-100 from-white md:p-40 p-0">
      <div className="md:container py-10 px-4">
        <div className="max-w-fit mx-auto text-center">
          <Image
            src="/assets/images/part-time-cmo/fev-icon.png.webp"
            alt="fev-icon-small"
            width={200}
            height={100}
            sizes="(min-width: 740px) 42.125rem, calc(95.48vw- 18px)"
            className="rounded-full mx-auto md:block hidden"
          />
          <Image
            src="/assets/images/part-time-cmo/fev-icon.png.webp"
            alt="fev-icon-small"
            width={100}
            height={100}
            sizes="(min-width: 740px) 42.125rem, calc(95.48vw- 18px)"
            className="rounded-full mx-auto md:hidden block"
          />
          <div className="space-y-5 pt-6">
            <Typography variant="h2" className="md:text-4xl text-2xl ">
              <TextColor>Want Me As Your Next CMO?</TextColor>
            </Typography>
            <Typography variant="h5" className="md:text-2xl text-lg ">
              <TextColor>
                There's No Harm In Talking. Book A Meeting Today!
              </TextColor>
            </Typography>
          </div>
        </div>
      </div>

      <div className="my-5 px-5 text-center ">
        <BookAMeeting />
      </div>
    </section>
  );
};

export default WantMeAsYourCmo;
