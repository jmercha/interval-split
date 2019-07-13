const moment = require('moment');

function *intervalSplitGenerator(startDate, endDate, startTime, endTime) {
    if (startDate.diff(endDate, 'days') === 0) {
        yield { start: startDate.toDate(), end: endDate.toDate() };
        return;
    }
}

const intervalSplit = (startDate, endDate, startTime, endTime) => [
    ...intervalSplitGenerator(
        moment(startDate),
        moment(endDate),
        moment(startTime, 'hh:mm:ss'),
        moment(endTime, 'hh:mm:ss')
    )
];

module.exports = intervalSplit;