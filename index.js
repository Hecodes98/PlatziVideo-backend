const express = require("express");
const app = express();

const { config } = require("./config/index");
const moviesApi = require("./routes/movies");

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});

// app.get("/", (req, res) => {
//   const stream = fs.createReadStream(__dirname + "/big");
//   stream.pipe(res);
// });
