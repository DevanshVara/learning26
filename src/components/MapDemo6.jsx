import React from 'react'


const MapDemo6 = () => {
    const students = [
  { id: 1, name: "Amit", age: 23, marks: 78, city: "Ahmedabad", gender: "male", image: "/student1.jpg" },
  { id: 2, name: "Priya", age: 25, marks: 85, city: "Surat", gender: "female", image: "/student2.jpg" },
  { id: 3, name: "Rahul", age: 21, marks: 65, city: "Vadodara", gender: "male", image: "/student3.jpg" },
  { id: 4, name: "Neha", age: 26, marks: 91, city: "Rajkot", gender: "female", image: "/student4.jpg" },
  { id: 5, name: "Karan", age: 24, marks: 72, city: "Ahmedabad", gender: "male", image: "/student5.jpg" }
];
  return (
    <div>
      <h1>MAP DEMO 6</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
            <th>CITY</th>
            <th>GENDER</th>
            <th>IMAGE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((st) => {
            return <tr style={{backgroundColor:st.marks>80 ? "yellow":""}}>
              <td>{st.id}</td>
              <td>{st.name}</td>
              <td style={{color:st.age>23 ? "blue":""}}>{st.age}</td>
              <td>{st.marks}</td>
              <td style={{backgroundColor:st.city == "Ahmedabad" ? "green":""}}>{st.city}</td>
              <td style={{backgroundColor:st.gender == "female" ? "pink":""}}>{st.gender}</td>
              <td><img src={st.image} alt={st.name} width="180" height="100" /></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MapDemo6
