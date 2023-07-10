"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Consulting from "./consulting/consulting";
import GetMoreLeads from "./getmoreleads/getmoreleads";
import Introduce from "./introduce/introduce";
import TrustedBy from "./trustedby/trustedby";

const HomePage = () => {
  return (
    <main className="App">
      <ThemeProvider>
        <Introduce />
        <TrustedBy />
        <GetMoreLeads />
        <div className="my-32 bg-[#F3F7FB]">
          <Consulting />
        </div>
      </ThemeProvider>
    </main>
  );
};

export default HomePage;
