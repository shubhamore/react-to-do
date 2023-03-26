import React from 'react'

import { FaTimes } from "react-icons/fa"

export default function Task(props) {
  return (
    <div className='task'>
        <h2>{props.task}</h2>
        <FaTimes style={{color:"red",cursor:"pointer", fontSize:"25px",minWidth:"25px"}} onClick={()=>props.deleteTask(props.id)} />
    </div>
  )
}
