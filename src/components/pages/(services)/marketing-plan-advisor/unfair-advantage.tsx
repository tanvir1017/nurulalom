import { TextColor } from "@/lib/customColorFunc";
import Image from "next/image";

const UnfairAdvantages = () => {
  return (
    <section className="container my-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 place-items-center border-2 border-gray-200 rounded-lg p-10">
          <Image
            src="/assets/images/marketing-advisor/unfair-advantages.svg"
            alt="unfair advantages"
            height={100}
            width={100}
          />
          <div>
            <h4 className="text-xl font-black">
              <TextColor>Unfair Advantages</TextColor>
            </h4>
            <p>
              <TextColor>
                I had my own small company for 3 years. so I know the{" "}
                <strong>pain of a founder</strong>. In the end, you want more
                customers. Tell me if I am wrong.
              </TextColor>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnfairAdvantages;
