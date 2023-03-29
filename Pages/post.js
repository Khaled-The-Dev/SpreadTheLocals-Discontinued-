import router from '../lib/Router.js'

router.addRoute('/create', HandlePostRoute)

function HandlePostRoute() {
   if (!user.data.user) router.navigate('/')
}