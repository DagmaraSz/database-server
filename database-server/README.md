This program runs a server that stores and returns key-value pairs from the query string.

The server receives the key-value pair at /set (e.g. http://localhost:4000/set?animal=monkey) and returns the value at /get (e.g. http://localhost:4000/get?key=animal => monkey).

To run the server:

1. Clone this repo, then in your command line
2. Install all dependecies with ``npm install`` and
3. Run ``node server.js``

To run the tests use the ``mocha`` command.

The core of the program can be found in the server.js file. The app is built using Node.js, with Express for serving the application. The testing suite is Mocha, with Chai and Request assertions. These choices were made to keep the app relatively slim but also avoid reinventing the wheel.
