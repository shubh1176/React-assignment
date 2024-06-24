import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CourseDetailsPage.css';

const CourseDetailsPage = () => {
  const { id } = useParams();
  const course = useSelector(state => 
    state.courses.items.find(course => course.id === parseInt(id))
  );

  if (!course) return <div>Course not found</div>;

  return (
    <div className="course-details">
      <img src={course.thumbnail} alt={`${course.name} thumbnail`} className="course-thumbnail" />
      <h1 className="course-title">{course.name}</h1>
      <p className="course-instructor">Instructor: {course.instructor}</p>
      <p className="course-description">{course.description}</p>
      <div className="course-info">
        <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Schedule:</strong> {course.schedule}</p>
        <p><strong>Location:</strong> {course.location}</p>
        <p><strong>Prerequisites:</strong> {course.prerequisites.join(', ')}</p>
      </div>
      <div className="course-syllabus">
        <h3>Syllabus</h3>
        {course.syllabus.map((week, index) => (
          <div key={index} className="syllabus-week">
            <h4>Week {week.week}: {week.topic}</h4>
            <p>{week.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetailsPage;
