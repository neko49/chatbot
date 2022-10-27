const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 5001;
require('./dbConnect')
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})


const rooms = ['general', 'tech', 'finance', 'crypto'];
const cors = require('cors');

app.use(express.urlencoded({extended : true}));
app.use(express.json);
app.use(cors());


server.listen(PORT, () => {
    console.log(`Server Running on port : http://localhost:${PORT}`)
})