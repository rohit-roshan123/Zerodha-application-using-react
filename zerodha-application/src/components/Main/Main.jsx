import React from 'react'
import Sidebar from '../Sidebar/sidebar'
import Watchlist from '../Watchlist/watchlist'
import Orders from '../Orderbook/orders';
import Chart from '../TradingChart/chart';
import Navigation from '../Header/Navigation';
import './main.css'
 
function Main() {
  return (
    <div>

        <div className='parentmain'>

            <div className='sidepart'>

                <Sidebar />
                


            </div>

            <div className='mainpart'>
                <Navigation />
                <h1>Hi, Demo</h1>
                <hr/>
                <Watchlist />
                <hr/>
                <Chart />
                <hr/>
                <Orders />
                <hr/>

            </div>

        </div>
    </div>
  )
}

export default Main