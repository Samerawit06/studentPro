import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import EnrolledCoursesList from "../components/EnrolledCoursesList";
import "./../styles/ProfilePage.css";

function ProfilePage() {
  const student = {
    id: 1,
    name: "Someone",
    email: "Someone@example.com",
    profilePicture: "propic.jpg",
    school: "Example University",
    bio: "web developer.",

    courses: [
      {
        id: 1,
        title: "React for Beginners",
        description: "Learn the basics of React.",
        progress: 0,
      },
      {
        id: 2,
        title: "Advanced JavaScript",
        description: "Master JavaScript with advanced concepts.",
        progress: 55,
      },
      {
        id: 3,
        title: "Web Development Bootcamp",
        description: "Comprehensive course for web development.",
        progress: 0,
      },
    ],
  };

  return (
    <div className="profile-page">
      <header className="page-header">
        <h1>E-Learning.io</h1>
        <p>Your journey of knowledge starts here!</p>
        <div className="hamburger-menu">
          <div className="hamburger-icon">☰</div>
          <nav className="dropdown-menu">
            <button className="nav-btn">Profile</button>
            <button className="nav-btn">Payment History</button>
            <button className="nav-btn">Classroom</button>
          </nav>
        </div>
      </header>
      <ProfileHeader
        name={student.name}
        email={student.email}
        profilePicture={student.profilePicture}
        bio={student.bio}
        school={student.school}
      />
      <EnrolledCoursesList courses={student.courses} />
      <footer className="page-footer">
        <p>© 2024 E-Learning . All rights reserved.</p>
        <p>Contact us: support@example.com</p>
      </footer>
    </div>
  );
}

export default ProfilePage;
