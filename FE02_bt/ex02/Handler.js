// const { Client } = require('@notionhq/client');

// const notion = new Client({
//   auth: process.env.secret_yhprlTWcor8hjo5GwADQe5W6OxQlaCWpuFmRgeDW8RU,
// });
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res
//       .status(405)
//       .json({ message: `${req.method} requests are not allowed` });
//   }
//   try {
//     const { title } = JSON.parse(req.body);
//     const NOTION_DATABASE_ID = '012a287a24954c5090f54853ce1e7c8f'
//     await notion.pages.create({
//       parent: {
//         database_id: NOTION_DATABASE_ID,
//       },
//       properties: {
//         title: {
//           title: [
//             {
//               text: {
//                 content: title,
//               },
//             },
//           ],
//         },
//       },
//     });
//     res.status(201).json({ msg: 'Success' });
//   } catch (error) {
//     res.status(500).json({ msg: 'There was an error' });
//   }
// }