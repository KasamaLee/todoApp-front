import { useState } from 'react';
import TodoItem from './TodoItem'

export default function TodoList() {

    const [selectedItems, setSelectedItems] = useState(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            completed: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            completed: false
        }
    ]);

    return (
        <div className='mx-auto flex flex-col gap-6 py-12 w-2/3'>

            <h1 className='text-center font-semibold text-4xl text-gray-700'>Todo List</h1>
            {tasks.map((taskItem) => {
                return (
                    <TodoItem id={taskItem.id} text={taskItem.text} completed={taskItem.completed} />
                )
            })}


        </div>
    )
}
