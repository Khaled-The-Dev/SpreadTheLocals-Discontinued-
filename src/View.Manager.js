import {AuthManager} from './Auth.Manager.js';

class ViewManager {
  constructor(supabase) {
    // auth initializing
    this.authManager = new AuthManager(supabase);
    this.userDiv = document.querySelector('#user-div');
    this.loginButton = document.querySelector('#login-button');

    // Bind event listeners
    this.loginButton.addEventListener('click', this.handleLoginClick.bind(this));
    // collect html elements
      this.loggedInElements = document.querySelectorAll('[data-logged-in="true"]');
      this.loggedOutElements = document.querySelectorAll('[data-logged-in="false"]')
    // Check the user's login status
    this.refreshView();
  }
  showLoggedInElements() {
  this.loggedInElements.forEach(element => {
    element.style.display = 'block';
  });
  this.loggedOutElements.forEach(element => {
     element.style.display = 'none'
  })
}

  hideLoggedInElements() {
  this.loggedInElements.forEach(element => {
    element.style.display = 'none';
  });
  this.loggedOutElements.forEach(element => {
     element.style.display = 'block'
  })
}
  async handleLoginClick() {
    try {
      await this.authManager.signUpWithGoogle();
      this.refreshView();
      console.log('clicked');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  }
  
  async refreshView() {
    const user = await this.authManager.getCurrentUser();
     console.log(user);
     // check if user is logged in and show/hide elements accordingly

    if (user.data.user) {
       this.showLoggedInElements()
    } else {
       this.hideLoggedInElements()
    }
  }
}

export default ViewManager;
