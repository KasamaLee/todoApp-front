import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

export default function TodoForm({ defaultText }) {

    const { taskInput, setTaskInput, handleCreateTask } = useContext(TodoContext);

    const handleInputChange = (e) => {
        setTaskInput(e.target.value)
    }
    // console.log(taskInput)

    return (

        <div className='relative w-full'>
            <input
                id='text'
                placeholder={'Add new task'}
                type='text'
                value={taskInput}
                maxLength={40}
                className='ring-2 ring-gray-400 rounded p-3 w-full'
                onChange={handleInputChange}
            />

            <button
                className='absolute right-2 top-1 text-white px-4 py-2 bg-green-500 rounded-3xl flex justify-center items-center gap-1 hover:opacity-60'
                onClick={handleCreateTask}
            >
                Add
            </button>
        </div>


    )
}
