import React from 'react'
import { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';

export default   function App() {
  const [data1, setData1] = useState({});
  useEffect(() =>  {
//     const response =  fetch('http://localhost:3001/https://api.notion.com/v1/pages/85e24e498ab3495fa684c187310501a9', {
//   headers: {
//     'Authorization': 'Bearer secret_yhprlTWcor8hjo5GwADQe5W6OxQlaCWpuFmRgeDW8RU',
//     'Notion-Version': '2021-08-16' // specify the Notion API version you want to use
//   }
// })
fetch(
  'api.notion.com/v1/pages/85e24e498ab3495fa684c187310501a9'
)
      .then((res) => res.json())
      .then((data1) => setData1(data1));
  }, []);


  return (
    <div>
    <NotionRenderer blockMap={data1} />
    </div>
  )
}
  

