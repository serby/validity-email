# validity-email

Validity style validator to ensure that a property is a valid email address.

As part of the modularisation of [validity](https://github.com/serby/validity), this replaces the built-in `validity.email`.

[![build status](https://secure.travis-ci.org/serby/validity-email.svg)](http://travis-ci.org/serby/validity-email)
[![dependency status](https://david-dm.org/serby/validity-email.svg)](https://david-dm.org/serby/validity-email) [![Greenkeeper badge](https://badges.greenkeeper.io/serby/validity-email.svg)](https://greenkeeper.io/)

## Installation

```
npm install --save validity-email
```

## Usage

```js

const schemata = require('schemata')
  , email = require('validity-email')
  , schema = schemata(
    { emailAddress:
      { validators: [ email ] }
    })
  , schemaWithCustomMessage = schemata(
    { emailAddress:
      { validators: [ email.setFailureMessage('#{name} not valid') ] }
    })


schema.validate({}, function (error, errors) {
  console.log(error, errors)
  // null, 'Email Address must be a valid email address'
})

schemaWithCustomMessage.validate({}, function (error, errors) {
  console.log(error, errors)
  // null, 'Email Address not valid'
})

```

## Credits
[Paul Serby](https://github.com/serby/)

## License

ISC
