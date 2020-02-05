import dateFaker from './date-faker';

afterEach(() => {
    dateFaker.reset();
});

it('should be created', () => {
    expect(dateFaker).toBeDefined();
});

it('should fake only new Date() called without parameters, otherwise use original date object', () => {
    dateFaker.add(1, 'year');
    const date = new Date(2010, 1);

    expect(date.getFullYear()).toEqual(2010);
});

it('should reset Date to original behaviour', () => {
    const originalDate = new Date();

    dateFaker.add(2, 'year');
    dateFaker.reset();

    const fakedDate = new Date();

    expect(originalDate.getFullYear()).toEqual(fakedDate.getFullYear());
    expect(originalDate.getMonth()).toEqual(fakedDate.getMonth());
    expect(originalDate.getDate()).toEqual(fakedDate.getDate());
    expect(originalDate.getHours()).toEqual(fakedDate.getHours());
    expect(originalDate.getSeconds()).toEqual(fakedDate.getSeconds());
});

it('should move current year to future', () => {
    const originalDate = new Date().getFullYear();

    dateFaker.add(2, 'year');

    const fakedDate = new Date().getFullYear();

    expect(fakedDate).toEqual(originalDate + 2);
});

it('should move date to next day', () => {
    const originalDate = new Date().getDate();

    dateFaker.add(1, 'day');

    const fakedDate = new Date().getDate();

    expect(fakedDate).toEqual(originalDate + 1);
});

it('should be callable with + unary operator #1', () => {
    dateFaker.add(1, 'month');

    const milliseconds = +Date();

    expect(milliseconds).not.toBeNaN();
});

it('should be callable with + unary operator #2', () => {
    dateFaker.add(1, 'month');

    const milliseconds = +Date();
    dateFaker.reset();
    const date = new Date(milliseconds);

    expect(date.getMilliseconds()).not.toBeNaN();
});
