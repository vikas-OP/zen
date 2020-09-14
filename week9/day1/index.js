const path = require("path");
const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 4000;

http
  .createServer((req, res) => {
    if (req.url == "/") {
      let date = new Date();
      fs.writeFile(
        `./textfiles/${date.getDate()}-${date.getHours()}h-${date.getMinutes()}m-${date.getSeconds()}s.txt`,
        `${date}`,
        (err) => {
          if (err) throw err;
          res.end(
            `File is created with name ${date.getDate()}-${date.getHours()}h-${date.getMinutes()}m-${date.getSeconds()}s and with content ${date}`
          );
        }
      );
    } else if (req.url == "/files") {
      fs.readdir("./textfiles", (err, data) => {
        if (err) throw err;
        let fileList = [];
        data.forEach((val) => {
          let data = fs.readFileSync(`./textfiles/${val}`, "utf-8");
          fileList.push([val, data]);
        });
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(fileList));
      });
    }
  })
  .listen(PORT, () => {
    console.log("server running");
  });
