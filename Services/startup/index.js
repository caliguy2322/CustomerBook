const aboutBook = require("../models/about");
var fs = require("fs");

let jsonData;

try {
  jsonData = JSON.parse(
    fs.readFileSync("/usr/src/app/services/startup/aboutData.json", "utf-8")
  );
} catch (err) {
  console.log(err);
  console.log(__dirname);
}

(async () => {
  try {
    await aboutBook.insertMany(jsonData);
  } catch (e) {}
})();
