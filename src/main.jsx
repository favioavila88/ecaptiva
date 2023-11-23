import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import Loader from "./components/organisms/loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader></Loader>}>
    <RouterProvider router={router} />
  </Suspense>
);
