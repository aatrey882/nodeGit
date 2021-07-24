const http = require('http')

const server = http.createServer((req, res) => {
    //res.write(`welcome to the server Aashish`);
    //res.end()
    console.log("Request Property ", req);
    switch (req.url) {

        case "/":
            res.end("Welcome to Home page Aashish Atrey");
            break;
        case "/about":
            res.end(`<h1> This is about page</h1>`);
            break;
        default:
            res.end(`<h1> Oops!!</h1>
            <a href="/">Go to home page</a>`);
            break;
    }

})

server.listen(5000);