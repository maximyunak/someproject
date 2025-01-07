import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';

import {
  CourseListPage,
  CoursePage,
  CreateTaskPage,
  HomePage,
  LoginPage,
  NotFound,
  NotificationsPage,
  ProfilePage,
  RegistrationPage,
  TaskListPage,
  TaskPage,
} from 'pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tasks" element={<TaskListPage />} />
          <Route path="/createtask" element={<CreateTaskPage />} />
          <Route path="/task/:taskId" element={<TaskPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/courses" element={<CourseListPage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
