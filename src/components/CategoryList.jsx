import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default function CategoryList() {

    const { isSorted, setIsSorted  } = useContext(TodoContext)


    return (
        <div className='flex items-center justify-center gap-4'>
            <p>sort by:</p>
            <div
                className={`border-2 border-gray-500 text-sm px-3 py-1 rounded-full font-medium cursor-pointer hover:opacity-50 ${isSorted ? 'bg-gray-500 text-white border-gray-500' : ''}`}
                onClick={() => {
                    setIsSorted(!isSorted)
                }}
            >
                completed
            </div>

        </div>
    )
}
