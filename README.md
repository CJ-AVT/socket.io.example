# socket.io.example
To install required packages start by running:

```bash
npm install
```

Start websocket server with:

```bash
npm run start
#runs on port 3000
#or
$env:PORT=8888 npm run start
#will set the port to 8888
```

You could have an issue with CORS if you don't run the storyline app and this server from the same domain (eg. http://localhost:3000)

To solve this issue you need to serve the articulate html with a http-server. 

run
```bash
npx http-server
```
in the storyline directory. This should serve the html at http://localhost:8080/story.html
You need to point the socket.io client at the socket.io server (runs on PORT 3000 by default)

something like 
```
const socket = io('http://localhost:3000)
```

This server will send a socket event every 1.5 seconds containing an event identifier call 'switchSlide' and a random number between 1-3.