const fs = require("fs");

const saveToDatabase = (DB) => {
    fs.writeFileSync("./C:\Users\Hp\Desktop\Node -Express-API\Database\db.json", JSON.stringify(DB, null, 2), {
        encoding: "utf8",
    });
};

module.exports = { saveToDatabase };