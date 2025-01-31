import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Statistics from "../Pages/Statistics";
import ErrorHandle from "../ErrorHandle/ErrorHandle";
import AllCard from "../AllCard/AllCard";
import CasrdDetails from "../CardDetails/CasrdDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorHandle />,

    children: [
      {
        path: "/",
        element: <Home />,

        loader: () => fetch("/category.json"),
        children: [
          {
            path: "/",
            element: <AllCard />,
            loader: () => fetch("/Electronics.json"),
          },
          {
            path: "/Allproduct",
            element: <AllCard />,
            loader: () => fetch("/Electronics.json"),
          },
          {
            path: "/allCategory/:category",
            element: <AllCard />,
            loader: () => fetch("/Electronics.json"),
          },
        ],
      },
      {
        path: "/Statistics",
        element: <Statistics />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },

      {
        path: "/card/:id",
        element: <CasrdDetails />,
        loader: () => fetch("/Electronics.json"),
      },
    ],
  },
]);

export default routes;
