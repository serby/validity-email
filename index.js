var validity = require('@clocklimited/validity')
  , validator = require('email-validator')

module.exports = validity.createValidatorAllowingFailureMessageOverride(
  validity.booleanToCallback(validator.validate), '#{name} must be a valid email address')
