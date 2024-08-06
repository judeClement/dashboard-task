import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import ViewUsers from './components/ViewUsers';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <Router>
            <div style={{ display: 'flex', minHeight: '100vh' }}>
                {sidebarVisible && <Sidebar toggleSidebar={toggleSidebar} />}
                <div style={{
                    flex: 1,
                    marginLeft: sidebarVisible ? '200px' : '0', 
                    transition: 'margin-left 0.3s ease'
                }}>
                    <Navbar toggleSidebar={toggleSidebar} />
                    <main style={{ padding: '20px' }}>
                        <Routes>
                            <Route path="/add-user" element={<AddUser />} />
                            <Route path="/view-users" element={<ViewUsers />} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/signup" element={<Signup/>} />

                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;
