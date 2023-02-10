export class AuthManager {
   constructor() {
     
   }
   
   init(supabase) {
     this.supabase = supabase
     this.CheckAuthState()
   }
   
   async CheckAuthState() {
     const { data: { user } } = await this.supabase.auth.getUser()
     
     if (user == null) {
       this.UserIsNotLoggedIn()
     }else {
       this.UserIsLoggedIn()
     }
   }
   
   UserIsLoggedIn() {
     console.log('logged in');
   }
   
   UserIsNotLoggedIn() {
     console.log('not logged in');
   }
}
