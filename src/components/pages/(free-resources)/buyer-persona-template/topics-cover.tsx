import { TextColor } from "@/lib/customColorFunc";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const TopicsCover = () => {
  return (
    <section>
      <div className="bg-[#F3F7FB]"></div>
      <div className="container md:my-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5 place-items-center">
            <Image
              alt="What you can do with this template illustration"
              src="/assets/images/buyer-persona-template/customers-persona.png.webp"
              width={600}
              height={100}
            />
            <div>
              <h2 className="text-2xl md:text-4xl font-bold">
                <TextColor>With This Template, You Can:</TextColor>
              </h2>
              <ul className="m-7">
                <li className="my-2">
                  <CheckIcon className="text-white bg-orange-300 w-5 h-5 rounded-full inline-flex mr-3 " />{" "}
                  Easily add relevant information about your clients
                </li>
                <li className="my-2">
                  <CheckIcon className="text-white bg-orange-300 w-5 h-5 rounded-full inline-flex mr-3 " />{" "}
                  A template to follow and get customer insights
                </li>
                <li className="my-2">
                  {" "}
                  <CheckIcon className="text-white bg-orange-300 w-5 h-5 rounded-full inline-flex mr-3 " />{" "}
                  Easily customizable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsCover;
