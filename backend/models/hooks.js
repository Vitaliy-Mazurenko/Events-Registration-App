export const mongoSaveError = (error, data, next) => {
  error.status = 400;
  next();
};
