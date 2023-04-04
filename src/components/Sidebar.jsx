import React from "react";
import AddNewTodo from "./AddNewTodo";
import PEndingTasks from "./PendingTasks";

const Sidebar = () => {
  return (
    <div className="h-screen w-[350px] mx-auto md:w-[500px] lg:w-[700px] p-5 bg-gray-800">
      <AddNewTodo />
      <PEndingTasks />
    </div>
  );
};

export default Sidebar;
