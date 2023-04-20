// Importing the Router module from the '../lib/Router.js' file
import router from '../lib/Router.js'

// Importing the app module from the '../src/app.main.js' file
import { app } from '../src/app.main.js'

// Importing the AuthManager module from the '../src/Auth.Manager.js' file
import { AuthManager } from '../src/Auth.Manager.js'

// Defining a function to handle authentication route
export function HandleAuthRoute() {
  
  // Creating an instance of the AuthManager class by passing the Supabase object from the app module
  const authManager = new AuthManager(app.supabase)
  
  // Clearing the HTML contents of the document body
  document.body.innerHTML = ''
  
  // Creating a new div element to hold the login button and setting its class to 'container'
  const AuthBtnContainer = document.createElement('div')
  AuthBtnContainer.className = 'container'
  
  // Adding the HTML content for the login button to the AuthBtnContainer element
  AuthBtnContainer.innerHTML = `
	<h1>Log-in</h1>
	<button id="login-button" class="google-btn">Login with Google</button>`
	
  // Appending the AuthBtnContainer element to the document body
  document.body.append(AuthBtnContainer)
	
  // Adding a click event listener to the login button, which calls the signUpWithGoogle method of the authManager object
  document.querySelector('#login-button').addEventListener('click', authManager.signUpWithGoogle())
}
