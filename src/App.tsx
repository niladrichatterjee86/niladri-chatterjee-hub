import React from "react";
import { RouterProvider, usePath } from "@/lib/router-shim";

// Import direct route configurations to dispatch
import { Route as indexRoute } from "@/routes/index";
import { Route as journeyRoute } from "@/routes/journey";
import { Route as blogsRoute } from "@/routes/blogs";
import { Route as collaborationsRoute } from "@/routes/collaborations";
import { Route as contactRoute } from "@/routes/contact";

function RouterDispatcher() {
  const path = usePath();

  // Static routing dispatcher mapping
  switch (path) {
    case "/": {
      const Component = indexRoute.component;
      return <Component />;
    }
    case "/journey": {
      const Component = journeyRoute.component;
      return <Component />;
    }
    case "/blogs": {
      const Component = blogsRoute.component;
      return <Component />;
    }
    case "/collaborations": {
      const Component = collaborationsRoute.component;
      return <Component />;
    }
    case "/contact": {
      const Component = contactRoute.component;
      return <Component />;
    }
    default: {
      // In case of an unmatched path, fallback gracefully to the Home page
      const Component = indexRoute.component;
      return <Component />;
    }
  }
}

export default function App() {
  return (
    <RouterProvider>
      <RouterDispatcher />
    </RouterProvider>
  );
}
