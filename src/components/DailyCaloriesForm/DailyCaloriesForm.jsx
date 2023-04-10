// import { DailyCalorieIntake } from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Formik, Form } from 'formik';

export const DailyCaloriesForm = () => {
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
                  <div>
                    <p></p>
                  </div>
                </div>
                <div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div>
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div>
                  <h3>Blood type *</h3>

                  <ul></ul>
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
