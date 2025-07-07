import React, { useState } from 'react';

function NameRemember() {
    const [name, setName] = useState('');
    const [savedName, setSavedName] = useState('');
    
    const saveName = () => {
        localStorage.setItem('userName', name);
        alert('Name saved!');
    };
    
    const showName = () => {
        const saved = localStorage.getItem('userName');
        setSavedName(saved || 'No name saved');
    };
    
    const clearName = () => {
        localStorage.removeItem('userName');
        setSavedName('');
        alert('Name cleared!');
    };
    
    return (
        <div>

            <h1>Using Local Storage</h1>
            <h1>Remember My Name</h1>
            
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            
            <button onClick={saveName}>Save Name</button>
            <button onClick={showName}>Show Saved Name</button>
            <button onClick={clearName}>Clear Name</button>
            
            <p>Saved name: {savedName}</p>
        </div>
    );
}

export default NameRemember;