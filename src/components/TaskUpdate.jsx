import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaPallet, FaPlus } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const TaskUpdate = () => {
  const todo = useLocation();
  const { state } = todo;
  console.log(state);
  const [newText, setNewText] = useState();

  return (
    <form className="w-[350px] md:w-[500px] p-5 rounded-md bg-white outline-none">
      <div className="text">
        <h3 className="font-medium text-2xl text-gray-600">Update Todo!</h3>
        <div>
          <input
            type="text"
            className="w-full  px-1 bg-white border-b-2 mt-2 my-1"
            value={state.title}
            placeholder="Todo Title"
            disabled
          />
        </div>
        <textarea
          className="w-full py-[1rem] px-1 bg-white border-none"
          type="text"
          value={state.details}
          placeholder={state.details}
          onChange={(e) => setNewText(e.target.value)}
        />
      </div>

      <div className="px-[1rem] py-2 border-b-2">
        <div className="flex items-center text-gray-500 font-medium">
          <FaCalendarAlt className="text-lg mr-[8px]" />
          <p>{state.date}</p>
        </div>
      </div>

      <div className="px-[1rem] py-2 border-b-2 text-gray-500 font-medium">
        <div className="flex items-center">
          <FaClock className="text-lg mr-[8px]" />
          <p>{state.time}</p>
        </div>
      </div>

      <div className="mt-3 mb-8">
        <div className="flex items-center text-gray-500 font-medium py-3">
          <FaPallet className="text-lg mr-[8px]" />
          <p>Choose A Category</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card">
            <div className="bg-white text-gray-600 rounded-[10px] hover:bg-tertiary hover:text-white cursor-pointer py-2 px-5 flex justify-center">
              Personal
            </div>
          </div>
          <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card">
            <div className="bg-white text-gray-600 rounded-[10px] py-2 px-5 flex justify-center">
              Work
            </div>
          </div>
        </div>
      </div>

      <div className="bg-tertiary absolute left-0 mt-[-20px] rounded-b-md h-[3rem] w-full flex items-center justify-center">
        <FaPlus className="text-lg text-cyan-500 mr-[8px]" />
        <button> Update The Todo</button>
      </div>
    </form>
  );
};

export default TaskUpdate;
