class Router {
  constructor(routes) {
    this.routes = routes;
    this.defaultRoute = "/";
    this.currentRoute = null;
    this.handler = null;
  }

  start() {
    // Listen for the popstate event to detect when the user navigates
    window.addEventListener("popstate", () => {
      this.routeTo(window.location.pathname);
    });

    // Route to the initial URL
    this.routeTo(window.location.pathname);
  }

  routeTo(path) {
    // Find the handler function for the current route
    this.handler = this.routes[path] || this.notFoundHandler;

    // Extract any dynamic data from the route
    const match = path.match(this.handler.pattern);
    const params = match && match.slice(1);

    // Set the current route and call the handler function
    this.currentRoute = path;
    this.handler.fn(...params);
  }

  notFoundHandler() {
    // Display the 404 error page content
    document.body.innerHTML = `<h1>404 Not found</h1>`
  }
}

export default Router