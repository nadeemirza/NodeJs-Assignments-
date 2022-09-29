const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  fs.writeFile(
    "./index.html",
    "<h1>Hello World</h1> <p>This is Nadeem Mirza</p>",
    (data, error) => {
      if (error) {
        console.log(err);
      }
    }
  );
  fs.readFile("./index.html", "utf-8", (err, file) => {
    if (err) console.log(err);
    res.writeHead(200, { "content-Type": "text/html" });
    res.write(file);
    res.end();
  });
});
server.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
