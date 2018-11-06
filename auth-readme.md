Steps to do Auth

Client

1. Create a sign in form
2. Send the values to the backend and check if they are correct (check hard-coded values)
3. If correct, return a token (sha of the user object (with name and other required options))
4. Save the value in the localStorage in the frontend
5. Create a global function to add this token (from localStorage) to every request in the header (Authorization)
6. If the token doesn't exist return an error from the Client
7. Check for the token existance in the client, to render the Add/Edit buttons
8. On Logout remove the value from localStorage (maybe name the token Authorization)

Server
1. Create login route, that checks the username/password (hard-coded values, and returns a token)







New concepts

Express.js Middlewares
jsonwebtoken
localStorage
secureRoutes