const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;


app.use(
    cors(
      (corsOptions = {
        origin: "*",
      })
    )
  );
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
const rutes = require("./routes/api/books_api")
app.use(rutes)
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
