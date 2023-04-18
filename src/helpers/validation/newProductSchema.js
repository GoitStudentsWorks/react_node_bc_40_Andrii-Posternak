import * as yup from 'yup';

export const newProductSchema = yup.object({
  productName: yup.string().required(),
  weight: yup.number().positive().required(),
});
