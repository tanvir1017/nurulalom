"use client";
import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className="container my-32">
      <div className="flex justify-center">
        <Typography variant="h4">
          <TextColor>
            Trusted By Founders At 100+ Companies, Including
          </TextColor>
        </Typography>
      </div>
      <div className="mt-24">
        <div className="flex items-center justify-center space-x-5">
          {[
            "/assets/images/cramstack.png",
            "/assets/images/prothom-alo.png.webp",
            "/assets/images/southtech.webp",
            "/assets/images/cutoutwix.png",
            "/assets/images/sheba.webp",
            "/assets/images/brainstation23.webp",
            "/assets/images/invogue-Black.png",
            "/assets/images/zantrik.webp",
            "/assets/images/jobike.webp",
          ].map((_: string, i: number) => (
            <div key={i}>
              <Image alt="" src={_} height={100} width={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
