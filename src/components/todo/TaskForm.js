import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');
    
    const handleChange = (e) => {
        setTask(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={task} 
                   type="text"
                   onChange={handleChange}
                   placeholder="Enter task"
            />
            <button>Add</button>
        </form>
    );
};

export default TaskForm;