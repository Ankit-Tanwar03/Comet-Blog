import React, { forwardRef, useId } from "react";

const Select = forwardRef(function Select(
  { label, options, className = "", ...props },
  ref
) {
  const id = useId();

  <div>
    {label && <label className="w-full" htmlFor="id"></label>}
    <select
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full 
        ${className}`}
      {...props}
      id={id}
      ref={ref}
    >
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>;
});
export default Select;
