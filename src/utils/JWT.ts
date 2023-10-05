import jwt, { JwtPayload } from 'jsonwebtoken';

const JWTDecode = (token: string) => {
  try {
    const decoded = jwt.decode(token) as JwtPayload;
    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
}

export { JWTDecode };