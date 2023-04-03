import React, { useState } from "react";
import {
  FaBan,
  FaBell,
  FaCalendarAlt,
  FaClock,
  FaPallet,
  FaPlus,
  FaRegCalendarAlt,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const PendingTasks = () => {
  const tasks = [
    {
      id: "001",
      title: "task-1",
      details:
        "lorem20  ijsda  jsadf  sadfj oidjds asdfoihjo ia osdhf asdfhsdaf osadhfhsd ohsdf oihsdafhsf",
      date: "12-22122",
      time: "121 PM",
    },
    {
      id: "002",
      title: "task-etr1",
      details:
        "lorem20  ijsda  jsadf  sadfj oidjds asdfoihjo ia osdhf asdfhsdaf osadhfhsd ohsdf oihsdafhsf",
      date: "12-22122",
      time: "121 PM",
    },
    {
      id: "003",
      title: "task-e51",
      details:
        "lorem20  ijsda  jsadf  sadfj oidjds asdfoihjo ia osdhf asdfhsdaf osadhfhsd ohsdf oihsdafhsf",
      date: "12-22122",
      time: "121 PM",
    },
    {
      id: "004",
      title: "task-123",
      details:
        "lorem20  ijsda  jsadf  sadfj oidjds asdfoihjo ia osdhf asdfhsdaf osadhfhsd ohsdf oihsdafhsf",
      date: "12-22122",
      time: "121 PM",
    },
  ];

  const [showModal, setShowModal] = useState();
  const [newText, setNewText] = useState();
  const [todos, setTodos] = useState();

  return (
    <div>
      <div className="my-3 flex items-center">
        <FaRegCalendarAlt className="mr-[8px] text-xl" />
        <h2 className="text-white font-semibold text-xl">Pending</h2>
      </div>
      {tasks.map((task, index) => (
        <div key={task.id + index} setTodos={task}>
          <div className="green-pink-gradient my-2 p-[1px] rounded-[5px]">
            <div className="bg-tertiary  rounded-[5px]  p-4">
              <div className="flex justify-between items-center">
                <p className="blue-text-gradient ">{task.date}</p>
                <h1 className="text-xl text-gray-200 font-semibold">
                  {task.title}
                </h1>

                <p className="blue-text-gradient ">{task.time}</p>
              </div>

              <p className="py-2">{task.details}</p>
              <div className="flex justify-between items-center">
                <div className="btn">
                  <Link to={`/task/${task}`} state={{ task }}>
                    Update
                  </Link>
                </div>
                <FaTrash />
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal showModal={showModal} setShowModla={setShowModal}>
        <form className="w-[350px] md:w-[500px] p-5 rounded-md bg-white outline-none">
          <div className="text">
            <h3 className="font-medium text-2xl text-gray-600">Update Todo!</h3>
            <div>
              <input
                type="text"
                className="w-full  px-1 bg-white border-b-2 mt-2 my-1"
                // value={task.title}
                placeholder="Todo Title"
                disabled
              />
            </div>
            <input
              className="w-full py-[1rem] px-1 bg-white border-none"
              type="text"
              //   value={task.text}
              //   placeholder={task.text}
              onChange={(e) => setNewText(e.target.value)}
            />
          </div>

          <div className="flex mt-1 mb-3 items-center text-gray-500 font-medium">
            <FaBell className="text-lg mr-[8px]" />
            <p>remind me</p>
          </div>

          <div className="px-[1rem] py-2 border-b-2">
            <div className="flex items-center text-gray-500 font-medium">
              <FaCalendarAlt className="text-lg mr-[8px]" />
              <p>Chose A day</p>
            </div>
          </div>

          <div className="px-[1rem] py-2 border-b-2 text-gray-500 font-medium">
            <div className="flex items-center">
              <FaClock className="text-lg mr-[8px]" />
              <p>Chose A time</p>
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
          <div
            className="top-[5px] right-[8px] text-2xl text-red-600 cursor-pointer absolute"
            onClick={() => setShowModal(false)}
          >
            <FaBan />
          </div>
          <div className="bg-tertiary absolute left-0 mt-[-20px] rounded-b-md h-[3rem] w-full flex items-center justify-center">
            <FaPlus className="text-lg text-cyan-500 mr-[8px]" />
            <button> Update The Todo</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default PendingTasks;
