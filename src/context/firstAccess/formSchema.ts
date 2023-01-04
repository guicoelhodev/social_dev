import * as z from 'zod';

export const schema = z.object({
  github_username: z.string(),
  password: z
    .string({ required_error: 'This field is required' })
    .min(8, { message: 'Password must contain at least 8 character(s)' }),
  job: z.string({ required_error: 'This field is required' }),
  description: z.string(),
  theme: z.string().nullish(),
});
