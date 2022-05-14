import React from 'react';

import styled from "styled-components";

const Task = ({id, task, handleToggle}) => {

    const Active = styled.div`font-weight: bold;`;
    const Done = styled.div`text-decoration: line-through;`;

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id)
    }

    return task.done ?
            <Done 
                  id={task.id}  
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