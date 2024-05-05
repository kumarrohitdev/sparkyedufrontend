import { useState } from "react";
import Userform from "../Userform";

export default function Body() {
  const [isedit, setIsedit] = useState<boolean>(false);

  return (
    <div className="bg-white max-w-6xl mx-auto rounded-md h-auto p-6">
      <div className="flex justify-around items-center">
        <h1 className="lg:text-2xl font-bold bottom-1">USER INFORMATION</h1>
        <button
          className={
            isedit
              ? "hidden"
              : "bg-gray-100 rounded-lg p-2 pl-4 pr-4 lg:block md:hidden"
          }
          onClick={() => setIsedit(true)}
        >
          Edit
        </button>
      </div>
      <Userform isedit={isedit} />
    </div>
  );
}
