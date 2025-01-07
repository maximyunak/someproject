import React, { useState } from 'react';
import './Sidebar.scss';
import { MainIcon, ArrowIcon, TaskIcon, NotificationIcon, PlusIcon } from 'shared/assets';
import { Link, useLocation } from 'react-router-dom';
import { CourseTitle } from './CourseTitle';
import { MessageTitle } from './MessageTitle';

export interface ICourseRoute {
  name: string;
  courseId: string;
}

const courses: ICourseRoute[] = [
  { name: 'Английский', courseId: 'eng123' },
  { name: 'Основы алгоритмизации', courseId: 'oaip132' },
  { name: 'Дизайн', courseId: 'design123' },
  { name: 'Дизайн', courseId: 'design1233' },
  { name: 'Дизайн', courseId: 'design1234' },
  { name: 'Дизайн', courseId: 'design1235' },
  { name: 'Дизайн', courseId: 'design1236' },
  { name: 'Дизайн', courseId: 'design1237' },
  { name: 'Дизайн', courseId: 'design1238' },
  { name: 'Дизайн', courseId: 'design1239' },
];

export const Sidebar = () => {
  const { pathname } = useLocation();

  const [isCoursesVisible, setIsCoursesVisible] = useState<boolean>(false);

  const toggleCourses = () => {
    setIsCoursesVisible(!isCoursesVisible);
  };

  return (
    <div className="sidebar shadow">
      <Link to="/profile" className="sidebar__title hover-opacity">
        <div className="sidebar__user-avatar"></div>
        <div className="sidebar__user-info">
          <h3>226-веб</h3>
          <h2>Имя Фамилия</h2>
        </div>
      </Link>

      <p className="sidebar__line"></p>

      <div className="sidebar__main">
        <h3 className="ml-20">Основное</h3>
        <Link
          to="/tasks"
          className={`sidebar__main-el ${pathname === '/tasks' ? 'active' : 'hover-opacity'}`}
        >
          <TaskIcon />
          <h2>Задания</h2>
        </Link>

        <Link
          to="/notifications"
          className={`sidebar__main-el ${
            pathname === '/notifications' ? 'active' : 'hover-opacity'
          }`}
        >
          <NotificationIcon />
          <h2>Уведомления</h2>
        </Link>

        <div className="sidebar__main-courses">
          <div
            className={`sidebar__main-trigger ${
              pathname.includes('/courses') ? 'active' : 'hover-opacity'
            }`}
            onClick={toggleCourses}
          >
            <Link to="/courses" className="sidebar__main-title">
              <MainIcon />
              <h1>Курсы</h1>
            </Link>
            <ArrowIcon className={`arrowIcon ${isCoursesVisible ? 'active' : ''}`} />
          </div>
          <div className={`sidebar__courses ${isCoursesVisible ? 'visible' : ''}`}>
            {courses.map((el, id) => (
              <CourseTitle value={el} key={`${el.name}-${id}`} />
            ))}
          </div>
        </div>
      </div>

      <p className="sidebar__line"></p>

      <div className="sidebar__messages ml-20">
        <div className="sidebar__messages-title">
          <h3 className="">Сообщения</h3>
          <PlusIcon />
        </div>
        <MessageTitle />
        <MessageTitle />
        <MessageTitle />
      </div>
      <div className="sidebar__platform">Platform education</div>
    </div>
  );
};
