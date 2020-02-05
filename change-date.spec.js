import changeDate from './change-date';

it('should shift date by year', () => {
    const yearsToAdd = 1;
    const dateBefore = new Date(2020, 1);

    const dateAfter = changeDate(new Date(dateBefore)).addYear(yearsToAdd);

    expect(dateBefore.getFullYear() + yearsToAdd).toEqual(
        dateAfter.getFullYear()
    );
});

it('should keep months, days, minutes, seconds, milliseconds', () => {
    const yearsToAdd = 1;
    const dateBefore = new Date();

    const dateAfter = changeDate(new Date()).addYear(yearsToAdd);

    expect(dateBefore.getMonth()).toEqual(dateAfter.getMonth());
    expect(dateBefore.getDate()).toEqual(dateAfter.getDate());
    expect(dateBefore.getMinutes()).toEqual(dateAfter.getMinutes());
    expect(dateBefore.getSeconds()).toEqual(dateAfter.getSeconds());
    expect(dateBefore.getMilliseconds()).toEqual(dateAfter.getMilliseconds());
});

it('should should keep time zone', () => {
    const yearsToAdd = 1;
    const dateBefore = new Date();

    const dateAfter = changeDate(new Date()).addYear(yearsToAdd);

    expect(dateBefore.getTimezoneOffset()).toEqual(
        dateAfter.getTimezoneOffset()
    );
});

it('should add month and year if number of months exceeds one year boundary', () => {
    const dateBefore = new Date();
    const dateAfter = changeDate(new Date()).addMonth(15);

    expect(dateBefore.getFullYear() + 1).toEqual(dateAfter.getFullYear());
    expect(dateBefore.getMonth() + 3).toEqual(dateAfter.getMonth());
});

it('should add day', () => {
    const dateBefore = new Date();
    const dateAfter = changeDate(new Date()).addDay(1);

    expect(dateBefore.getFullYear()).toEqual(dateAfter.getFullYear());
    expect(dateBefore.getMonth()).toEqual(dateAfter.getMonth());
    expect(dateBefore.getDate() + 1).toEqual(dateAfter.getDate());
});
