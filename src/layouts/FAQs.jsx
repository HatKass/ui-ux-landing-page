import { Question_Answer } from "../constants";
import ExpandableContainer from "../components/ExpandableContainer";

const FAQs = () => {
  return (
    <main className="py-14 space-y-14">
      <div className="space-y-4 lg:grid md:grid grid-cols-5 lg:justify-between lg:px-12 md:justify-between md:px-12">
        <div className="lg:col-span-2  md:col-span-2  lg:mt-8 md:mt-8 space-y-6">
          <h3 className="text-[#EB2891] font-medium text-[14px]">
            Frequently Asked Questions
          </h3>
          <h3 className="font-medium text-[24px] lg:leading-[58px] md:leading-[58px] md:text-[42px] lg:text-[42px] text-[#172026]">
            Let’s clarify some of your questions
          </h3>
          <p className="text-[#36485C] lg:text-lg  md:text-lg  lg:max-w-[463px] md:max-w-[463px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="space-y-4 lg:col-span-3  md:col-span-3">
          {Question_Answer.map((question_answer, index) => (
            <ExpandableContainer key={index} children={question_answer} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQs;
