import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import taskContext from "../context/taskContext";

const TaskItem = ({ item }) => {
  const { deleteTodo } = useContext(taskContext);
  return (
    <div className="w-full flex justify-around">
      <div className="w-2/3 font-bold tracking-wide text-black text-base bg-slate-50 rounded-lg pt-0.5 hover:scale-110 duration-300">
        <span>{item.todo}</span>
      </div>
      <div className="py-1 px-2 bg-slate-200 rounded-full text-base text-red-600 transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
        <button
          onClick={() => {
            deleteTodo(item._id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
