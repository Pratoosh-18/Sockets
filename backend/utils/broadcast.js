const { performCalculation } = require("../services/calculations");


function broadcastCalculation(wss) {
    const value = performCalculation();
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ value }));
        }
    });
}

module.exports = { broadcastCalculation };
