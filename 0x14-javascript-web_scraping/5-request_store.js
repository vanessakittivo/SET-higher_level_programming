#!/usr/bin/node

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, { encoding: 'utf8' }, (requestError, response, body) => {
  if (requestError) {
    console.log(requestError);
    return;
  }

  fs.writeFile(filePath, body, 'utf8', (writeError) => {
    if (writeError) {
      console.log(writeError);
    }
  });
});
