import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from "./Components/Nav";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Categories from './Components/Categories';
import Recipes from './Components/Recipes';
import Creators from './Components/Creators';


const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/", 
    element:
    <div>
      <Signin/>
    </div> ,

  }, {
    path: "/signup",
    element:
    <div>
      <Signup/>
    </div> ,

  },
  {
    path: "/categories",
    element:
      <Categories/>,

  },
  {
  path: "/recipes",
  element:
    <Recipes/> ,

},
{
path: "/creators",
element: <Creators/>,

},
])
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
