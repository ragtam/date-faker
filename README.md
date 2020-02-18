# date-faker

Package overriding what the now ( `new Date()`, `Date.now()` ) is in JS. It allows you to manually change current date with `moment.js` like syntax.

## installation

Install via npm:

```
npm install date-faker
```

Import to module:

```
var dateFaker = require('date-faker');
```

or

```
import dateFaker from 'date-faker';
```

## usage

Methods:

-   `dateFaker.add(value, unit)`: changes date relatively to the current (original).

    -   `value` a number indicating how much the current date should be changed;
    -   `unit` string value of a unit for a change, valid units are: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';

-   `dateFaker.reset()`: restores `Date` original behaviour

## example

Running below command changes current date to be tomorrow.

```
new Date(); // Tue Feb 18 2020

dateFaker.add(1, 'day');

new Date(); // Wed Feb 18 2020

```
