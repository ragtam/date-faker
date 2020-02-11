import changeDate from './change-date';

it('should shift date by year', () => {
    const yearsToAdd = 1;
    const dateBefore = new Date(2020, 1);

    const dateAfter = changeDate(new Date(dateBefore)).addYear(yearsToAdd);

    expect(dateAfter.getFullYear()).toEqual(
        dateBefore.getFullYear() + yearsToAdd
    );
});

it('should keep months, days, minutes, seconds, milliseconds', () => {
    const yearsToAdd = 1;
    const dateBefore = new Date(2020, 1);

    const dateAfter = changeDate(new Date(2020, 1)).addYear(yearsToAdd);

    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getMinutes()).toEqual(dateBefore.getMinutes());
    expect(dateAfter.getSeconds()).toEqual(dateBefore.getSeconds());
    expect(dateAfter.getMilliseconds()).toEqual(dateBefore.getMilliseconds());
});

it('should should keep time zone', () => {
    const yearsToAdd = 1;
    const dateBefore = new Date(2020, 1);

    const dateAfter = changeDate(new Date(2020, 1)).addYear(yearsToAdd);

    expect(dateAfter.getTimezoneOffset()).toEqual(
        dateBefore.getTimezoneOffset()
    );
});

it('should add month and year if number of months exceeds one year boundary', () => {
    const dateBefore = new Date(2020, 1);
    const dateAfter = changeDate(new Date(2020, 1)).addMonth(15);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear() + 1);
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth() + 3);
});

it('should add day', () => {
    const dateBefore = new Date(2020, 1);
    const dateAfter = changeDate(new Date(2020, 1)).addDay(1);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate() + 1);
});

it('should add hour', () => {
    const dateBefore = new Date(2020, 2, 1, 5);
    const dateAfter = changeDate(new Date(2020, 2, 1, 5)).addHour(3);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getHours()).toEqual(dateBefore.getHours() + 3);
});

it('should add hours and go to next day if exceeds 24h', () => {
    const dateBefore = new Date(2020, 2, 1, 5);
    const dateAfter = changeDate(new Date(2020, 2, 1, 22)).addHour(5);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate() + 1);
    expect(dateAfter.getHours()).toEqual(3);
});

it('should add minute', () => {
    const dateBefore = new Date(2020, 2, 1, 5, 20);
    const dateAfter = changeDate(new Date(2020, 2, 1, 5, 20)).addMinute(5);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getHours()).toEqual(dateBefore.getHours());
    expect(dateAfter.getMinutes()).toEqual(dateBefore.getMinutes() + 5);
});

it('should add minute and change hour if exceeds 60 minutes', () => {
    const dateBefore = new Date(2020, 2, 1, 5, 40);
    const dateAfter = changeDate(new Date(2020, 2, 1, 5, 40)).addMinute(30);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getHours()).toEqual(dateBefore.getHours() + 1);
    expect(dateAfter.getMinutes()).toEqual(10);
});

it('should add second', () => {
    const dateBefore = new Date(2020, 2, 1, 5, 40, 50);
    const dateAfter = changeDate(new Date(2020, 2, 1, 5, 40, 50)).addSecond(5);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getHours()).toEqual(dateBefore.getHours());
    expect(dateAfter.getMinutes()).toEqual(dateBefore.getMinutes());
    expect(dateAfter.getSeconds()).toEqual(dateBefore.getSeconds() + 5);
});

it('should add second and change minutes if exceed 60s', () => {
    const dateBefore = new Date(2020, 2, 1, 5, 40, 50);
    const dateAfter = changeDate(new Date(2020, 2, 1, 5, 40, 50)).addSecond(15);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getHours()).toEqual(dateBefore.getHours());
    expect(dateAfter.getMinutes()).toEqual(dateBefore.getMinutes() + 1);
    expect(dateAfter.getSeconds()).toEqual(5);
});

it('should add milliseconds', () => {
    const dateBefore = new Date(2020, 2, 1, 5, 40, 50, 500);
    const dateAfter = changeDate(
        new Date(2020, 2, 1, 5, 40, 50, 500)
    ).addMillisecond(150);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getHours()).toEqual(dateBefore.getHours());
    expect(dateAfter.getMinutes()).toEqual(dateBefore.getMinutes());
    expect(dateAfter.getSeconds()).toEqual(dateBefore.getSeconds());
    expect(dateAfter.getMilliseconds()).toEqual(
        dateBefore.getMilliseconds() + 150
    );
});

it('should add milliseconds and change seconds if exceed 1000ms', () => {
    const dateBefore = new Date(2020, 2, 1, 5, 40, 50, 500);
    const dateAfter = changeDate(
        new Date(2020, 2, 1, 5, 40, 50, 500)
    ).addMillisecond(700);

    expect(dateAfter.getFullYear()).toEqual(dateBefore.getFullYear());
    expect(dateAfter.getMonth()).toEqual(dateBefore.getMonth());
    expect(dateAfter.getDate()).toEqual(dateBefore.getDate());
    expect(dateAfter.getHours()).toEqual(dateBefore.getHours());
    expect(dateAfter.getMinutes()).toEqual(dateBefore.getMinutes());
    expect(dateAfter.getSeconds()).toEqual(dateBefore.getSeconds() + 1);
    expect(dateAfter.getMilliseconds()).toEqual(200);
});
