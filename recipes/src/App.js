import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate , useLocation} from "react-router-dom";
import Header from './shared/components/header/Header';
import MainNavigation from './shared/components/navigation/MainNavigation';
import AboutUs from './pages/AboutUs';
import {Chicken,  Guacamole, PastaPesto, NigerianMeatPie, ChocoChip, Jambalaya, Dumplings, Pho } from './pages/recipe';
import { useEffect ,useState,  } from 'react';
import ContainerCards from './pages/Homepage';
import GroceryList from './shared/components/grocery_list/GroceryList';
import CookingModeDisplay from './shared/components/cooking_mode/CookingMode';

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
        element: 
          <Chicken />
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
        element: <Pho/>
      },
      {
        path: "/about-us",
        element: <AboutUs />
      }
    ]
  }
]);

function Root() {
  const [showList, setShowList] = useState(false);
  const [showCook, setShowCook] = useState('inline-block');
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // redirect to homepage by default
      const shouldRedirect = (window.location.pathname === "/")
      if(shouldRedirect) {
          navigate("/homepage");
      }
    //conditionally shows cooking mode, only on recipe pages
      if(location.pathname === '/homepage' || location.pathname ==='/about-us' || location.pathname==='/w'){
        setShowCook('none');
      }
      else{
        setShowCook('inline-block');
      }
  }, [navigate, showCook, location]);

  // state for grocery list,cooking mode
  
  const handleCloseList = () => setShowList(false);
  const handleShowList = () => setShowList(true);
  
  //
  
  return (
      <>
          <Header/>
          <MainNavigation handleShowList={handleShowList}/>
          <div style={{display:showCook}}>
            <CookingModeDisplay/>
          </div>
          <GroceryList show={showList} handleClose={handleCloseList}/>
          <Outlet />
      </>
  )
}