/**
 * Created by Q on 5/23/2016.
 */
var express = require("express");
var app = express();
app.use(express.static(__dirname));

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function (reg, res){
    res.sendfile('index.html');
})

http.listen(3000, function(){
    console.log('listening on *:3000');
})

var id = 0;
io.on('connection', function(socket){
    socket.on('player_created', function (data){
        id++;
        console.log("New player : ", data.x + " " + data.y);
        socket.emit('player_id',{id:id});
        socket.broadcast.emit('new_player_connected',{id:id, x:data.x, y:data.y}); //gui thong diep toi tat ca client khac tru chinh player_id nay
    });
    
});