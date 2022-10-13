const router = require("express").Router();

// your first API endpoint...
router.get("/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

router.get("/test", (req, res) => {
  console.log(`En ruta "/api/test"`);
  try {
    let responseObj = {
      ipaddress: "",
      language: "",
      software: "",
    };
    return res.status(200).send(responseObj);
  } catch (error) {}
});

router.get("/whoami", (req, res) => {
  console.log(`En /api/whoami`);
  try {
    console.log(req.ip);
    console.log(req.header("accept-language"));
    console.log(req.header("User-agent"));
    // console.log(req);
    let responseObj = {
      ipaddress: req.ip,
      language: req.header("accept-language"),
      software: req.header("User-agent"),
    };
    return res.status(200).send(responseObj);
  } catch (error) {
    console.log(`Error en /api/whoami. ${error.message}`);
    return res.status(400).send({ error: error.message });
  }
});

module.exports = router;
