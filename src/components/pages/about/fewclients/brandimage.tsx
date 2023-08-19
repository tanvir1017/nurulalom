import { clientsLogo } from "@/data/fewclients";
import Image from "next/image";

const BrandImage = () => {
  return (
    <div className="md:container md:px-3 px-0 pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {clientsLogo.map((item: string, i: number) => (
            <div key={i}>
              <Image
                src={`/assets/images/brand/${item}`}
                alt="client company logo"
                width={150}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandImage;
