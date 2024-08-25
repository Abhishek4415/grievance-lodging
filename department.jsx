import React from 'react';
import '../style/LoginPage.css'; 
import  { useState } from 'react';
import Navigation from './othersection';
// import './Officer.css';

const Department = () => {
    const [issues, setIssues] = useState([
        { id: 1, citizenName: 'John Doe', department: 'Public Works', description: 'Potholes on the main road', status: 'New' },
        { id: 2, citizenName: 'Jane Smith', department: 'Health', description: 'Garbage not collected', status: 'Resolved' },
        { id: 3, citizenName: 'Raj Patel', department: 'Water Supply', description: 'Water leakage in the street', status: 'New' },
    ]);
    const [selectedIssue, setSelectedIssue] = useState(null);

    const handleUpdateStatus = (id, newStatus) => {
        const updatedIssues = issues.map(issue => 
            issue.id === id ? { ...issue, status: newStatus } : issue
        );
        setIssues(updatedIssues);
    };

    const handleViewDetails = (issue) => {
        setSelectedIssue(issue);
    };

    const handleCloseDetails = () => {
        setSelectedIssue(null);
    };

    return (
        <div className="officer">
            <Navigation/>
            <h2>Department Dashboard</h2>

            <div className="issue-section">
                <h3>New Issues</h3>
                <table className="issue-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Citizen Name</th>
                            <th>Department</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.filter(issue => issue.status === 'New').map(issue => (
                            <tr key={issue.id}>
                                <td>{issue.id}</td>
                                <td>{issue.citizenName}</td>
                                <td>{issue.department}</td>
                                <td>{issue.description}</td>
                                <td>
                                    <button onClick={() => handleViewDetails(issue)}>View Details</button>
                                    <select
                                        value={issue.status}
                                        onChange={(e) => handleUpdateStatus(issue.id, e.target.value)}
                                    >
                                        <option value="New">New</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="issue-section">
                <h3>Resolved Issues</h3>
                <table className="issue-table">
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
                        {issues.filter(issue => issue.status === 'Resolved').map(issue => (
                            <tr key={issue.id}>
                                <td>{issue.id}</td>
                                <td>{issue.citizenName}</td>
                                <td>{issue.department}</td>
                                <td>{issue.description}</td>
                                <td>{issue.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedIssue && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Issue ID: {selectedIssue.id}</h3>
                        <p><strong>Citizen Name:</strong> {selectedIssue.citizenName}</p>
                        <p><strong>Department:</strong> {selectedIssue.department}</p>
                        <p><strong>Description:</strong> {selectedIssue.description}</p>
                        <p><strong>Status:</strong> {selectedIssue.status}</p>
                        <button onClick={handleCloseDetails}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Department;

