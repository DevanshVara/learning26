import React, { useState } from 'react'

const UseStateDemo1 = () => {
    // let count = 0
    const [count, setCount] = useState(false)

    const increseCount = () => {
        // console.log("count before increse", count);
        // count++
        setCount(count+1)
        console.log("count after increse", count);
        
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1>USE STATE DEMO 1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>+</button>
    </div>
  )
}

export default UseStateDemo1
