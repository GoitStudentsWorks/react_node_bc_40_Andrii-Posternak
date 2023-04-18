// import { useDispatch } from 'react-redux';
// import { getCurrentUser } from 'redux/auth/authOperations';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
// import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { getEatenProducts } from 'redux/dailyFood/dailyFoodOperations';
import { changeDate, selectCurrentDate } from 'redux/dailyFood/dailyFoodSlice';
import { BrowserInput } from './BrowserInput';
import s from './DiaryDateCalendar.module.scss';
import './calendarStyle.scss';

import moment from 'moment';

export const DiaryDateCalendar = () => {
  const currentDate = useSelector(selectCurrentDate);

  const dispatch = useDispatch();
  const handleChangeDate = value => {
    const selectedDay = moment(value.$d).format('DD.MM.YYYY');
    dispatch(getEatenProducts(selectedDay));
    dispatch(changeDate(selectedDay));
  };

  const getCurrentDate = currentDate.split('.').reverse().join('-');

  return (
    <div className={s.calendar_box}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={s.inputCalendar}
          format="DD.MM.YYYY"
          value={dayjs(getCurrentDate)}
          label="Custom input"
          slots={{
            textField: BrowserInput,
          }}
          style={{ fontSize: '26px' }}
          onChange={handleChangeDate}
        />
      </LocalizationProvider>
    </div>
  );
};
