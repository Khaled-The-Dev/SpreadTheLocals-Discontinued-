# How to contribute:
* first you must have the prerequisite setup
* after you made your change you open a pull request
* your pull request will be reviewed the merged if accepted

# Prerequisite:
clone the repo by running `git clone https://github.com/Khaled-The-Dev/SpreadTheLocals.git`


head to [supabase.com](https://supabase.com)

create a database and create a table named Posts and create 3 fields with the defualt ones `CreatedBy: varchar, Location: varchar, Description: text`

and create a env.js (i don't want an npm headache) file to setup your environment variables like this
```
export const SupabaseUrl = your_supabase_db_url

export const SupabaseKey = your_supabase_db_key
```
