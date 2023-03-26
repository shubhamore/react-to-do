import React from 'react'
import Task from "./Task"

export default function Tasks(props) {
  return (
    <div className='tasks'>
        {/* <h2>Task List</h2> */}
        {props.tasks.map(i=><Task task={i.task} key={i.id} id={i.id} deleteTask={props.deleteTask}/>)}
    </div>
  )
}
