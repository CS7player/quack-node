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

    //send msg;
    socket.on("send_msg", (data) => {
     let clientId = IP_CLIENTID.data["receiver_id"];
     MSG_CONTAINER.push(data);
     io.to(clientId).emit("receive_msg",{ "status" : true, "data": data });
    });

    //to get chat history
    socket.on("get_msg",(data)=>{
     let clientId = IP_CLIENTID.data["sender_id"];
     let msg_records = MSG_CONTAINER.filter((obj)=>{
      if((obj["receiver_id"] == data["receiver_id"] || obj["sender_id"] == data["sender_id"]) 
       && (obj["receiver_id"] == data["sender_id"] || obj["sender_id"] == data["receiver_id"])){
        return obj;
      }
     });
     io.to(clientId).emit("all_msg", { "status":true , "data":msg_records });
    })

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
