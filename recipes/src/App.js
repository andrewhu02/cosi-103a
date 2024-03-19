import React from 'react';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './shared/components/header/Header';
import MainNavigation from './shared/components/navigation/MainNavigation';
import AboutUs from './pages/AboutUs';
import ContainerCards from './pages/Homepage';
import GroceryList from './shared/components/grocery_list/GroceryList';
import CookingModeDisplay from './shared/components/cooking_mode/CookingMode';
import RecipeInput from './pages/recipe-api/RecipeInput';
import RecipeDetails from './pages/recipe-api/RecipeDetails';
import {
  Chicken,
  Guacamole,
  PastaPesto,
  NigerianMeatPie,
  ChocoChip,
  Jambalaya,
  Dumplings,
  Pho,
  recipeInstructions,
} from './pages/recipe';
export default function App() {
  const [recipes, setRecipes] = useState([...recipeInstructions]);

  // eslint-disable-next-line
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root recipes={recipes} setRecipes={setRecipes} />,
      children: [
        {
          path: '/homepage',
          element: <ContainerCards />,
        },
        {
          path: '/add-new-recipe',
          element: <RecipeInput recipes={recipes} setRecipes={setRecipes} />,
        },
        {
          path: '/recipe1',
          element: <Chicken />,
        },
        {
          path: '/recipe2',
          element: <Guacamole />,
        },
        {
          path: '/recipe3',
          element: <PastaPesto />,
        },
        {
          path: '/recipe4',
          element: <NigerianMeatPie />,
        },
        {
          path: '/recipe5',
          element: <ChocoChip />,
        },
        {
          path: '/recipe6',
          element: <Jambalaya />,
        },
        {
          path: '/recipe7',
          element: <Dumplings />,
        },
        {
          path: '/recipe8',
          element: <Pho />,
        },
        {
          path: '/about-us',
          element: <AboutUs />,
        },
        {
          path: '/all-recipes',
          element: <RecipeDetails recipes={recipes} />,
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

function Root({ recipes }) {
  const [showList, setShowList] = useState(false);
  const [showCook, setShowCook] = useState(false);
  const [cookRecipe, setCookRecipe] = useState({ title: '', desc: '', num: 0 });

  const location = useLocation();
  const navigate = useNavigate();

  const handleShowCook = () => {
    setShowCook(true);
  };

  const handleCloseCook = () => {
    setShowCook(false);
  };

  // Redirect to the homepage if the user is on the root URL
  useEffect(() => {
    const shouldRedirect = window.location.pathname === '/';
    if (shouldRedirect) {
      navigate('/homepage');
    }

    const isRecipePage = location.pathname.startsWith('/recipe');

    if (location.pathname === '/homepage' || location.pathname === '/about-us' || !isRecipePage) {
      setShowCook(false);
    } else {
      const recipeNumber = parseInt(location.pathname.replace('/recipe', ''), 10);
      if (!isNaN(recipeNumber) && recipeNumber >= 1 && recipeNumber <= recipes.length) {
        setCookRecipe(recipes[recipeNumber - 1]);
      }
    }
  }, [navigate, location, recipes]);

  const handleCloseList = () => setShowList(false);
  const handleShowList = () => setShowList(true);

  return (
    <>
      <Header />
      <MainNavigation handleShowList={handleShowList} handleShowCook={handleShowCook} />
      {showCook && (
        <div>
          <CookingModeDisplay instructionArr={cookRecipe} show={showCook} handleClose={handleCloseCook} />
        </div>
      )}
      <GroceryList show={showList} handleClose={handleCloseList} />
      <Outlet />
    </>
  );
}
