import React, { useState } from 'react'
import axios from "axios"

const ApiDemo3 = () => {
    const [details, setDetails] = useState([])
    const getUsers = async () => {
        const res = await axios.get("https://dummyjson.com/products/")
        setDetails(res.data.products)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>API DEMO 3</h1>
            <button onClick={() => { getUsers() }}>GET</button><br /><br />
            <table border='2' align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>PRICE</th>
                        <th>BRAND</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail) => {
                        return <tr>
                            <td>{detail.id}</td>
                            <td>{detail.title}</td>
                            <td>{detail.category}</td>
                            <td>{detail.price}</td>
                            <td>{detail.brand}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ApiDemo3
