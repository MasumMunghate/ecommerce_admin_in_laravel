/**
 *  Pages Authentication
 */

'use strict';
const formAuthentication = document.querySelector('#formAuthentication');

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    // Form validation for Add new record
    if (formAuthentication) {
      const fv = FormValidation.formValidation(formAuthentication, {
        fields: {
          username: {
            validators: {
              notEmpty: {
                message: 'Please enter username'
              },
              stringLength: {
                min: 6,
                message: 'Username must be more than 6 characters'
              }
            }
          },
          name: {
            validators: {
              notEmpty: {
                message: 'Please enter your name'
              },
              stringLength: {
                min: 2,
                max: 50,
                message: 'Name must be between 2 and 50 characters long'
              },
              regexp: {
                regexp: /^[A-Za-z\s]+$/,
                message: 'Name can only contain letters and spaces'
              },
             regexp: {
                regexp: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                message: 'Name can only contain letters and spaces (not just spaces)'
              }
            }
          },                   
          contact_no: {
            validators: {
              // notEmpty: {
              //   message: 'Please enter phone number'
              // },
              callback: {
                message: 'Invalid phone number',
                callback: function(input) {
                  const value = input.value.trim();
                  const phoneRegex = /^\+?\d{10,15}$/;
          
                  if (value === '') {
                    return {
                      valid: false,
                      message: 'Please enter phone number'
                    };
                  }
          
                  if (!phoneRegex.test(value)) {
                    return {
                      valid: false,
                      message: 'Phone number must be 10 to 15 digits'
                    };
                  }
          
                  return {
                    valid: true
                  };
                }
              }
            }
          },                   
          email: {
            validators: {
                notEmpty: {
                    message: 'Please enter your email'
                },
                regexp: {
                    regexp: /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Please enter a valid email address that starts with a letter'
                }
            }
        },        
        country_code: {
            validators: {
                notEmpty: {
                    message: 'Please select country code'
                }
            }
        },        
          'email-username': {
            validators: {
              notEmpty: {
                message: 'Please enter email / username'
              },
              stringLength: {
                min: 6,
                message: 'Username must be more than 6 characters'
              }
            }
          },
          password: {
            validators: {
              notEmpty: {
                message: 'Please enter your password',
                callback: function(value, validator, $field) {
                  // Check if the value is empty or only spaces
                  return value.trim() !== '';
                }
              },
              callback: {
                message: 'Password cannot be only spaces',
                callback: function(value, validator, $field) {
                  // Trim the value to check if it's empty or only spaces
                  return value.trim() !== '';
                }
              }
            }
          },       
          signupPassword: {
            validators: {
              notEmpty: {
                message: 'Please enter your password'
              },
              stringLength: {
                min: 6, // Minimum length should match the message
                max: 16,
                message: 'Password must be between 6 to 16 characters'
              },
              regexp: {
                regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)'
              }
            }
          },          
          'confirm-password': {
            validators: {
              notEmpty: {
                message: 'Please confirm password'
              },
              identical: {
                compare: function () {
                  return formAuthentication.querySelector('[name="password"]').value;
                },
                message: 'The password and its confirm are not the same'
              },
              stringLength: {
                min: 6,
                message: 'Password must be more than 6 characters'
              }
            }
          },
          terms: {
            validators: {
              notEmpty: {
                message: 'Please agree terms & conditions'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            rowSelector: '.mb-6'
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),

          defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
          autoFocus: new FormValidation.plugins.AutoFocus()
        },
        init: instance => {
          instance.on('plugins.message.placed', function (e) {
            if (e.element.parentElement.classList.contains('input-group')) {
              e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
            }
          });
        }
      });
    }

    //  Two Steps Verification
    const numeralMask = document.querySelectorAll('.numeral-mask');

    // Verification masking
    if (numeralMask.length) {
      numeralMask.forEach(e => {
        new Cleave(e, {
          numeral: true
        });
      });
    }
  })();
});
