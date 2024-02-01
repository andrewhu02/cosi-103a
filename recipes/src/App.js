import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Header from './shared/components/header/Header';
import MainNavigation from './shared/components/navigation/MainNavigation';
import AboutUs from './pages/AboutUs';
import Chicken from './pages/Chicken';
import { useEffect } from 'react';

export default function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/homepage",
        element: <h1>This is the home page.</h1>
      },
      {
        path: "/all-recipes",
        element: <h1>This page shows all recipes.</h1>
      },
      {
        path: "/recipe1",
        element: <Chicken />
      },
      {
        path: "/recipe2",
        element: <h1>Guacamole</h1>
      },
      {
        path: "/recipe3",
        element: <h1>Pasta With Pesto</h1>
      },
      {
        path: "/recipe4",
        element: <h1>Nigerian Meat Pies</h1>
      },
      {
        path: "/recipe5",
        element: <h1>Chocolate Chip Cookies</h1>
      },
      {
        path: "/recipe6",
        element: <h1>Creole Jambalaya</h1>
      },
      {
        path: "/recipe7",
        element: <h1>Soup Dumplings</h1>
      },
      {
        path: "/about-us",
        element: <AboutUs />
      }
    ]
  }
]);

function Root() {
  const navigate = useNavigate();
  useEffect(() => {
      const shouldRedirect = (window.location.pathname == "/")
      if(shouldRedirect) {
          navigate("/homepage");
      }
  }, [navigate]);
  return (
      <>
          <Header/>
          <MainNavigation />
          <Outlet />
      </>
  )
}