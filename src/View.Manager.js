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

    // Check the user's login status
    this.refreshView();
  }
  showLoggedInElements() {
  this.loggedInElements.forEach(element => {
    element.style.display = 'block';
  });
}

  hideLoggedInElements() {
  this.loggedInElements.forEach(element => {
    element.style.display = 'none';
  });
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
