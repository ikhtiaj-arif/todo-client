import React, { useState } from "react";
import "react-clock/dist/Clock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

import {
  FaBan,
  FaBell,
  FaCalendarAlt,
  FaClock,
  FaPallet,
  FaPlus,
} from "react-icons/fa";

import Modal from "./Modal";

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState();

  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  console.log(day);

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>

      <Modal showModal={showModal} setShowModla={setShowModal}>
        <form className="w-[500px] p-5 rounded-md bg-white outline-none">
          <div className="text">
            <h3 className="font-medium text-2xl text-gray-600">
              Add New Todo!
            </h3>
            <input
              className="w-full py-[1rem] px-1 bg-white border-none"
              type="text"
              value={text}
              placeholder="todo..."
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex mb-3 items-center text-gray-500 font-medium">
            <FaBell className="text-lg mr-[8px]" />
            <p>remind me</p>
          </div>

          <div className="px-[1rem] py-2 border-b-2">
            <div className="flex items-center text-gray-500 font-medium">
              <FaCalendarAlt className="text-lg mr-[8px]" />
              <p>Chose A day</p>
            </div>
            <DatePicker
              className="bg-white "
              selected={day}
              onChange={(day) => setDay(day)}
            />
          </div>

          <div className="px-[1rem] py-2 border-b-2 text-gray-500 font-medium">
            <div className="flex items-center">
              <FaClock className="text-lg mr-[8px]" />
              <p>Chose A time</p>
            </div>
            <TimePicker
              className="bg-white outline-none"
              value={time}
              onChange={(time) => setTime(time)}
            />
          </div>

          <div className="mt-3 mb-8">
            <div className="flex items-center text-gray-500 font-medium py-3">
              <FaPallet className="text-lg mr-[8px]" />
              <p>Choose A Category</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card">
                <div className="bg-white text-gray-600 rounded-[10px] py-2 px-5 flex justify-center">
                  Personal
                </div>
              </div>
              <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card">
                <div className="bg-white text-gray-600 rounded-[10px] py-2 px-5 flex justify-center">
                  Personal
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
            <button> Add The Todo</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
