import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Blog, { loaderBlog } from "../components/pages/Blog";
import Post, { loaderPost } from "../components/pages/Post";

const HomePage = React.lazy(() => import("../components/pages/HomePage"));
const Company = React.lazy(() => import("../components/pages/Company"));
const Services = React.lazy(() => import("../components/pages/Services"));
const TheProof = React.lazy(() => import("../components/pages/TheProof"));
const Careers = React.lazy(() => import("../components/pages/Careers"));
const Templates = React.lazy(() => import("../components/templates/Templates"));
const GetAnEstimate = React.lazy(() =>
  import("../components/pages/GetAnEstimate")
);
const ScrollToTop = React.lazy(() => import("../components/pages/ScrollToTop"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Templates />
      </>
    ),
    errorElement: <Error404 />,
    children: [
      {
        errorElement: <Error404 />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/company",
            element: <Company />,
          },
          {
            path: "/services",
            element: <Services />,
          },
          {
            path: "/theProof",
            element: <TheProof />,
          },
          {
            path: "/careers",
            element: <Careers />,
          },
          {
            path: "/blog",
            element: <Blog />,
            loader: loaderBlog,
          },
          {
            path: "/blog/:id",
            element: <Post />,
            loader: loaderPost,
          },
          {
            path: "/getAnEstimate",
            element: <GetAnEstimate />,
          },
        ],
      },
    ],
  },
]);

export default router;
