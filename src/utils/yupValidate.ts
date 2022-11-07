import * as yup from 'yup';

export const yupValidateFn = async (yupSchema: any, data: any) => {
  try {
    await yupSchema.validate(data, { abortEarly: false });

    return {
      status: 'success',
      errors: {},
    };
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      let errorMessages: any = {};

      error.inner.forEach((error: any) => {
        errorMessages[error.path] = error.message;
      });

      return {
        status: 'error',
        errors: errorMessages,
      };
    } else {
      return {
        status: 'unknown',
        errors: 'That Error is a not yupValidationError',
      };
    }
  }
};
