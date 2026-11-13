import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  const [title, setTitle]=useState('');
  const [detail, setDetail]=useState('');
  const [task, setTask]=useState([]);

  const submitHandler = (e) =>{
    const copyTask = [...task];
    copyTask.push({title,detail});
    setTask(copyTask);
    e.preventDefault();
    setTitle('');
    setDetail('');
  }
  const deleteNote =(index)=>{
    const copyTask = [...task]
    copyTask.splice(index,1);
    setTask(copyTask);
  }
  return (
    <div className='h-screen bg-black text-white lg:flex'>
      <form onSubmit={(e) => {submitHandler(e)}} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>

          <h1 className='text-3xl font-bold'>Add Notes</h1>

          <input 
          type='text' 
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 border-2 font-medium rounded outline-none'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea 
          type="text"
          placeholder="Write Details"
          className='px-5 w-full h-32 py-2 border-2 font-medium rounded outline-none'
          value={detail}
          onChange={(e)=>setDetail(e.target.value)}/>

          <button className='bg-white w-full text-black px-5 rounded outline-none active:bg-gray-400 active:scale-90'> Add Notes </button>

      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap content-start items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function(elem,index){
              return <div key={index} className='relative h-52 w-40 rounded-xl bg-cover bg-[url("https://imgs.search.brave.com/y5qJODbSkmQbH7QeLcneNu_9rVGAEo1wxqxr1xv8xNw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzcwOS9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw")] text-black p-5'>
                <button onClick={()=>{
                  deleteNote(index)}} className='absolute top-5 right-5 text-xs rounded-full cursor-pointer active:scale-90'><X size={16} strokeWidth={2.75} /></button>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-xm text-gray-500'>{elem.detail}</p>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
