const fs = require("fs");
var countrie = JSON.parse(
  fs.readFileSync("C:/Users/Vikaas/db.json").toString()
);
for (let i = 0; i < countrie.country.length; i++) {
  countrie.country[i].id = i + 1;
}
console.log(countrie);
fs.writeFileSync("C:/Users/Vikaas/db.json", JSON.stringify(countrie));
