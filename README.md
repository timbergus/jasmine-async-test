# Jasmine Asynchronous Test

Asynchronous test with standalone Jasmine using `done()`.

To see the two different results, comment the two different `beforeEach` in `spec/test.js`.

The idea is that if you don't wait to the `beforeEach` using the `done()`, value is NaN.

To run it, if you have installed PHP, just run `$ npm start`. If not, you need to open __index.html__ in the browser or using a local server.
