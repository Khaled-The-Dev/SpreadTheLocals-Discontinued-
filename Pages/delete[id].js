import router from '../lib/Router.js'
import { app } from '../src/app.main.js'

export function HandleDeleteRoute(ctx) {
   // extracting the parameters
   const { params } = ctx
   // grabbing the parameters id
   const id = params.id
   // deleting the requested row
   const { data, error } = app.db.delete()
   // error handling
   if (error) {
     
     throw new Error(error.message)
     
     router.navigate('/error')
   }
}