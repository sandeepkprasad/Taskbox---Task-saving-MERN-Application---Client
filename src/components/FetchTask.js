import React, { useContext, useEffect } from "react";
import TaskItem from "./TaskItem";
import taskContext from "../context/taskContext";

const FetchTask = () => {
  const { todo, getTodo, loading } = useContext(taskContext);

  useEffect(() => {
    if (localStorage.getItem("taskbox-token")) {
      getTodo();
    }
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="h-[50vh] font-bold text-xl text-center tracking-wider">
        <span>
          {localStorage.getItem("taskbox-token")
            ? "Loading..."
            : "Please Login"}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-auto flex justify-center py-10">
      <div className="w-full md:w-1/3 text-center space-y-5 border-2 border-slate-100 bg-rose-200 rounded-lg py-5 mx-5 md:mx-0">
        {todo &&
          todo
            .slice(0)
            .reverse()
            .map((currItem) => {
              return <TaskItem item={currItem} key={currItem._id} />;
            })}
      </div>
    </div>
  );
};

export default FetchTask;
