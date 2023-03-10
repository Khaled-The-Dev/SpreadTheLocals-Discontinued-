/* Imports */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

import { AuthManager } from './Auth.Manager.js'

import { StorageManager } from './Storage.Manager.js'

import  ViewManager  from './View.Manager.js'

import { DB } from './db.Manager.js'

import { SupabaseKey, SupabaseUrl } from './env.js'

/* App Manager Class */
class App {
   constructor() {
     this.SupabaseUrl = SupabaseUrl
     this.SupabaseKey = SupabaseKey
   }
   
   init() {
     this.supabase = createClient(this.SupabaseUrl, this.SupabaseKey)
     /* Modules initializing */
     
     // db initializing
     this.db = new DB()
     this.db.init(this.supabase)
     
     // view management
     this.viewManager = new ViewManager(this.supabase)
     // storage initializing
     this.storageManger = new StorageManager(this.supabase)
     
     /* Functionality... */
     
     // this will determine the auth state and fetch data based it
     this.db.DetermineAuthState()
   }
}
// initializing the app manager
export const app = new App()

app.init()
