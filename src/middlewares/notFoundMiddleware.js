export const notFoundMiddleware = (req, res) => {
  {
    res.status(404).send('Oops! Route is not found');
  }
};
