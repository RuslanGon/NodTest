export const errorHandlerMiddleware = (error, req, res) => {
  res.status(500).json({
    status: 500,
    message: 'internal server error',
    data: {
message: error.message
    }
   });
};
