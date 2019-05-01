import jwt from 'jsonwebtoken';
import User from '../entities/User';

export function createJWT(id: number): string {
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET || '',
  );
  return token;
}

export async function decodeJWT(token: string): Promise<User | undefined> {
  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || '');
    const { id } = decoded;
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    return undefined;
  }
}
