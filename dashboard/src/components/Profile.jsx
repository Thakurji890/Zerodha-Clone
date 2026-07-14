import React from 'react';
import { profile } from '../data/data';

const Profile = () => {
  return (
    <div>
      <h3 className="mb-4 text-muted">My Profile</h3>
      <div className="card shadow-sm border-0" style={{ maxWidth: "600px" }}>
        <div className="card-body p-4 d-flex align-items-center gap-4">
          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", fontSize: "32px" }}>
            {profile.name.charAt(0)}
          </div>
          <div>
            <h4 className="card-title fw-bold">{profile.name}</h4>
            <p className="card-text text-muted mb-1">
              <i className="bi bi-envelope me-2"></i> {profile.email}
            </p>
            <p className="card-text text-muted mb-1">
              <i className="bi bi-telephone me-2"></i> {profile.phone}
            </p>
            <p className="card-text text-muted mb-0">
              <i className="bi bi-person-badge me-2"></i> Account ID: <span className="fw-bold">{profile.accountId}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
