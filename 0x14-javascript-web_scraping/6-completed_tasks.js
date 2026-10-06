#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  try {
    const tasks = JSON.parse(body);
    const completedByUser = {};

    tasks.forEach((task) => {
      if (task.completed) {
        if (!completedByUser[task.userId]) {
          completedByUser[task.userId] = 0;
        }

        completedByUser[task.userId]++;
      }
    });

    console.log(completedByUser);
  } catch (parseError) {
    console.log(parseError);
  }
});
