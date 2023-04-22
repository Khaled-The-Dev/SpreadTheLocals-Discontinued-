import { clean } from 'profanity-cleaner';


const handler = async (event, context) => {
  
   const Title = event.queryStringParameters.title
   const Description = event.queryStringParameters.description
   
   const FilteredTitle = clean(Title)
   const FilteredDescription = clean(Description)
   
   const FilteredData = {
     title: FilteredTitle,
     description: FilteredDescription,
   }
   console.log(FilteredData);
   
   console.log(JSON.stringify(FilteredData));
   return {
     statusCode: 200,
     body: JSON.stringify({ message: "Hello World" }),
   };
}

export { handler }