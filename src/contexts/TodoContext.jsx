import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
    const [selectedItems, setSelectedItems] = useState(false);

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('')
    const [editingId, setEditingId] = useState(null);
    const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false);
    const [completed, setCompleted] = useState(null);
    const [updateInput, setUpdateInput] = useState()



    useEffect(() => {
        fetchTask()
    }, [])

    console.log(tasks)

    const fetchTask = async () => {
        try {
            const response = await axios.get('http://localhost:7777/todo/read')
            setTasks(response.data.allTask)
        } catch (error) {
            console.log("Error fetching task: ", error)
        }
    }

    const handleInputChange = (e) => {
        setTaskInput(e.target.value)
    }
    // console.log(taskInput)

    const handleSelectEdit = (id) => {
        setEditingId(id)
    }

    const handleCancel = () => {
        setEditingId(null)
    }


    const handleCreateTask = async () => {

        if (taskInput.trim() === '') {
            alert('Please add your task')
        }

        const request = {
            text: taskInput,
            // deadLine:
        }

        const response = await axios.post('http://localhost:7777/todo/create', request)
        setTaskInput('')
        // console.log(response)
    }


    const handleDeleteTask = async (id) => {
        const response = await axios.delete(`http://localhost:7777/todo/delete/${id}`)
        console.log(response)
        fetchTask()
    }


    return (
        <TodoContext.Provider
            value={{
                tasks, setTasks,
                fetchTask,
                taskInput, setTaskInput,
                handleInputChange, handleCreateTask,
                editingId, setEditingId,
                handleSelectEdit,
                handleCancel,
                updateInput, setUpdateInput,
                handleDeleteTask,
                // completed, setCompleted
            }}
        >
            {children}
        </TodoContext.Provider >
    )
}
