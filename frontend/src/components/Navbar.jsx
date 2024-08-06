import React from 'react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <div style={{
          
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '15px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily:"sans-serif"
        }}>
            <button onClick={toggleSidebar} style={{
                backgroundColor: '#fff',
                color: '#4CAF50',
                padding: '10px',
                border: 'none',
                cursor: 'pointer'
            }}>
                ☰
            </button>
            <h1 style={{ margin: 0 }}>Dashboard</h1>
            <div style={{ width: '40px' }}></div> 
        </div>
    );
};

export default Navbar;
