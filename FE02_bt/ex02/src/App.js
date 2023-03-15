import React,{ useState, useEffect} from 'react';
// import fetch from 'node-fetch';
import './App.css';
// import datas from './post/data';
let datas = require('./post/data')
function App() {
  const [data, setData] = useState(datas);

  const fetchJson = () => {
    fetch('datas')
    .then(response => {
      return response.json();
    }).then(data => {
      setData(data);
    }).catch((error) => {
      console.log(error);
    });
  }
  // fetchJson();
    useEffect(() => {
    fetchJson()
    },[])
  return (
    <div className="App">
    
    {/* <p>{datas.post_adress}</p> */}
    {data && data.posts.map((item, id) => (
        <p key={id}>{item.post_title}</p>
      ))}
      ---------------------------------
      {/* <p>{datas.post_adress}</p> */}
      {data && data.posts.map((item, id) => (
        <p key={id}>{item.post_adress}</p>
      ))}
      ----------------------------------
      {/* <p>{datas.post_adress}</p> */}
      {data && data.posts.map((item, id) => (
        <p key={id}>{item.post_adress}</p>
      ))}
      -----------------------------------
      {/* <p>{datas.post_adress}</p> */}
      {data && data.posts.map((item, id) => (
        <p key={id}>{item.Created_time}</p>
      ))}
    </div>
  );
}

export default App;
