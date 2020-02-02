export function shiftByYear(dateObject, timeShiftValue) {
    const originalDate = new dateObject();
    const expectedYear = originalDate.getFullYear() + timeShiftValue;
    originalDate.setFullYear(expectedYear);
    return originalDate;
}
