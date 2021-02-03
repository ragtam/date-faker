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

function overrideDate(dateAfterShift, shouldResetAfterInvocation) {
    Date = function() {
        if (arguments.length === 0) {
            const result = new originalDateObject(dateAfterShift);
            if(shouldResetAfterInvocation) {
                restoreOriginalDateBehaviour();
            }
            return result;
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

function getDateAfterShift(shift, shiftUnit) {
    return typeof shift == 'object' ? shiftByMultipleUnits(shift) : shiftByUnit(shift, shiftUnit)
}

export const dateFaker = {
    add: (shift, shiftUnit) => {
        const d = getDateAfterShift(shift, shiftUnit);
        overrideDate(d, false );
    },
    addAndReset: (shift, shiftUnit) => {
        const d = getDateAfterShift(shift, shiftUnit);
        overrideDate(d, true);
    },
    set: args => {
        overrideDate(args);
    },
    reset: () => {
        restoreOriginalDateBehaviour();
    },
};
