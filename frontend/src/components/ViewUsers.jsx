import React from 'react';
import { useGetUsersQuery } from '../services/userApi';

const ViewUsers = () => {
    const { data: users, error, isLoading } = useGetUsersQuery();

    if (isLoading) return <div style={styles.loading}>Loading...</div>;
    if (error) return <div style={styles.error}>Error: {error.message}</div>;

    return (
        <div style={styles.container}>
            <table style={styles.table}>
                <thead>
                    <tr style={styles.headerRow}>
                        <th style={styles.headerCell}>Username</th>
                        <th style={styles.headerCell}>Address</th>
                        <th style={styles.headerCell}>Email</th>
                        <th style={styles.headerCell}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} style={styles.row}>
                            <td style={styles.cell}>{user.username}</td>
                            <td style={styles.cell}>{user.address}</td>
                            <td style={styles.cell}>{user.email}</td>
                            <td style={styles.cell}>
                                <img src={user.image} alt={user.username} style={styles.image} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px',
        padding: '20px',
    },
    table: {
        width: '100%',
        maxWidth: '1000px',
        borderCollapse: 'collapse',
        margin: '0 auto',
    },
    headerRow: {
        backgroundColor: '#f4f4f4',
    },
    headerCell: {
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
        fontFamily:"sans-serif"
    },
    row: {
        borderBottom: '1px solid #ddd',
        transition: 'background-color 0.3s',
    },
    cell: {
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'center',
    },
    image: {
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        objectFit: 'cover',
    },
    loading: {
        textAlign: 'center',
        fontSize: '1.5em',
        marginTop: '20px',
    },
    error: {
        textAlign: 'center',
        color: 'red',
        fontSize: '1.2em',
        marginTop: '20px',
    },
};

export default ViewUsers;
