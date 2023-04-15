// import { useDispatch } from 'react-redux';
// import { getCurrentUser } from 'redux/auth/authOperations';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { getEatenProducts } from 'redux/dailyFood/dailyFoodOperations';
import { selectCurrentDate } from 'redux/dailyFood/dailyFoodSlice';
import { BrowserInput } from './BrowserInput';
import s from './DiaryDateCalendar.module.scss';

import moment from 'moment/moment';

export const DiaryDateCalendar = () => {
  const currentDate = useSelector(selectCurrentDate);

  const dispatch = useDispatch();
  const handleChangeDate = value => {
    const selectedDay = moment(value.$d).format('DD.MM.YYYY');
    // dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
    dispatch(getEatenProducts(selectedDay));
  };

  // const getCurrentDate = () => {
  //   const dateObj = new Date();
  //   const year = dateObj.getFullYear();
  //   const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
  //   const day = ('0' + dateObj.getDate()).slice(-2);
  //   return `${year}-${month}-${day}`;
  // };

  const getCurrentDate = currentDate.split('.').reverse().join('-');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className={s.inputCalendar}
        format="DD.MM.YYYY"
        // defaultValue={dayjs(getCurrentDate())}
        value={dayjs(getCurrentDate)}
        label="Custom input"
        slots={{
          textField: BrowserInput,
        }}
        style={{ fontSize: '26px' }}
        onChange={handleChangeDate}
      />
    </LocalizationProvider>
  );
};
