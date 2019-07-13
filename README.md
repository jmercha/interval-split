# split-interval [![CircleCI](https://circleci.com/gh/jmercha/split-interval/tree/master.svg?style=svg)](https://circleci.com/gh/jmercha/split-interval/tree/master)
Splits the given interval across start and end times over a given datetime range.

## Usage

```
    const splitInterval = require('split-interval);
    splitInterval(startDate, endDate, startTime, endTime);
```

## Arguments

* `startDate` - A `Date` object representing the start of the interval to split
* `endDate` - A `Date` object representing the end of the interval to split
* `startTime` - A `String` in the format `hh:mm:ss` representing the start time of the interval segment
* `endTime` - A `String` in the format `hh:mm:ss` representing the end of the interval segment