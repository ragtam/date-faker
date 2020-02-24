import dateFaker from './date-faker';
import moment from 'moment';

afterEach(() => {
    dateFaker.reset();
});

describe('general', () => {
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

    it('should throw if invalid unit was provided', () => {
        expect(() => dateFaker.add(1, 'some invalid unit')).toThrow(
            "Invalid shift unit provided. Correct values are: 'year' | 'month' | 'day' | 'minute' | 'second' | 'millisecond'"
        );
    });
});

describe('2 parameters for add method', () => {
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
});

describe('1 parameter for add method', () => {
    it('should be callable with configuration object', () => {
        dateFaker.add({ year: 1, month: 2, day: 3 });

        const after = new Date();

        expect(after).toBeDefined();
    });

    it('should change year when called with config object', () => {
        const before = new Date();
        const config = { year: 1, month: 2, day: 3 };
        dateFaker.add(config);

        const after = new Date();

        expect(after.getFullYear()).toBeGreaterThan(before.getFullYear());
        expect(after.getFullYear()).toEqual(before.getFullYear() + config.year);
    });

    it('should change month when called with config object', () => {
        const before = new Date();
        const config = { month: 2 };

        dateFaker.add(config);

        const after = new Date();

        const diff = moment(after).diff(before, 'month');
        expect(diff).toEqual(config.month);
    });

    it('should change day when called with config object', () => {
        const before = new Date();
        const config = { day: 1 };

        dateFaker.add(config);

        const after = new Date();

        const diff = moment(after).diff(before, 'day');
        expect(diff).toEqual(config.day);
    });

    it('should change minute when called with config object', () => {
        const before = new Date();
        const config = { minute: 30 };

        dateFaker.add(config);

        const after = new Date();

        const diff = moment(after).diff(before, 'minute');
        expect(diff).toEqual(config.minute);
    });

    it('should change second when called with config object', () => {
        const before = new Date();
        const config = { second: 30 };

        dateFaker.add(config);

        const after = new Date();

        const diff = moment(after).diff(before, 'second');
        expect(diff).toEqual(config.second);
    });

    it('should change milliseconds when called with config object', () => {
        const before = new Date();
        const config = { millisecond: 500 };

        dateFaker.add(config);

        const after = new Date();

        const diff = moment(after).diff(before, 'millisecond');
        expect(diff).toEqual(config.millisecond);
    });

    it('should work fine for invalid object', () => {
        const invalidConfigObj = { day: 1, a: 'xyz' };

        dateFaker.add(invalidConfigObj);

        const res = new Date();
        expect(res).toBeDefined();
    });
});

describe('set functionality', () => {
    it('should set date from previous date', () => {
        const expectedDate = '2019-08-14';
        const d = moment(expectedDate).toDate();

        const res = new Date(d);

        expect(moment(res).format('YYYY-MM-DD')).toEqual(expectedDate);
    });

    it('should set date from ISO string', () => {
        dateFaker.set('2019-01-15T06:51:21.237Z');

        const res = new Date();

        expect(moment(res).format('YYYY-MM-DD hh:mm')).toEqual('2019-01-15 07:51');
    });

    it('should set date from string formatted with dashes', () => {
        dateFaker.set('2019-01-24');

        const res = new Date();

        expect(moment(res).format('YYYY-MM-DD')).toEqual('2019-01-24');
    });

    it('should set date from string formatted with forward slashes', () => {
        dateFaker.set('2019/01/24');

        const res = new Date();

        expect(moment(res).format('YYYY/MM/DD')).toEqual('2019/01/24');
    });
});
