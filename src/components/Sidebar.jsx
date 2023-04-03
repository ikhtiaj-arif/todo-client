import React from "react";
import AddNewTodo from "./AddNewTodo";
import PendingTasks from "./PendingTasks";

const Sidebar = () => {
  return (
    <div className="h-screen w-[350px] mx-auto md:w-[500px] lg:w-[700px] p-5 bg-gray-800">
      <AddNewTodo />
      <hr />
      <PendingTasks />
    </div>
  );
};

export default Sidebar;
