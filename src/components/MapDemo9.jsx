import React from 'react'

const MapDemo9 = () => {
    const courses = [
  { id: 1, title: "React JS", duration: "3 Months", fees: 12000, level: "Beginner", status: "open", image: "/react.png" },
  { id: 2, title: "Node JS", duration: "2 Months", fees: 10000, level: "Intermediate", status: "open", image: "/node.png" },
  { id: 3, title: "Python", duration: "4 Months", fees: 15000, level: "Beginner", status: "closed", image: "/python.jpg" },
  { id: 4, title: "AI Basics", duration: "3 Months", fees: 20000, level: "Advanced", status: "open", image: "/ai.png" },
  { id: 5, title: "Java", duration: "5 Months", fees: 18000, level: "Intermediate", status: "closed", image: "/java.png" }
];
  return (
    <div>
      <h1>MAP DEMO 9</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DURATION</th>
                <th>FEES</th>
                <th>LEVEL</th>
                <th>STATUS</th>
                <th>IMAGE</th>
            </tr>
        </thead>
        <tbody>
            {courses.map((co) => {
                return <tr style={{ backgroundColor: co.status === "closed" ? "lightgray" : "" }}>
                    <td>{co.id}</td>
                    <td>{co.title}</td>
                    <td>{co.duration}</td>
                    <td style={{ color: co.fees >= 18000 ? "red" : "" }}>{co.fees}</td>
                    <td style={{ color: co.level === "Advanced" ? "blue" : "", fontWeight: "bold" }}>{co.level}</td>
                    <td style={{ color: co.status === "open" ? "green" : "" }}>{co.status}</td>
                    <td><img src={co.image} alt={co.name} /></td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default MapDemo9
