export class DB {
   constructor() {
     
   }
   
   // init
   init(supabase) {
     this.supabase = supabase
   }
   
   // fetch all
   async fetch() {
     const { data: DATA, error } = await this.supabase
       .from('Posts')
       .select('*')
     return DATA
   }
   
   // fetch with id
  async fetchRow_With_ID(data_id) {
     const { data: requested_item, error} = await this.supabase
        .from('Posts')
        .select('*', data_id)
   }
}