// version for src/v1/routes/index.js
const express= require("express");
const router =express.Router();

router.route("/").get((req, res) => {
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
  });

// we will hook up or import or kind of use the route in index.js
module.exports=router;