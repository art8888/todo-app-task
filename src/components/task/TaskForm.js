import React, { useState } from 'react';

import { Input, Button } from './TaskCss'

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
            <Input value={task} 
                   type="text"
                   onChange={handleChange}
                   placeholder="Enter task"
            />
            <Button>Add</Button>
        </form>
    );
};

export default TaskForm;