import React from "react";
import "./../styles/ProfilePage.css";

function CourseProgress({ progress }) {
  return (
    <div className="course-progress">
      <div className="progress-bar">
        <div
          className="progress-bar-filled"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress}% completed</p>
    </div>
  );
}

export default CourseProgress;
