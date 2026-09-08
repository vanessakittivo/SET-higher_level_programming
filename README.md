# Higher-level programming

This repository contains my higher-level programming projects and exercises.

## JavaScript Warm Up

The `0x12-javascript-warm_up` directory contains introductory JavaScript exercises using `Node.js`.

## Learning Objectives

This project helps me learn how to:

- Run JavaScript files with `Node.js`
- Use `console.log()`
- Work with command-line arguments
- Use `process.argv`
- Convert values to integers with `parseInt()`
- Use `if` and `else` statements
- Use `for` loops
- Work with arrays
- Use string methods such as `.repeat()`
- Follow JavaScript coding standards
- Check code with `Semistandard`

## Project Files

| File | Description |
|---|---|
| `0-javascript_is_amazing.js` | Prints `JavaScript is amazing` |
| `1-multi_languages.js` | Prints messages about C, Python, and JavaScript |
| `2-arguments.js` | Checks the number of arguments |
| `3-value_argument.js` | Prints the first argument |
| `4-concat.js` | Concatenates two arguments |
| `5-to_integer.js` | Converts an argument to an integer |
| `6-multi_languages_loop.js` | Prints messages using a loop |
| `7-multi_c.js` | Prints `C is fun` multiple times |
| `8-square.js` | Prints a square using `X` |

## Running the Files

JavaScript files can be executed directly from the terminal.

# AI Pair Programming

## Overview

This project demonstrates using AI as a pair programmer for implementation, documentation, and testing.

The task has three main parts:

1. Implement `logWithTimestamp`
2. Generate JSDoc for `deepMerge`
3. Generate unit tests for `deepMerge`

---

## 1. Implement `logWithTimestamp`

### Objective

Create a logging function using an AI pair programmer.

The function must:

- Accept `message` and `level`
- Format the current date and time as `YYYY-MM-DD HH:mm:ss`
- Convert the log level to uppercase
- Print the message in this format:

### Function Contract

The comment and function signature were written before asking AI to generate the implementation.

```javascript
// Format the current date and time and log the message to the console
// prefixed with the timestamp and the uppercase log level.
// The timestamp must use the format YYYY-MM-DD HH:mm:ss.
function logWithTimestamp(message, level) {

}

## 2. Generate JSDoc for `deepMerge`

### Objective

Use AI to generate complete JSDoc documentation for the supplied `deepMerge` function.

```javascript
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

The JSDoc must include:

- `@param`
- `@returns`
- An explanation of the recursive/deep merge behavior

## 4. Active Learning Reflection

The principle "You Do the Thinking, AI Does the Typing" was demonstrated by defining the function contract before using AI. I focused on what the function needed to do, such as the timestamp format and uppercase log level, while AI helped generate the implementation. I then reviewed the generated code to make sure it matched the requirements.



