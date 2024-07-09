import { useState } from "react";

function Selection() {
  const [checkboxes, setCheckboxes] = useState({
    yes: false,
    no: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
  };
  return (
    <div>
      <label className="block">
        <input
          type="checkbox"
          name="yes"
          checked={checkboxes.yes}
          onChange={handleChange}
          className="mr-2"
        />
        Yes
      </label>
      <label className="block">
        <input
          type="checkbox"
          name="no"
          checked={checkboxes.no}
          onChange={handleChange}
          className="mr-2"
        />
        No
      </label>
    </div>
  );
}

export default Selection;
