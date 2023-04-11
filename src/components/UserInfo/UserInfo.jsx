import { useMedia } from 'react-use';
import style from './UserInfo.module.scss';

export const UserInfo = () => {
  const isMobile = useMedia('(max-width: 767px)');
  return <div className={isMobile && style.wrapper}>UserInfo</div>;
};
