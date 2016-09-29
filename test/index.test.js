const assert = require('assert')
  , validateRequired = require('..')

describe('validity-email', function () {

  it('should return validation error if property is undefined', function (done) {

    validateRequired('emailAddress', 'Email Address', {}, (error, validationError) => {
      assert.equal(error, null)
      assert.equal(validationError, 'Email Address must be a valid email address')
      done()
    })
  })

  it('should return validation error if property is not an email address', function (done) {

    validateRequired('emailAddress', 'Email Address', { emailAddress: 'not-a@emailaddress' }
      , (error, validationError) => {

      assert.equal(error, null)
      assert.equal(validationError, 'Email Address must be a valid email address')
      done()
    })
  })

  it('should be able to set a custom failure message', function (done) {

    validateRequired.setFailureMessage('No "#{name}" is not an email address')('emailAddress'
      , 'Email Address', { emailAddress: 'not-a@emailaddress' }, (error, validationError) => {

      assert.equal(error, null)
      assert.equal(validationError, 'No "Email Address" is not an email address')
      done()
    })
  })

  it('should not return validation error if property is given', function (done) {

    validateRequired('emailAddress', 'Email Address', { emailAddress: 'paul.serby@clock.co.uk' }
      , (error, validationError) => {

      assert.equal(error, null)
      assert.equal(validationError, undefined)
      done()
    })
  })

})
