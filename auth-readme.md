# Steps to do Auth

Client

1. Create a sign in form
  1.a In which we send the login credentials to the backend and check if they are correct (check hard-coded values for now)
  1.b If correct, return a token from the server (sha of the user object (with name and other required options))
  1.c In the frontend, save the value in the localStorage
2. Create a global function to add this token (from localStorage) to every request in the header (Authorization) (protectedFetch)
3. If the token doesn't exist return an error from the Client
4. Protect UI
  4.a Disable/Hide Add, Edit and Delete buttons if user is not logged In
  4.b Don't send the request to the server if the authentication token is not available in localStorage
5. Add a logout page
  5.a When called remove the auth token from localStorage

---

Server:

1. Create login route, that checks the username is the same and password is the original of the hashed value [using bcrytp] (hard-coded values, and returns a token)
2. Write a middleware that verifies the token, and continue only if it is valid
3. Use the middle ware to protect add, edit and delete endpoints
4. For now we are going to use hard-coded email and password in the code
   But explain how we can use `bcrypt` library to encrypt passwords, and save them to the database

---

New concepts:

- Express.js Middlewares (mainly to secure route)
- json web token (jwt)
- localStorage
- hash passwords (using bcrypt)
- React Context:
  - Link: https://reactjs.org/docs/context.html

---

New Libraries:

- jsonwebtoken: compact and self-contained way for securely transmitting information
  - Repo: https://github.com/auth0/node-jsonwebtoken
- bcrypt: Password hashing function
  - Repo: https://github.com/kelektiv/node.bcrypt.js
  - Wiki: https://en.wikipedia.org/wiki/Bcrypt
- lodash: modern JavaScript utility library
  - Repo: https://github.com/lodash/lodash
- classnames: utility for conditionally joining classNames together
  - Repo: https://github.com/JedWatson/classnames