// Import the createClient function from the Supabase JavaScript library
import { createClient } from 'supabase'

// Import the AuthManager class from the Auth.Manager.js file
import { AuthManager } from './Auth.Manager.js'

// Import the ViewManager class from the View.Manager.js file
import ViewManager from './View.Manager.js'

// Import the DB class from the db.Manager.js file
import { DB } from './db.Manager.js'

// Import the PostManager class from the Post.Manager.js file
import { PostManager } from './Post.Manager.js'

// Import the SupabaseKey and SupabaseUrl from the env.js file
import { SupabaseKey, SupabaseUrl } from 'env'

// Define the App class
class App {
  constructor() {
    // Set the Supabase URL and key
    this.SupabaseUrl = SupabaseUrl
    this.SupabaseKey = SupabaseKey
  }

  // Initialize the app
  init() {
    // Create a new Supabase client using the Supabase URL and key
    this.supabase = createClient(this.SupabaseUrl, this.SupabaseKey)

    /* Modules initializing */

    // Initialize the DB module and pass in the Supabase client
    this.db = new DB()
    this.db.init(this.supabase)

    // Initialize the View Manager module
    // Initialize the Post Manager module and pass in the Supabase client
    this.postManager = new PostManager(this.supabase)

    /* Functionality... */
  }
}

// Create a new instance of the App class and export it
export const app = new App()

// Call the init() function to initialize the app
app.init()
