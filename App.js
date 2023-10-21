import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayOut from "./Pages/RootLayOut";
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<Home/>,
      }
    ]}
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
