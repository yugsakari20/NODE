const http = require('http');
const fs = require('fs');
const port = 3030;

const myserver = http.createServer((req, res) => {
  const log = `${Date.now()}: New request received\n`;

  // Append the log to log.txt
  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error('Error writing to log file', err);
    } else {
      console.log('Log updated');
    }
  });

  // Respond to the request
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, your request was received.\n');
});

myserver.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
