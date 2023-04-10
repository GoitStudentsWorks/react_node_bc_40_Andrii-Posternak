// import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Formik, Field, Form } from 'formik';

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
      >
        {() => (
          <Form>
            <h1>Calculate your daily calorie intake right now</h1>
            <div>
              <div>
                <div>
                  <InputField label="Height *" type="number" name={'height'} />
                  <div>
                    <p></p>
                  </div>
                </div>
                <div>
                  <InputField label="Age *" type="number" name={'age'} />
                  <div>
                    <p></p>
                  </div>
                </div>
                <div>
                  <InputField
                    label="Current weight *"
                    type="number"
                    name={'weight'}
                  />
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <InputField
                    label="Desired weight *"
                    type="number"
                    name={'desiredWeight'}
                  />
                  <div>
                    <p></p>
                  </div>
                </div>
                <div>
                  <h3>Blood type *</h3>

                  <ul>
                    <RadioButton
                      name="bloodType"
                      value="1"
                      id="1-radio-button"
                    />
                    <RadioButton
                      name="bloodType"
                      value="2"
                      id="2-radio-button"
                    />
                    <RadioButton
                      name="bloodType"
                      value="3"
                      id="3-radio-button"
                    />
                    <RadioButton
                      name="bloodType"
                      value="4"
                      id="4-radio-button"
                    />
                  </ul>
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" variant="start">
                Start losing weight
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* <DailyCalorieIntake /> */}
    </>
  );
};
