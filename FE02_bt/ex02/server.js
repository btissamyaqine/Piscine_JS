const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const { Client } = require('@notionhq/client');

const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });

app.post('/create-page', async (req, res) => {
  const { title } = req.body;

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      "properties": {
        "title": {
          "title": [
            {
              "text": {
                "content": title,
              },
            },
          ],
        },
        
      },
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});
app.get('/get_page', async(req, res) => {
      try { 
          const response = await notion.databases.query({
              database_id: process.env.NOTION_DATABASE_ID, 
          });
  
          res.json(response);
        } catch (error) {
          console.error(error);
          res.status(500).send('Something went wrong');
        }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
