import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
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
        <TodoContext.Provider
            value={{
                tasks, setTasks
            }}
        >
            {children}
        </TodoContext.Provider >
    )
}
