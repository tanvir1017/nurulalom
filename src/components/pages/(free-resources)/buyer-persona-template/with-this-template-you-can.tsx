import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const WithThisTemplateYouCan = () => {
  return (
    <div className="md:container md:my-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5 place-items-center">
          <Image
            alt="What you can do with this template illustration"
            src="/assets/images/buyer-persona-template/customers-persona.png.webp"
            width={600}
            height={100}
          />
          <div className="px-3 md:px-0">
            <h2 className="text-2xl text-center md:text-start md:text-4xl font-bold">
              <TextColor>
                With This Template, <br className="md:hidden block" /> You Can:
              </TextColor>
            </h2>
            <ul className="mt-7">
              <li className="my-2 md:text-base text-sm flex md:items-center items-start">
                <span>
                  <CheckIcon className="text-white bg-orange-300 md:w-5 md:h-5 h-4  w-4 rounded-full md:mr-3 mr-2 " />{" "}
                </span>
                Easily add relevant information about your clients
              </li>
              <li className="my-2 md:text-base text-sm flex md:items-center items-start">
                <span>
                  <CheckIcon className="text-white bg-orange-300 md:w-5 md:h-5 h-4  w-4 rounded-full md:mr-3 mr-2 " />{" "}
                </span>
                A template to follow and get customer insights
              </li>
              <li className="my-2 md:text-base text-sm flex md:items-center items-start">
                <span>
                  <CheckIcon className="text-white bg-orange-300 md:w-5 md:h-5 h-4  w-4 rounded-full md:mr-3 mr-2 " />{" "}
                </span>
                Easily customizable
              </li>
            </ul>
            <div className="md:pt-11 py-11">
              <DefaultButton size="lg">Get the template</DefaultButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithThisTemplateYouCan;
