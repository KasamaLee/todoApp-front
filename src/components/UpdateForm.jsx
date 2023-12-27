import React from 'react'
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useState } from 'react';
import axios from 'axios';

export default function UpdateForm({ handleCancel, defaultText, id }) {

    const { handleCreateTask, fetchTask } = useContext(TodoContext);

    const [updateInput, setUpdateInput] = useState(defaultText)
    console.log(defaultText)
    console.log(updateInput)
    console.log(id)

    const handleInputUpdateChange = (e) => {
        setUpdateInput(e.target.value)
    }

    const handleUpdateTask = async () => {
        const request = {
            text: updateInput,
            // deadLine:
        }
        const response = await axios.patch(`http://localhost:7777/todo/update/${id}`, request)
        console.log(response)
        handleCancel()
        fetchTask()
    }


    return (
        <div className='grow flex'>
            <input
                id='text'
                placeholder={'Update task'}
                type='text'
                value={updateInput}
                maxLength={40}
                className='grow ring-2 ring-gray-400 rounded p-3 w-full'
                onChange={handleInputUpdateChange}
            />
            {defaultText === updateInput ? (
                <button
                    className='text-white px-4 py-2 bg-gray-300 rounded-3xl flex justify-center items-center gap-1'
                >
                    Update
                </button>

            ) : (
                <button
                    className='text-white px-4 py-2 bg-green-500 rounded-3xl flex justify-center items-center gap-1 hover:opacity-60'
                    onClick={handleUpdateTask}
                >
                    Update
                </button>
            )}
            <button
                className='text-white px-4 py-2 bg-red-500 rounded-3xl flex justify-center items-center gap-1 hover:opacity-60'
                onClick={handleCancel}
            >
                Cancel
            </button>
        </div>
    )
}
