'use strict';


const express = require('express');
const app = express();


app.get('/', (req,res,next) => {
res.status(200).json({msg: "salut app 1"});
});

app.listen(3000, () => {
  console.log("App1 start on port : " + 3000);
});
