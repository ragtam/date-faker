import dateFaker from './date-faker';

afterEach(() => {
    dateFaker.reset();
});

it('should be created', () => {
    expect(dateFaker).toBeDefined();
});

it('should reset Date to original behaviour', () => {
    const originalDate = new Date();

    dateFaker.add(2, 'years');
    dateFaker.reset();

    const fakedDate = new Date();

    expect(originalDate.toISOString()).toEqual(fakedDate.toISOString());
});
