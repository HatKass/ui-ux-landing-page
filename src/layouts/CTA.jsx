import arrow from "../assets/arrow.png";

const CTA = () => {
  return (
    <main className="rounded-2xl bg-gradient-to-r from-pink-600 space-y-10 to-blue-400 py-14 px-8 lg:mx-12 md:mx-12 lg:h-[490px] flex flex-col justify-center items-center">
      <h3 className="text-center text-white font-medium lg:text-[56px] leading-[64px] lg:max-w-[628px] text-[32px] ">
        Monitor your website like a pro
      </h3>
      <p className="text-center text-white lg:text-lg ">
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>
      <div className="lg:flex-row flex flex-col justify-center items-center lg:gap-x-10 gap-y-[32px]">
        <button className="rounded font-medium text-[18px] py-4 px-8 text-[#EB2891] bg-white">
          Try for free
        </button>
        <button className="flex font-medium text-[18px] gap-x-3 text-white">
          Contact Sales
          <img src={arrow} alt="arrow" />
        </button>
      </div>
    </main>
  );
};

export default CTA;
