import React, { useContext, useState } from "react";
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

import { toast } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/userContext";
import Modal from "./Modal";

const AddNewTodo = () => {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Other");

  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const todo = {
    email: user?.email,
    title,
    time,
    day,
    text,
    category,
  };
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("todo-user-token")}`,
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Todo Successfully confirmed!");
          setShowModal(false);
          window.location.reload();
        }
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>

      <Modal showModal={showModal} setShowModla={setShowModal}>
        <form
          onSubmit={handleSubmit}
          className="w-[350px] md:w-[500px] p-5 rounded-md bg-gray-100 outline-none"
        >
          <div className="text">
            <h3 className="font-medium text-2xl text-tertiary">
              Add New Todo!
            </h3>
            <div>
              <input
                type="text"
                className="w-full px-2 py-1 rounded-md bg-gray-200 text-tertiary border-b-2 mt-2 my-1"
                name="title"
                autoFocus
                placeholder="Todo Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <textarea
              className="w-full py-[1.2rem] text-tertiary px-2 bg-gray-200 border-none"
              type="text"
              name="details"
              placeholder="todo..."
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="flex mt-1 mb-3 items-center text-tertiary font-medium">
            <FaBell className="text-lg mr-[8px]" />
            <p>remind me</p>
          </div>

          <div className="px-[1rem] py-2 border-b-2">
            <div className="flex items-center text-tertiary font-medium">
              <FaCalendarAlt className="text-lg mr-[8px]" />
              <p>Chose A day</p>
            </div>
            <DatePicker
              className="bg-gray-100 text-tertiary"
              selected={day}
              name="date"
              onChange={(day) => setDay(day)}
            />
          </div>

          <div className="px-[1rem] py-2 border-b-2 text-tertiary font-medium">
            <div className="flex items-center">
              <FaClock className="text-lg mr-[8px]" />
              <p>Chose A time</p>
            </div>
            <TimePicker
              className="bg-gray-100 text-tertiary outline-none"
              value={time}
              name="time"
              onChange={(time) => setTime(time)}
            />
          </div>

          <div className="mt-3 mb-8">
            <div className="flex items-center text-tertiary font-medium py-3">
              <FaPallet className="text-lg mr-[8px]" />
              <p>Choose A Category</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card ">
                <div
                  onClick={() => setCategory("Personal")}
                  className={`rounded-[10px] hover:bg-tertiary hover:text-white cursor-pointer py-2 px-5 flex justify-center  ${
                    category === "Personal"
                      ? "bg-tertiary text-white"
                      : "bg-gray-100 text-tertiary "
                  }`}
                >
                  Personal
                </div>
              </div>
              <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card ">
                <div
                  onClick={() => setCategory("Work")}
                  className={`rounded-[10px] hover:bg-tertiary hover:text-white cursor-pointer py-2 px-5 flex justify-center  ${
                    category === "Work"
                      ? "bg-tertiary text-white"
                      : "bg-gray-100 text-tertiary "
                  }`}
                >
                  Work
                </div>
              </div>
              <div className=" green-pink-gradient p-[1px] rounded-[10px] shadow-card ">
                <div
                  onClick={() => setCategory("Other")}
                  className={`rounded-[10px] hover:bg-tertiary hover:text-white cursor-pointer py-2 px-5 flex justify-center  ${
                    category === "Other"
                      ? "bg-tertiary text-white"
                      : "bg-gray-100 text-tertiary "
                  }`}
                >
                  Other
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

          <button
            type="submit"
            className="font-bold text-gray-100 bg-tertiary absolute left-0 mt-[-20px] rounded-b-md h-[3rem] w-full flex items-center justify-center"
          >
            <FaPlus className="text-lg text-cyan-400 mr-[8px]" /> Add The Todo
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
