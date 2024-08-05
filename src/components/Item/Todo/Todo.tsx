import React from 'react';
import {Item} from '../Item';
import { Button} from '../../Button'; 

interface IItemsTodoList {
  tasks: string[];
  onRemove: (index: number) => void;
}

export const ItemsTodoList = ({ tasks, onRemove }: IItemsTodoList) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li className="lot" key={index}>
          <Item task={task} />
          <Button onClick={() => onRemove(index)} type="buttonRemove">
            Remove
          </Button>
        </li>
      ))}
    </ul>
  );
};
