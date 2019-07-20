const moment = require('moment');

const timeValues = time => ({
    hour: time.get('hour'),
    minute: time.get('minute'),
    seconds: time.get('second')
});

const validateArgs = (startDate, endDate, startTime, endTime) => {

    if (!startDate.isValid()) throw new Error('startDate must be valid');
    if (!endDate.isValid()) throw new Error('endDate must be valid');
    if (!startTime.isValid()) throw new Error('startTime must be valid');
    if (!endTime.isValid()) throw new Error('endTime must be valid');

    if (startDate.diff(endDate) > -1) throw new RangeError('startDate must be before endDate'); 
    if (startTime.diff(endTime) > -1) throw new RangeError('startTime must be before endTime'); 
};

function *generateSplitInterval(startDate, endDate, startTime, endTime) {

    validateArgs(startDate, endDate, startTime, endTime);

    const days = Math.abs(startDate.diff(endDate, 'days'));
    
    // we don't need to split across multiple days
    if (days === 0) {
        yield { start: startDate.toDate(), end: endDate.toDate() };
        return;
    }

    const startValues = timeValues(startTime);
    const endValues = timeValues(endTime);

    // first interval
    yield {
        start: startDate.toDate(),
        end: startDate.clone().set(endValues).toDate()
    };

    // consecutive intervals
    if (days > 1) {
        for (let day = 1; day < days; ++day) {
            const date = startDate.clone().add(day, 'days');
            yield {
                start: date.clone().set(startValues).toDate(),
                end: date.clone().set(endValues).toDate() 
            };
        }
    }

    // final interval
    yield {
        start: endDate.clone().set(startValues).toDate(),
        end: endDate.toDate()
    };
}

const splitInterval = (startDate, endDate, startTime, endTime) => [
    ...generateSplitInterval(
        moment(startDate),
        moment(endDate),
        moment(startTime, 'hh:mm:ss'),
        moment(endTime, 'hh:mm:ss')
    )
];

module.exports = splitInterval;
