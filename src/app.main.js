/* Imports */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

import { AuthManager } from './Auth.Manager.js'

import { StorageManager } from './Storage.Manager.js'

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
     // auth initializing
     this.authManager = new AuthManager()
     
     this.authManager.init(this.supabase)
     // storage initializing
     this.storageManger = new StorageManager()
     this.storageManger.init(this.supabase)
     // fetching data on page load
     this.db.fetch()
   }
}
// initializing the app manager
const app = new App()

app.init()
