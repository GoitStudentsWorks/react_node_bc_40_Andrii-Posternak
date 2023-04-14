import s from './DiaryProductsListItem.module.scss';

export const DiaryProductsListItem = ({ product, handleDeleteProduct }) => {
  return (
    <>
      <li className={s.Item}>
        <span className={s.Title}>{product.productName}</span>
        <span className={s.Weight}>{product.weight} g</span>
        <span className={s.Calories}>{product.calories} kcal</span>
        <button
          className={s.Button}
          type="button"
          onClick={() => handleDeleteProduct(product._id)}
        >
          +
        </button>
      </li>
    </>
  );
};
