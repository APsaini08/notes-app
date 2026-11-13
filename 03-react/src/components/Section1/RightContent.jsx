import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {

  console.log("Received users:", props.users)

  return (
    <div id='right' className='h-full flex flex-nowrap gap-10 overflow-x-auto p-6 w-2/3'>
      {props.users.map(function(elem){
        return <RightCard img={elem.img} tag={elem.tag}/>
    })}
    </div>
  )
}

export default RightContent