
import * as React from "react";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

import { createMemoryRouter } from "react-router-dom";


export const router = createMemoryRouter([
    {
      path: "/",
      element: <Home />, 
    },
    {
        path: "/about",
        element: <About />,
        
      },
  ]);


export const getRoutes = (url: string) => {
  return createMemoryRouter([
    {
      path: "/",
      element: <Home />, 
    },
    {
        path: "/about",
        element: <About />,
        
      },
  ],
  {
    initialEntries: [url]
  }
  );
}
