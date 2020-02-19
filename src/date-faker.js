import changeDate from './change-date';

let originalDateObject = Date;

const dateShiftingFunctions = new Map([
    ['year', dateToBeChanged => changeDate(dateToBeChanged).addYear],
    ['month', dateToBeChanged => changeDate(dateToBeChanged).addMonth],
    ['day', dateToBeChanged => changeDate(dateToBeChanged).addDay],
    ['hour', dateToBeChanged => changeDate(dateToBeChanged).addHour],
    ['minute', dateToBeChanged => changeDate(dateToBeChanged).addMinute],
    ['second', dateToBeChanged => changeDate(dateToBeChanged).addSecond],
    ['millisecond', dateToBeChanged => changeDate(dateToBeChanged).addMillisecond],
]);

const dateFaker = {
    add: (shift, shiftUnit) => {
        const dateAfterShift = typeof shift == 'object' ? shiftByMultipleUnits(shift) : shiftByUnit(shift, shiftUnit);
        overrideDate(dateAfterShift);
    },
    reset: () => {
        restoreOriginalDateBehaviour();
    },
};

function shiftByMultipleUnits(shiftConfigObj) {
    return Object.keys(shiftConfigObj).reduce(
        (resultDate, unit) =>
            dateShiftingFunctions.has(unit) ? dateShiftingFunctions.get(unit)(resultDate)(shiftConfigObj[unit]) : resultDate,
        new originalDateObject()
    );
}

function shiftByUnit(shift, shiftUnit) {
    if (!dateShiftingFunctions.has(shiftUnit)) {
        throw new Error("Invalid shift unit provided. Correct values are: 'year' | 'month' | 'day' | 'minute' | 'second' | 'millisecond'");
    }
    return dateShiftingFunctions.get(shiftUnit)(new originalDateObject())(shift);
}

function overrideDate(dateAfterShift) {
    Date = function() {
        if (arguments.length === 0) {
            return new originalDateObject(dateAfterShift);
        } else {
            return new originalDateObject(...arguments);
        }
    };
    Date.now = new originalDateObject(dateAfterShift).getTime();
    Date.parse = originalDateObject.parse;
    Date.UTC = originalDateObject.UTC;
}

function restoreOriginalDateBehaviour() {
    Date = originalDateObject;
}

export default dateFaker;
