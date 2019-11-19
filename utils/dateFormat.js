import dayjs from 'dayjs';

function yyyymmddhhmm(date) {
  return dayjs(date).format('YYYY-MM-DD HH:mm');
}

export default {
  yyyymmddhhmm,
};
