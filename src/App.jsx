import React, { useState } from "react";
import TaskDetails from "./components/TaskDetails";
import CardDropDown from "./components/CardDropDown.";

const App = () => {
  const [page, setPage] = useState(false);
  return (
    <div>
      <>
        <button
          className="btn bg-blue-500 text-white py-2 px-4 fixed right-[-1rem] top-[20rem] rotate-[90deg] rounded"
          onClick={(e) => setPage((e) => !e)}
        >
          {!page ? "TaskDetails"  : "CardDropDown" }
        </button>
      </>
      {page ? <TaskDetails /> : <CardDropDown />}
    </div>
  );
};

export default App;
