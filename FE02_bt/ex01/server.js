const corsProxy = require('cors-anywhere');
const PORT = process.env.PORT || 3001;
corsProxy.createServer().listen(PORT, () => {
  console.log(`CORS Anywhere server running on port ${PORT}`);
});