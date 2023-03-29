import page from "https://unpkg.com/page/page.mjs";
import { HandleAuthRoute } from '../Pages/auth.js'
import { HandleHomeRoute } from '../Pages/home.js' 
import { HandleDynamicRoute } from '../Pages/[id].js'
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


const router = new Router()
router.addRoute('/index.html', () => page('/'))
router.addRoute('/', HandleHomeRoute)
router.addRoute('/auth', HandleAuthRoute)
router.addRoute('/post/:id', HandleDynamicRoute)

router.start()
console.log(router.routes);
export default router