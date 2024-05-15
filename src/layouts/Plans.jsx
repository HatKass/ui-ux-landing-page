import { Check } from "lucide-react";
import check from "../assets/check.svg";

const Plans = () => {
  return (
    <main className="py-14 space-y-14">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-center text-2xl text-[#172026] font-medium ">
            Flexible plans for you
          </h3>
          <h2 className="text-center text-[#36485C] ">No hidden fees!</h2>
        </div>
        <div className="space-y-6 lg:space-y-0 md:space-y-0 lg:grid md:grid gap-x-6 grid-cols-3 lg:px-12 md:px-12">
          <div className="bg-[#F5F4FF] flex flex-col justify-between rounded-lg p-6 space-y-4 lg:space-y-0 md:space-y-0 ">
            <div className="space-y-4">
              <div>
                <h3 className="text-[#4328EB] font-medium text-[18px]">
                  Free Trial
                </h3>
                <p className="text-[#36485C] mt-3 ">
                  Perfect for testing the waters
                </p>
              </div>
              <p className="text-[#172026] font-medium text-2xl">
                $0
                <span className="text-[#5F7896] font-medium text-2xl">/mo</span>
              </p>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-4">
                  <Check size={20} />
                  <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <Check size={20} />
                  <span>Sed do eiusmod tempor incididunt</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <Check size={20} />
                  <span>Consectetur adipiscing elit</span>
                </div>
              </div>
            </div>
            <button className="bg-white px-[30px] py-[14px]  rounded text-[#4328EB] font-medium w-full">
              Start Trial
            </button>
          </div>
          <div className="space-y-4 rounded-lg p-6 bg-[#4328EB] text-white">
            <div>
              <h3 className=" font-medium text-[18px]">Business</h3>
              <p className="text-[#FF8FA]  mt-3">
                Perfect for small businesses
              </p>
            </div>
            <p className=" font-medium text-2xl">
              $500
              <span className=" font-medium text-2xl">/mo</span>
            </p>
            <div className="flex flex-col gap-y-2 text-[#F4F8FA]">
              <div className="flex items-center gap-x-4">
                <Check size={20} />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center gap-x-4">
                <Check size={20} />

                <span>Sed do eiusmod tempor incididunt</span>
              </div>
              <div className="flex items-center gap-x-4">
                <Check size={20} />

                <span>Lorem ipsum dolor sit amet</span>
              </div>
              <div className="flex items-center gap-x-4">
                <Check size={20} />

                <span>Consectetur adipiscing elit</span>
              </div>
              <div className="flex items-center gap-x-4">
                <Check size={20} />

                <span>Sed do eiusmod tempor incididunt</span>
              </div>
            </div>
            <button className="bg-white px-[30px] py-[14px] rounded text-[#4328EB] font-medium w-full">
              Get Started
            </button>
          </div>
          <div className="bg-[#F5F4FF]  flex flex-col justify-between  rounded-lg p-6 space-y-4 lg:space-y-0 md:space-y-0">
            <div className="space-y-4">
              <div>
                <h3 className="text-[#4328EB] font-medium text-[18px]">
                  Enterprise
                </h3>
                <p className="text-[#36485C] mt-3 ">
                  Perfect for big companies
                </p>
              </div>
              <p className="text-[#172026] font-medium text-2xl">Custom</p>
              <p className="text-[#36485C] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <p className="text-[#36485C]">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </p>
            </div>
            <button className="bg-white px-[30px] py-[14px] rounded text-[#4328EB] font-medium w-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Plans;
