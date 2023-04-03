import React, { useState } from "react";
import {
  FaBan,
  FaBell,
  FaCalendarAlt,
  FaCheck,
  FaClock,
  FaPallet,
} from "react-icons/fa";
import Modal from "./Modal";

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState();

  const [text, setText] = useState("");

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>+ New Todo</button>
      </div>

      <Modal showModal={showModal} setShowModla={setShowModal}>
        <form>
          <div className="text">
            <h3>Add New Todo!</h3>
            <input
              type="text"
              value={text}
              placeholder="todo..."
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="remind">
            <FaBell />
            <p>remind me</p>
          </div>
          <div className="pick-day">
            <div>
              <FaCalendarAlt />
              <p>Chose A day</p>
            </div>
            date picker
          </div>
          <div className="pick-time">
            <div>
              <FaClock />
              <p>Chose A day</p>
            </div>
            time picker
          </div>
          <div className="pick-category">
            <div className="title">
              <FaPallet />
              <p>Choose A Category</p>
            </div>
            <div className="category">
              <div className="project active">Personal</div>

              <div className="project">Work</div>
            </div>
          </div>
          <div className="cancel" onClick={() => setShowModal(false)}>
            <FaBan />
          </div>
          <div className="confirm flex items-center">
            <FaCheck />
            <button> Add The Todo</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewTodo;
