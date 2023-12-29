// All 5 Error types will use this type:
declare type UserErrorProps = {
  frontendMessage: string;
  backendMessage?: string;
  /**
   * **OPTIONAL**
   *
   * @default true
   */
  shouldReport?: boolean;
  error?: any;
  data?: any;
};

/**
 * The Base error needs to know all the props!
 * Because we're passing it the UserErrorProps, which the user defined,
 * as well as some BaseErrorProps, which are defined internally in each error type,
 * and then passed as a props the the BaseError.
 * */
declare type BaseErrorProps = UserErrorProps & {
  customType: string;
  statusCode: number;
};

export type { BaseErrorProps, UserErrorProps };
