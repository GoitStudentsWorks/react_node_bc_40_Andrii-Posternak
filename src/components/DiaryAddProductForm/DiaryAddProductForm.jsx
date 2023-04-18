import { useState } from 'react';
import { useWindowSize } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Notiflix from 'notiflix';
import {
  addEatenProduct,
  getProductsFromDB,
} from 'redux/dailyFood/dailyFoodOperations';
import {
  selectCurrentDate,
  selectError,
  selectSearchedProduct,
} from 'redux/dailyFood/dailyFoodSlice';
import { Button } from 'components/Button/Button';
import { showElem } from 'helpers/func';
import s from './DiaryAddProductForm.module.scss';

export const DiaryAddProductForm = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentDate);
  const searchedProduct = useSelector(selectSearchedProduct);
  const error = useSelector(selectError);

  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addEatenProduct({ productName: product, weight }));
    setProduct('');
    setWeight('');
    if (error) {
      Notiflix.Notify.failure('There is no such product in the database');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'productName') {
      setProduct(value);
    }
    if (name === 'weight') {
      setWeight(value);
    }
  };

  const handleFindProduct = product => {
    if (product.length >= 2) {
      dispatch(getProductsFromDB(product));
    }
  };

  return (
    <>
      <form id="form" className={s.Form} onSubmit={handleSubmit}>
        <Autocomplete
          id="free-solo-2-demo"
          freeSolo
          disableClearable
          disabled={!showElem(currentDate)}
          name="productName"
          value={product}
          onChange={(e, v) => {
            setProduct(v);
          }}
          options={searchedProduct.map(option => option.title.en)}
          renderInput={params => (
            <TextField
              {...params}
              label="Enter product name"
              key={product._id}
              required
              onChange={event => handleFindProduct(event.target.value)}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />

        <div className={s.FieldWeight}>
          <TextField
            id="weight"
            fullWidth
            autoComplete="off"
            label="Grams"
            name="weight"
            type="text"
            value={weight}
            onChange={handleChange}
            required
            disabled={!showElem(currentDate)}
          />
        </div>

        <div>
          {width >= 768 ? (
            <button
              className={!showElem(currentDate) ? s.btnDisable : s.btn}
              type="submit"
              disabled={!showElem(currentDate)}
            >
              +
            </button>
          ) : (
            <div className={s.btnWrap}>
              <Button
                disabled={!showElem(currentDate)}
                mainStyle={!showElem(currentDate) ? 'disable' : 'active'}
                type="submit"
              >
                Add
              </Button>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
