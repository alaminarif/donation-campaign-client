export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SERVER_LOCAL || "http://localhost:5000/api/v1";
};
