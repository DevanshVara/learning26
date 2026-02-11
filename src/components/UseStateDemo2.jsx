import React, { useState } from 'react'

const UseStateDemo2 = () => {
    const [loading, setLoading] = useState(true)
    const setLoader = () => {
        setLoading(false)
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1>UseStateDemo 2</h1>
        {
            loading == true && <h1>Loading.....</h1>
        }
        <button onClick={setLoader}>STOP</button>
    </div>
  )
}

export default UseStateDemo2
