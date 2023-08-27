import AuthorSpotLight from "@/components/pages/(free-resources)/buyer-persona-template/author-spotlight";
import BuyerPersonaTemplate from "@/components/pages/(free-resources)/buyer-persona-template/buyer-persona-template";
import TopicsCover from "@/components/pages/(free-resources)/buyer-persona-template/topics-cover";
import WithThisTemplateYouCan from "@/components/pages/(free-resources)/buyer-persona-template/with-this-template-you-can";
import { TextColor } from "@/lib/customColorFunc";
import DefaultButton from "@/shared/button/default-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer persona template for download",
};

const BuyerPersonaTemplatePage = () => {
  return (
    <main className="App">
      <BuyerPersonaTemplate />
      <TopicsCover />
      <WithThisTemplateYouCan />
      <AuthorSpotLight />

      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between my-16">
          <h2 className="text-2xl text-center md:text-start md:text-3xl font-bold my-8 md:my-0">
            <TextColor>Get Your Buyer Persona Templates And Guide.</TextColor>
          </h2>
          <DefaultButton size="lg">Get the template</DefaultButton>
        </div>
      </div>
    </main>
  );
};

export default BuyerPersonaTemplatePage;
