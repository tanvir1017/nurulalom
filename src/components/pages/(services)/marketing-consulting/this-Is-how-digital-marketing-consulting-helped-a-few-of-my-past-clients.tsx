import { TextColor } from "@/lib/customColorFunc";

type fewClientCardDataType = { title: string; desc: string };

const fewClientCardData: fewClientCardDataType[] = [
  {
    title: "8X",
    desc: "Leadgen increased in 6 months",
  },
  {
    title: "$2M",
    desc: "Revenue generated through inbound marketing",
  },
  {
    title: "500%",
    desc: "Conversion rate increased in 2 months",
  },
];

const ThisIsHowDigitalMarketingConsultingHelpedAFewOfMyPastClients = () => {
  return (
    <section className="container">
      <div className="max-w-3xl mx-auto text-center mt-28">
        <h1
          className="md:text-4xl text-2xl font-bold pb-6"
          style={{ lineHeight: "3.3rem" }}
        >
          <TextColor>
            This Is How Digital Marketing Consulting Helped A Few Of My Past
            Clients
          </TextColor>
        </h1>
        <p>
          A lot of people call themselves marketing experts but how many can
          show results?
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <div className="grid md:grid-cols-3 gap-3 ">
          {fewClientCardData.map((item: fewClientCardDataType) => (
            <div key={item.title} className="shadow-lg px-6 py-16">
              <h2 className="md:text-6xl md:font-black text-blue-500 mb-5">
                {item.title}
              </h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThisIsHowDigitalMarketingConsultingHelpedAFewOfMyPastClients;
