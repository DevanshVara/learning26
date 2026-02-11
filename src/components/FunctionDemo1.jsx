import React from 'react'
import { CardComponent } from './CardComponent'

const FunctionDemo1 = () => {
    const test = () => {
        alert("test fucntion called.....")
    }

    const test2 = (x) => {
        alert("value of x"+x)
    }
  return (
    <div style={{textAlign: 'center'}}>
        <h1>FunctionDemo1</h1>
        <button onClick={test}>Click</button>
        {/* <button onClick={test2(2)}>Click2</button> */}
        <button onClick={()=>{test2(100)}}>Click 2</button>
        <CardComponent></CardComponent>
    </div>
  )
}

export default FunctionDemo1
