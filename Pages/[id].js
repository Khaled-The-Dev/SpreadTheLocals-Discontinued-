import {app} from '../src/app.main.js'

export async function HandleDynamicRoute(ctx) {
   const { params } = ctx
   
   const id = params.id
   
   const data = await app.db.fetchRow_With_ID(id)
   
   app.db.parser.Parse(data)
}