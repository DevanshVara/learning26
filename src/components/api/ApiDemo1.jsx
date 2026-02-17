import React, { useState } from 'react'
import axios from "axios"

const ApiDemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getUsers = async () => {
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response);
        console.log(response.data);
        console.log(response.data.message);
        setmessage(response.data.message);
        console.log(response.data.data);
        setusers(response.data.data);
    }
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>API DEMO 1</h1>
        <button onClick={() => {getUsers()}}>GET</button>
        <h1>MESSAGE = {message}</h1>
        {
            users.map((user) => {
                return <li>{user.name}</li>
            })
        }
    </div>
  )
}

export default ApiDemo1
