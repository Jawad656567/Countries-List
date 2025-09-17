import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact.jsx";
import Country from "./components/CountryDetails.jsx";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/contact",
        element:<Contact />
      }, {
        path:"/:country",
        element:<Country />
      }

    ]
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
