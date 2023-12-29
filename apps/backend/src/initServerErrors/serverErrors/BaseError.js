import { STATUS_CODES } from '../../configurations/index.js';

// This class is NOT to be used directly! Use one of its descendants.
class BaseError extends Error {
  /**
   * @type { boolean }
   * @readonly
   * @public
   */
  isCustomError = true;

  /**
   * @type { boolean }
   * @readonly
   * @public
   */
  shouldReport = true;

  /**
   * @type { string }
   * @public
   */
  frontendMessage;

  /**
   * @type { string }
   * @public
   */
  backendMessage;

  /**
   * @type { string }
   * @public
   */
  customType;

  /**
   * @type { number }
   * @public
   */
  statusCode;

  constructor({
    customType = 'CUSTOM_TYPE',
    statusCode = STATUS_CODES.INTERNAL_ERROR,
    frontendMessage = '',
    backendMessage = '',
    error = null,
    data,
    shouldReport = true,
  }) {
    // Step 1: use the Error Class's constructor which accepts only the message
    super(error?.message || frontendMessage);

    // Step 2: pass all properties to `this`
    Object.setPrototypeOf(this, new.target.prototype);
    this.customType = customType;
    this.statusCode = statusCode;
    this.frontendMessage = error?.message || frontendMessage;
    this.backendMessage = backendMessage;
    this.data = data;
    this.shouldReport = shouldReport;
    Error.captureStackTrace(this);
  }
}

export { BaseError };
