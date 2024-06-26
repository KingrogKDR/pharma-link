import { useState } from "react";

function Symptoms() {
  const [checkboxes, setCheckboxes] = useState({
    headache: false,
    nausea: false,
    dizziness: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };
  return (
    <div className="text-gray-600">
      <label className="block">
        <input
          type="checkbox"
          name="headache"
          checked={checkboxes.headache}
          onChange={handleChange}
          className="mr-2"
        />
        Headache
      </label>
      <label className="block">
        <input
          type="checkbox"
          name="nausea"
          checked={checkboxes.nausea}
          onChange={handleChange}
          className="mr-2"
        />
        Nausea
      </label>
      <label className="block">
        <input
          type="checkbox"
          name="dizziness"
          checked={checkboxes.dizziness}
          onChange={handleChange}
          className="mr-2"
        />
        Dizziness
      </label>
    </div>
  );
}

export default Symptoms;
