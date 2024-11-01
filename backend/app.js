require('dotenv').config();

const express = require('express');
const http = require('http');
const { setupWebSocket } = require('./config/websockets');

const app = express();
const server = http.createServer(app);

// Initialize WebSocket
setupWebSocket(server);

// Start the server
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
