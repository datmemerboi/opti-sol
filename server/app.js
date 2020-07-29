const express = require('express');
const app = express();
const router = express.Router();
const utils = require('./utils.js');

app.use(express.json()); app.use(router)

router.all('/create', (req,res) => {
  if(req.body.doc) {
    utils.createMongoDB(req.body.doc).then(() => {
      res.sendStatus(200);
      res.end();
    }).catch(err => { throw err })
  }
});
router.all('/read', (req,res) => {
  utils.readMongoDB({}).then(docs => {
    return res.status(200).json(JSON.stringify(docs));
  }).catch(err => { throw err })
});
router.all('/list', (req,res) => {
  utils.listAllProducts().then(docs => {
    return res.status(200).json(JSON.stringify(docs));
  }).catch(err => { throw err })
});
router.all('/stock', (req, res) => {
  let query = req.body.query || {};
  utils.stockProducts(query).then(docs => {
    return res.status(200).json(JSON.stringify(docs));
  }).catch(err => { throw err })
})

app.listen(9000);
console.log(`API running at http://localhost:9000/`);
