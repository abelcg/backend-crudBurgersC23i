import jwt from "jsonwebtoken";

const validateJWT = (req, res, next) => {
  //recibir el token enviado en el header de la request
  const token = req.header("x-access-token");
  if (!token) {
    //error 401 es error de autentificación
    res.status(401).json({ message: "need to send a token in the request" });
  }
  //si existe el token
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.id = payload.uid;
    req.name = payload.userName;
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "invalid token - authentication failed" });
  }
  next();
};

export default validateJWT;
