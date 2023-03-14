import * as yup from 'yup';

export const contactSchema = yup.object({
  name: yup.string().min(3).max(15).required(),
  number: yup
    .string()
    .matches(/[0-9]/, 'number must contain only numbers')
    .max(13)
    .required(),
});
