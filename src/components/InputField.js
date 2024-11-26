import React from "react";

function InputField({ value, index, onChange }) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(index, e)}
      className="border rounded p-2 text-center w-full"
      placeholder={`Day ${index + 1}`}
      required
    />
  );
}

export default InputField;
