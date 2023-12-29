import { STATUS_CODES } from '../../configurations/index.js';
import { BaseError } from './BaseError.js';

// This ErrorType should be reported by nature!
class InternalServerError extends BaseError {
  constructor({
    frontendMessage = '',
    backendMessage = 'internal server error',
    shouldReport = true,
    error = null,
    data,
  }) {
    super({
      customType: 'InternalServerError',
      statusCode: STATUS_CODES.INTERNAL_ERROR,
      frontendMessage,
      backendMessage,
      shouldReport,
      error,
      data,
    });
  }
}

export { InternalServerError };
