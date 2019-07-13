const moment = require('moment');

function *intervalSplitGenerator(startDate, endDate, startTime, endTime) {

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