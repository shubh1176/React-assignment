import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/coursesSlice';
import CourseList from '../components/CourseList';

const CourseListPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.items);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h1>Course List</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default CourseListPage;
