const WebSocket = require('ws');
const { broadcastCalculation } = require('../utils/broadcast');

function setupWebSocket(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('Client connected');

        // Set an interval to broadcast calculations every 10 seconds
        const intervalId = setInterval(() => broadcastCalculation(wss), process.env.BROADCAST_INTERVAL);

        // Clear interval when client disconnects
        ws.on('close', () => {
            clearInterval(intervalId);
            console.log('Client disconnected');
        });
    });
}

module.exports = { setupWebSocket };
