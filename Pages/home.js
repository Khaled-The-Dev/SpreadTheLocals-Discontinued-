import router from '../lib/Router.js'
import { app } from '../src/app.main.js'

import { AuthManager } from '../src/Auth.Manager.js'


export async function HandleHomeRoute() {
  
   const authManager = new AuthManager(app.supabase)
   
   const user = await authManager.getCurrentUser()
   
   if (!user.data.user) router.navigate('/auth')
   // adding postes
   else app.db.fetch()
   
}