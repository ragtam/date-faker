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
    };
}
