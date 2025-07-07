import React, { useState } from 'react';

function ZerodhaLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [loginTime, setLoginTime] = useState('');
    
    const checkIfLoggedIn = () => {
        const savedEmail = localStorage.getItem('zerodha_email');
        const savedTime = sessionStorage.getItem('zerodha_loginTime');
        
        if (savedEmail) {
            setUserEmail(savedEmail);
            setLoginTime(savedTime || 'Unknown');
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };
    
    const handleLogin = () => {
        if (email && password) {
            // Save email in localStorage (permanent)
            localStorage.setItem('zerodha_email', email);
            
            // Save login time in sessionStorage (temporary)
            const currentTime = new Date().toLocaleString();
            sessionStorage.setItem('zerodha_loginTime', currentTime);
            
            setUserEmail(email);
            setLoginTime(currentTime);
            setIsLoggedIn(true);
            
            alert('Login successful!');
        } else {
            alert('Please enter email and password');
        }
    };
    
    const handleLogout = () => {
        // Clear localStorage
        localStorage.removeItem('zerodha_email');
        
        // Clear sessionStorage
        sessionStorage.clear();
        
        setIsLoggedIn(false);
        setUserEmail('');
        setLoginTime('');
        setEmail('');
        setPassword('');
        
        alert('Logged out successfully!');
    };
    
    // Check login status when component loads
    const handleCheckLogin = () => {
        checkIfLoggedIn();
    };
    
    if (isLoggedIn) {
        return (
            <div style={{ padding: '20px', border: '1px solid ccc' }}>
                <h2>🎉 Welcome to Zerodha Dashboard!</h2>
                
                <div style={{ background: 'f0f0f0', padding: '15px', margin: '10px 0' }}>
                    <h3>User Information:</h3>
                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Login Time:</strong> {loginTime}</p>
                </div>
                
                <div style={{ background: 'e8f5e8', padding: '15px', margin: '10px 0' }}>
                    <h3>Portfolio Summary:</h3>
                    <p>Total Value: ₹2,45,000</p>
                    <p>Today's P&L: +₹1,250</p>
                    <p>Holdings: 8 stocks</p>
                </div>
                
                <button onClick={handleLogout} style={{ background: 'red', color: 'white', padding: '10px 20px' }}>
                    Logout
                </button>
            </div>
        );
    }
    
    return (
        <div style={{ padding: '20px', border: '1px solid ccc' }}>
            <h2>🔐 Zerodha Login</h2>
            
            <div style={{ marginBottom: '15px' }}>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    style={{ padding: '10px', width: '200px', marginRight: '10px' }}
                />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    style={{ padding: '10px', width: '200px', marginRight: '10px' }}
                />
            </div>
            
            <button onClick={handleLogin} style={{ background: 'blue', color: 'white', padding: '10px 20px', marginRight: '10px' }}>
                Login
            </button>
            
            <button onClick={handleCheckLogin} style={{ background: 'green', color: 'white', padding: '10px 20px' }}>
                Check If Already Logged In
            </button>
            
            <div style={{ background: 'f9f9f9', padding: '10px', marginTop: '20px' }}>
                <h4>Storage Information:</h4>
                <p><strong>LocalStorage Email:</strong> {localStorage.getItem('zerodha_email') || 'None'}</p>
                <p><strong>SessionStorage Time:</strong> {sessionStorage.getItem('zerodha_loginTime') || 'None'}</p>
            </div>
        </div>
    );
}

export default ZerodhaLogin;