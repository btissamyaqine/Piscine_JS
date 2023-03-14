const Client = require('@notionhq/client').Client
const dotenv = require('dotenv')

dotenv.config()

const NOTION_CLIENT = new Client({ auth: process.env.NOTION_KEY })
const DATABASE_ID = process.env.NOTION_DATABASE_ID

async function getDatabaseData(client, databaseId) {
  try {
    let results = []

    const response = await client.databases.query({
      database_id: databaseId,
    })
    results = [...results, ...response.results]
    // console.log(results) 
    // console.log(results?.length) 
    let i = 0;
    for(i ; i <= results?.length; i++){
      console.log(results[i]?.id)
    }

  } catch (error) {
    console.error(error)
  }
}
getDatabaseData(NOTION_CLIENT, DATABASE_ID)

// async function main() {
//   const data = await getDatabaseData(NOTION_CLIENT, DATABASE_ID)

//   console.log(data)
// }

// main()