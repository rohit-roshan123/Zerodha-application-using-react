import React from 'react'
import './navbar.css'

function Navigation() {
  return (
    <div >
        <div className='navcontainer'>
        <div className='navbar'>
            <img src="/public/kite.png" />
            <div className="Links">
                <div>Dashboard</div>
                <div>Orders</div>
                <div>Holdings</div>
                <div>Positions</div>
                <div>Bids</div>
                <div>Funds</div>
                <img src='./public/Screenshot 2025-06-27 035636.png' className='notifyimage'/>
            </div>

        
    </div>
    </div>
    </div>
  )
}

export default Navigation