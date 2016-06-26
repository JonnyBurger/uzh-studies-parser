# uzh-studies-parser [![Build Status](https://travis-ci.org/JonnyBurger/uzh-studies-parser.svg?branch=master)](https://travis-ci.org/JonnyBurger/uzh-studies-parser)

> Find the type of degree from a UZH degree string.

## Install
```
npm install --save @jonny/uzh-studies-parser
```

## Usage
```js
const parseUzhStudy = require('@jonny/uzh-studies-parser');

parseUzhStudy('BA UZH in Religionswissenschaft');
//=> 'bachelor'
parseUzhStudy('MLaw UZH (RVO13)');
//=> 'master'
```

## API

### parseUzhStudy(input)

#### input

Type: `string`

#### output

One of these: `"bachelor"`, `"master"`, `"doctorate"`, `"licenciate"`, `"joint-degree"`, `"notary-exam-preparation"`, `null`

## License

MIT © [Jonny Burger](http://jonny.io)
