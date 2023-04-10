// import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';

import { Formik, Form, Field } from 'formik';
import { PersistFormikValues } from 'formik-persist-values';

export const DailyCaloriesForm = () => {
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
      <div>{label}</div>
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
      <div>
        <div></div>
      </div>
    </li>
  );

  return (
    <>
      <Formik
        initialValues={{
          height: '',
          age: '',
          weight: '',
          desiredWeight: '',
          bloodType: '',
        }}
        validateOnBlur
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <h1>Calculate your daily calorie intake right now</h1>
            <div>
              <div>
                <div>
                  <InputField
                    label="Height *"
                    type="number"
                    name={'height'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.height}
                  />
                  <div>
                    {touched.height && errors.height && <p>{errors.height}</p>}
                  </div>
                </div>
                <div>
                  <InputField
                    label="Age *"
                    type="number"
                    name={'age'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                  />
                  <div>{touched.age && errors.age && <p>{errors.age}</p>}</div>
                </div>
                <div>
                  <InputField
                    label="Current weight *"
                    type="number"
                    name={'weight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.weight}
                  />
                  <div>
                    {touched.weight && errors.weight && <p>{errors.weight}</p>}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <InputField
                    label="Desired weight *"
                    type="number"
                    name={'desiredWeight'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.desiredWeight}
                  />
                  <div>
                    {touched.desiredWeight && errors.desiredWeight && (
                      <p>{errors.desiredWeight}</p>
                    )}
                  </div>
                </div>
                <div>
                  <h3>Blood type *</h3>

                  <ul>
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
                  <div>
                    {touched.bloodType && errors.bloodType && (
                      <p>{errors.bloodType}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" variant="start">
                Start losing weight
              </button>
            </div>

            <PersistFormikValues name="calc-form" ignoreValues="bloodType" />
          </Form>
        )}
      </Formik>

      {/* <DailyCalorieIntake /> */}
    </>
  );
};
