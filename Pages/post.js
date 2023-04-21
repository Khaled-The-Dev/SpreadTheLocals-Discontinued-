import router from '../lib/Router.js'
import { app } from '../src/app.main.js'


export async function HandlePostRoute() {
   const authManager = new AuthManager(app.supabase)
   const user = await authManager.getCurrentUser()
   if (!user.data.user) router.navigate('/')
   else {
     app.postManager.Init()
     app.db.contentDiv.innerHTML = `<form method="POST" enctype="multipart/form-data" data-Post="true" id="Post-Forum">
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" required>

  <label for="description">Description:</label>
  <textarea id="description" name="description" required></textarea>

  <label for="location">Location:</label>
  <input type="text" id="location" name="location" required>

  <label for="image">Image (300x200):</label>
  <input type="file" id="image" name="image" accept="image/*" required>
  <p>(Image must be exactly 300x200 pixels)</p>

  <button type="submit">Submit</button>
</form>
`
   }
}