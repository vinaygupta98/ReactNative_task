exports.SERVER_API = 'https://gcla-app.herokuapp.com/api';
exports.SERVER = 'https://gcla-app.herokuapp.com';
exports.ShortFormatDate = date => {
  let monthNames = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  let dat = new Date(date);

  let day = dat.getDate();

  let monthIndex = dat.getMonth();
  let monthName = monthNames[monthIndex];

  let year = dat.getFullYear();

  return `${day}${' '}${monthName}${' '}${year}`;
};
