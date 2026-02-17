import React, { useState } from 'react'
import axios from "axios"

const ApiDemo2 = () => {
    const [users, setUsers] = useState([])
    const getusers = async () => {
         const res = await axios.get("https://node5.onrender.com/user/user/")
         setUsers(res.data.data)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>API DEMO 2</h1>
        <button onClick={() => {getusers()}}>GET</button><br /><br />
        <table border="2" align='center'>
            <thead>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
            </thead>
            <tbody>
                {users.map((user) => {
                    return <tr>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ApiDemo2
