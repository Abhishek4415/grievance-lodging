import React from 'react';
import Navigation from './othersection';
// src/Analytics.js

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import '../style/Analytics.css';

const data = [
    { name: 'Jan', lodged: 400, resolved: 240, pending: 160 },
    { name: 'Feb', lodged: 300, resolved: 139, pending: 161 },
    { name: 'Mar', lodged: 400, resolved: 350, pending: 50 },
    { name: 'Apr', lodged: 478, resolved: 390, pending: 88 },
    { name: 'May', lodged: 509, resolved: 480, pending: 29 },
    { name: 'Jun', lodged: 480, resolved: 380, pending: 100 },
    { name: 'Jul', lodged: 549, resolved: 430, pending: 119 },
];

const pieData = [
    { name: 'Resolved', value: 400 },
    { name: 'Pending', value: 300 },
    { name: 'In Progress', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AnalyticsPage = () => {
    return (
        <div className="analytics-container">
            <Navigation/>
            <h1>Grievance Analytics Dashboard</h1>

            <div className="dashboard-section">
                <h2>Monthly Grievance Lodging vs Resolution</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="lodged" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="resolved" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="pending" stroke="#ff7300" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="dashboard-section">
                <h2>Grievances by Status</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="dashboard-section">
                <h2>Grievances Resolved by Department</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="resolved" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsPage;






