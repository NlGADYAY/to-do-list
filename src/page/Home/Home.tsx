import React, { useState } from "react";
import { Button } from "../../components/Button/";
import { ItemsTodoList } from "../../components/Item/Todo";
import "./home.css";

export const Home = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleClickAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleClickRemoveTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div className="home">
      <h1 className="todo">To-Do List</h1>
      <input
        className="addTodo"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Todo"
      />
      <Button onClick={handleClickAddTask} type="buttonAdd">
        Add
      </Button>
      <ItemsTodoList tasks={tasks} onRemove={handleClickRemoveTask} />
    </div>
  );
};
