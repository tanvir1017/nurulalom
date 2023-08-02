import { clientsLogo } from "@/data/fewclients";
import Image from "next/image";

const BrandImage = () => {
  return (
    <div className="container pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-6 gap-3">
          {clientsLogo.map((item: string, i: number) => {
            return (
              <div key={i}>
                <Image
                  src={`/assets/images/brand/${item}`}
                  alt="client company logo"
                  width={150}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandImage;
