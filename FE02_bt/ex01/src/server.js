import { createServer } from 'cors-anywhere';
const PORT = process.env.PORT || 3001;
createServer().listen(PORT, () => {
  console.log(`CORS Anywhere server running on port ${PORT}`);
});