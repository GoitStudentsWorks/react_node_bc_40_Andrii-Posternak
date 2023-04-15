import moment from 'moment';

export const showElem = currentDate => {
  if (currentDate === moment(new Date()).format('DD.MM.YYYY')) {
    return true;
  } else {
    return false;
  }
};
