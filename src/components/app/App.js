import React, { useState } from 'react';

import data from '../../utils/data.json';

import Header from '../header';
import Footer from '../footer';
import TaskList from '../task/TaskList';
import TaskForm from '../task/TaskForm';

function App() {

    const [taskList, setTaskList] = useState(data);

    const handleToggle = (id) => {
        let mapped = taskList.map(task => {
            return task.id === Number(id) ? { ...task, done: !task.done } : { ...task };
        });
        setTaskList(mapped);
    }

    const handleFilter = () => {
        let filtered = taskList.filter(task => {
            return !task.done;
        });
        setTaskList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...taskList];
        copy = [...copy, {id: taskList.length + 1, title: userInput, done: false }];
        setTaskList(copy);
    }

    const total = taskList.length;

    return (
        <div className='Tasks'>
            <Header />
            <TaskForm addTask={addTask} />
            <TaskList taskList={taskList} handleToggle={handleToggle} handleFilter={handleFilter} />
            <Footer total={total} />
        </div>
    )
}

export default App;
