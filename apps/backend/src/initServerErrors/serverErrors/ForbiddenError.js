import { STATUS_CODES } from '../../configurations/index.js';
import { BaseError } from './BaseError.js';

// ----------------------------
// Error type 3: ForbiddenError
// ----------------------------
// Use this class for the 403 Forbidden status code error.
// Do not report this ErrorType by nature
class ForbiddenError extends BaseError {
  /** @param { import('../ServerErrorProps.js').UserErrorProps} props */
  constructor({ frontendMessage = '', backendMessage = 'access denied', error = null, data, shouldReport = false }) {
    super({
      customType: 'ForbiddenError',
      statusCode: STATUS_CODES.FORBIDDEN,
      frontendMessage,
      backendMessage,
      shouldReport,
      error,
      data,
    });
  }
}

export { ForbiddenError };
