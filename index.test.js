const intervalSplit = require('.');

it('does not split an interval on the same day', () => {
    const start = new Date('2019-06-01T12:00:00');
    const end = new Date('2019-06-01T15:00:00');
    const result = intervalSplit(start, end, '08:30:00', '05:00:00');
    expect(result).toEqual([{ start, end }]);
});

it('splits an interval across 3 days', () => {

    const result = intervalSplit(
        new Date('2019-06-01T12:00:00'),
        new Date('2019-06-03T12:00:00'),
        '08:30:00',
        '17:00:00'
    );

    expect(result).toEqual([
        { start: new Date('2019-06-01T12:00:00'), end: new Date('2019-06-01T17:00:00') },
        { start: new Date('2019-06-02T08:30:00'), end: new Date('2019-06-02T17:00:00') },
        { start: new Date('2019-06-03T08:30:00'), end: new Date('2019-06-03T12:00:00') }
    ]);
});