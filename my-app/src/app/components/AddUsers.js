"use client"
import {useState} from 'react'
import {addUser} from "../redux/slice.js"
import { useDispatch } from 'react-redux'
const AddUsers = () => {
    const [name,setName]=useState("")
    const dispatch =useDispatch();
    const userDispatch=()=>{
      dispatch(addUser(name))
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