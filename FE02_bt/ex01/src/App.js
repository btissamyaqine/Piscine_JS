import React from 'react'
import { Client } from '@notionhq/client';

function App() {

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  
});
const page = await notion.pages.retrieve({
  page_id: 'PAGE_ID_HERE',
});

console.log(page.id);
  return (
    <div>App</div>
  )
}

export default App