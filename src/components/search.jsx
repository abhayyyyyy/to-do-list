import React, { useState } from "react";
import Table from "./table"; // Assuming you have a Table component

function Search() {
  const [task, setTask] = useState(1);
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  const handleData = () => {
    setTask((prevTask) => prevTask + 1);

    let updatedData = {
      task: task,
      description: description,
    };

    setData((prevData) => [...prevData, updatedData]);

    setDescription("");
  };

  return (
    <>
      <div className="flex justify-items-center justify-center mt-[50px] h-[4rem]">
        <div className="bg-white w-[50%] rounded-lg flex justify-between">
          <input
            className="w-[90%] h-[4rem] ml-[5px] focus:outline-none rounded-lg text-sm lg:text-2xl sm:text-lg"
            type="text"
            value={description}
            placeholder="Enter the task"
            id="fname"
            name="fname"
            onChange={(e) => setDescription(e.target.value)}
          ></input>
          <button
            className="bg-slate-500 h-[4rem] w-[85px] mb-[50px] text-sm border-solid border-4 border-current  lg:text-xl sm:text-lg rounded-lg"
            onClick={() => {
              handleData();
            }}
          >
            Enter
          </button>
        </div>
      </div>
      <Table data={data} />
    </>
  );
}

export default Search;
