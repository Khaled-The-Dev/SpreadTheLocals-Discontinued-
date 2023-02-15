export class AuthManager {
   constructor() {
     this.user
   }
   // initializing supabase sdk
   init(supabase) {
     this.supabase = supabase
     this.CheckAuthState()
   }
   
   // checking auth is fired on page load
   async CheckAuthState() {
     const { data: { user } } = await this.supabase.auth.getUser()
     
        this.user = user
     // if user exists or not
     if (user == null) {
       this.UserIsNotLoggedIn()
     }else {
       this.UserIsLoggedIn()
     }
   }
   
   // if user is logged in
   UserIsLoggedIn() {
     console.log('logged in');
   }
   //else
   UserIsNotLoggedIn() {
     console.log('not logged in');
   }
   
   async SignUserIn() {
     
   }
}
