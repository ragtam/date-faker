import { shiftByYear } from './date-shifters/year-shifter';

let originalDateObject = Date;

const shifters = new Map([
    ['year', shiftByYear],
    ['years', shiftByYear]
]);

const dateFaker = {
    add: (value, unit) => {
        const fakedDate = shifters.get(unit)(originalDateObject, value);

        Date = () => {
            return new originalDateObject(fakedDate.toISOString());
        };
    },
    reset: () => {
        Date = originalDateObject;
    }
};

export default dateFaker;
