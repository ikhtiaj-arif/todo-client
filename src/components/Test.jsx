import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { FaRegCalendarAlt, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/userContext";
import ConfirmationModal from "./ConfirmationModal";

const Test = () => {
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
      refetch();

      return data;
    },
  });
  console.log(tasks);

  const handleTodoDelete = (id) => {
    console.log("deleted", id);
  };

  // useEffect(() => {
  //   console.log(user.email);
  //   fetch(`http://localhost:5000/todos?email=${user?.email}`, {
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `bearer ${localStorage.getItem("todo-user-token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //       setTasks(data);
  //       setLoading(false);
  //     })
  //     .catch((e) => console.log(e));
  // }, [user?.email]);

  //   }

  if (isLoading) {
    return <>loading...</>;
  }
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
                <p className="blue-text-gradient ">{task.day}</p>
                <h1 className="text-xl text-gray-200 font-semibold">
                  {task.title}
                </h1>

                <p className="blue-text-gradient ">{task.time}</p>
              </div>

              <p className="p-2 text-center">{task.text}</p>
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

export default Test;
