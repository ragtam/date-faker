import { uniq } from 'lodash';
import moment from 'moment';

import { dateFaker } from '../dist/src/date-faker';
import { dateFaker as dateFakerEsm } from '../dist/src/date-faker'; // ESM
const { dateFaker: dateFakerCommonJs } = require('../dist/src/date-faker'); // CommonJS

describe('Public API test suite | method names', () => {
    it('ESM and commonJS imports should work ', () => {
        expect(dateFakerEsm).toBeDefined();
        expect(dateFakerCommonJs).toBeDefined();
    });

    it('should expose add method', () => {
        expect(typeof dateFakerEsm.add).toEqual("function")
        expect(typeof dateFakerCommonJs.add).toEqual("function")
    });

    it('should expose addAndReset method', () => {
        expect(typeof dateFakerEsm.addAndReset).toEqual("function")
        expect(typeof dateFakerCommonJs.addAndReset).toEqual("function")
    });

    it('should expose set method', () => {
        expect(typeof dateFakerEsm.set).toEqual("function")
        expect(typeof dateFakerCommonJs.set).toEqual("function")
    });

    it('should expose reset method', () => {
        expect(typeof dateFakerEsm.reset).toEqual("function")
        expect(typeof dateFakerCommonJs.reset).toEqual("function")
    });
});

describe('Public API test suite | behaviour', () => {
    beforeEach(() => {
        dateFaker.reset();
    });

    it('should return faked date on add method called several times ', () => {
        dateFaker.add({ day: 1 });

        const arrayOfDates = [new Date(), new Date(), new Date()].map(d => d.toISOString());
        const uniqueValues = uniq(arrayOfDates);
        
        expect(uniqueValues.length).toEqual(1);
    });

    it('should return should add 1 day', () => {
        const originalDate = new Date();

        dateFaker.add({ day: 1 });

        const fakedDate = new Date();
        const daysDifference = moment(fakedDate).diff(originalDate, 'day')

        expect(daysDifference).toEqual(1);
    });
});