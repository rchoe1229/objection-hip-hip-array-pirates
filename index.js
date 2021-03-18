const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.get('/', (_, response) => {
  response.json({ message: 'hello' });
});

app.listen(port, () => console.log(`listening on port ${port}`));
