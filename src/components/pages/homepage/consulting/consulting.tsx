import { TextColor } from "@/lib/customColorFunc";
import { Typography } from "@material-tailwind/react";

const Consulting = () => {
  return (
    <section className="bg-[url('/assets/images/home-im-consultant-bg.svg')] bg-center bg-contain bg-no-repeat py-32 bg-[#F3F7FB] my-14">
      <div className=" container">
        <div className="grid place-items-center bg-white max-w-xl mx-auto rounded-lg overflow-clip">
          <div className="bg-blue-500 h-1 w-full "></div>
          <span className="px-10 py-14">
            <Typography variant="h2">
              <TextColor>
                Consulting Is More Than <br /> Giving Advice
              </TextColor>
            </Typography>
            <div className="my-6">
              <strong>I Give My Own Dedicated Time And Execute</strong>
            </div>
            <span className="space-y-5 mt-10">
              <p>
                Do you want a senior marketing input without the overhead
                associated with a full-time CMO hire? This is where I come in.
              </p>
              <p>
                50% of my time goes for small companies and the other 50% for
                mid-size ones.
              </p>
              <p>
                As your <strong className="text-blue-400">part-time CMO</strong>
                , I dive in and get to know your business, product, and the
                difficulties you are facing in generating new leads. Then I
                develop a marketing strategy & execute it in a systematic way.
              </p>
              <p>
                I work with you every week for hours to help you build the{" "}
                <TextColor>
                  <strong>marketing department</strong>
                </TextColor>{" "}
                you always wanted. I do it by executing strategic marketing that
                attracts, educates, and then converts your target customers.
              </p>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Consulting;
