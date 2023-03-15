const Client = require('@notionhq/client').Client;
const dotenv = require('dotenv');
// const fs = require('fs');
// const path = require('path');


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

    // while loop variables
    let hasMore = response.has_more
    let nextCursor = response.next_cursor

    // keep fetching while there are more results
    while (hasMore) {
      const response = await client.databases.query({
        database_id: databaseId,
        start_cursor: nextCursor,
      })
      results = [...results, ...response.results]
      hasMore = response.has_more
      nextCursor = response.next_cursor
    }

    console.log(results) 
  } catch (error) {
    console.error(error)
  }
}
getDatabaseData(NOTION_CLIENT, DATABASE_ID)
// function normalizeDataItem(item) {
//   const {  post_title, post_adress, last_edited_time, Created_time } = item.properties

//   return {
//     // url: url?.url,
//     post_title: post_title?.title ?? '',
//     post_adress: post_adress?.email ?? '',
//     last_edited_time: last_edited_time?.last_edited_time ?? '',
//     Created_time: Created_time?.created_time ?? '',
//   }
// }
// async function main() {
//   const data = await getDatabaseData(NOTION_CLIENT, DATABASE_ID)
//   const normalizedData = data?.map((item) => normalizeDataItem(item))

//   const outputFilePath = path.join(__dirname, 'data.json')
//   fs.writeFileSync(outputFilePath, JSON.stringify(normalizedData, null, 2))
// }
// main()