import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './StudentDashboard.css';

const StudentDashboard = ({ student }) => {
  return (
    <div className="student-dashboard">
      <Typography variant="h4" gutterBottom>{student.name}'s Courses</Typography>
      <Grid container spacing={3}>
        {student.courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={course.thumbnail}
                alt={`${course.name} thumbnail`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Instructor: {course.instructor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Due Date: {course.dueDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Progress: {course.progress}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StudentDashboard;
