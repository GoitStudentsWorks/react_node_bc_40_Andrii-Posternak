import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().min(3).max(15).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
