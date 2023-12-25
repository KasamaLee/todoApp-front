import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='bg-gray-50 h-screen'>
      <div className='mx-auto flex flex-col gap-16 py-12 w-2/3'>

        <h1 className='text-center font-semibold text-4xl text-gray-700'>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
