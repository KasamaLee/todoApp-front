import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSquareCheck, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck as faSquareUncheck } from '@fortawesome/free-regular-svg-icons';


export default function TodoItem({ id, text, completed }) {
    return (
        <div className='flex items-center gap-4'>
            <div className="p-6 grow flex gap-4 items-center bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-100 ease-in-out  hover:-translate-y-2 hover:shadow-2xl">
                {/* <p>{id}</p> */}
                {completed ? (
                    <FontAwesomeIcon icon={faSquareCheck} size='2x'
                        className={`cursor-pointer text-green-500 active:text-gray-300`}
                    // onClick={}
                    />
                ) : (
                    <FontAwesomeIcon icon={faSquareUncheck} size='2x' className={`cursor-pointer hover:text-green-500 active:text-green-500`} />
                )}
                <p className={`${completed && 'line-through'} text-lg font-semibold`}>{text}</p>
            </div>
            <FontAwesomeIcon icon={faEdit} size='xl' className={`cursor-pointer text-gray-600 hover:text-blue-500 active:text-blue-500`} />
            <FontAwesomeIcon icon={faTrash} size='xl' className={`cursor-pointer text-gray-600 hover:text-red-500 active:text-red-500`} />
        </div>
    )
}
