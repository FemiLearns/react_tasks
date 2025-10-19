import React, { useState } from 'react';
import './index.css';

function ProfileHeader({ name, title, avatar }) {
  return (
    <div className="profile-header">
      <img src={avatar} alt={`${name} avatar`} className="avatar" />
      <div className="profile-meta">
        <h1 className="name">{name}</h1>
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;