import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaCalendarAlt, FaClock, FaPallet, FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const TaskUpdate = () => {
  const state = useLocation();
  const todo = state?.state?.task;
  console.log(todo);
  const [newText, setNewText] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateDoc = { text: newText };
    console.log(updateDoc);
    const url = `https://todo-server-lake.vercel.app/todo/${todo?._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("todo-user-token")}`,
      },
      body: JSON.stringify(updateDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Updated!");
          navigate("/todos");
        }
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="h-screen w-[450px] mx-auto md:w-[600px] lg:w-[700px] p-5 bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="relative w-[400px] md:w-[500px] mx-auto p-5 rounded-md bg-gray-100 outline-none"
      >
        <div className="text">
          <h3 className="font-medium text-2xl text-tertiary">Update Todo!</h3>
          <div>
            <input
              type="text"
              className="w-full px-2 py-1 rounded-md bg-gray-200 text-tertiary border-b-2 mt-2 my-1"
              defaultValue={todo.title}
              placeholder="Todo Title"
              disabled
            />
          </div>
          <textarea
            className="w-full py-[1.2rem] text-tertiary px-2 bg-gray-200 border-none rounded-md"
            type="text"
            defaultValue={todo.text}
            placeholder={todo.text}
            autoFocus
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>

        <div className="px-[1rem] py-2 border-b-2">
          <div className="flex items-center text-tertiary font-medium">
            <FaCalendarAlt className="text-lg mr-[8px]" />
            <p>{todo.day}</p>
          </div>
        </div>

        <div className="px-[1rem] py-2 border-b-2 text-gray-500 font-medium">
          <div className="flex items-center text-tertiary font-medium">
            <FaClock className="text-lg mr-[8px]" />
            <p>{todo.time}</p>
          </div>
        </div>

        <div className="mt-3 mb-8">
          <div className="flex items-center text-tertiary font-medium py-3">
            <FaPallet className="text-lg mr-[8px]" />
            <p> Category</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card ">
              <div
                className={`rounded-[10px] cursor-pointer py-2 px-5 flex justify-center  
                  
                     bg-gray-100 text-tertiary 
                `}
              >
                {todo.category}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-tertiary absolute left-0 mt-[-20px] rounded-b-md h-[3rem] w-full flex items-center justify-center">
          <FaPlus className="text-lg text-cyan-500 mr-[8px]" />
          <button type="submit"> Update The Todo</button>
        </div>
      </form>
    </div>
  );
};

export default TaskUpdate;
