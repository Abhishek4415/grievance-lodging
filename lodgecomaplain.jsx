import React from 'react';
import Navigation from './othersection';
// src/LodgeComplaint.js
import  { useState } from 'react';
import '../style/lodgecomplain.css';

const ComplaintPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [complaint, setComplaint] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form data to be sent to the backend
        const formData = {
            name,
            email,
            phone,
            department,
            complaint,
            location,
            address
        };

        console.log('Complaint Submitted:', formData);

        // Clear the form after submission
        setName('');
        setEmail('');
        setPhone('');
        setDepartment('');
        setComplaint('');
        setLocation('');
        setAddress('');

        alert('Your complaint has been lodged successfully!');
    };

    return (
        <div className="complaint-container">
            <Navigation/>
            <h1>Lodge a Complaint</h1>
            <form onSubmit={handleSubmit} className="complaint-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <select
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="Public Works">Public Works</option>
                        <option value="Sanitation">Sanitation</option>
                        <option value="Water Supply">Water Supply</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Health">Health</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="location">State,District,pincode</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Full Address</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="complaint">Complaint</label>
                    <textarea
                        id="complaint"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit Complaint</button>
            </form>
        </div>
    );
};

export default ComplaintPage;



