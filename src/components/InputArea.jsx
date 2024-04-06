import React, { useState } from "react";
function InputArea(prop) {
  const [data, setData] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setData(newValue);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={data} />
      <button
        onClick={() => {
          prop.onAdd(data);
          setData("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
