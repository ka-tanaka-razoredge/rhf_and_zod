import { z } from 'zod';

const alphaSchema = z.object({
  first: z.string(),
  second: z.string().refine(
    () => {
      return false;
    },
    { message: 'Wrong' }
  ),
});

export default alphaSchema;
export type Schema = z.infer<typeof alphaSchema>;
