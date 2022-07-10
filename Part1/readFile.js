const fs = require("fs");

fs.readFile("./data.json", "utf-8", (err, rawData) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(JSON.parse(rawData));
});
