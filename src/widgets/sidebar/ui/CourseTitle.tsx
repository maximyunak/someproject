import React, { FC } from 'react';
import { ICourseRoute } from './Sidebar';
import { Link, useParams } from 'react-router-dom';

interface CourseTitleProps {
  value: ICourseRoute;
}

export const CourseTitle: FC<CourseTitleProps> = ({ value }) => {
  const { courseId } = useParams();

  return (
    <Link to={`courses/${value.courseId}`} className="course-title">
      <svg
        style={{ zIndex: -1 }}
        width="14"
        height="55"
        viewBox="0 0 14 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 54.7C13.3866 54.7 13.7 54.3866 13.7 54C13.7 53.6134 13.3866 53.3 13 53.3V54.7ZM0.3 0V44.9677H1.7V0H0.3ZM0.3 44.9677C0.3 49.0689 1.326 51.5893 3.19648 53.0374C5.02432 54.4525 7.49241 54.7 10 54.7V53.3C7.50759 53.3 5.47568 53.0314 4.05352 51.9304C2.674 50.8623 1.7 48.8666 1.7 44.9677H0.3ZM10 54.7H13V53.3H10V54.7Z"
          fill="#DCDBDB"
        />
      </svg>
      <h2 className={`${courseId === value.courseId && 'active'}`}>{value.name}</h2>
    </Link>
  );
};
