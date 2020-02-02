import { shiftByYear } from './year-shifter';

it('should shift date by year', () => {
    const yearsToShift = 1;
    const dateBefore = new Date();

    const dateAfter = shiftByYear(Date, yearsToShift);

    expect(dateBefore.getFullYear() + yearsToShift).toEqual(
        dateAfter.getFullYear()
    );
});

it('should keep months, days, minutes, seconds, milliseconds', () => {
    const yearsToShift = 1;
    const dateBefore = new Date();

    const dateAfter = shiftByYear(Date, yearsToShift);

    expect(dateBefore.getMonth()).toEqual(dateAfter.getMonth());
    expect(dateBefore.getDate()).toEqual(dateAfter.getDate());
    expect(dateBefore.getMinutes()).toEqual(dateAfter.getMinutes());
    expect(dateBefore.getSeconds()).toEqual(dateAfter.getSeconds());
    expect(dateBefore.getMilliseconds()).toEqual(dateAfter.getMilliseconds());
});

it('should should keep time zone', () => {
    const yearsToShift = 1;
    const dateBefore = new Date();

    const dateAfter = shiftByYear(Date, yearsToShift);

    expect(dateBefore.getTimezoneOffset()).toEqual(
        dateAfter.getTimezoneOffset()
    );
});
