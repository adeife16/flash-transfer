import jwt from "jsonwebtoken";
import config from '../../enviorments/default';
import { ITokenPayload } from "../../types/config";

const { SECRET } = config;

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, SECRET, options);
}

export function decode(token: string): ITokenPayload {
  try {
    const decoded = jwt.verify(token, SECRET);
    return { valid: true, expired: false, decoded } as unknown as ITokenPayload;
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}