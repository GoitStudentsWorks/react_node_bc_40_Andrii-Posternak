import * as yup from 'yup';

export const calorieSchema = yup.object({
  height: yup.number().min(50).max(250).required(),
  age: yup.number().min(1).max(100).required(),
  currentWeight: yup.number().min(5).max(250).required(),
  desiredWeight: yup.number().min(5).max(250).required(),
  bloodType: yup.number().required(),
});
