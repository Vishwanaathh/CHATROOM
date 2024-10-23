const express=require('express');
const WebSocket=require('ws');
const http=require('http');
const port=6969;
const server=http.createServer(express);
const wss=new WebSocket.Server({server});
wss.on('connection',(ws)=>{
    ws.on('message',(data)=>{
        wss.clients.forEach((client)=>{
            client.send(data);
        })
    })
})
server.listen(port,()=>{
    console.log("listening");
})
