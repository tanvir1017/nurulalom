import Consulting from "./consulting/consulting";
import GetMoreLeads from "./getmoreleads/getmoreleads";
import Introduce from "./introduce/introduce";
import TrustedBy from "./trustedby/trustedby";

const HomePage = () => {
  return (
    <main className="App">
      <>
        <Introduce />
        <TrustedBy />
        <GetMoreLeads />
        <div className="my-32 bg-[#F3F7FB]">
          <Consulting />
        </div>
      </>
    </main>
  );
};

export default HomePage;
