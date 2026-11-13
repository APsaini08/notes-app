import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-80 bg-red-500 rounded-4xl '>
        <img className='h-full w-full object-cover' src={props.img}/>
        <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
            <div>
                <p  className='text-lg w-[90%] leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptate architecto recusandae ea quisquam odio numquam rerum, voluptas inventore unde.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default RightCard