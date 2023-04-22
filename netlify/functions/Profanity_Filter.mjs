import fetch from 'node-fetch';
import FormData from 'form-data'
import { clean } from 'profanity-cleaner';


exports.handler = async (event, context) => {
  
   const Title = event.queryStringParameters.title
   const Description = event.queryStringParameters.description
   
   const FilteredTitle = clean(Title)
   const FilteredDescription = clean(Description)
   
   const FilteredData = {
     title: FilteredTitle,
     description: FilteredDescription,
   }
   
   const Send_To_Reviewer = new FormData()
   
   Send_To_Reviewer.append('title', FilteredData.title)
   Send_To_Reviewer.append('description', FilteredData.description)
   
   /*
   fetch('', {
     method: 'POST',
     body: Send_To_Reviewer,
   })
   */
   return {
     status: 200,
     body: JSON.stringify(FilteredData)
   }
}