// ProfileAdmin.js
import React from "react";
import "./Profile.css";
import FotoProfile from "../images/FotoProfile.jpg";

const Profile = () => {
  return (
    <div className="profile-admin-container">
      <div className="profile-admin">
        <h2>Profile</h2>
        <div className="profile-details">
          <div className="profile-image">
            <img src={FotoProfile} alt="Profile" />
          </div>
          <div className="FotoProfile.jpg">
            <p>Nama: Doan Carlos Embara</p>
            <p>NIM: 21120121140032</p>
            {/* Informasi profil lainnya */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
