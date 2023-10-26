import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import HomePage from "../components/pages/HomePage";
import Company from "../components/pages/Company";
import Services from "../components/pages/Services";
import TheProof from "../components/pages/TheProof";
import Careers from "../components/pages/Careers";
import Blog, { loaderBlog } from "../components/pages/Blog";
import Post, { loaderPost } from "../components/pages/Post";
import Templates from "../components/templates/Templates";
import GetAnEstimate from "../components/pages/GetAnEstimate";
import ScrollToTop from "../components/pages/ScrollToTop";

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
