import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../containers/Layout/Layout";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Products/Products";
import DetailProducts from "../pages/DetailProducts/DetailProducts";

export const ROUTES = [
  {
    key: "layout",
    title: "Inicio",
    path: "/",
    element: <Layout />,
    children: [
      {
        key: "products",
        title: "Productos",
        path: "items",
        element: <Products />,
      },
      {
        key: "detailProducts",
        title: "Detalle Productos",
        path: "/items/:id",
        element: <DetailProducts />,
      },
      {
        key: "404",
        title: "Página no encontrada",
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const App = () => useRoutes(ROUTES);

export default App;
