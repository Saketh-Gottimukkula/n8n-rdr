import express from "express";
import { exec } from "child_process";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("n8n Render deployment working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Start n8n on the same port
  exec(`n8n start --port ${PORT}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting n8n: ${error.message}`);
      return;
    }
    console.log(stdout);
    console.error(stderr);
  });
});

