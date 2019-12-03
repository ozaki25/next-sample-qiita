import dayjs from 'dayjs';

function yyyymmdd(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

function yyyymmddhhmm(date) {
  return dayjs(date).format('YYYY-MM-DD HH:mm');
}

export default {
  yyyymmdd,
  yyyymmddhhmm,
};
