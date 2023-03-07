import jwt from "jsonwebtoken";

const generateJWT = (uid, userName) => {
  //deveulve un promesa
  return new Promise((resolve, reject) => {
    //resolve es para el caso satisfactorio y reject si falla

    //agregar los datos del payload
    const payload = { uid, userName };
    //firmamos el token
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error generating token");
        }
        //si esta todo correcto
        resolve(token);
      }
    );
  });
};

export default generateJWT;
