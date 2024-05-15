import { useState } from "react";
import Plus from "../assets/Plus.svg";

const ExpandableContainer = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <div className="bg-[#E3F1FF] p-4 rounded-lg space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[#172026] font-medium">{children.question}</span>
        <button onClick={handleExpand}>
          <img className="w-8" src={Plus} alt="plus" />
        </button>
      </div>
      {expand && <p className="text-[#36485C] ">{children.answer}</p>}
    </div>
  );
};

export default ExpandableContainer;
