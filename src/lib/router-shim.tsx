import React, { createContext, useContext, useEffect, useState } from "react";

// Simple routing state
const RouterContext = createContext<{
  path: string;
  navigate: (to: string) => void;
}>({
  path: "/",
  navigate: () => {},
});

export function RouterProvider({ children }: { children: React.ReactNode }) {
  // Support both hash routing and pathname routing (hash routing is incredibly solid inside preview iframes)
  const getInitialPath = () => {
    if (window.location.hash) {
      return window.location.hash.substring(1) || "/";
    }
    return window.location.pathname || "/";
  };

  const [path, setPath] = useState(getInitialPath());

  useEffect(() => {
    const handlePopState = () => {
      setPath(getInitialPath());
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith("http") || to.startsWith("mailto:")) {
      window.location.href = to;
      return;
    }
    
    // Set both hash and state to be highly compatible
    window.location.hash = to;
    setPath(to);
    window.scrollTo({ top: 0 });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function usePath() {
  return useContext(RouterContext).path;
}

export function useNavigate() {
  return useContext(RouterContext).navigate;
}

export function Link({
  to,
  className,
  children,
  activeOptions,
  ...props
}: any) {
  const { path, navigate } = useContext(RouterContext);
  
  // Decide active state
  const isActive = to === "/" ? path === "/" : path === to || path.startsWith(to + "/");

  const handleClick = (e: React.MouseEvent) => {
    if (to.startsWith("http") || to.startsWith("mailto:") || e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const href = to.startsWith("/") ? `#${to}` : to;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={typeof className === "function" ? className({ isActive }) : className}
      data-status={isActive ? "active" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

export function createFileRoute(path: string) {
  return function (config: any) {
    return {
      path,
      ...config,
    };
  };
}

export function useRouter() {
  return {
    invalidate: () => {},
  };
}
