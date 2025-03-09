const util = require("./utils");
exports.handleSocketConnection = (io) => {
  console.log("Socket.IO server is ready!");
  io.on("connection", (socket) => {
    let ip = socket["handshake"]["address"].split("::ffff:")[1];
    let clientId = socket.id;
    IP_CLIENTID[ip] = clientId;
    io.to(clientId).emit("connected", { status: true, msg: "Connected to server!!!" });

    //when add to hub;
    socket.on("join_hub", (data) => {
      let user_list = util.user_list();
      io.emit("get_user_list", { status: true, data: user_list });
    });

    //startGame
    // socket.on('start',(data)=>{
    //     let gameId = data['gameId'];
    //     let playerIp = GAME_ID[gameId][1];
    //     let clientId = DATA[playerIp];
    //     io.to(clientId).emit('started',{"start" : true});
    // })

    //setMove
    // socket.on('move',(data)=>{
    //     let gameId = data['gameId'];
    //     let hostIp = socket.handshake.address.split(":").pop();
    //     let playerArr = GAME_ID[gameId].filter((ip)=> ip != hostIp);
    //     console.log(playerArr);
    //     playerArr.forEach(ip => {
    //         io.to(DATA[ip]).emit('moved',{'status':true});
    //     });
    // })
  });
};

// // Handle client joining a room
// socket.on('joinRoom', (roomName) => {
//     console.log(`User ${socket.id} joining room: ${roomName}`);
//     socket.join(roomName);
// });

// // Handle a custom event to send a message to all clients in a room
// socket.on('sendMessageToRoom', (roomName, message) => {
//     console.log(`Sending message to room ${roomName}: ${message}`);
//     io.to(roomName).emit('message', { user: socket.id, message });
// });

// // Broadcast a message to all connected clients
// socket.on('sendMessageToAll', (message) => {
//     console.log(`Sending message to all clients: ${message}`);
//     io.emit('broadcastMessage', { user: socket.id, message });
// });

// // Handle disconnect event
// socket.on('disconnect', () => {
//     console.log(`User ${socket.id} disconnected`);
// });
