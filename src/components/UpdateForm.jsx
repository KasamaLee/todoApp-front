import React from 'react'
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { useState } from 'react';
import axios from 'axios';

export default function UpdateForm({ handleCancel, id }) {

    const { defaultInput, handleUpdateTask } = useContext(TodoContext);
    const [updatedInput, setUpdatedInput] = useState(defaultInput)

    const handleInputUpdateChange = (e) => {
        setUpdatedInput(e.target.value)
    }

    return (
        <div className='grow flex gap-1'>
            <input
                id='text'
                placeholder={'Update task'}
                type='text'
                value={updatedInput}
                maxLength={40}
                className='grow ring-2 ring-gray-400 rounded p-3 w-full'
                onChange={handleInputUpdateChange}
            />

            <button
                className={`text-white px-4 py-2 ${defaultInput === updatedInput ? 'bg-gray-300' : 'bg-green-500 '} rounded-3xl flex justify-center items-center gap-1 hover:opacity-60`}
                disabled={defaultInput === updatedInput}
                onClick={() => handleUpdateTask(id, updatedInput)}
            >
                Update
            </button>

            <button
                className='text-white px-4 py-2 bg-red-500 rounded-3xl flex justify-center items-center gap-1 hover:opacity-60'
                onClick={handleCancel}
            >
                Cancel
            </button>
        </div>
    )
}
