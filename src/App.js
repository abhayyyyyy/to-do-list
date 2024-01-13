import React from "react";
import "./tailwind.css";
import Search from "./components/search";

function App() {
  return (
    <div className="bg-zinc-700 w-full h-screen">
      <h1 className="text-center text-5xl lg:text-8xl sm:text-7xl uppercase text-white">
        To-do List
      </h1>
      <Search />
    </div>
  );
}

export default App;
