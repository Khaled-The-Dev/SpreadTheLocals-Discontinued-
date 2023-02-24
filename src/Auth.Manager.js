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
     
     // if user exists or not
     if (!user) {
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
}
