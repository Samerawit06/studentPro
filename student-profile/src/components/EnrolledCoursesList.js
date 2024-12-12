import React from "react";
import CourseProgress from "./CourseProgress";
import "./../styles/ProfilePage.css";

function EnrolledCoursesList({ courses }) {
  return (
    <div className="enrolled-courses">
      <h3>Enrolled Courses</h3>
      {courses.map((course) => (
        <div key={course.id} className="course-item">
          <div className="course-info">
            <h4>{course.title}</h4>
            <p>{course.description}</p>
          </div>
          <CourseProgress progress={course.progress} />
          <div className="course-actions">
            <button className="details-btn">View Details</button>
            <button className="drop-btn">Drop Course</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EnrolledCoursesList;
