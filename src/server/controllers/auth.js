import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import UnauthorizedError from '../errors/UnauthorizedError';

const jwtPass = "caipaenie7thol8Z";

// The email and password hash should be saved to a database, they are hard-coded here for simplification
const email = "hest@hyf.com";
// const password = "jacob";
const passwordHash = '$2b$10$0Jvk7/fBmMI/mISeI1p2zus/UkRG0dWrlTWvyPl6h1P7o3krvjZae';


// const encryptPassword = pass => {
//   const saltRounds = 10;
//   // bcrypt.hash(pass, saltRounds, function(err, hash) {
//   //   // Store hash in your password DB.
//   //   console.log({hash});
//   // });
//   console.log({ hash: bcrypt.hashSync(pass, saltRounds) });
// }
// encryptPassword(password);

// export const checkLoginInfo = (user, pass) => user === email && pass === password;
export const checkLoginInfo = (user, pass) => user === email && bcrypt.compareSync(pass, passwordHash);

export const createToken = (user, pass) => jwt.sign({ email: user }, jwtPass);

export const verifyToken = token => jwt.verify(token, jwtPass);

// This method looks for the Authorization header in the rqeuest, and verifies that its value is correct
export const authenticatedRoute = (req, res, next) => {
  // check that the header Authorization exists
  if (!req.headers.authorization) {
    return next(new UnauthorizedError('credentials_required', { message: 'No authorization token was found' }));
    // return res.status(401).send({ message: 'no credentials sent' });
  }

  // verify the authorization header token
  if (!verifyToken(req.headers.authorization)) {
    return next(new UnauthorizedError('credentials_bad_format', { message: "Couldn't verify the authorization token" }));
    // return res.status(401).send({ message: 'invalid credentials sent' }); 
  }

  // Notes;
  //  Tokens have an expiration period (usually people set it to 1 hour), we could check for that as well
  //  Advanced: At this step we could also get the email returned from verifyToken, and check for the role of this user (read from database -or from the token itself, if we set it there-) to create a role based authentication system
  
  // If token is good, then go to next()
  next();
};

export const login = (req, res, next) => {
  const jsonData = req.body;

  if (!checkLoginInfo(jsonData.email, jsonData.password)) {
    // return res.send(401, new UnauthorizedError('credentials_invalid', { message: "User name and password don't match our records" }));
    return next(new UnauthorizedError('credentials_invalid', { message: "User name and password don't match our records" }));
    // return res.send(401, { message: 'invalid credentials'});
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
