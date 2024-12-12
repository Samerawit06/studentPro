import React, { useState } from "react";
import "./../styles/ProfilePage.css";

function ProfileHeader({
  name,
  email,
  profilePicture,
  bio,
  school,
  onUpdateProfile,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name || "");
  const [updatedEmail, setUpdatedEmail] = useState(email || "");
  const [updatedProfilePicture, setUpdatedProfilePicture] = useState(
    profilePicture || ""
  );
  const [updatedBio, setUpdatedBio] = useState(bio || "");
  const [updatedSchool, setUpdatedSchool] = useState(school || "");

  const handleSave = () => {
    onUpdateProfile({
      name: updatedName,
      email: updatedEmail,
      profilePicture: updatedProfilePicture,
      bio: updatedBio,
      school: updatedSchool,
    });
    setIsEditing(false);
  };

  return (
    <div className="profile-header">
      <img
        src={profilePicture || "default-profile.png"}
        alt="Profile"
        className="profile-picture"
      />
      <div className="profile-info">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{bio || "No bio provided."}</p>
        <p>{school || "No school information provided."}</p>
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit My Profile</h3>
            <form className="edit-profile-form">
              <label>
                Name:
                <input
                  type="text"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                />
              </label>
              <label>
                Profile Picture URL:
                <input
                  type="text"
                  value={updatedProfilePicture}
                  onChange={(e) => setUpdatedProfilePicture(e.target.value)}
                />
              </label>
              <label>
                Bio:
                <textarea
                  value={updatedBio}
                  onChange={(e) => setUpdatedBio(e.target.value)}
                />
              </label>
              <label>
                School/College:
                <input
                  type="text"
                  value={updatedSchool}
                  onChange={(e) => setUpdatedSchool(e.target.value)}
                />
              </label>
              <div className="modal-actions">
                <button type="button" className="save-btn" onClick={handleSave}>
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileHeader;
