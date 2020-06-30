const express = require('express');
const path = require('path');
const cors = require('cors');

const controller = require('./routes.js');

const pathToPublicDir = path.join(__dirname, '../client/public');
const app = express();

app.use(cors());
app.use(express.static(pathToPublicDir));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/data/', controller.dataGetAll);
// app.get('/api/data/:id/', controller.dataGetOne);
// app.post('/api/data', controller.dataCreate);
// app.put('/api/data/:id', controller.dataUpdateOne);

const port = 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port: ${port}`);
});
