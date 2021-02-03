# date-faker

Package overriding what the now ( `new Date()`, `Date.now()` ) is in JS. It allows to manually change current date with `moment.js` like syntax.

## installation

Install via npm:

```
npm install date-faker
```

Import to module:

-   ESM:

```
import { dateFaker } from 'date-faker';
```

-   CommonJS:

```
var { dateFaker } = require('date-faker');
```

## usage

Methods:

-   `add(value, unit)`: changes date relatively to the current (original) by one specific unit only.

    -   `value` a number indicating how much the current date should be changed;
    -   `unit` string representing a unit for a change, valid units are: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';

        ```
        dateFaker.add(1, 'day');
        ```

-   `add(configObject)`: changes date relatively to the current (original), several shift units can be used.

    -   `configObject` object used for shifting the date. Valid property names are: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'. All of then should be of type number, indicating the shift value, .

        ```
        dateFaker.add({ year: 1, month: -2, day: 3 });
        ```

-   `addAndReset(value, unit)` or `addAndReset(configObject)`: accept the same parameters as `add` methods described above. The difference is that calling`addAndReset` method will fake only the first call of `new Date()`. All the next calls will return the original, unchanged date.

        ```
        dateFaker.add({ day: 1 });
        const d1 = new Date(); // returns tomorrow`s date (+1 day).

        dateFaker.add({ week: 1 });
        const d2 = new Date(); // returns next week`s date PLUS one day from the call before (+8 days).
        // As the shift is relative to the date that was PREVIOUSLY set. In such cases it might be useful to call addAndReset.
        // This way each date is set relatively to the CURRENT date.

        dateFaker.addAndReset({ day: 1 });
        const d1 = new Date(); // returns tomorrow`s date (+1 day).

        dateFaker.addAndReset({ week: 1 });
        const d2 = new Date(); // returns next week`s date (+7 days).

        ```

    In methods above shift values can be either positive or negative numbers, for adding or substracting the date.

-   `set(value)`: set specific date.

    -   `value` can be of type Date or string. String should be formatted `YYYY/MM/DD` / `YYYY-MM-DD` / ISO String.

        ```
        dateFaker.set('2019/01/24');
        ```

-   `reset()`: restores `Date` original behaviour
    ```
    dateFaker.reset();
    ```

## example

Running below command changes current date to be tomorrow.

```
new Date(); // standard behaviour: 2020-02-20

dateFaker.add(1, 'day');

new Date(); // faked date: 2020-02-21

```

configuration object can be used to shift the date.

```
new Date(); // standard behaviour: 2020-02-20

dateFaker.add({ year: 1, month: 2, day: 3 });

new Date(); // faked date: 2021-04-23
```

going back in time

```
new Date(); // standard behaviour: 2020-02-20

dateFaker.add(-1, 'month');

new Date(); // faked date: 2020-01-20
```

setting specific date

```
new Date(); // standard behaviour: 2020-02-20

dateFaker.set('2019/01/24');

new Date(); // faked date: 2019-01-24
```
