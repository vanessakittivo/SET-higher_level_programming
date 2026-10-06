#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const wedgeUrl = '/people/18/';

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  try {
    const films = JSON.parse(body).results;
    let count = 0;

    films.forEach((film) => {
      if (film.characters.some((character) => character.includes(wedgeUrl))) {
        count++;
      }
    });

    console.log(count);
  } catch (parseError) {
    console.log(parseError);
  }
});
