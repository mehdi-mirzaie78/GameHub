import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./Pages/GameDetailPage";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
