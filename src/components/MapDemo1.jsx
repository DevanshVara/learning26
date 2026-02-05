import React from 'react'

const MapDemo1 = () => {
    let cars = ["audi", "bmw", "mercedes", "ferrari"]
  return (
    <div>
      <h1>MAP DEMO 1</h1>
      {cars.map((c) => {
        return <h1>{c}</h1>
      })}
    </div>
  )
}

export default MapDemo1
