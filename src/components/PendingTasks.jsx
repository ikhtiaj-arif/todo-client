import React, { useState } from "react";
import { FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";
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
  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal = () => {
    setDeleteDoc(null);
  };

  const handleTodoDelete = (id) => {
    console.log("deleted", id);
  };

  return (
    <div>
      <div className="my-3 flex items-center">
        <FaRegCalendarAlt className="mr-[8px] text-xl" />
        <h2 className="text-white font-semibold text-xl">Pending</h2>
      </div>
      {tasks.map((task, index) => (
        <div key={task.id + index} setDeleteDoc={task} setTodos={task}>
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
                  <Link to={`/task/${task.id}`} state={{ task }}>
                    Update
                  </Link>
                </div>
                <button>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeleteDoc(task)}
                    className="btn"
                  >
                    <FaTrash />
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {deleteDoc && (
        <ConfirmationModal
          handleDeleteDoc={handleTodoDelete}
          deleteDoc={deleteDoc}
          cancel={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default PendingTasks;
