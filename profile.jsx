import React from 'react';
import Navigation from './othersection';
import '../style/profile.css'

const ProfilePage = () => {
    return <>
    <Navigation/>
    <div className="profile-container">
    <div className="profile-header">
        <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
        <h1 className="name">John Doe</h1>
        <p className="title">Software Developer</p>
    </div>

    <div className="profile-details">
        <div className="detail-item">
            <h3>Email:</h3>
            <p>john.doe@example.com</p>
        </div>

        <div className="detail-item">
            <h3>Phone:</h3>
            <p>+123 456 7890</p>
        </div>

        <div className="detail-item">
            <h3>Location:</h3>
            <p>New York, USA</p>
        </div>

        <div className="detail-item">
            <h3>Bio:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        </div>
    </div>
</div>
</>
};

export default ProfilePage;
