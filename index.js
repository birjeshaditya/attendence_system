const express=require("express");
const path = require("path");

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html.html"));
});

app.post("/sidebar",(req,res)=>{
   const clickButton=req.body.page;

   if(clickButton==="attendance"){
    res.send(
        `<!doctype html>
        <html>
        <head>
        <title>attandance</title>
        </head>
        <body>
        <h1>tere is nothing in attendence so go back</h1>
        <a href="/">go back</a>
        </body>
        </html>
        `
    );
   }
   else if (clickButton === "profile") {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Profile</title>
        </head>
        <body>
            <h1>Student Profile</h1>
            <p>Your profile details will appear here.</p>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
}   else if (clickButton === "attandance") {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>attandance</title>
        </head>
        <body>
            <h1>Student attandance</h1>
            <p>Your attandance details will appear here.</p>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
}
   else if(clickButton==="dashboard"){
    res.send(
        `<!doctype html>
        <html>
        <head>
        <title>dash board</title>
        </head>
        <body>
        <h1>dash board will appear here</h1>
        <a href="/">go back</a>
        </body>
        </html>
        `);
    
   }
   else if(clickButton==="timetable"){
    res.send(`
        <!doctype html>
        <html>
        <head>
        <title>time table</title>
        </head>
        <body>
        <h1>Time Table</h1>
        <p>timetable</p>
        <a href="/">go back</a>
        </body>
        </html>
        `);
   }
   else if(clickButton==="logout"){
    res.send(`<!doctype html>
        <html>
        <head>
        <title>logout </title>
        </head>
        <body>
        <h1></h1>please come back
        <a href="/">go back</a>
        </body>
        </html>
        `);
   }
   else {
        res.status(400).send("Unknown button selected");
    }
})

app.listen(3000,()=>{
    console.log("this code is running on port 3000")
})
