var http = require("http");
let PORT = 8081;
let host = 'localhost'
let server = http.createServer(serverhandle);

function serverhandle(req, res) {
    const url = req.url
    if (url === '/welcome') {
        res.statusCode = 200;
        res.end("Welcome to Dominos!");
    }
    else if (url === "/contact") {
        res.statusCode = 200;
        res.end(JSON.stringify(
            {
                phone: "18602100000",
                email: "guestcaredominos@jublfood.com",
            }
        ));
    } 
    else {
        res.statusCode = 404;
        res.end(`Error 404 Page Not Found!!`);
    }
}

server.listen(PORT, host, () => {
    console.log(`server is running on http://${host}:${PORT}`);
})