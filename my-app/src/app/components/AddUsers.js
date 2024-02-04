"use client"
import React,{useState} from 'react'


const AddUsers = () => {
    const [name,setName]=useState("")
    const userDispatch=()=>{
        console.log(name)

    }

  return (
    <div>
        <h1>Users List</h1>
        <input type='text' placeholder='Add new user' onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={userDispatch} >Add User</button>
    </div>
    
  )
}

export default AddUsers