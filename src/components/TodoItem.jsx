import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSquareCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck as faSquareUncheck } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import UpdateForm from './UpdateForm';
import { useEffect } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import axios from 'axios';


export default function TodoItem({ id, text, completedStatus }) {


    const [isCompleted, setIsCompleted] = useState(completedStatus);
    const { handleSelectEdit, handleCancel, editingId, setEditingId, setDefaultInput, handleDeleteTask, handleCompletedStatus } = useContext(TodoContext);


    const handleToggle = async () => {
        const newCompletedStatus = !isCompleted;
        setIsCompleted(newCompletedStatus);

        handleCompletedStatus(id, newCompletedStatus);
    }

    return (
        <div className='flex items-center gap-4'>
            <div className="p-6 grow flex items-center bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-100 ease-in-out  hover:-translate-y-2 hover:shadow-2xl">
                {editingId === id ? (
                    <div className='grow flex gap-4 items-center'>
                        <UpdateForm defaultText={text} handleCancel={handleCancel} id={id} />
                    </div>
                ) : (
                    <>
                        <div
                            className='grow flex gap-4 items-center cursor-pointer hover:text-green-500 active:text-gray-300'
                            onClick={() => {
                                handleToggle()
                            }}
                        >
                            {isCompleted ? (
                                <FontAwesomeIcon icon={faSquareCheck} size='2x'
                                    className={`text-green-500 active:text-gray-300`}
                                />
                            ) : (
                                <FontAwesomeIcon icon={faSquareUncheck} size='2x'
                                />
                            )}
                            <p className={`${isCompleted && 'line-through'} grow text-lg font-semibold`}>{text}</p>
                        </div>
                        <div className='flex gap-2'>
                            {!completedStatus &&
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    size='xl'
                                    className={`cursor-pointer text-gray-600 hover:text-blue-500 active:text-blue-500`}
                                    onClick={() => {
                                        handleSelectEdit(id)
                                        setDefaultInput(text)
                                    }}
                                />
                            }
                            <FontAwesomeIcon
                                icon={faTrash} size='xl'
                                className={`cursor-pointer text-gray-600 hover:text-red-500 active:text-red-500`}
                                onClick={() => handleDeleteTask(id)}
                            />
                        </div>
                    </>

                )}

            </div>
        </div>
    )
}
