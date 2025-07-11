// src/pages/Admin


import { useEffect, useState } from "react";

function Admin() {
            const [bookings, setBookings] = useState([]);
            
            useEffect(() => {
                const data = JSON.parse(localStorage.getItem("bookings")) || [];
                setBookings(data);
            }, []);
            
            return (
                <div className="container">
                    <h1 className="page-title">Admin Dashboard</h1>
                    
                    <div className="admin-panel">
                    <h2 style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <i className="fas fa-calendar-check"></i> Booking Management
                        </h2>
                        
                        <table className="booking-table">
                            <thead>
                                <tr>
                                    <th>Salon</th>
                                    <th>Service</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="no-bookings">
                                            <i className="fas fa-calendar-times" style={{fontSize: '3rem', marginBottom: '1rem'}}></i>
                                            <h3>No bookings found</h3>
                                            <p>All booking requests will appear here</p>
                                        </td>
                                    </tr>
                                ) : (
                                    bookings.map((b, i) => (
                                        <tr key={i}>
                                            <td>{b.salon}</td>
                                            <td>{b.service}</td>
                                            <td>{b.date}</td>
                                            <td>{b.time}</td>
                                            <td><span style={{
                                                background: '#bbf7d0', 
                                                color: '#166534',
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: '20px',
                                                fontWeight: '500'
                                            }}>Confirmed</span></td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        

export default Admin;
