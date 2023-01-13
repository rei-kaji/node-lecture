const http = require("http");
// const server = http.createServer((request, response) => {
//   //   console.log(request);

//   if (request.url === "/") {
//     response.setHeader("Content-Type", "text/html");
//     response.write("<h2>Hello World</h2>");
//     response.end();
//   }
// });

// server.listen(3000);

const server = http.createServer();

server.on("request", function (req, res) {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("Hello Developer\n");

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>Hello World</h2>");
    res.end();
  } else if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>Welcome Home!</h2>");
    res.end();
  }
});

server.on("listening", function () {
  console.log("Server is running!");
});

server.listen(5001);
