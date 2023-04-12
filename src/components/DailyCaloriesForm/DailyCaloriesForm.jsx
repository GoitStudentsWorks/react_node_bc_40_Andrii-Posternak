// import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';

import { Formik, Form, Field } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';

import styles from './DailyCaloriesForm.module.scss';
import { calorieSchema } from 'helpers/validation';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthStatus } from 'redux/auth/authSlice';
import { getCalorie } from 'redux/dailyCalorie/dailyCalorieOperations';
import { getCalorieAuth } from 'redux/dailyCalorie/dailyCalorieOperations';

export const DailyCaloriesForm = ({ handleModalOpen }) => {
  const InputField = ({ label, type, value, name, onChange, onBlur }) => (
    <label>
      <Field
        required
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={styles.labelText}>{label}</div>
    </label>
  );

  const RadioButton = ({ name, value, id, onChange, onBlur }) => (
    <li>
      <Field
        type="radio"
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id}>{value}</label>
      <div className={styles.check}>
        <div className={styles.inside}></div>
      </div>
    </li>
  );
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);
  // console.log('authStatus :', authStatus);
  return (
    <>
      <Formik
        initialValues={{
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '',
        }}
        validateOnBlur
        validationSchema={calorieSchema}
        onSubmit={(values, actions) => {
          const bloodType = +values.bloodType;
          const allValue = { ...values, bloodType };
          // console.log('values :', allValue);
          if (authStatus) {
            dispatch(getCalorieAuth(allValue));
          } else {
            dispatch(getCalorie(allValue));
            handleModalOpen();
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form className={styles.caloriesForm} onSubmit={handleSubmit}>
            <h1>Calculate your daily calorie intake right now</h1>
            <div className={styles.formContainerMain}>
              <div className={styles.formContainerLeft}>
                <div className={styles.labelContainer}>
                  <InputField
                    label="Height *"
                    type="number"
                    name={'height'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                  />
                  <div className={styles.caloriesFormErrorContainer}>
                    {touched.height && errors.height && (
                      <p className={styles.caloriesFormError}>
                        {errors.height}
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles.labelContainer}>
                  <InputField
                    label="Age *"
                    type="number"
                    name={'age'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                  />
                  <div className={styles.caloriesFormErrorContainer}>
                    {touched.age && errors.age && (
                      <p className={styles.caloriesFormError}>{errors.age}</p>
                    )}
                  </div>
                </div>
                <div className={styles.labelContainer}>
                  <InputField
                    label="Current weight *"
                    type="number"
                    name={'currentWeight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.currentWeight}
                  />
                  <div className={styles.caloriesFormErrorContainer}>
                    {touched.currentWeight && errors.currentWeight && (
                      <p className={styles.caloriesFormError}>
                        {errors.currentWeight}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.formContainerRight}>
                <div className={styles.labelContainer}>
                  <InputField
                    label="Desired weight *"
                    type="number"
                    name={'desiredWeight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.desiredWeight}
                  />
                  <div className={styles.caloriesFormErrorContainer}>
                    {touched.desiredWeight && errors.desiredWeight && (
                      <p className={styles.caloriesFormError}>
                        {errors.desiredWeight}
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles.radioButtonContainer}>
                  <h3>Blood type *</h3>

                  <ul className={styles.radioButtonList}>
                    <RadioButton
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="bloodType"
                      value="1"
                      id="1-radio-button"
                    />
                    <RadioButton
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="bloodType"
                      value="2"
                      id="2-radio-button"
                    />
                    <RadioButton
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="bloodType"
                      value="3"
                      id="3-radio-button"
                    />
                    <RadioButton
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="bloodType"
                      value="4"
                      id="4-radio-button"
                    />
                  </ul>
                  <div className={styles.caloriesFormErrorContainer}>
                    {touched.bloodType && errors.bloodType && (
                      <p className={styles.caloriesFormError}>
                        {errors.bloodType}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.form_button}>
              <Button
                size={'large'}
                mainStyle={'active'}
                type={'submit'}
                // handleClick={''}
              >
                Start losing weight
              </Button>
            </div>

            <PersistFormikValues name="calc-form" ignoreValues="bloodType" />
          </Form>
        )}
      </Formik>

      {/* <DailyCalorieIntake /> */}
    </>
  );
};
