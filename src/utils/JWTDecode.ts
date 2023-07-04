import jwt from 'jsonwebtoken';

const secrete = 'sua-chave-secreta-com-pelo-menos-32-bytes';

const JWTDecode = (token: string) => {
  try {
    const decoded = jwt.verify(token, secrete);

    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
}

const JWTCreate = (payload: any) => {
  try {
    const token = jwt.sign(payload, secrete, { expiresIn: '1d' });

    return token;
  } catch (error) {
    console.error('Erro ao criar o token:', error);
    return null;
  }
}

export { JWTDecode, JWTCreate };