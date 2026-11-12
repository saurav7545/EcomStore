
import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
// import Fun from './pages/Fun';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'product',
        element: <Product />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      // {
      //   path:'details',
      //   element: <Fun />
      // }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
