import {AuthManager} from './Auth.Manager.js'
import {Parser} from '/lib/Parser.js'
import {app} from './app.main.js'

export class DB {
   constructor() {
     this.parser = new Parser()
     this.userDiv = document.getElementById('user-div')
   }
   
   // init
   init(supabase) {
     this.supabase = supabase
   }
   
   async DetermineAuthState() {
     
     // if the user is logged in this will be set to true
     this.user = await app.viewManager.refreshView()
     //this.authState = this.authReturn.user.data.user ? true : false
     if(this.user.data.user) {
       // fetching data
       this.data = await this.fetch()
       // looping through it
       this.data.forEach((item) => {
         this.post = document.createElement('div')
         this.post.className = 'post-container'
         this.post.innerHTML = this.parser.Parse(item)
         this.userDiv.append(this.post)
       })
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
        .select('*')
        .eq('id', data_id)
   }
}