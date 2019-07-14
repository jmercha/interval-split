# split-interval [![CircleCI](https://circleci.com/gh/jmercha/split-interval/tree/master.svg?style=svg)](https://circleci.com/gh/jmercha/split-interval/tree/master)

Splits the given interval across multiple days with start and end times.

## Usage

```
const splitInterval = require('split-interval');
splitInterval(startDate, endDate, startTime, endTime);
```

## Arguments

* `startDate` - A `Date` object representing the start of the interval to split
* `endDate` - A `Date` object representing the end of the interval to split
* `startTime` - A `String` in the format `hh:mm:ss` representing the start time of the interval segments
* `endTime` - A `String` in the format `hh:mm:ss` representing the end of the interval segments

## Return value

Returns an array of objects representing the split intervals: `[{ start: Date, end: Date }]`

## Example

Given the following interval `2019-06-01 12:00 PM` to `2019-06-04 12:00 PM`, with segments `8:30 AM` to `5:00 PM`, we will get the following segments as the result:

* `2019-06-01 12:00PM` - `2019-06-01 5:00PM`
* `2019-06-02 8:30AM` - `2019-06-02 5:00PM`
* `2019-06-03 8:30AM` - `2019-06-03 5:00PM`
* `2019-06-04 8:30AM` - `2019-06-04 12:00PM`
