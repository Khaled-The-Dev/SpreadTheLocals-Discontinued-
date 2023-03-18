export class PostManager {
   constructor(supabase) {
     this.supabase = supabase
     this.forum = document.querySelector('#Post-Forum')
     
     // binding event listener
     this.forum.addEventListener('submit', this.HandleSubmit.bind(this))
   }
   
   async HandleSubmit(event) {
     event.preventDefault()
     // get input
     const TitleValue = document.getElementById('title').value
     
     const DescriptionValue = document.getElementById('description').value
     
     const LocationValue = document.getElementById('location').value
     
     const Image = document.getElementById("image").files[0];
      
      //upload image
      const {data, error} = await this.supabase
      .storage
      .from('post-images')
      .upload(Image.name, Image)
      
      // create a signed url
      const { signedURL, error: signedUrlError } = await this.supabase.storage
    .from('post-images')
    .createSignedUrl(data.path, 1000 * 365 * 24 * 60 * 60 * 1000); // 1000 years in milliseconds
    
     const object = {
       Title: TitleValue,
       Description: DescriptionValue,
       Location: LocationValue,
       ImageUrl: signedURL
     }
     
     this.Insert(object)
   }
   
   async Insert(object) {
     const {data, error} = await this.supabase
     .from('Posts')
     .insert(object)
     
     if (error) {
       throw new Error(error)
     }
   }
}