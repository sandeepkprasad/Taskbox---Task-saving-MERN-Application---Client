import { useState } from "react";
import taskContext from "./taskContext";

const TaskState = (props) => {
  const [mode, setMode] = useState("light");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState([]);

  const getUser = async () => {
    let url = "https://taskbox-backend.onrender.com/auth/getuser";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("taskbox-token"),
      },
    });

    const json = await response.json();
    setUser(json);
  };

  const getTodo = async () => {
    let url = "https://taskbox-backend.onrender.com/todo/gettodo";

    setLoading(true);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("taskbox-token"),
      },
    });

    const json = await response.json();
    setLoading(false);
    setTodo(json);
  };

  const addTodo = async (task) => {
    let url = "https://taskbox-backend.onrender.com/todo/addtodo";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("taskbox-token"),
      },
      body: JSON.stringify({ todo: task }),
    });

    const json = await response.json();
    setTodo(todo.concat(json));
  };

  const deleteTodo = async (id) => {
    let url = `https://taskbox-backend.onrender.com/todo/deletetodo/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("taskbox-token"),
      },
    });

    // eslint-disable-next-line
    const json = await response.json();

    const newTodo = todo.filter((item) => {
      return item._id !== id;
    });

    setTodo(newTodo);
  };

  const setUIMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#154360";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <taskContext.Provider
      value={{
        mode,
        setUIMode,
        user,
        getUser,
        todo,
        getTodo,
        loading,
        addTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
