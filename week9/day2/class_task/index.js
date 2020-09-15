const joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

let data = [
  { id: 1, name: "SANJU", virgin: "no", lostTo: "vikas" },
  { id: 2, name: "NISHI", virgin: "no", lostTo: "funny" },
  { id: 3, name: "TANVI", virgin: "no" },
  { id: 4, name: "neha", virgin: "no", lostTo: "vikas" },
];

const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/bitches", (req, res) => {
  res.send(data);
});

app.put("/bitches/:id", (req, res) => {
  if (req.params.id > data.length) {
    res.status(404).send("not found");
  } else {
    const bitch = {
      id: req.body.id,
      name: req.body.name,
      virgin: req.body.virgin,
      lostTo: req.body.lostTo,
    };
    data = data.map((val) => (val.id == req.params.id ? bitch : val));
    res.send(bitch);
  }
});

app.post("/bitches", (req, res) => {
  const bitch = {
    id: data.length + 1,
    name: req.body.name,
    virgin: req.body.virgin,
    lostTo: req.body.lostTo,
  };
  data.push(bitch);
  res.send(bitch);
});

app.get("/bitches/:virgin", (req, res) => {
  let flag = 0;
  let ans = [];
  for (let i of data) {
    if (req.query.lostTo) {
      if (i.virgin == req.params.virgin && i.lostTo == req.query.lostTo) {
        ans.push(i);
      }
    } else {
      if (i.virgin == req.params.virgin) {
        ans.push(i);
      }
    }
  }
  if (ans.length) {
    res.send(ans);
  } else {
    res.status(404).send("No one's virgin, everyone got fucked by funny vikas");
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));
