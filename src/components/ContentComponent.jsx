import React from 'react'

export default function ContentComponent() {
  //js code ... number, string , boolean, undefined, object
  let year = 2026
  let title = "React JS"
  let isavailable = true

  let student = {
    name: "jay",
    age: 22,
    city: "ahmedabad"

//   const biodata = {
//     fullName: "Devansh Vara",
//     age: 20,
//     gender: "Male",
//     dateOfBirth: "2005-03-14",
//     email: "devansh@example.com",
//     phone: "+91-9876543210",
//     address: "Ahmedabad, Gujarat, India",
//     education: "B.Tech in Computer Engineering",
//     college: "ABC Institute of Technology",
//     skills: ["Python", "JavaScript", "React", "OpenCV", "IoT"],
//     hobbies: ["Coding", "Gaming", "Reading"],
//     experience: "Fresher",
//     projects: [
//       "AI Attendance System",
//       "Object Detection for Blind Assistance",
//       "Inventory Management System"
//     ],
//     languages: ["English", "Hindi", "Gujarati"],
  }

  return (
    <div style={{backgroundColor: "white", border: "1px solid black", height: 'auto', width: "75%", padding: "10px" }}>
      <h2>HELLO !</h2>
      {year}
      <h1>YEAR : {year}</h1>
      <h1>Title : {title}</h1>
      <h1>ALL TAGS MUST HAVE CLOSED TAG</h1><br />
      <h3>Available?? {isavailable == true ? "TRUE" : "FALSE"}</h3>
      <h4>AT A TIME WE CAN RETURN ONLY 1 TAG...</h4>
      <h4>whatever written inside statment will be display on browser</h4>
      {/* <h2>{student}</h2> */}
      <h2>Name : {student.name}</h2>
      <h3>AGE : {student.age}</h3>
      <h3>City : {student.city}</h3>

      {/* <h1>{biodata.fullName}</h1>
      <h3>AGE : {biodata.age}</h3> */}
      {/* <h3>Gender : {biodata.gender}</h3>
      <h3>DOB : {biodata.dateOfBirth}</h3>
      <h3>Email : {biodata.email}</h3>
      <h3>Phone : {biodata.phone}</h3>
      <h3>Address : {biodata.address}</h3>
      <h3>Education : {biodata.education}</h3>
      <h3>College : {biodata.college}</h3>
      <h3>Skills : {biodata.skills.join(", ")}</h3>  */}
      {/* <ul>
        {biodata.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul> */}
      {/* <h3>Hobbies : {biodata.hobbies.join(", ")}</h3>
      <h3>Experience : {biodata.experience}</h3>
      <h3>Projects : {biodata.projects.join(", ")}</h3>
      <h3>Languages : {biodata.languages.join(", ")}</h3> */}
    </div>
  )
}
