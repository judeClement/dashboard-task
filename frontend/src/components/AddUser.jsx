import React, { useState } from 'react';
import { useAddUserMutation } from '../services/userApi';

const AddUser = () => {
    const [formData, setFormData] = useState({
        username: '',
        address: '',
        email: '',
        password: '',
        image: ''
    });
    const [addUser] = useAddUserMutation();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addUser(formData);
        setFormData({ username: '', address: '', email: '', password: '', image: '' });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.heading}>Add New User</h2>
            <label style={styles.label}>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
            </label>
            <label style={styles.label}>
                Address:
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
            </label>
            <label style={styles.label}>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
            </label>
            <label style={styles.label}>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
            </label>
            <label style={styles.label}>
                Image URL:
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
            </label>
            <button type="submit" style={styles.button}>Add User</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '25px auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    heading: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
        fontSize: '24px',
    },
    label: {
        marginBottom: '15px',
        color: '#555',
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginTop: '5px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        outline: 'none',
        transition: 'border-color 0.3s ease',
    },
    inputFocus: {
        borderColor: '#4CAF50',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        marginTop: '20px',
    },
    buttonHover: {
        backgroundColor: '#45a049',
    },
};

export default AddUser;
