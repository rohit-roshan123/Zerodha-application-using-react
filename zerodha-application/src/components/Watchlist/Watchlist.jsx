import React from 'react'
import './watchlist.css'

function watchlist() {
  return (
    <div>
        <div className='listcontainer'>
            <div className='equitycontainer'>
            <div className='equity'>
                <h3>Equity</h3>
                <img src='./public/Screenshot 2025-06-27 012224.png'/>
                <h4>Margin available</h4>
                </div>

            <div className='equity-content'>
                <h4>Margins used: 0</h4>
                <h4>opening balance: 1L</h4>
                <h4>view Statement</h4>
            </div>
            

            </div>
            <div className='commoditycontainer'>
            <div className='commodity'>
                <h3>Commodity</h3>
                <img src='./public/Screenshot 2025-06-27 012232.png'/>
                <h4>Margin available</h4>
                </div>
            
            <div className='commodity-content'>
                <h4>Margins used: 0</h4>
                <h4>opening balance: 50K</h4>
                <h4>view statement</h4>
            </div>

            
            </div>
        </div>



    </div>
  )
}

export default watchlist