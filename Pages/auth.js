import router from '../lib/Router.js'
import { app } from '../src/app.main.js'

import { AuthManager } from '../src/Auth.Manager.js'


export function HandleAuthRoute() {
   const authManager = new AuthManager(app.supabase)
  document.body.innerHTML = ''
   const AuthBtnContainer = document.createElement('div')
   
   AuthBtnContainer.className = 'container'
   
   AuthBtnContainer.innerHTML = `
		<h1>Log-in</h1>
		<button id="login-button" class="google-btn">Login with Google</button>`
		
		document.body.append(AuthBtnContainer)
		
		document.querySelector('#login-button').addEventListener('click', authManager.signUpWithGoogle())
}

