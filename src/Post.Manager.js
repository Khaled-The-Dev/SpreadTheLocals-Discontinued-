// Defining a class to manage posts
export class PostManager {
  constructor(supabase) {
    // Creating an instance of the supabase object and setting it as an instance variable
    this.supabase = supabase
  }
  
  Init() {
    
    // Getting a reference to the HTML form element for the post forum
    this.forum = document.querySelector('#Post-Forum')
    
    // Binding the HandleSubmit method to the submit event of the forum element
    this.forum.addEventListener('submit', this.HandleSubmit.bind(this))
  }
  async HandleSubmit(event) {
    // Preventing the default form submission behavior
    event.preventDefault()
    
    // Retrieving values from input fields
    let TitleValue = document.getElementById('title').value
    let DescriptionValue = document.getElementById('description').value
    const LocationValue = document.getElementById('location').value
    const Image = document.getElementById("image").files[0];
    
    // Uploading the image to Supabase storage
    const {data, error} = await this.supabase
      .storage
      .from('post-images')
      .upload(Image.name, Image)
      
    // Creating a signed URL for the uploaded image
    const { data: signedURL, error: signedUrlError } = await this.supabase.storage
      .from('post-images')
      .createSignedUrl(data.path, 1000 * 365 * 24 * 60 * 60 * 1000); // 1000 years in milliseconds
    
    console.log(signedURL.signedUrl);
    // Profanity filtering
    const ProfanityFilterUrl = `?Title=${TitleValue}& Description=${DescriptionValue}`
    const res = await fetch(ProfanityFilterUrl, {
       method: 'POST',
       body: form
    })
    
    const data2 = await res.json()
    console.log(data2);
    // Creating an object to hold post data
    /* 
    const object = {
      Title: TitleValue,
      Description: DescriptionValue,
      Location: LocationValue,
      ImageUrl: signedURL.signedUrl // Setting the URL of the uploaded image as the ImageUrl property of the object
    }
    
    // Inserting the post data into the Posts table in the Supabase database
    this.Insert(object)
    */
  }
   
  async Insert(object) {
    // Inserting the object into the Posts table using the Supabase client
    const {data, error} = await this.supabase
      .from('Posts')
      .insert(object)
     
    // Throwing an error if there was an error inserting the object
    if (error) {
      throw new Error(error)
    }
  }
}
