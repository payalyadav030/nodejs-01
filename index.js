// how to import a package that have installed with the help of npm in terminal
const chalk = require('chalk');  // const is reserve keyword whose value cnt be changed once it is declared.
//console.log(chalk.blue('payal'));

//const moment = require('moment');
//console.log(moment().format());
//console.log(moment().format('MMMM'));
//console.log(moment().format('M-D'));
//console.log(moment().format('DD-MMMM')); // NPM MOMENT FOR MORE INGO AND TYPES

//const fs = require('fs');
//console.log(fs);
//syntax- fs.readFile(path[,options], callback)
// fs.readFile('node-day1(read a file).txt',"utf-8", function(error, data){
//    // console.log( error, data);
//    console.log(chalk.blueBright(data));
// })
// EXPRESS
// we can create a server which will help to set up the communication between the backend nd front server
const express = require('express'); //function
const app = express();
console.log(app);
const PORT = 9090;

app.use(express.json());
app.use(express.urlencoded());

///////// FOR STATIC PART- PUBLIC DIRECTORY /////////////
app.use('/static', express.static('public'));
//////////////////////////////////////////////

app.get('/', function(req, res){
    //console.log(req);
    res.status(200).send("hello world.....")
})

app.listen(PORT, function(){
    console.log("application has started on port", PORT);
}).on('error', function(error){
    console.log("unable to start app- error occurred", error);
})


////////////////////// DAY 02 OF NODE - EXPRESS JS //////////////////////////////////
app.get('/hello', function(req, res){
    console.log("query parameters", req.query)
    var name = req.query.name;
   
    res.send(name);

});
app.post('/signup', function(req, res){
    console.log("post data:", req.body)
});

////for calculating square/////////
app.get('/calculate-square', function(req, res){
    res.sendFile( __dirname + '/calculate-sqr.html');
})
app.post('/calculate-square', function(req, res){
    var number1 = req.body['number-1'];
    console.log("received from the browser", number1);
    var result = number1 * number1;

    res.json({
        square: result
    })
})


app.get('/signup', function(req, res){
    // or we can do is ki instead of writing this html file here we can use sendfile
    //  res.sendFile( __dirname + 'html file nme');
    var form = `<html>
    <head>
        <title>sign up form</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
    <div class="container">
        <h1>sign up</h1>
        <form onsubmit="return false;" class="form-group" id="signup-form">
          <input type="text" name="name" class="form-control" id="username" placeholder="username">
           <input type="text " name="password" class="form-control" id="password" placeholder="password">
          <input type="submit" class="btn btn-success"  name="submit" value="submit">
        </form>
        </div>

 <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
        <script type="text/javascript">
        $(document).ready(function(){
            console.log("app is ready")
        });
        $('#signup-form').on('submit', function(){
            var username = $('#username').val();
            var password = $('#password').val();

            console.log("username and password", username, password);

            $.ajax({
                method:"POST",
                URL:"/signup",
                data: {
                    username: username,
                    pass : password
                },
                success: function(){

                },
                error: function(){

                }
            })

        });

        </script>
    </body>
</html>`
    res.send(form);
})