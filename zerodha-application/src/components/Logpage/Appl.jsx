import React, { useEffect, useState } from 'react';

function ZerodhaPortfolio() {
  const [holdings, setHoldings] = useState([]);
  const [todayActivity, setTodayActivity] = useState([]);

  const stocks = ['RELIANCE', 'TCS', 'INFY', 'HDFCBANK'];

  // Load holdings and activity from storage
  useEffect(() => {
    const savedHoldings = JSON.parse(localStorage.getItem('holdings')) || [];
    const savedActivity = JSON.parse(sessionStorage.getItem('todayActivity')) || [];

    setHoldings(savedHoldings);
    setTodayActivity(savedActivity);
  }, []);

  // Add to permanent holdings (localStorage)
  const addHolding = (stock, quantity, price) => {
    const newHolding = { stock, quantity, price };
    const updatedHoldings = [...holdings, newHolding];
    setHoldings(updatedHoldings);
    localStorage.setItem('holdings', JSON.stringify(updatedHoldings));
  };

  // Add to session activity (sessionStorage)
  const addActivity = (action, stock) => {
    const entry = `${action} ${stock}`;
    const updatedActivity = [...todayActivity, entry];
    setTodayActivity(updatedActivity);
    sessionStorage.setItem('todayActivity', JSON.stringify(updatedActivity));
  };

  // Handle Buy button
  const handleBuy = (stock) => {
    const quantity = 10;
    const price = Math.floor(Math.random() * 900 + 100); // Random ₹100–₹1000
    addHolding(stock, quantity, price);
    alert(`Bought ${stock}: ${quantity} shares @ ₹${price}`);
  };

  // Handle View button
  const handleView = (stock) => {
    addActivity('Viewed', stock);
  };

  // Calculate total portfolio value
  const totalValue = holdings.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Zerodha Portfolio</h2>

      <h3>Available Stocks</h3>
      {stocks.map(stock => (
        <div key={stock}>
          {stock}
          <button onClick={() => handleBuy(stock)} style={{ marginLeft: '10px' }}>Buy</button>
          <button onClick={() => handleView(stock)} style={{ marginLeft: '5px' }}>View</button>
        </div>
      ))}

      <hr />

      <h3>📦 Holdings (Saved in localStorage)</h3>
      {holdings.length === 0 ? (
        <p>No stocks bought yet.</p>
      ) : (
        <ul>
          {holdings.map((item, i) => (
            <li key={i}>
              {item.stock} – {item.quantity} shares @ ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total Portfolio Value:</strong> ₹{totalValue}</p>

      <h3>🕒 Today's Activity (Session Only)</h3>
      {todayActivity.length === 0 ? (
        <p>No activity this session.</p>
      ) : (
        <ul>
          {todayActivity.map((act, i) => (
            <li key={i}>{act}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ZerodhaPortfolio;
