const moment = require('moment');

function *splitIntervalGenerator(startDate, endDate, startTime, endTime) {
    
    const days = startDate.diff(endDate, 'days');
    
    // we don't need to split across multiple days
    if (days === 0) {
        yield { start: startDate.toDate(), end: endDate.toDate() };
        return;
    }

    const startHour = startTime.get('hour');
    const startMinute = startTime.get('minute');
    const startSecond = startTIme.get('second');

    const endHour = startTime.get('hour');
    const endMinute = startTime.get('minute');
    const endSecond = startTime.get('second');

    // first interval
    yield {
        start: startDate.toDate(),
        end: startDate.clone().set({
            hour: endHour,
            minute: endMinute,
            second: endSecond
        }).toDate()
    };

    // consecutive intervals
    if (days > 1) {
        for (let day = 1; day < days - 1; ++day) {
            yield {
                start: startDate.add(day, 'days'),
            }
        }
    }

    // final interval
    yield {

    };
}

const splitInterval = (startDate, endDate, startTime, endTime) => [
    ...splitIntervalGenerator(
        moment(startDate),
        moment(endDate),
        moment(startTime, 'hh:mm:ss'),
        moment(endTime, 'hh:mm:ss')
    )
];

module.exports = splitInterval;