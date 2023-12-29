import { STATUS_CODES } from '../../configurations/index.js';
import { BaseError } from './BaseError.js';

// Do not report this ErrorType by nature
class ValidationError extends BaseError {
  /** @param { import('../ServerErrorProps.js').UserErrorProps } props */
  constructor({ frontendMessage = '', backendMessage = 'bad request', error = null, data, shouldReport }) {
    super({
      customType: 'ValidationError',
      statusCode: STATUS_CODES.BAD_REQUEST,
      frontendMessage,
      backendMessage,
      shouldReport,
      error,
      data,
    });
  }
}

export { ValidationError };
