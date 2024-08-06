import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ toggleSidebar }) => {
    return (
        <div style={{
            width: '250px',
            backgroundColor: '#222',
            color: '#f4f4f4',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            position: 'fixed',
            top: '0',
            left: '0',
            height: '100%',
            zIndex: '1000',
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontFamily: 'Arial, sans-serif',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid #444',
                paddingBottom: '15px',
                marginBottom: '20px',
            }}>
                <h2 style={{ margin: 0, color: '#f4f4f4', fontSize: '1.5em' }}>Dashboard</h2>
                <button onClick={toggleSidebar} style={{
                    backgroundColor: '#444',
                    color: '#f4f4f4',
                    padding: '8px 12px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease',
                    fontSize: '1.2em'
                }}>
                    ✕
                </button>
            </div>
            <ul style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0,
            }}>
                <li style={{ marginBottom: '15px' }}>
                    <Link to="/add-user" style={{
                        color: '#f4f4f4',
                        textDecoration: 'none',
                        fontSize: '1.1em',
                        display: 'block',
                        padding: '10px 15px',
                        borderRadius: '4px',
                        transition: 'background-color 0.3s ease'
                    }} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#444'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        Add User
                    </Link>
                </li>
                <li>
                    <Link to="/view-users" style={{
                        color: '#f4f4f4',
                        textDecoration: 'none',
                        fontSize: '1.1em',
                        display: 'block',
                        padding: '10px 15px',
                        borderRadius: '4px',
                        transition: 'background-color 0.3s ease'
                    }} 
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#444'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        View Users
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
