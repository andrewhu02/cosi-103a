import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Header from './shared/components/header/Header';
import MainNavigation from './shared/components/navigation/MainNavigation';
import AboutUs from './pages/AboutUs';
import {Chicken,  Guacamole, PastaPesto, NigerianMeatPie, ChocoChip, Jambalaya, Dumplings } from './pages/recipe';
import { useEffect } from 'react';
import ContainerCards from './pages/Homepage';

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
        element: <ContainerCards />
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
        element: <Guacamole />
      },
      {
        path: "/recipe3",
        element: <PastaPesto/>
      },
      {
        path: "/recipe4",
        element: <NigerianMeatPie/>
      },
      {
        path: "/recipe5",
        element: <ChocoChip/>
      },
      {
        path: "/recipe6",
        element: <Jambalaya/>
      },
      {
        path: "/recipe7",
        element: <Dumplings/>
      },
      {
        path: "/recipe8",
        element: <h1>Pho</h1>
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