import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  const handleEdit = (taskId) => {
    const updatedTask = prompt('Edit your task');
    if (updatedTask) {
      dispatch(editTask(taskId, updatedTask));
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
          <button onClick={() => handleToggle(task.id)}>Toggle</button>
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
