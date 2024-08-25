
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './component/login';
import AdminPage from './component/adminpage'; // Create this component
import CitizenPage from './component/citizenpage'; // Create this component
import Department from './component/department';
import Nodal from './component/nodal';
import ProfilePage from './component/profile';
import AnalyticsPage from './component/analytics';
import ComplaintPage from './component/lodgecomaplain';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/citizen" element={<CitizenPage />} />
                <Route path="/departmentofficer" element={<Department />} />
                <Route path="/nodelofficer" element={<Nodal />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/complaint" element={<ComplaintPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;

