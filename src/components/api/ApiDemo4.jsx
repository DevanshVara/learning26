import React, { useState } from 'react'
import axios from "axios"

const ApiDemo4 = () => {
    const [comments, setComments] = useState([])
    const getUsers = async () => {
        const res = await axios.get("https://dummyjson.com/comments/")
        setComments(res.data.comments)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>API DEMO 4</h1>
        <button onClick={() => {getUsers()}}>GET</button><br /><br />
        <table border='2' align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>POST ID</th>
                    <th>BODY</th>
                    <th>LIKES</th>
                    <th>FULLNAME</th>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map((comment) => {
                        return <tr>
                            <td>{comment.id}</td>
                            <td>{comment.postId}</td>
                            <td>{comment.body}</td>
                            <td>{comment.likes}</td>
                            <td>{comment.user.fullName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </div>
  )
}

export default ApiDemo4
