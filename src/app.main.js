/* Imports */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

import { AuthManager } from './Auth.Manager.js'

import { SupabaseKey, SupabaseUrl } from './env.js'

/* App Manager Class */
class App {
   constructor() {
     this.SupabaseUrl = SupabaseUrl
     this.SupabaseKey = SupabaseKey
   }
   
   init() {
     this.supabase = createClient(this.SupabaseUrl, this.SupabaseKey)
     // auth initializing
     this.authManager = new AuthManager()
     
     this.authManager.init(this.supabase)
     this.FetchData()
   }
   
   // function for fetching data
   async FetchData() {
     const { data: DATA, error } = await this.supabase
              .from('Posts')
              .select('*', {ascending: false})
   }
}

// initializing the app manager
const app = new App()

app.init()
