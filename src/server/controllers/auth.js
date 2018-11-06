import jwt from "jsonwebtoken";

const email = "hest@hyf.com";
const password = "jacob";

const jwtPass = "caipaenie7thol8Z";

export const checkLoginInfo = (user, pass) => user === email && pass === password;

export const createToken = (user, pass) => jwt.sign({ email: user }, jwtPass);

export const verifyToken = token => jwt.verify(token, jwtPass);

// This method looks for the Authorization header in the rqeuest, and verifies that its value is correct
export const authenticatedRoute = (req, res, next) => {
  // check that the header Authorization exists
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'no credentials sent' });
  }

  // verify the authorization header token
  if (!verifyToken(req.headers.authorization)) {
    return res.status(401).send({ message: 'invalid credentials sent' }); 
  }

  // Notes;
  //  Tokens have an expiration period (usually people set it to 1 hour), we could check for that as well
  //  Advanced: At this step we could also get the email returned from verifyToken, and check for the role of this user (read from database -or from the token itself, if we set it there-) to create a role based authentication system
  
  // If token is good, then go to next()
  next();
};

export const login = (req, res) => {
  const jsonData = req.body;

  if (!checkLoginInfo(jsonData.email, jsonData.password)) {
    return res.status(401).send({ message: 'invalid credentials'});
  }

  const token = createToken(jsonData.email, jsonData.password);
  
  // TODO Read user info from a table in the database
  return res.status(200).send({ success: true, token });
};

// export default {
//   authenticatedRoute,
//   checkLoginInfo,
//   createToken,
//   verifyToken
// };
