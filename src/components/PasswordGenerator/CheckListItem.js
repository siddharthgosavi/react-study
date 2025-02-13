import React from "react";

function CheckListItem({ generateValue, handleCheckboxChange, name }) {
  return (
    <div className="flex items-center gap-2">
      {name}{" "}
      <input
        type="checkbox"
        name={name}
        checked={generateValue[name]}
        onChange={handleCheckboxChange}
        className="form-checkbox w-[20px] h-[20px]"
      />
    </div>
  );
}

export default CheckListItem;
