import {AuthManager} from './Auth.Manager.js'

export class DB {
   constructor() {
   }
   
   // init
   init(supabase) {
     this.supabase = supabase
     
   }
   
   async DetermineAuthState() {
     
     // if the user is logged in this will be set to true
     this.auth = new AuthManager(this.supabase)
     const user = await this.auth.getCurrentUser()
     //this.authState = this.authReturn.user.data.user ? true : false
     if(user.data.user) {
       this.fetch()
     }else{
       return false
     }
   }
   // fetch all
   async fetch() {
     const { data: DATA, error } = await this.supabase
       .from('Posts')
       .select('*')
       if (error) {
         throw new Error('an error occurred')
       }
     return DATA
   }
   
   // fetch with id
  async fetchRow_With_ID(data_id) {
     const { data: requested_item, error} = await this.supabase
        .from('Posts')
        .select('*', data_id)
   }
}