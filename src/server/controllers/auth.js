import jwt from "jsonwebtoken";

const email = "hest@hyf.com";
const password = "jacob";

const jwtPass = "caipaenie7thol8Z";

export const checkLoginInfo = (user, pass) => user === email && pass === password;

export const createToken = (user, pass) => jwt.sign({ email: user }, jwtPass);

export const verifyToken = token => jwt.verify(token, jwtPass);

export const checkIsLoggedInMiddleware = (req, res, next) => {
  // check that the header Authorization exists
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'no credentials sent' });
  }

  // verify the authorization header token
  if (!verifyToken(req.headers.authorization)) {
    return res.status(401).send({ message: 'invalid credentials sent' }); 
  }
  
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
//   checkIsLoggedInMiddleware,
//   checkLoginInfo,
//   createToken,
//   verifyToken
// };
