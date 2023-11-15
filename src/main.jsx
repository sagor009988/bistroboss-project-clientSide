import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-7xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
