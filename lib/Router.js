import page from "https://unpkg.com/page/page.mjs";

class Router {
   constructor() {
     this.routes = {};
     this.currentRoute = null;
     this.contentDiv = document.getElementById('content');
      }

      addRoute(route, callback) {
        this.routes[route] = callback;
      }

      navigate(route) {
        page(route);
      }

      start() {
        page('*', (ctx, next) => {
          this.currentRoute = ctx.path;
          if (this.routes[this.currentRoute]) {
            this.routes[this.currentRoute]();
          } else {
            this.contentDiv.innerHTML = '<p>404 Not Found</p>';
          }
        });

        page.start();
      }
    }

export default Router