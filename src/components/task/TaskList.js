import React from 'react';

import Task from './Task';

const TaskList = ({taskList, handleToggle, handleFilter}) => {

    return (
        <>
            {taskList.map((task, index) => {
                return (
                    <Task 
                          key={index}  
                          id={index}
                          task={task} 
                          handleToggle={handleToggle} handleFilter={handleFilter}
                    />
                )
            })}
        </>
    )
};

export default TaskList;
