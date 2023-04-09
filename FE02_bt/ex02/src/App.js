import React from 'react'
import axios from 'axios';

function App() {
  const [title, setTitle] = React.useState('');
   const [APIData, setAPIData] = React.useState([]);
  const createPage = async (e) => {
  try {
    const response = await axios.post('http://localhost:5000/create-page', {
      title,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  try {
    const response = await axios.get('http://localhost:8000/get_page')
      .then(response => {
        setAPIData(response.data.results);
        console.log(response.data.results);
      })
  } catch (error) {
    console.error(error);
  }

  };
  // createPage(title)
  return (
        <div className=''>
    
    <form className='' onSubmit={createPage}>
      <h1 className=''>React Out To Us</h1>
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="John Doe"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <button className="" type="submit">
        Submit
      </button>
    </form>
    <div>
    <p>API DATA</p>
          {
            APIData.map((data) => {
              return (
                <div key={data.id}>
                   <p>Name: {data.properties.title.title[0].text.content}</p>
                   
               </div>
              )
           })
          }
    </div>
  </div>
  )
  }



export default App
