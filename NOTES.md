## Installation Guide

### On the root initialize node project

```
 npm init --y
 
 npm install express mongoose nodemon
```

### Change package.json by adding:

```
"type": "module",

"scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  },
```

## Technologies used


### cookie-parser
Cookie-parser is a middleware which parses cookies attached to the client request object. To use it, we will require it in our index. js file; this can be used the same way as we use other middleware.

### postman
Postman can be used to write functional tests, integration tests, regression tests, and more. Postman's Node. js-based runtime contains support for common patterns and libraries that you can use to build tests quickly.

### bcrypt
Bcrypt is a valuable tool to use to hash and store passwords. Its major benefits include: Slow runtime. Bcrypt is a slow-functioning algorithm that takes time to create password hashes and requires time to decrypt them, significantly slowing hacker attempts to break the bcrypt hash.

### jsonwebtoken
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

```
 npm install bcryptjs
 
 npm install dotenv
 
 npm install jsonwebtoken
```