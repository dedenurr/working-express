const express = require('express');
const port = 3000;
const app = express();

const mainRoutes = require('./router/index');
const path = require('path');
const rootDir = require('./util/path');

app.use(mainRoutes);

app.use(express.static(path.join(rootDir, 'public')));

app.listen(port, () => {
  console.log(`the server listen on http://localhost:${port}`);
});
