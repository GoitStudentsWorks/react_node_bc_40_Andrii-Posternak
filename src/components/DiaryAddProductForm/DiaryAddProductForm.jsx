import { useState } from 'react';
import { useWindowSize } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEatenProduct,
  getProductsFromDB,
} from 'redux/dailyFood/dailyFoodOperations';
import { Button } from 'components/Button/Button';
import s from './DiaryAddProductForm.module.scss';

export const DiaryAddProductForm = () => {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const searchedProduct = useSelector(state => state.dailyFood.searchedProduct);

  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addEatenProduct({ productName: product, weight }));
    setProduct('');
    setWeight('');
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
    setProduct(product);
    if (product.length >= 2) dispatch(getProductsFromDB(product));
  };

  return (
    <>
      <form id="form" className={s.Form} onSubmit={handleSubmit}>
        <div className={s.FieldProduct}>
          <input
            className={s.Input}
            list="productslist"
            placeholder="Enter product name"
            autoComplete="off"
            type="text"
            name="productName"
            value={product}
            onChange={event => handleFindProduct(event.target.value)}
            required
          />

          <datalist id="productslist">
            {searchedProduct?.length > 0 &&
              searchedProduct.map(product => (
                <option key={product._id} value={product.title.ua}>
                  {product.title.ua}
                </option>
              ))}
          </datalist>
        </div>

        <div className={s.FieldWeight}>
          <input
            className={s.Input}
            placeholder="Grams"
            type="number"
            name="weight"
            value={weight}
            onChange={handleChange}
            pattern="^[1-9]\d*$"
            required
          />
        </div>
        <div>
          {width > 768 ? (
            <button className={s.btn} type="submit">
              +
            </button>
          ) : (
            <Button className="btn" type="submit">
              Додати продукт
            </Button>
          )}
        </div>
      </form>
    </>
  );
};
