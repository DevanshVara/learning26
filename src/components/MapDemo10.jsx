import React from 'react'

const MapDemo10 = () => {
    const orders = [
        { id: 501, customer: "Amit", amount: 2500, payment: "online", status: "delivered", city: "Ahmedabad", image: "/order1.jpg" },
        { id: 502, customer: "Neha", amount: 4200, payment: "cash", status: "pending", city: "Surat", image: "/order2.jpg" },
        { id: 503, customer: "Rahul", amount: 1800, payment: "online", status: "cancelled", city: "Vadodara", image: "/order3.jpg" },
        { id: 504, customer: "Priya", amount: 5200, payment: "online", status: "delivered", city: "Rajkot", image: "/order4.jpg" },
        { id: 505, customer: "Karan", amount: 3000, payment: "cash", status: "pending", city: "Ahmedabad", image: "" }
    ];
    return (
        <div>
            <h1>MAP DEMO 10</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CUSTOMER</th>
                        <th>AMOUNT</th>
                        <th>PAYMENT</th>
                        <th>STATUS</th>
                        <th>CITY</th>
                        <th>IMAGE</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((ord) => {
                        return <tr style={{ backgroundColor: ord.status === "cancelled" ? "lightcoral" : "" }}>
                            <td>{ord.id}</td>
                            <td>{ord.customer}</td>
                            <td style={{ color: ord.amount >= 4000 ? "green" : ""}}>{ord.amount}</td>
                            <td style={{ color: ord.payment === "cash" ? "orange" : "" }}>{ord.payment}</td>
                            <td>{ord.status}</td>
                            <td>{ord.city}</td>
                            <td>{ord.image ? (<img src={ord.image} alt={ord.customer} width="120" />) : (<span style={{ color: "red", fontWeight: "bold" }}>Image is missing</span>)}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default MapDemo10
