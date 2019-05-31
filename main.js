
const express = require('express');

const PORT = 4600;

main();

function main() {
  let app;
  app = express();
  app.get('/health', (req, res) => {
    res.status(200).json({
      apiStatus: 'ok',
    });
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
