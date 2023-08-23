import Image from "next/image";

const AuthorSpotLight = () => {
  return (
    <section className="bg-[url('/assets/images/buyer-persona-template/marketing-consultant-lookinig.jpg')]  bg-no-repeat bg-fixed bg-cover">
      <div className="backdrop-opacity-10 backdrop-blur-xl bg-[#8295a4]/50 md:py-32 py-16">
        <div className="max-w-4xl mx-auto relative md:overflow-visible overflow-clip">
          <div className="md:container">
            <Image
              src="/assets/images/buyer-persona-template/najm-1.jpg.webp"
              alt="Author spotlight picture"
              width={220}
              height={100}
              className="md:inline md:relative md:-mt-[18rem] ml-auto"
            />

            <div className="inline-block bg-white p-5 md:w-[30.375rem]  md:h-[15rem] md:-ml-10 -z-20 relative mx-5 ">
              <div className="md:ml-16 text-center md:text-start">
                <h2 className="text-2xl font-bold py-6">Author Spotlight</h2>
                <p>
                  Hello! If this helps, do share it with a friend who might need
                  it as well. Best of luck with your marketing and may God be
                  with you.
                </p>

                <h4 className="text-blue-500 text-3xl font-bold pt-6">Najm</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotLight;
