import { TextColor } from "@/lib/customColorFunc";
import Image from "next/image";

const UnfairAdvantages = () => {
  return (
    <section className="md:container px-4 md:my-32 my-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 place-items-center border-2 border-gray-200 rounded-lg md:p-10 p-5">
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
