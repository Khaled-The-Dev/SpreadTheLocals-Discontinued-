/* Imports */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

import { AuthManager } from './Auth.Manager.js'

class App {
   constructor() {
     this.SupabaseUrl = 'https://jkcugtwqbzzcuxwfbozj.supabase.co'
     this.SupabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprY3VndHdxYnp6Y3V4d2Zib3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU5Nzk3MzQsImV4cCI6MTk5MTU1NTczNH0.NrSd5GkhHZqYQIufpkNGR1nL1z3JyCv3wPyPj9zWDT0'
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