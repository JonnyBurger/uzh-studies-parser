# uzh-studies-parser [![Build Status](https://travis-ci.org/JonnyBurger/uzh-studies-parser.svg?branch=master)](https://travis-ci.org/JonnyBurger/uzh-studies-parser)

> Find the type of degree from a UZH (University of Zurich) degree string.

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

## Reference

This module was created by looking at [this list](https://drive.google.com/file/d/0B-a9UkzeVkYHQjEtVDdLcVZoQzg/view?usp=sharing) of UZH degrees that I found on Google.

## License

MIT © [Jonny Burger](http://jonny.io)
