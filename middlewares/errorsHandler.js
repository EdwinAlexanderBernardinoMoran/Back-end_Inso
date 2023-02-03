const { ValidationError } = require("sequelize");

class ErrorsHandler {

  logErrors(err, req, res, next) {
    console.error(err);
    next(err);
  }

  errorHandler(err, req, res, next) {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  }

  boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload)
    }
    next(err)
  }

  ormErrorHandler(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(500).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        })
    }
    next(err)
  }

}

module.exports = ErrorsHandler;