var http = require("http");
const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  var url = req.url;

  if (url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(" Welcome to Dominos !");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("Page not found");
    res.end();
  }
}

httpServer.listen(8081, () => console.log("server start at port 8081"));
module.exports = httpServer;
