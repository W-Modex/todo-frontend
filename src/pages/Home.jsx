import React from 'react'
import TodoList from '../components/Todos/TodoList'
import AddTask from '../components/AddTask/AddTask'

const Home = () => {
  
  return (
    <div className='w-full min-h-[100vh] bg-[#e6e6e6] dark:text-white dark:bg-[#202c37]'>
      <div className='max-w-[1400px] m-auto'>
      <AddTask />
      <TodoList />
      </div>
    </div>
  )
}

export default Home