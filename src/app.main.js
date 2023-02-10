/* Imports */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

import { AuthManager } from './Auth.Manager.js'

class App {
   constructor() {
     this.SupabaseUrl = 
     this.SupabaseKey =
   }
   
   init() {
     this.supabase = createClient(this.SupabaseUrl, this.SupabaseKey)
     // auth initializing
     this.authManager = new AuthManager()
     
     this.authManager.init(this.supabase)
     this.FetchData()
   }
   
   // function for fetching data
   FetchData() {
     console.log(this.supabase);
   }
}

const app = new App()

app.init()

console.log(app.supabase);