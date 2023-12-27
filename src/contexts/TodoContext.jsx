import axios from 'axios';
import React from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {

    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('')
    const [editingId, setEditingId] = useState(null);
    const [defaultInput, setDefaultInput] = useState('')

    const [isSorted, setIsSorted] = useState(false)


    useEffect(() => {
        fetchTask()
    }, [])

    const sortedTasks = useMemo(() => {
        return [...tasks].sort((x, y) => y.completed - x.completed)
    }, [tasks])


    // console.log('tasks', tasks)
    console.log('sortedTask', sortedTasks)

    // ###### READ ######
    const fetchTask = async () => {
        try {
            const response = await axios.get('http://localhost:7777/todo/read')
            setTasks(response.data.allTask)
        } catch (error) {
            console.log("Error fetching task: ", error)
        }
    }

    const handleSelectEdit = (id) => {
        setEditingId(id)
    }

    const handleCancel = () => {
        setEditingId(null)
    }

    // ###### CREATE ######
    const handleCreateTask = async () => {
        if (taskInput.trim() === '') {
            alert('Please add your task')
        }

        const request = {
            text: taskInput,
            // deadLine:
        }

        const response = await axios.post('http://localhost:7777/todo/create', request)
        // console.log(response)
        setTaskInput('')
        fetchTask()
    }

    // ###### UPDATE ######
    const handleUpdateTask = async (id, updatedText) => {
        const response = await axios.patch(`http://localhost:7777/todo/update/${id}`, { updatedText })
        // console.log(response)
        handleCancel()
        fetchTask()
    }

    const handleCompletedStatus = async (id, status) => {
        const response = await axios.patch(`http://localhost:7777/todo/updateStatus/${id}`, { status })
        fetchTask()
    }

    // ###### DELETE ######
    const handleDeleteTask = async (id) => {
        const response = await axios.delete(`http://localhost:7777/todo/delete/${id}`)
        console.log(response)
        fetchTask()
    }


    return (
        <TodoContext.Provider
            value={{
                tasks, setTasks,
                sortedTasks,
                fetchTask,
                taskInput, setTaskInput,
                handleCreateTask,
                editingId, setEditingId,
                handleSelectEdit,
                handleCancel,
                defaultInput, setDefaultInput,
                handleUpdateTask,
                handleDeleteTask,
                handleCompletedStatus,
                isSorted, setIsSorted
            }}
        >
            {children}
        </TodoContext.Provider >
    )
}
