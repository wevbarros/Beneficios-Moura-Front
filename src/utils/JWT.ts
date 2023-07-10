import jwt, { JwtPayload } from 'jsonwebtoken';

const secrete = 'sua-chave-secreta-com-pelo-menos-32-bytes';

const JWTDecode = (token: string) => {
  try {
    const decoded = jwt.verify(token, secrete) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error();
    return null;
  }
}

const JWTCreate = (payload: string) => {
  try {
    const token = jwt.sign(payload, secrete, { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.error('Erro ao criar o token:', error);
    return null;
  }
}

export { JWTDecode, JWTCreate };