import React from 'react'

const MapDemo2 = () => {
  const users = [
    { id: 1, name: 'raj', age: 28, gender: "male" },
    { id: 2, name: 'parth', age: 34, gender: "male" },
    { id: 3, name: 'jaya', age: 22, gender: "female" },
  ];

  return (
    <div>
        <h1>MAP DEMO 2</h1>
        {users.map((user) => {
            return <li> {user.id} - {user.name} - {user.age} - {user.gender}</li>
        })}
    </div>
  )
}

export default MapDemo2
