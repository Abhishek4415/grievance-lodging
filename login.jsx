import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple role-based redirection
        if (role === 'admin') {
            navigate('/admin');
        } else if (role === 'citizen') {
            navigate('/citizen');
        }
         else if (role === 'officer') {
            navigate('/departmentofficer');
        
        } else if (role === 'nodelofficer') {
            navigate('/nodelofficer');
        }
        // Add more role checks if needed
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role" className="form-label">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="form-select"
                    >
                        <option value="" disabled>Select your role</option>
                        <option value="admin">Admin</option>
                        <option value="citizen">Citizen</option>
                        <option value="officer">Officer</option>
                        <option value="nodelofficer">Nodle Officer</option>
                    </select>
                </div>
                <button type="submit" className="form-button">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
