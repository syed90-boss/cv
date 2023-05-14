const express = require ("express");
const bodyParser = require ("body-parser");
const request = require ("request");
const https = require ("https");

const app = express();

app.use (express.static("public"));

app.use ( bodyParser.urlencoded ( {extended: true} ));

app.get ("/" , function(req , res){
    res.sendFile (__dirname + "/signup.html");
})

app.post("/" , function(req , res){
    const FirstName = req.body.fName;
    const LastName = req.body.lName; 
    const Email = req.body.email;

    // const data = {
    //     member:[
    //         {
    //             // Email : email,
    //             status : "subscribed",
    //             merge_fields : {
    //                 FName : FirstName,
    //                 LName : LastName
    //             }
    //         }
    //     ]
    // }

    // const json  = JSON.stringify(data);

    // const url = "@mailchimp/mailchimp_transactional/2f01afe837"

    // const options = {
    //     method : "POST",
    //     auth : "syed1:0c22b26472934c8c20ad826b68705b97-us17"
    // }

    // const request =  (function (response){
        
       
    //         res.sendFile(__dirname + "/success.html");
    // });

    //         res.sendFile(__dirname + "/failure.html");
           
      
        // response.on("data",function(data){
        //     console.log(JSON.parse(data));
        // })
    // });
    // request.write(jsondata);
    // request.end()
   

    console.log(FirstName,LastName,Email);

    const response =  (function (response){
        res.sendFile(__dirname + "/success.html");    
});

});

app.get ("/success.html" , function(req , res){
    res.sendFile (__dirname + "/success.html");
})

app.post("/success.html" , function (req,res){
    res.redirect("/success.html");
});

app.listen ( process.env.PORT || 3000 , function (req , res ){
    console.log ("server is started on port 3000");
})

// API KEY
// 0c22b26472934c8c20ad826b68705b97-us17

// UNIQUE ID
// 2f01afe837









  
 