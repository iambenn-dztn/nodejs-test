export const errorHandler = (error, request, response, next) => {
  const status = error.statusCode || 500;
  response.status(status).json({ message: error.message });
};
