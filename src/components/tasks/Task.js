import React from 'react';

import { Active, Done } from './TaskCss'

const Task = ({task, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }

    return task.done ?
            <Done id={task.id}  
                  key={task.id}
                  name="task"
                  value={task.id}
                  onClick={handleClick}
                  className={"task done"}>
                    {task.title}
            </Done>
            :
            <Active id={task.id}
                    key={task.id}
                    name="task"
                    value={task.id}
                    onClick={handleClick}
                    className={task.done ? "task done" : "task"}>
                      {task.title}
            </Active>

};

export default Task;