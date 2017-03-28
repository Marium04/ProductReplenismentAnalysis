/**
 * Created by mariumaskri on 2017-03-26.
 */
const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/searsCa';

router.get('/item/:id',function (req,res) {
  var itemId = req.params.id;
  if(itemId === "")
    return res.send({errorMessage:"Item id cannot be empty"});
// Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    if(err)
      return res.send({errorMessage:err});
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.collection('ontarioStores').find({item_id:itemId}).toArray(function(err, docs) {
      console.log(docs);
      res.send({items:docs});
    });
  });
});

router.get('/itemIds',function (req,res) {
  MongoClient.connect(url, function(err, db) {
    if(err)
      return res.send({errorMessage:err});
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.collection('ontarioStores').distinct("item_id",function (error,docs) {
      if(error)
        return res.send({errorMessage:error});
      res.send({itemIds:docs});
    });
  });
});

module.exports = router;
