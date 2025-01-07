import React from 'react';
import { useParams } from 'react-router-dom';

export const CoursePage = () => {
  const { courseId } = useParams();
  return <div>Course: {courseId}</div>;
};
