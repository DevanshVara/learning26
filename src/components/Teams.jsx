import React from 'react'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1>IPL Teams</h1>
        <ul>
            <li><Link to="/teamdetails/csk">Chhenai Super Kings</Link></li>
            <li><Link to="/teamdetails/rr">Rajasthan Royals</Link></li>
            <li><Link to="/teamdetails/rcb">Royal Challengers Banglore</Link></li>
            <li><Link to="/teamdetails/mi">Mumbai Indians</Link></li>
            <li><Link to="/teamdetails/gt">Gujarat Titans</Link></li>
            <li><Link to="/teamdetails/srh">Sunriser Hydrabad</Link></li>
            <li><Link to="/teamdetails/kkr">Kolkata Knight Riders</Link></li>
            <li><Link to="/teamdetails/pk">Punjab Kings</Link></li>
            <li><Link to="/teamdetails/dc">Delhi Capitals</Link></li>
            <li><Link to="/teamdetails/lsg">Lucknow Super Giants</Link></li>
        </ul>
    </div>
  )
}

export default Teams
