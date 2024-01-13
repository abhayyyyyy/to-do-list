import React from "react";
import TableRow from "./tableRow";
import { useState } from "react";

function Table({ data }) {
  // console.log(task);
  // console.log(description);
  console.log(data);

  return (
    <div className="flex justify-items-center justify-center min-h-[20%] h-[auto]">
      <table className="grow  max-w-[60%] max-h-[60%] mt-[55px]   bg-zinc-600 table-auto text-start border-spacing-0 text-1xl uppercase text-white">
        <thead className="bg-zinc-400 text-2xl">
          <tr className="h-[3rem] border-4 border-slate-500 border-solid text-sm lg:text-xl sm:text-lg">
            <th>ID</th>
            <th>Task Number</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="text-center text-4xl lg:text-xl sm:text-7xl py-8 text-1xl">
          {/* <TableRow task={task} description={description} /> */}
          {data.map((item, index) => (
            <TableRow
              key={index}
              task={item.task}
              description={item.description}
            />
          ))}
          <TableRow task={data.task} description={data.description} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
