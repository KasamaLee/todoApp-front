import { useState } from 'react';
import TodoItem from './TodoItem'
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import CategoryList from './CategoryList';

export default function TodoList() {

    const { tasks, setTasks, sortedTasks, selectedCategory } = useContext(TodoContext)

    return (
        <div className='flex flex-col gap-8'>
            <CategoryList />
            {selectedCategory === 'none' ? (
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
            ) : selectedCategory === 'sorted' ? (
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
                sortedTasks.reverse().map((taskItem) => {
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
