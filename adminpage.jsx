// src/AdminPage.js
import React, { useState } from 'react';
import Navigation from './othersection';
import '../style/admin.css';
import AnalyticsPage from './analytics';

const AdminPage = () => {
    const [selectedSection, setSelectedSection] = useState('officers');

    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };

    return (
        <div className="admin-container">
            <Navigation/>
            <div className="admin-menu">
                <button onClick={() => handleSectionChange('officers')} className={selectedSection === 'officers' ? 'active' : ''}>
                    Manage Officers
                </button>
                <button onClick={() => handleSectionChange('grievances')} className={selectedSection === 'grievances' ? 'active' : ''}>
                    View Grievances
                </button>
                <button onClick={() => handleSectionChange('status')} className={selectedSection === 'status' ? 'active' : ''}>
                    Grievance Status
                </button>
                <button onClick={() => handleSectionChange('analytic')} className={selectedSection === 'analytic' ? 'active' : ''}>
                    Analytics
                </button>
            </div>

            <div className="admin-content">
                {selectedSection === 'officers' && <ManageOfficers />}
                {selectedSection === 'grievances' && <ViewGrievances />}
                {selectedSection === 'status' && <GrievanceStatus />}
                {selectedSection === 'analytic' && <AnalyticsPage />}
            </div>
        </div>
    );
};

// Placeholder Components
const ManageOfficers = () => {
    const [officers, setOfficers] = useState([]);
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [department, setDepartment] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    const handleAddOfficer = () => {
        if (name && designation && department) {
            const newOfficer = { name, designation, department };

            if (editIndex >= 0) {
                const updatedOfficers = officers.map((officer, index) =>
                    index === editIndex ? newOfficer : officer
                );
                setOfficers(updatedOfficers);
                setEditIndex(-1);
            } else {
                setOfficers([...officers, newOfficer]);
            }

            setName('');
            setDesignation('');
            setDepartment('');
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleEditOfficer = (index) => {
        const officer = officers[index];
        setName(officer.name);
        setDesignation(officer.designation);
        setDepartment(officer.department);
        setEditIndex(index);
    };

    const handleDeleteOfficer = (index) => {
        const updatedOfficers = officers.filter((_, i) => i !== index);
        setOfficers(updatedOfficers);
    };

    return (
        <div>
            <h2>Manage Officers</h2>
            <p>Here you can add, edit, or delete officer profiles.</p>

            <div className="form-group">
                <input
                    type="text"
                    placeholder="Officer Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />
                <button onClick={handleAddOfficer}>
                    {editIndex >= 0 ? 'Update Officer' : 'Add Officer'}
                </button>
            </div>

            <h3>Officer List</h3>
            <table className="officer-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {officers.map((officer, index) => (
                        <tr key={index}>
                            <td>{officer.name}</td>
                            <td>{officer.designation}</td>
                            <td>{officer.department}</td>
                            <td>
                                <button onClick={() => handleEditOfficer(index)}>Edit</button>
                                <button onClick={() => handleDeleteOfficer(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const ViewGrievances = () => {
    const [grievances, setGrievances] = useState([
        { id: 1, citizenName: 'John Doe', department: 'Public Works', description: 'Potholes on the main road', status: 'Pending' },
        { id: 2, citizenName: 'Jane Smith', department: 'Health', description: 'Garbage not collected', status: 'Resolved' },
        { id: 3, citizenName: 'Raj Patel', department: 'Water Supply', description: 'Water leakage in the street', status: 'In Progress' },
        // Add more sample data as needed
    ]);
    const [filterStatus, setFilterStatus] = useState('');

    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const filteredGrievances = grievances.filter(grievance => 
        filterStatus ? grievance.status === filterStatus : true
    );

    return (
        <div>
            <h2>View Grievances</h2>
            <p>View and filter grievances lodged by citizens.</p>

            <div className="filter-group">
                <label htmlFor="statusFilter">Filter by Status:</label>
                <select id="statusFilter" value={filterStatus} onChange={handleStatusChange}>
                    <option value="">All</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                </select>
            </div>

            <h3>Grievance List</h3>
            <table className="grievance-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Citizen Name</th>
                        <th>Department</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredGrievances.map((grievance) => (
                        <tr key={grievance.id}>
                            <td>{grievance.id}</td>
                            <td>{grievance.citizenName}</td>
                            <td>{grievance.department}</td>
                            <td>{grievance.description}</td>
                            <td>{grievance.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};




const GrievanceStatus = () => {
    const [grievances, setGrievances] = useState([
        { id: 1, citizenName: 'John Doe', department: 'Public Works', description: 'Potholes on the main road', status: 'Pending', steps: ['Complaint received', 'Assigned to officer', 'Pending investigation'] },
        { id: 2, citizenName: 'Jane Smith', department: 'Health', description: 'Garbage not collected', status: 'Resolved', steps: ['Complaint received', 'Assigned to officer', 'Issue resolved'] },
        { id: 3, citizenName: 'Raj Patel', department: 'Water Supply', description: 'Water leakage in the street', status: 'In Progress', steps: ['Complaint received', 'Assigned to officer', 'In Progress'] },
    ]);
    const [selectedGrievance, setSelectedGrievance] = useState(null);

    const handleViewStatus = (grievance) => {
        setSelectedGrievance(grievance);
    };

    const handleCloseModal = () => {
        setSelectedGrievance(null);
    };

    return (
        <div className="grievance-status">
            <h2>Grievance Status</h2>
            <p>Monitor the status of all grievances.</p>

            <table className="grievance-status-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Citizen Name</th>
                        <th>Department</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {grievances.map(grievance => (
                        <tr key={grievance.id}>
                            <td>{grievance.id}</td>
                            <td>{grievance.citizenName}</td>
                            <td>{grievance.department}</td>
                            <td>{grievance.description}</td>
                            <td>{grievance.status}</td>
                            <td>
                                <button onClick={() => handleViewStatus(grievance)}>View Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedGrievance && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Status for Grievance ID: {selectedGrievance.id}</h3>
                        <ul>
                            {selectedGrievance.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ul>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};




export default AdminPage;
