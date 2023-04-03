import React, {useState, useEffect} from 'react';
import { createUseStyles } from 'react-jss';

const Client = require('@notionhq/client').Client;


export default function App() {
  const useStyle = createUseStyles({
    page: {
      display: 'grid',
      // margin: 500
      justifyContent: 'center',
      alignItems: 'center'
    },
    body: {
      display: 'flex',
      // margin: 500
      justifyContent: 'center'
    },
    head: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px'

    },
    created_date: {
      fontSize: '12px',
      color: 'gray'
    }, 
    last_edited_date: {
      fontSize: '12px',
      color: 'gray'
    },
    cards : {
      // margin: 50,
      display: 'block',
      justifyContent: 'center',
      // maxHeight: '500px',
      // backgroundColor: 'red',
      boxShadow: '1px 2px 9px #F4AAB9',
      margin: '4em',
      padding: '1em',
      // width: 300
    },
    span: {
      display: 'grid'
    },
    input: {
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      width: '500px',
      height: '40px'
      
      
    },
    "@media (max-width: 768px)":{
      cards: {
        width: '100%',
        display: 'grid'
      }
      
    }
  })
  const classes = useStyle()

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = `http://localhost:3001/https://api.notion.com/v1/databases/18d48a8b2bf643118405e0b0d98ca16e/query`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Notion-Version': '2021-08-16',
          'Authorization': `Bearer secret_yhprlTWcor8hjo5GwADQe5W6OxQlaCWpuFmRgeDW8RU`,
        },
      });
      const data = await response.json();
      setData(data.results);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  


  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    
    <div className={classes.page} >
        <div className={classes.head}>
          <input className={classes.input} type="text" placeholder='add your post'/>
        </div>
        <div className={classes.body}>
          {data.map(item => (
          <div  key={item.id} className={classes.cards}>
            <h1>{item.properties.post_name.rich_text[0].plain_text}</h1>
            <h4>Created By: {item.properties.post_adress.email}</h4>
            
            <div className={classes.span}>
              <span className={classes.created_date}>Created at :{item.properties.Created_time.created_time}</span>
              <span className={classes.last_edited_date}>Last edit: {item.properties.last_edited_time.last_edited_time}</span> 
            </div>
            
          </div>
          ))}
        </div>
      
    </div>
  );
}

