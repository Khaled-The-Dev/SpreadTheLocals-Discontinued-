export class Parser {
   constructor() {
     
   }
   
   // parses an object and turns it to html
   Parse(data) {
   return `
  <div class="post-image">
    <img src=${data.Image} alt="Post Image">
  </div>
  <div class="post-info">
    <h2 class="post-title">${data.Title}</h2>
    <p class="post-description">${data.Description}</p>
    <p class="post-address">${data.Adress}</p>
  </div>`
   }
}