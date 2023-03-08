export class StorageManager {
   constructor(supabase) {
     this.supabase = supabase
   }
   
   // uploading images and inserting them into a db table
   async UploadImage(img) {
     /* The `img` object is structured like this
       const img = {
         id: id,
         name: name,
         file: file
       }
     */
     
     // code to upload the image
     const { data, error } = await this.supabase
       .storage
       .from('Images')
       .upload(img)
       
       if (!error) return
       throw new Error(error.message)
   }
   
   async GetImage(id) {
     const {response, error} = await supabase
     .storage
     .from('Images')
     .getPublicUrl(id);
   }
}