import express from 'express';

const app = express();
const port = 4080

app.get('/', (req,res)=>{
    res.send("hello world!")
})

app.listen(port,()=>{
    console.log('Example app listening at port 4080')
})