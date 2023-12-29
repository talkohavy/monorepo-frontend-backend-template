import {
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
} from './serverErrors/index.js';

/**
 * @description
 * Init 5 types of global server errors:
 * 1. 400 - ValidationError.
 * 2. 401 - UnauthorizedError.
 * 3. 403 - ForbiddenError.
 * 4. 404 - NotFoundError.
 * 5. 500 - InternalServerError.
 */
export function initServerErrorsAndAttachToGlobal() {
  global.ValidationError = ValidationError;
  global.UnauthorizedError = UnauthorizedError;
  global.ForbiddenError = ForbiddenError;
  global.NotFoundError = NotFoundError;
  global.InternalServerError = InternalServerError;
}
