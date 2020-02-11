import changeDate from './change-date';

let originalDateObject = Date;

const dateShiftingFunctions = new Map([
    ['year', dateToBeChanged => changeDate(dateToBeChanged).addYear],
    ['month', dateToBeChanged => changeDate(dateToBeChanged).addMonth],
    ['day', dateToBeChanged => changeDate(dateToBeChanged).addDay],
    ['hour', dateToBeChanged => changeDate(dateToBeChanged).addHour],
    ['minute', dateToBeChanged => changeDate(dateToBeChanged).addMinute],
    ['second', dateToBeChanged => changeDate(dateToBeChanged).addSecond],
    [
        'millisecond',
        dateToBeChanged => changeDate(dateToBeChanged).addMillisecond,
    ],
]);

const dateFaker = {
    add: (timeShiftValue, shiftUnit) => {
        const shiftFun = dateShiftingFunctions.get(shiftUnit);
        const res = shiftFun(new originalDateObject())(timeShiftValue);

        Date = function() {
            if (arguments.length === 0) {
                return new originalDateObject(res.toISOString());
            } else {
                return new originalDateObject(...arguments);
            }
        };
        Date.now = new originalDateObject(res.toISOString()).getTime();
        Date.parse = originalDateObject.parse;
        Date.UTC = originalDateObject.UTC;
    },
    reset: () => {
        Date = originalDateObject;
    },
};

export default dateFaker;
