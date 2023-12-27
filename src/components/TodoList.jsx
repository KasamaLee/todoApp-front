import { useState } from 'react';
import TodoItem from './TodoItem'
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import CategoryList from './CategoryList';

export default function TodoList() {

    const { tasks, sortedTasks, isSorted } = useContext(TodoContext)

    console.log(isSorted)

    return (
        <div className='flex flex-col gap-8'>
            <CategoryList />

            {isSorted ? (
                sortedTasks.map((taskItem) => {
                    return (
                        <TodoItem
                            key={uuidv4()}
                            id={taskItem.id}
                            text={taskItem.text}
                            completedStatus={taskItem.completed}
                        />
                    )
                })
            ) : (
                tasks.map((taskItem) => {
                    return (
                        <TodoItem
                            key={uuidv4()}
                            id={taskItem.id}
                            text={taskItem.text}
                            completedStatus={taskItem.completed}
                        />
                    )
                })
            )}




        </div>
    )
}
