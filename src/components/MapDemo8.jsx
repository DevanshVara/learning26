import React from 'react'

const MapDemo8 = () => {
    const products = [
  { id: 1, name: "Laptop", price: 55000, stock: 10, category: "Electronics", rating: 4.5, image: "/laptop.jpg" },
  { id: 2, name: "Mobile", price: 22000, stock: 0, category: "Electronics", rating: 4.2, image: "/mobile.jpg" },
  { id: 3, name: "Headphones", price: 2500, stock: 35, category: "Accessories", rating: 4.0, image: "/headphone.jpg" },
  { id: 4, name: "Keyboard", price: 1200, stock: 15, category: "Accessories", rating: 3.8, image: "/keyboard.jpg" },
  { id: 5, name: "Mouse", price: 800, stock: 50, category: "Accessories", rating: 4.1, image: "/mouse.jpg" }
];
  return (
    <div>
      <h1>MAP DEMO 8</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>CATEGORY</th>
                <th>RATING</th>
                <th>IMAGE</th>
            </tr>
        </thead>
        <tbody>
            {products.map((p) => {
                return <tr style={{ backgroundColor: p.stock === 0 ? "lightcoral" : "" }}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td style={{ color: p.price >= 50000 ? "red" : "" }}>{p.price}</td>
                    <td>{p.stock}</td>
                    <td style={{ color: p.category === "Electronics" ? "blue" : "", fontWeight: "bold" }}>{p.category}</td>
                    <td style={{ backgroundColor: p.rating >= 4.0 ? "lightgreen" : "" }}>{p.rating}</td>
                    <td><img src={p.image} alt={p.name} /></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default MapDemo8
