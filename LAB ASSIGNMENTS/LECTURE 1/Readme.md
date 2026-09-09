# Smart Utility Toolkit 🛠️

This is my Lab Assignment 1 for Web Dev III (Node.js & Express Backend).

I basically built a bunch of small Node.js utilities using only the built-in 
core modules — no npm packages, no Express, nothing external. Just plain 
Node.js doing its thing.

## What's inside

- **calculator.js** – a CLI calculator that takes input straight from the 
  terminal using `process.argv`. Supports add, sub, mul, div.
- **modules/isEven.js** & **modules/logger.js** – two custom modules I made 
  and reused in `app.js` using `module.exports` and `require()`.
- **server.js** – a basic HTTP server (using the `http` module) with a few 
  routes: `/`, `/about`, `/contact`, and a 404 for anything else.
- **fileManager.js** – does basic file CRUD (create, read, update, delete) 
  using the `fs` module.
- **dice.js** – rolls a dice using the `crypto` module for actual randomness 
  instead of `Math.random()`.

## How to run things

```bash
node calculator.js add 10 5
node app.js
node server.js        # then visit localhost:3000 in your browser
node fileManager.js
node dice.js
```

## Notes to myself

- No external packages were used — everything here is pure Node.js.
- Learned a lot about sync vs async behavior while messing with `fs`.
- The crypto-based dice roll was actually kind of fun to figure out.

That's it! Just a lab assignment, but a good excuse to actually understand 
what Node does under the hood instead of just importing Express for everything.