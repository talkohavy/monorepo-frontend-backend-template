import { STATUS_CODES } from '../../configurations/index.js';
import { BaseError } from './BaseError.js';

// Do not report this ErrorType by nature
class UnauthorizedError extends BaseError {
  /** @param { import('../ServerErrorProps.js').UserErrorProps} props */
  constructor({ frontendMessage = '', backendMessage = 'you are unauthorized', error = null, data, shouldReport }) {
    super({
      customType: 'UnauthorizedError',
      statusCode: STATUS_CODES.UNAUTHORIZED,
      frontendMessage,
      backendMessage,
      shouldReport,
      error,
      data,
    });
  }
}

export { UnauthorizedError };
