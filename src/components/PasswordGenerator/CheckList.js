import React from "react";
import CheckListItem from "./CheckListItem";

function CheckList({ generateValue, setGenerateValue }) {
  const handleSizeChange = (event) => {
    setGenerateValue((prevState) => ({
      ...prevState,
      size: parseInt(event.target.value, 10),
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setGenerateValue((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="md:flex-row flex flex-wrap justify-evenly text-white p-6">
      <div className="flex gap-2">
        Size :
        <select
          className="bg-white text-black rounded-sm ring-1 w-10"
          value={generateValue.size}
          onChange={handleSizeChange}
        >
          <option value={12}>8</option>
          <option value={12}>12</option>
          <option value={15}>15</option>
          <option value={18}>18</option>
        </select>
      </div>
      <CheckListItem
        generateValue={generateValue}
        handleCheckboxChange={handleCheckboxChange}
        name={"uppercase"}
      />
      <CheckListItem
        generateValue={generateValue}
        handleCheckboxChange={handleCheckboxChange}
        name={"numbers"}
      />
      <CheckListItem
        generateValue={generateValue}
        handleCheckboxChange={handleCheckboxChange}
        name={"specials"}
      />
    </div>
  );
}

export default CheckList;
