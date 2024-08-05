import React from "react";
import "./item.css";

interface IItemProps {
  task: string;
}

export const Item: React.FC<IItemProps> = ({ task }) => {
  return <li className="item">{task}</li>;
};
