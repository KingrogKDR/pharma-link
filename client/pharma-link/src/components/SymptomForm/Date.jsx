import { useState } from "react";

function Date() {
  const [meridiem, setMeridiem] = useState("PM");

  const handleMeridiemChange = (event) => {
    setMeridiem(event.target.value)
  }

  return (
    <div className="sm:flex items-center my-6 text-gray-600">
      <div className="sm:w-[60%] mb-6 sm:mb-0">
        <input
          type="date"
          className="w-[70%] h-[15px] border-2 border-gray-400 px-8 py-6 text-gray-400 rounded-lg"
        />
        <p className="mt-3 text-sm hidden sm:flex">Date</p>
      </div>
      <div className="pb-9">
        <select
          value={meridiem}
          onChange={handleMeridiemChange}
          className="h-[15px] border-2 border-gray-400 px-8 py-6 rounded-lg bg-white"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
}

export default Date;
