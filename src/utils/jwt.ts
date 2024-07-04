import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  const verifyToken = jwtDecode(token);
  console.log(verifyToken);
  return verifyToken;
};
