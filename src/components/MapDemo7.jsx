import React from 'react'

const MapDemo7 = () => {
    const employees = [
  { id: 101, name: "Ravi", age: 30, salary: 45000, department: "IT", status: "active", image: "/emp1.jpg" },
  { id: 102, name: "Sneha", age: 28, salary: 52000, department: "HR", status: "active", image: "/emp2.jpg" },
  { id: 103, name: "Vikram", age: 35, salary: 60000, department: "Finance", status: "inactive", image: "/emp3.jpg" },
  { id: 104, name: "Anjali", age: 26, salary: 48000, department: "Marketing", status: "active", image: "/emp4.jpg" },
  { id: 105, name: "Rohit", age: 40, salary: 70000, department: "IT", status: "inactive", image: "/emp5.jpg" }
];
  return (
    <div>
      <h1>MAP DEMO 7</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>SALARY</th>
                <th>DEPARTMENT</th>
                <th>STATUS</th>
                <th>IMAGE</th>
            </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return <tr style={{backgroundColor:emp.status == "inactive" ? "lightcoral":""}}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td style={{ color: emp.age >= 35 ? "blue" : "" }}>{emp.age}</td>
              <td style={{ backgroundColor: emp.salary >= 60000 ? "yellow" : "" }}>{emp.salary}</td>
              <td>{emp.department}</td>
              <td style={{color:emp.status == "active" ? "green":""}}>{emp.status}</td>
              <td><img src={emp.image} alt={emp.name} width="170" height="100" /></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MapDemo7
