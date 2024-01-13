import React, { useState } from "react";

const TableRow = ({ task, description }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <tr className="h-[3rem]">
      <td>
        <input
          className="checked:bg-blue-500"
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </td>
      <td
        className="text-sm lg:text-xl sm:text-xl"
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {task}
      </td>

      <td
        className="text-sm lg:text-lg sm:text-lg"
        style={{ textDecoration: isChecked ? "line-through" : "none" }}
      >
        {description}
      </td>
    </tr>
  );
};

export default TableRow;
