import React from 'react'
import { useState } from 'react'

const UseStateDemo3 = () => {
    const [users, setUsers] = useState(["shyam", "raj"])
    const addUser = () => {
        setUsers([...users, "abc"])
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Use State Demo 3</h1>
        {
            users.map((user)=>{
                return <li>{user}</li>
            })
        }
        <button onClick={addUser}>push</button>
    </div>
  )
}

export default UseStateDemo3
