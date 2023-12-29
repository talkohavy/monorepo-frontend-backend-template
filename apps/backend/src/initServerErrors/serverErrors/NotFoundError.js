import { STATUS_CODES } from '../../configurations/index.js';
import { BaseError } from './BaseError.js';

// Do not report this ErrorType by nature
class NotFoundError extends BaseError {
  constructor({ frontendMessage = '', backendMessage = 'not found', error = null, data, shouldReport }) {
    super({
      customType: 'NotFoundError',
      statusCode: STATUS_CODES.NOT_FOUND,
      frontendMessage,
      backendMessage,
      shouldReport,
      error,
      data,
    });
  }
}

export { NotFoundError };
