import {AuthManager} from './Auth.Manager.js';

class ViewManager {
  constructor(supabase) {
    // auth initializing
    this.authManager = new AuthManager(supabase);
    this.userDiv = document.querySelector('#user-div');
    this.loginButton = document.querySelector('#login-button');
    this.PostButton = document.querySelector('#Post-Button')

    this.PostElements = document.querySelectorAll('[data-Post ="true"]')
    this.NonePostElements = document.querySelectorAll('[data-Post="false"]')
    // Bind event listeners
    this.loginButton.addEventListener('click', this.handleLoginClick.bind(this));
    
    this.PostButton.addEventListener('click', this.handlePostClick.bind(this))
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

  showPostingElements() {
    this.PostElements.forEach(element => {
       element.style.display = 'block'
    })
    this.NonePostElements.forEach(elem => {
      elem.style.display = 'none'
    })
  }
  
  HidePostingElements() {
    this.NonePostElements.forEach(elem => {
        elem.style.display = 'block'
    })
    this.PostElements.forEach(elem => {
      elem.style.display = 'none'
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
  async handlePostClick() {
    if (!this.user.data.user) return
    this.showPostingElements()
  }
  async refreshView() {
    this.user = await this.authManager.getCurrentUser();
     // check if user is logged in and show/hide elements accordingly

    if (this.user.data.user) {
       this.showLoggedInElements()
    } else {
       this.hideLoggedInElements()
    }
    
    return this.user
  }
}

export default ViewManager;