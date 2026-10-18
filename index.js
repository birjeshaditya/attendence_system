const express=require("express");

const app=express();

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.sendFile( __dirname+"/html.html");
})

app.post("/student",(req,res)=>{
    const name=req.body.studentName;
    res.send(`
        <!doctype html>
        <html>
        <head>
        <title>student profile</title>
        </head>
        <body>
        <h1>student details</h1>
        <p>student name:${name}</p>
        <a href="/">go back</a>
        </body>
        </html>
        `);
})
app.post("/batch",(req,res)=>{
    const batch=req.body.studentbatch;
    
    res.send(`
         <!doctype html>
        <html>
        <head>
        <title>student profile</title>
        </head>
        <body>
        <h1>student details</h1>
        <p>student name:${batch}</p>
        <a href="/">go back</a>
        </body>
        </html>
        `);

})
app.listen(3000,()=>{
    console.log("server is running at port number 3000");
})