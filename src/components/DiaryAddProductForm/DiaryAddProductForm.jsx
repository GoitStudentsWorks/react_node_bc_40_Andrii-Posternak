import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { useWindowSize } from 'react-use';
import { dailyFoodReducer } from 'redux/dailyFood/dailyFoodSlice';
import { getProductsFromDB } from 'redux/dailyFood/dailyFoodOperations';
import { useState } from 'react';
import { Button } from 'components/Button/Button';
import { BsPlusLg } from 'react-icons/bs';
import s from './DiaryAddProductForm.module.scss';

export const DiaryAddProductForm = () => {
  const [weight, setWeight] = useState('');
  const { width } = useWindowSize();
  productsList:;
  return (
    <>
      <form
        className={s.Form}
        // onSubmit={handleAddProduct}
      >
        {/* {width > 768 ? (
          <DiaryDateCalendar
          // className={s.Calendar}
          />
        ) : (
          ''
        )} */}
        {/* <div className={s.fieldRow}> */}
        <div className={s.FieldProduct}>
          <input
            placeholder="  Введіть назву продукту"
            list="productsList"
            className={s.Input}
            type="text"
            // value={title}
            // onChange={inputChange}
            name="title"
            required
          />
          {/* <datalist id="productsList">
              {productsList?.length > 0 &&
                productsList.map(item => (
                  <option key={item._id} value={item.title.ua} id={item._id} />
                ))}
            </datalist> */}
        </div>

        <div className={s.FieldWeight}>
          <input
            placeholder="  Грами"
            className={s.Input}
            id="weight"
            type="number"
            value={weight}
            onChange={e => setWeight(Number(e.currentTarget.value))}
            name="weight"
            pattern="^[0-9]*$"
            required
          />
        </div>
        <div
        // className={s.btn}
        >
          {width > 768 ? (
            <button className={s.btn} type="submit">
              {/* <BsPlusLg className={s.icon} /> */}+
            </button>
          ) : (
            <Button className="btn" type="submit">
              Додати продукт
            </Button>
          )}
          {/* {width > 768 ? (
              <Btn className={s.btn} type="submit" variant="plus">
                <BsPlusLg className={s.icon} />
              </Btn>
            ) : (
              <Btn className={s.btn} type="submit" variant="login">
                Додати продукт
              </Btn>
            )} */}
        </div>
        {/* </div> */}
      </form>
    </>
  );
};
