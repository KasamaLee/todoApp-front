import { useState } from 'react';
import TodoItem from './TodoItem'
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {

    const { tasks, setTasks } = useContext(TodoContext)

    return (
        <div className='flex flex-col gap-8'>

            {tasks.map((taskItem) => {
                return (
                    <TodoItem key={uuidv4()} id={taskItem.id} text={taskItem.text} completed={taskItem.completed} />
                )
            })}

        </div>
    )
}
