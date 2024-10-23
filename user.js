const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const Code=require('./model');

const app=express();
app.use(cors());
app.use(express.json());
app.post('/start',(req,res)=>{
    const newCode = new Code({
        Code: req.body.Code, // Assuming your JSON body has a key named 'Code'
    });

    // Save the document to the database
    newCode.save()
})


mongoose.connect('mongodb+srv://admin:root@cluster0.mtdfqct.mongodb.net/CHAT?retryWrites=true&w=majority&appName=Cluster0')
.then(app.listen(3005,()=>{
    console.log('listening');
}));