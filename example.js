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
