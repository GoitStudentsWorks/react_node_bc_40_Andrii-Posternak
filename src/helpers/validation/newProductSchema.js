import * as yup from 'yup';

export const newProductSchema = yup.object({
  // date: yup.date().required(),
  productName: yup.string().required(),
  weight: yup.number().positive().required(),
});
