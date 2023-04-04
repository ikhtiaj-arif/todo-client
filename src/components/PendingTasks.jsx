import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaCalendarAlt,
  FaRegCalendarAlt,
  FaRegClock,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/userContext";
import ConfirmationModal from "./ConfirmationModal";

const PEndingTasks = () => {
  const { user } = useContext(AuthContext);
  // const [tasks, setTasks] = useState();
  const [showModal, setShowModal] = useState();
  const [loading, setLoading] = useState(true);

  const [deleteDoc, setDeleteDoc] = useState(null);
  const closeModal = () => {
    setDeleteDoc(null);
  };
  //   console.log(user.email);

  const url = `http://localhost:5000/todos?email=${user?.email}`;
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["Todos", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("todo-user-token")}`,
        },
      });
      const data = res.json();

      return data;
    },
  });

  const handleTodoDelete = (task) => {
    const url = `http://localhost:5000/todo/${task._id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("todo-user-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.success(`Successfully Deleted!`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <div>
      <div className="my-3 flex items-center">
        <FaRegCalendarAlt className="mr-[8px] text-xl" />
        <h2 className="text-white font-semibold text-xl">Pending Tasks</h2>
      </div>
      {tasks.map((task, index) => (
        <div key={task.id + index} setDeleteDoc={task} setTodos={task}>
          <div className=" my-3 p-[1px] rounded-[5px]">
            <div className="bg-tertiary  rounded-[5px]  p-4">
              <h1 className="text-2xl text-gray-200 font-semibold">
                {task.title}
              </h1>
              {task.category ? (
                <>
                  <h3>{task.category}</h3>
                </>
              ) : (
                <></>
              )}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <FaRegClock className="text-md  mr-2" />
                  <p className="">{task.time}</p>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-md mr-2" />
                  <p className=" ">{task.day}</p>
                </div>
              </div>

              <p className="py-2 text-white">{task.text}</p>
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

export default PEndingTasks;
