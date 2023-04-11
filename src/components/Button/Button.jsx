import clsx from 'clsx';

import styles from './Button.module.scss';

export const Button = ({
  size = 'small',
  mainStyle,
  type,
  children,
  handleClick,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(styles[size], styles[mainStyle])}
    >
      {children}
    </button>
  );
};
