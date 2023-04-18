import clsx from 'clsx';

import styles from './Button.module.scss';

export const Button = ({
  size = 'small',
  mainStyle,
  type,
  disabled = false,
  children,
  handleClick,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={clsx(styles[size], styles[mainStyle])}
    >
      {children}
    </button>
  );
};
