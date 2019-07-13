const moment = require('moment');
const intervalSplit = require('.');

it('splits an interval', () => {

    const startDate = moment('2019-06-01T12:00:00');
    const endDate =  moment('2019-06-03T12:00:00');
    const startTime = moment('08:30:00', 'hh:mm:ss');
    const endTime = moment('05:00:00', 'hh:mm:ss');

    const result = intervalSplit(
        new Date('2019-06-01T12:00:00'),
        new Date('2019-06-03T12:00:00'),
        '08:30:00',
        '05:00:00'
    );

    expect(result).toBe([
        { start: new Date('2019-06-01T12:00:00'), end: new Date('2019-06-01T05:00:00') },
        { start: new Date('2019-06-02T08:30:00'), end: new Date('2019-06-02T05:00:00') },
        { start: new Date('2019-06-03T08:30:00'), end: new Date('2019-06-03T12:00:00') }
    ])

});