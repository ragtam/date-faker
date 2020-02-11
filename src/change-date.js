export default function changeDate(dateToBeChanged) {
    return {
        addYear: yearsToAdd => {
            const expectedYear = dateToBeChanged.getFullYear() + yearsToAdd;
            dateToBeChanged.setFullYear(expectedYear);
            return dateToBeChanged;
        },
        addMonth: monthsToAdd => {
            const expectedMonth = dateToBeChanged.getMonth() + monthsToAdd;
            dateToBeChanged.setMonth(expectedMonth);
            return dateToBeChanged;
        },
        addDay: daysToAdd => {
            const expectedDay = dateToBeChanged.getDate() + daysToAdd;
            dateToBeChanged.setDate(expectedDay);
            return dateToBeChanged;
        },
        addHour: hoursToAdd => {
            const expectedHour = dateToBeChanged.getHours() + hoursToAdd;
            dateToBeChanged.setHours(expectedHour);
            return dateToBeChanged;
        },
        addMinute: minutesToAdd => {
            const expectedMinute = dateToBeChanged.getMinutes() + minutesToAdd;
            dateToBeChanged.setMinutes(expectedMinute);
            return dateToBeChanged;
        },
        addSecond: secondsToAdd => {
            const expectedSeconds = dateToBeChanged.getSeconds() + secondsToAdd;
            dateToBeChanged.setSeconds(expectedSeconds);
            return dateToBeChanged;
        },
        addMillisecond: millisecondsToAdd => {
            const expectedMilliseconds =
                dateToBeChanged.getMilliseconds() + millisecondsToAdd;
            dateToBeChanged.setMilliseconds(expectedMilliseconds);
            return dateToBeChanged;
        },
    };
}
