import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementLikes } from '../store/coursesSlice';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import './CourseList.css';

const CourseList = ({ courses }) => {
  const dispatch = useDispatch();

  const handleLike = (id) => {
    dispatch(incrementLikes(id));
  };

  return (
    <Grid container spacing={3}>
      {courses.map(course => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <Card>
            <CardMedia
              component="img"
              height="100"
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
                Likes: {course.likes}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ThumbUpIcon />}
                onClick={() => handleLike(course.id)}
                sx={{ mt: 2 }}
              >
                Like
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to={`/course/${course.id}`}
                sx={{ mt: 2, ml: 2 }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CourseList;
