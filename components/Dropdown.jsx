import React from "react";

const Dropdown = ({ months, selectedMonth, handleMonthChange }) => {
  return (
    <select value={selectedMonth} onChange={(e) => handleMonthChange(e.target.value)}>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
