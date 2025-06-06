const http = require('http');
const fs = require('fs');

let tasks = [];

http.createServer((req, res) => {
  if (req.method === 'GET') {
    fs.readFile('index.html', 'utf8', (err, html) => {
      const list = tasks.map(t => `<li>${t}</li>`).join('');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html.replace('<ul id="tasks">', `<ul id="tasks">${list}`));
    });
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const task = new URLSearchParams(body).get('task');
      if (task) tasks.push(task);
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }
}).listen(3000, () => console.log('http://localhost:3000'));
