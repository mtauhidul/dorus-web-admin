import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import AddBlog from './pages/AddBlog';
import EditBlog from './pages/EditBlog';
//
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import User from './pages/User';

// ----------------------------------------------------------------------

export default function Router() {
  const { sessionStorage } = window;
  const storedToken = sessionStorage.getItem('token');
  return useRoutes([
    {
      path: '/dashboard',
      element: storedToken ? <DashboardLayout /> : <Navigate to="/login" />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <User /> },
        { path: 'add', element: <AddBlog /> },
        { path: 'edit/:id', element: <EditBlog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
