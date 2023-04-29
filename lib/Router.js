/* Imports */
import page from "https://unpkg.com/page/page.mjs";
/* Import routes */

import { HandleAuthRoute } from '../Pages/auth.js'
import { HandleHomeRoute } from '../Pages/home.js' 
import { HandleDynamicRoute } from '../Pages/[id].js'
import { HandlePostRoute } from '../Pages/post.js'

/* Router */
class Router {
  constructor() {
    this.routes = {};
  } 

  addRoute(path, handler) {
    this.routes[path] = handler;
  }

  start() {
    page('*', (ctx, next) => {
      const handler = this.routes[ctx.path];
      if (handler) {
        handler(ctx);
      } else {
        console.error(`No route found for path: ${ctx.path}`);
      }
    });

    page();
  }
  
  navigate(route) {
    page(route)
  }
}

// initialize router
const router = new Router()

/* Routes */

// home route
router.addRoute('/index.html', () => page('/'))

router.addRoute('/', HandleHomeRoute)

// auth route
router.addRoute('/auth', HandleAuthRoute)
// create post route
router.addRoute('/create', HandlePostRoute)

// dynamic route
router.addRoute('/post/:id', HandleDynamicRoute)

router.start()
// export router
export default router