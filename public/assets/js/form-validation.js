'use strict';

(function () {
  // Init custom option check
  window.Helpers.initCustomOptionCheck();

  // Bootstrap validation example
  //------------------------------------------------------------------------------------------
  // const flatPickrEL = $('.flatpickr-validation');
  const flatPickrList = [].slice.call(document.querySelectorAll('.flatpickr-validation'));
  // Flat pickr
  if (flatPickrList) {
    flatPickrList.forEach(flatPickr => {
      flatPickr.flatpickr({
        allowInput: true,
        monthSelectorType: 'static'
      });
    });
  }

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const bsValidationForms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(bsValidationForms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Submit your form
          alert('Submitted!!!');
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
/**
 * Form Validation (https://formvalidation.io/guide/examples)
 * ? Primary form validation plugin for this template
 * ? In this example we've try to covered as many form inputs as we can.
 * ? Though If we've miss any 3rd party libraries, then refer: https://formvalidation.io/guide/examples/integrating-with-3rd-party-libraries
 */
//------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const formValidationExamples = document.getElementById('formValidationExamples'),
    selectPosition = jQuery(formValidationExamples.querySelector('[name="organizer_role"]')),
    selectFevSport = jQuery(formValidationExamples.querySelector('[name="fev_sport[]"]')),
      formValidationSelect2Ele = jQuery(formValidationExamples.querySelector('[name="formValidationSelect2"]')),
      formValidationTechEle = jQuery(formValidationExamples.querySelector('[name="formValidationTech"]')),
      formValidationLangEle = formValidationExamples.querySelector('[name="formValidationLang"]'),
      formValidationHobbiesEle = jQuery(formValidationExamples.querySelector('.selectpicker')),

      tech = [
        'ReactJS',
        'Angular',
        'VueJS',
        'Html',
        'Css',
        'Sass',
        'Pug',
        'Gulp',
        'Php',
        'Laravel',
        'Python',
        'Bootstrap',
        'Material Design',
        'NodeJS'
      ];

    const fv = FormValidation.formValidation(formValidationExamples, {
      // genera Information validATIONS
      fields: {
        oganization_name: {
          validators: {
            notEmpty: {
              message: 'Please enter your organization name'
            },
            callback: {
              message: 'Organization name cannot be only spaces',
              callback: function(input) {
                return input.value.trim().length > 0;
              }
            },
            stringLength: {
              min: 3,
              max: 50,
              message: 'The organization name must be more than 3 and less than 50 characters long'
            }
          }
        },
        organizer_role: {
          validators: {
            notEmpty: {
              message: 'Please select your position'
            }
          }
        },
        sport: {
          validators: {
            notEmpty: {
              message: 'Please select your sport'
            }
          }
        },
        "fev_sport[]": {  // Corrected Field Name
          validators: {
            notEmpty: {
              message: "Please select at least one sport"
            }
          }
        },
        address: {
          validators: {
            notEmpty: {
              message: 'Please enter your address'
            },
            callback: {
              message: 'Address cannot be only spaces',
              callback: function(input) {
                return input.value.trim().length > 0;
              }
            },
            stringLength: {
              min: 10,
              max: 250,
              message: 'Address must not exceed 10 to 250 characters'
            }
          }
        },
        other_sport: {
          validators: {
            notEmpty: {
              message: 'Please enter your custom sport'
            }
          }
        },
        organizationLogo: {
          validators: {
              callback: {
                  message: 'Organization logo is required',
                  callback: function(value, validator, $field) {
                      // Check if the hidden input has a value
                      if ($('input[name="organizationLogo"]').val()) {
                          return true; // Skip validation if already set
                      }
                      return false; // Apply validation if no value
                  },
                  file: {
                    extension: 'jpeg,png,jpg,svg',
                    type: 'image/jpeg,image/png,image/jpg,image/svg+xml',
                    maxSize: 2097152,
                    message: 'Only JPG, PNG, images are allowed (Max: 2MB)'
                  }

              }
          }
      },
        // general inforamtion
        formValidationEmail: {
          validators: {
            notEmpty: {
              message: 'Please enter your email'
            },
            emailAddress: {
              message: 'The value is not a valid email address'
            }
          }
        },
        formValidationPass: {
          validators: {
            notEmpty: {
              message: 'Please enter your password'
            }
          }
        },
        formValidationConfirmPass: {
          validators: {
            notEmpty: {
              message: 'Please confirm password'
            },
            identical: {
              compare: function () {
                return formValidationExamples.querySelector('[name="formValidationPass"]').value;
              },
              message: 'The password and its confirm are not the same'
            }
          }
        },
        formValidationFile: {
          validators: {
            notEmpty: {
              message: 'Please select the file'
            }
          }
        },
        formValidationDob: {
          validators: {
            notEmpty: {
              message: 'Please select your DOB'
            },
            date: {
              format: 'YYYY/MM/DD',
              message: 'The value is not a valid date'
            }
          }
        },
        formValidationSelect2: {
          validators: {
            notEmpty: {
              message: 'Please select your country'
            }
          }
        },
        formValidationLang: {
          validators: {
            notEmpty: {
              message: 'Please add your language'
            }
          }
        },
        formValidationTech: {
          validators: {
            notEmpty: {
              message: 'Please select technology'
            }
          }
        },
        formValidationHobbies: {
          validators: {
            notEmpty: {
              message: 'Please select your hobbies'
            }
          }
        },
        formValidationBio: {
          validators: {
            notEmpty: {
              message: 'Please enter your bio'
            },
            stringLength: {
              min: 100,
              max: 500,
              message: 'The bio must be more than 100 and less than 500 characters long'
            }
          }
        },
        formValidationGender: {
          validators: {
            notEmpty: {
              message: 'Please select your gender'
            }
          }
        },
        formValidationPlan: {
          validators: {
            notEmpty: {
              message: 'Please select your preferred plan'
            }
          }
        },
        formValidationSwitch: {
          validators: {
            notEmpty: {
              message: 'Please select your preference'
            }
          }
        },
        formValidationCheckbox: {
          validators: {
            notEmpty: {
              message: 'Please confirm our T&C'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // Use this for enabling/changing valid/invalid class
          // eleInvalidClass: '',
          eleValidClass: '',
          rowSelector: function (field, ele) {
            // field is the field name & ele is the field element
            switch (field) {
              case 'oganization_name':
              case 'organizer_role':
              case "fev_sport[]":
              case 'sport':
              case 'address':
              case 'other_sport':
              case 'formValidationName':
              case 'formValidationEmail':
              case 'formValidationPass':
              case 'formValidationConfirmPass':
              case 'formValidationFile':
              case 'formValidationDob':
              case 'formValidationSelect2':
              case 'formValidationLang':
              case 'formValidationTech':
              case 'formValidationHobbies':
              case 'formValidationBio':
              case 'formValidationGender':
                return '.mb-6';
              case 'formValidationPlan':
                return '.col-xl-3';
              case 'formValidationSwitch':
              case 'formValidationCheckbox':
                return '.col-12';
              default:
                return '.row';
            }
          }
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        // Submit the form when all fields are valid
        defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
        autoFocus: new FormValidation.plugins.AutoFocus()
      },
      init: instance => {
        instance.on('plugins.message.placed', function (e) {
          //* Move the error message out of the `input-group` element
          if (e.element.parentElement.classList.contains('input-group')) {
            // `e.field`: The field name
            // `e.messageElement`: The message element
            // `e.element`: The field element
            e.element.parentElement.insertAdjacentElement('afterend', e.messageElement);
          }
          //* Move the error message out of the `row` element for custom-options
          if (e.element.parentElement.parentElement.classList.contains('custom-option')) {
            e.element.closest('.row').insertAdjacentElement('afterend', e.messageElement);
          }
        });
        $(document).ready(function() {
          var hiddenLogoValue = $('input[name="organizationLogo"]').val();

          if (hiddenLogoValue) {
              // Remove validation for organizationLogo if it already has a value
              $('input[name="organizationLogo"]').closest('form').bootstrapValidator('removeField', 'organizationLogo');
          }
      });

      }
    });

    //? Revalidation third-party libs inputs on change trigger

    // Flatpickr
    const flatpickrDate = document.querySelector('[name="formValidationDob"]');

    if (flatpickrDate) {
      flatpickrDate.flatpickr({
        enableTime: false,
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'Y/m/d',
        // After selecting a date, we need to revalidate the field
        onChange: function () {
          fv.revalidateField('formValidationDob');
        }
      });
    }

    // Select2 (Country)
    if (formValidationSelect2Ele.length) {
      formValidationSelect2Ele.wrap('<div class="position-relative"></div>');
      formValidationSelect2Ele
        .select2({
          placeholder: 'Select country',
          dropdownParent: formValidationSelect2Ele.parent()
        })
        .on('change', function () {
          // Revalidate the color field when an option is chosen
          fv.revalidateField('formValidationSelect2');
        });
    }
    $(selectPosition)
    .select2({
      placeholder: 'Select position',
      allowClear: true
    })
    .on('change', function () {
      // Revalidate the field when an option is chosen
      fv.revalidateField('organizer_role');
    });
    $(selectFevSport)
    .select2({
      placeholder: 'Select sport',
      allowClear: true
    })
    .on('change', function () {
      // Revalidate the field when an option is chosen
      fv.revalidateField('fev_sport[]');
    });

    // Typeahead

    // String Matcher function for typeahead
    const substringMatcher = function (strs) {
      return function findMatches(q, cb) {
        var matches, substrRegex;
        matches = [];
        substrRegex = new RegExp(q, 'i');
        $.each(strs, function (i, str) {
          if (substrRegex.test(str)) {
            matches.push(str);
          }
        });

        cb(matches);
      };
    };

    // Check if rtl
    if (isRtl) {
      const typeaheadList = [].slice.call(document.querySelectorAll('.typeahead'));

      // Flat pickr
      if (typeaheadList) {
        typeaheadList.forEach(typeahead => {
          typeahead.setAttribute('dir', 'rtl');
        });
      }
    }
    formValidationTechEle.typeahead(
      {
        hint: !isRtl,
        highlight: true,
        minLength: 1
      },
      {
        name: 'tech',
        source: substringMatcher(tech)
      }
    );

    // Tagify
    let formValidationLangTagify = new Tagify(formValidationLangEle);
    formValidationLangEle.addEventListener('change', onChange);
    function onChange() {
      fv.revalidateField('formValidationLang');
    }

    //Bootstrap select
    formValidationHobbiesEle.on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
      fv.revalidateField('formValidationHobbies');
    });
  })();
});

document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    // Existing form validation code...

  // Add validation for 'designation' form
  const designationForm = document.getElementById('designation');

    if (designationForm) {
      const fvDesignation = FormValidation.formValidation(designationForm, {
        fields: {
          name: {
            validators: {
              notEmpty: {
                message: 'Designation Name is required'
              },
              stringLength: {
                min: 3,
                max: 50,
                message: 'Designation Name must be between 3 and 50 characters long'
              },
              regexp: {
                regexp: /^[a-zA-Z\s'()\-]+$/,
                message: 'Designation Name can only contain alphabets, spaces, hyphens (-), apostrophes (\'), and brackets ()'
            }
            }
          },
          status: {
            validators: {
              notEmpty: {
                message: 'Status is required'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit()
        }
      });

      // Add reset functionality for the form
      document.getElementById('reset-form').addEventListener('click', function () {
        designationForm.reset();
        fvDesignation.resetForm(true);
      });
    }
  })();
});
// end
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {

  const organizerPayment = document.getElementById('organizer-payment');

    if (organizerPayment) {
      const fvDesignation = FormValidation.formValidation(organizerPayment, {
        fields: {
          value: {
            validators: {
              notEmpty: {
                message: 'Payment Amount is required'
              },
              numeric: {
                message: 'Payment Amount must be a number'
              },
              between: {
                min: 1,
                max: 100000,
                message: 'Payment Amount must be between 1 and 100000'
              }
            }
          },
          payment_cycle: {
            validators: {
              notEmpty: {
                message: 'Payment Cycle is required'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit()
        }
      });

      // Add reset functionality for the form
      document.getElementById('reset-form').addEventListener('click', function () {
        organizerPayment.reset();
        fvDesignation.resetForm(true);
      });
    }
  })();
});

// Add validation for Age category form
document.addEventListener('DOMContentLoaded', function () {
  const ageCategoryForm = document.getElementById('age_category');
  if (ageCategoryForm) {
    const fvageCateg = FormValidation.formValidation(ageCategoryForm, {
      fields: {
        title: {
          validators: {
            notEmpty: {
              message: 'Title is required'
            },
            stringLength: {
              min: 3,
              max: 50,
              message: 'Title must be between 3 and 50 characters long'
            },
            // regexp: {
            //   regexp: /^[a-zA-Z0-9\s()]+$/, // Updated regex to allow parentheses
            //   message: 'Title can only contain letters, numbers, spaces, and parentheses'
            // }
          }
        },
        min_age: {
          validators: {
            notEmpty: {
              message: 'Minimum age is required'
            },
            numeric: {
              message: 'Please enter a valid number'
            },
            callback: {
              message: 'Minimum age must be less than Maximum age',
              callback: function (value) {
                var minAge = parseInt(document.getElementById('min_age').value);
                var maxAge = parseInt(document.getElementById('max_age').value);
                return isNaN(maxAge) || minAge < maxAge;
              }
            }
          }
        },
        max_age: {
          validators: {
            notEmpty: {
              message: 'Maximum age is required'
            },
            numeric: {
              message: 'Please enter a valid number'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Add reset functionality for the form
    document.getElementById('reset-form').addEventListener('click', function () {
      ageCategoryForm.reset();
      fvageCateg.resetForm(true);
    });
  }
});

// Add validation for Weight category form
document.addEventListener('DOMContentLoaded', function () {
  const weightForm = document.getElementById('weight_category_form');
  if (weightForm) {
    const fvWeight = FormValidation.formValidation(weightForm, {
      fields: {
        titleWeight: {
          validators: {
            notEmpty: {
              message: 'Title is required'
            },
            stringLength: {
              min: 3,
              max: 50,
              message: 'Title must be between 3 and 50 characters long'
            }
          }
        },
        min_weight: {
          validators: {
            notEmpty: {
              message: 'Minimum weight is required'
            },
            numeric: {
              message: 'Please enter a valid weight'
            },
            callback: {
              message: 'Minimum weight must be less than Maximum weight',
              callback: function (value) {
                var minweight = parseInt(document.getElementById('min_weight').value);
                var maxweight = parseInt(document.getElementById('max_weight').value);
                return isNaN(maxweight) || minweight < maxweight;
              }
            }
          }
        },
        max_weight: {
          validators: {
            notEmpty: {
              message: 'Maximum weight is required'
            },
            numeric: {
              message: 'Please enter a valid weight'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });
    document.getElementById('reset-form').addEventListener('click', function () {
      weightForm.reset();
      fvWeight.resetForm(true);
    });
  }
});
//end


document.addEventListener('DOMContentLoaded', function () {
  const titleForm = document.getElementById('title_validation');

  if (titleForm) {
      const fventry = FormValidation.formValidation(titleForm, {
          fields: {
              title: {
                  validators: {
                      notEmpty: {
                          message: 'Title is required'
                      },
                      stringLength: {
                          min: 3,
                          max: 50,
                          message: 'Title must be between 3 and 50 characters long'
                      }
                  }
              },
              sport_id: {
                  validators: {
                      notEmpty: {
                          message: 'Sport is required'
                      }
                  }
              },
              entry_type_id: {
                  validators: {
                      notEmpty: {
                          message: 'Entry Type is required'
                      }
                  }
              }
          },
          plugins: {
              trigger: new FormValidation.plugins.Trigger(),
              bootstrap5: new FormValidation.plugins.Bootstrap5({
                  eleValidClass: '',
                  eleInvalidClass: ''
              }),
              submitButton: new FormValidation.plugins.SubmitButton(),
              defaultSubmit: new FormValidation.plugins.DefaultSubmit()
          }
      });

      document.getElementById('reset-form')?.addEventListener('click', function () {
        titleForm.reset();
          fventry.resetForm(true);
      });
      $('#sport_id').on('change', function () {
        const sport_id = $(this).val();
        if (sport_id) {
          fventry.revalidateField('sport_id');
        }
      });
      $('#entry_type_id').on('change', function () {
        const entry_type_id = $(this).val();
        if (entry_type_id) {
          fventry.revalidateField('entry_type_id');
        }
      });
  }
});
// End

//location master validation
document.addEventListener('DOMContentLoaded', function () {
  const locationForm = document.getElementById('Country_val');

  if (locationForm) {
      const fvlocation = FormValidation.formValidation(locationForm, {
          fields: {
            countryName: {
              validators: {
                  notEmpty: {
                      message: 'Country is required'
                  },
                  regexp: {
                      regexp: /^[a-zA-Z\s]{3,50}$/,
                      message: 'Enter a valid country name (3-50 letters only)'
                  }
              }
          },
              countryCode: {
                  validators: {
                      notEmpty: {
                          message: 'Country code is required'
                      },
                      regexp: {
                        regexp: /^\+\d{1,4}$/,
                        message: 'Country code must start with + followed by 1 to 4 digits'
                    }
                  }
              }
          },
          plugins: {
              trigger: new FormValidation.plugins.Trigger(),
              bootstrap5: new FormValidation.plugins.Bootstrap5({
                  eleValidClass: '',
                  eleInvalidClass: ''
              }),
              submitButton: new FormValidation.plugins.SubmitButton(),
              defaultSubmit: new FormValidation.plugins.DefaultSubmit()
          }
      });

      document.getElementById('reset-form')?.addEventListener('click', function () {
          fvlocation.resetForm(true);
          locationForm.reset();
      });
  }
});

//state validation
document.addEventListener('DOMContentLoaded', function () {
  const stateForm = document.getElementById('State_val');

  if (stateForm) {
      const fvstate = FormValidation.formValidation(stateForm, {
          fields: {
            country_id: {
                  validators: {
                      notEmpty: {
                          message: 'Country is required'
                      }
                  }
              },
              stateName: {
                  validators: {
                      notEmpty: {
                          message: 'State is required'
                      },
                      regexp: {
                        regexp: /^[a-zA-Z\s]{3,50}$/,
                        message: 'Enter a valid state name (3-50 letters only)'
                    }
                  }
              }
          },
          plugins: {
              trigger: new FormValidation.plugins.Trigger(),
              bootstrap5: new FormValidation.plugins.Bootstrap5({
                  eleValidClass: '',
                  eleInvalidClass: ''
              }),
              submitButton: new FormValidation.plugins.SubmitButton(),
              defaultSubmit: new FormValidation.plugins.DefaultSubmit()
          }
      });
      $('#country_id').on('change', function () {
        const CountryId = $(this).val();
        if (CountryId) {
          fvstate.revalidateField('country_id');
        }
      });
      document.getElementById('reset-form')?.addEventListener('click', function () {
          fvstate.resetForm(true);
          stateForm.reset();
          $('#country_id').val('').trigger('change');
      });
  }
});

//city validation
document.addEventListener('DOMContentLoaded', function () {
  const cityForm = document.getElementById('City_val');

  if (cityForm) {
      const fvcity = FormValidation.formValidation(cityForm, {
          fields: {
            state_id: {
                  validators: {
                      notEmpty: {
                          message: 'State is required'
                      },
                  }
              },
              cityName: {
                  validators: {
                      notEmpty: {
                          message: 'City is required'
                      },
                      regexp: {
                        regexp: /^[a-zA-Z\s]{3,50}$/,
                        message: 'Enter a valid city name (3-50 letters only)'
                    }
                  }
              }
          },
          plugins: {
              trigger: new FormValidation.plugins.Trigger(),
              bootstrap5: new FormValidation.plugins.Bootstrap5({
                  eleValidClass: '',
                  eleInvalidClass: ''
              }),
              submitButton: new FormValidation.plugins.SubmitButton(),
              defaultSubmit: new FormValidation.plugins.DefaultSubmit()
          }
      });

      $('#state_id').on('change', function () {
        const stateId = $(this).val();
        if (stateId) {
            fvcity.revalidateField('state_id');
        }
      });
      document.getElementById('reset-form')?.addEventListener('click', function () {
          fvcity.resetForm(true);
          cityForm.reset();

          $('#state_id').val('').trigger('change');
      });
  }
});
//end


document.addEventListener('DOMContentLoaded', function () {
  const sportForm = document.getElementById('sport');
  const editIdField = document.getElementById('edit_id'); // Hidden input field for edit mode
  const iconInput = document.querySelector("input[name='icon']"); // Sport Icon input field

  if (sportForm) {
    const fvSport = FormValidation.formValidation(sportForm, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: 'Sport  is required'
            },
            stringLength: {
              min: 3,
              max: 50,
              message: 'Sport Name must be between 3 and 50 characters long'
            },
            regexp: {
              regexp: /^[a-zA-Z0-9\s()]+$/,  // Updated regex to allow parentheses
              message: 'Sport Name can only contain letters, numbers, spaces, and parentheses'
            }
          }
        },
        icon: {
          validators: {
            notEmpty: {
              message: 'Sport icon is required'
            },
            file: {
              extension: 'jpeg,png,jpg,svg',
              type: 'image/jpeg,image/png,image/jpg,image/svg+xml',
              message: 'The file must be a valid image (JPEG, PNG, JPG, SVG).'
            }
          }
        },
        status: {
          validators: {
            notEmpty: {
              message: 'Status is required'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Function to handle validation rules dynamically
    function checkEditMode() {
      if (editIdField.value) {
        // In edit mode: Check if a new icon is uploaded
        if (iconInput.files.length === 0) {
          fvSport.updateValidatorOption('icon', 'notEmpty', 'enabled', false); // Remove "required" if already has an image
        } else {
          fvSport.updateValidatorOption('icon', 'notEmpty', 'enabled', true); // Require if new image selected
        }
      } else {
        // In create mode: Always require the icon
        fvSport.updateValidatorOption('icon', 'notEmpty', 'enabled', true);
      }
    }

    // Run check on page load
    checkEditMode();

    // Modify validation dynamically when the edit button is clicked
    document.querySelectorAll("[data-id]").forEach(button => {
      button.addEventListener("click", function () {
        checkEditMode();
      });
    });

    // Monitor the file input change event
    iconInput.addEventListener("change", function () {
      checkEditMode(); // Recheck validation on file selection
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      sportForm.reset();
      fvSport.resetForm(true);
      checkEditMode(); // Reapply validation when resetting the form
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const statusField = document.getElementById('formValidationSelect2');
    const reasonField = document.getElementById('formValidationBio');
    const reasonDiv = document.getElementById('reasonDiv');
    const form = document.getElementById('editStatus');

    if (form) {
        const fvForm = FormValidation.formValidation(form, {
            fields: {
                status: {
                    validators: {
                        notEmpty: {
                            message: 'Status is required'
                        }
                    }
                },
                reason: {
                    validators: {
                        notEmpty: {
                            message: 'Reason is required',
                            enabled: false // Initially disabled, will be enabled dynamically
                        }
                    }
                }
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    eleValidClass: '',
                    eleInvalidClass: ''
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                defaultSubmit: new FormValidation.plugins.DefaultSubmit()
            }
        });

        // Show/hide reason field dynamically
        function toggleReasonValidation() {
            const selectedStatus = statusField.value;

            if (selectedStatus === 'REJECT' || selectedStatus === 'ON_HOLD') {
                reasonDiv.style.display = 'block';
                fvForm.enableValidator('reason'); // Enable validation
            } else {
                reasonDiv.style.display = 'none';
                fvForm.disableValidator('reason'); // Disable validation
            }
        }

        statusField.addEventListener('change', toggleReasonValidation);

        // Handle form submission
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            fvForm.validate().then(function (status) {
                if (status === 'Valid') {
                    form.submit(); // Submit the form if valid
                }
            });
        });

        // Ensure the modal validation works only when needed
        $('#editStatusModal').on('show.bs.modal', function () {
            // Reset validation errors when the modal opens
            fvForm.resetForm(true);

            // If status is already selected, don't show an error
            if (statusField.value) {
                fvForm.disableValidator('status'); // Disable validation if already selected
            } else {
                fvForm.enableValidator('status'); // Enable validation if empty
            }

            toggleReasonValidation();
        });

        // Initialize validation state on page load
        statusField.dispatchEvent(new Event('change'));
    }
});

//event form validation
document.addEventListener('DOMContentLoaded', function () {
  const addEventGeneralInfo = document.getElementById('add_event');
  const testStartDate = document.getElementById("test_start_date");
  const status = document.getElementById("status");
  const eventStartDateInput = document.getElementById("flatpickr-date");

  if (addEventGeneralInfo) {

                const hiddenLogoInput = document.querySelector('input[name="bannerImg"]');
            const hasExistingLogo = hiddenLogoInput && hiddenLogoInput.value.trim() !== '';

            const logoValidators = {
                file: {
                    extension: 'jpeg,png,jpg,svg',
                    type: 'image/jpeg,image/png,image/jpg,image/svg+xml',
                    maxSize: 2097152,
                    message: 'Only JPG, PNG, images are allowed (Max: 2MB)'
                }
            };

            // Add notEmpty validator only if there's no existing logo
            if (!hasExistingLogo) {
                logoValidators.notEmpty = {
                    message: 'Event banner is required'
                };
            }
    const fvageCateg = FormValidation.formValidation(addEventGeneralInfo, {
      fields: {
        event_name: {
          validators: {
            notEmpty: { message: 'Event name is required' },
            stringLength: {
              min: 4,
              max: 60,
              message: 'Event name must be between 4 and 60 characters'
            }
          }
        },
        event_start_date: {
          validators: {
            notEmpty: { message: 'Event start date is required' },
            callback: {
              message: 'Start date must be today or a future date',
              callback: function (input) {
                if (!input.value) return true;
                return new Date(input.value) >= new Date().setHours(0, 0, 0, 0);
              }
            }
          }
        },
        event_end_date: {
          validators: {
            notEmpty: { message: 'End date is required' },
            callback: {
              message: 'End date must be greater than the start date',
              callback: function (input) {
                if (!input.value) return true;
                const startDate = document.querySelector('[name="event_start_date"]').value;
                return startDate ? new Date(input.value) > new Date(startDate) : true;
              }
            }
          }
        },
        event_location: {
          validators: {
            notEmpty: { message: 'Event location is required' },
            stringLength: {
              min: 4,
              max: 150,
              message: 'Event location must be between 4 and 150 characters.'
            }
          }
        },
        event_banner: {
          validators: logoValidators

        },
        description: {
          validators: {
            notEmpty: {
              message: 'Event description is required',
              callback: function (input) {
                return input.value.replace(/<p><br><\/p>/g, '').trim().length > 0;
              }
            }
          }
        },
        start_time: {
          validators: {
            notEmpty: { message: 'Start time is required' }
          }
        },
        end_time: {
          validators: {
            notEmpty: { message: 'End time is required' }
          }
        },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({ eleValidClass: '', eleInvalidClass: '' }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });



    function validateEventStartDate() {
      const testStartDateValue = testStartDate.value.trim();
      const eventStatus = status.value.trim();
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (eventStatus === 'PUBLISHED') {

          eventStartDateInput.disabled = true;


    } else {
        eventStartDateInput.disabled = false;
        fvageCateg.addField('event_start_date', {
          validators: {
            notEmpty: { message: 'Event start date is required' },
            callback: {
              message: 'Start date must be today or a future date',
              callback: function (input) {
                if (!input.value) return true;
                return new Date(input.value) >= today;
              }
            }
          }
        });
      }
    }

    validateEventStartDate();
    testStartDate.addEventListener("input", validateEventStartDate);
    status.addEventListener("change", validateEventStartDate);

    const quill = new Quill('#snow-editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'align': [] }],
          ['blockquote', 'code-block'],
          ['clean']
        ]
      }
    });

    quill.on('text-change', function () {
      document.getElementById('quill_html').value = quill.root.innerHTML.replace(/<p><br><\/p>/g, '').trim();
      fvageCateg.revalidateField('description');
    });

    document.getElementById('reset-form').addEventListener('click', function () {
      addEventGeneralInfo.reset();
      fvageCateg.resetForm(true);
      quill.root.innerHTML = '';
      document.getElementById('quill_html').value = '';
      validateEventStartDate();
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const eventCategoriesForm = document.getElementById('entryTypeForm');
  if (eventCategoriesForm) {
    const fvageCateg = FormValidation.formValidation(eventCategoriesForm, {
      fields: {
        sport: {
          validators: {
            notEmpty: {
              message: 'Sport is required'
            },
          }
        },
        title: {
          validators: {
            notEmpty: {
              message: ' Title is required'
            },
            stringLength: {
              min: 3,
              max: 50,
              message: 'Title must be between 3 and 50 characters long'
          },
          regexp: {
              regexp: /^[a-zA-Z\s]+$/,  // Allows only letters and spaces
              message: 'Title can only contain alphabets and spaces'
          }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    $('#sportselect').on('change', function () {
      const sportselect = $(this).val();
      if (sportselect) {
        fvageCateg.revalidateField('sport');
      }
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      eventCategoriesForm.reset();
      fvageCateg.resetForm(true);
    });
  }
});

// Add event categories form
document.addEventListener('DOMContentLoaded', function () {
  const eventCategoriesForm = document.getElementById('sport_type_form');
  if (eventCategoriesForm) {
    const fvageCateg = FormValidation.formValidation(eventCategoriesForm, {
      fields: {
        title: {
          validators: {
            notEmpty: {
              message: ' Title is required'
            },
            stringLength: {
              min: 3,
              max: 50,
              message: 'Title must be between 3 and 50 characters long'
          },
          regexp: {
              regexp: /^[a-zA-Z\s+]+$/,  // Allows only letters and spaces
              message: 'Title can only contain alphabets and spaces'
          }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      eventCategoriesForm.reset();
      fvageCateg.resetForm(true);
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const eventFormat = document.getElementById('event-formats');
  if (eventFormat) {
    const fvageCateg = FormValidation.formValidation(eventFormat, {
      fields: {
       title: {
          validators: {
            notEmpty: {
              message: ' Title is required'
            },
            stringLength: {
              min: 3,
              max: 50,
              message: 'Title must be between 3 and 50 characters long'
          },
          regexp: {
              regexp: /^[a-zA-Z\s]+$/,  // Allows only letters and spaces
              message: 'Title can only contain alphabets and spaces'
          }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      eventFormat.reset();
      fvageCateg.resetForm(true);
    });
  }
});


// organizer password chnage form
document.addEventListener('DOMContentLoaded', function () {
  const passwordChangeForm = document.getElementById('password_change_form');
  if (passwordChangeForm) {
    const fvPasswordChange = FormValidation.formValidation(passwordChangeForm, {
      fields: {
        currentPassword: {
          validators: {
            notEmpty: {
              message: 'Current password is required'
            }
          }
        },
        newPassword: {
          validators: {
            notEmpty: {
              message: 'New password is required'
            },
            stringLength: {
              min: 8,
              max: 16,
              message: 'Password must be between 6 to 16 characters'
            },
            regexp: {
              regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)'
            },
            callback: {
              message: 'New password must be different from the current password',
              callback: function (input) {
                const currentPasswordValue = passwordChangeForm.querySelector('[name="currentPassword"]').value;
                return input.value !== currentPasswordValue;
              }
            }
          }
        },
        confirmPassword: {
          validators: {
            notEmpty: {
              message: 'Confirm password is required'
            },
            identical: {
              compare: function () {
                return passwordChangeForm.querySelector('[name="newPassword"]').value;
              },
              message: 'Confirm password must match new password'
            },
            regexp: {
              regexp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
              message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)'
            },
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      passwordChangeForm.reset();
      fvPasswordChange.resetForm(true);
    });
  }
});






// Organizer Payment Form Validation
document.addEventListener('DOMContentLoaded', function () {
  const organizerPaymentForm = document.getElementById('organizerPaymentForm');

  if (organizerPaymentForm) {
    const organizerPayment = FormValidation.formValidation(organizerPaymentForm, {
      fields: {
        paymentCheck: {
          validators: {
            notEmpty: {
              message: 'Payment check is required'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      organizerPaymentForm.reset();
      organizerPayment.resetForm(true);
    });
  }
});

//App content help and faqs
document.addEventListener('DOMContentLoaded', function () {
  const helpFaqForm = document.getElementById('helpFaqForm');
  if (helpFaqForm) {
    const fvageCateg = FormValidation.formValidation(helpFaqForm, {
      fields: {
        question: {
          validators: {
            notEmpty: {
              message: 'Question is required'
            },
            stringLength: {
              max: 250,
              message: 'The question must not exceed 250 characters'
            }
          }
        },
        answer: {
          validators: {
            notEmpty: {
              message: 'Answer is required'
            },
            stringLength: {
              max: 500,
              message: 'The answer must not exceed 500 characters'
            }
          }
        },
        status: {
          validators: {
            notEmpty: {
              message: 'Status is required'
            }
          }
        }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      helpFaqForm.reset();
      fvageCateg.resetForm(true);
    });
  }
});

//app content contact us
// this validation added in blade file


//App content app config
document.addEventListener('DOMContentLoaded', function () {
  const appConfigForm = document.getElementById('app_config');
  if (appConfigForm) {
    const hiddenAppIcon = document.querySelector('input[name="appIcon"]');
    const hasAppIcon = hiddenAppIcon && hiddenAppIcon.value.trim() !== '';

    const fvageCateg = FormValidation.formValidation(appConfigForm, {
      fields: {
        // icon: hasAppIcon ? {} : {
        //   validators: {
        //     notEmpty: {
        //       message: 'Logo is required'
        //     },
        //     file: {
        //       extension: 'jpg,jpeg,png,gif',
        //       type: 'image/jpeg,image/png,image/gif',
        //       maxSize: 2 * 1024 * 1024, // 2MB
        //       message: 'The file must be an image and not exceed 2MB'
        //   }
        //   }
        // }
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Reset form functionality
    document.getElementById('reset-form').addEventListener('click', function () {
      appConfigForm.reset();
      fvageCateg.resetForm(true);
    });
  }
});


document.addEventListener('DOMContentLoaded', function (e) {
  (function () {

  const organizerPayment = document.getElementById('organizer-payout-form');

    if (organizerPayment) {
      const fvDesignation = FormValidation.formValidation(organizerPayment, {
        fields: {
          minimum_payout_amount: {
            validators: {
              notEmpty: {
                message: 'Minimum payout amount is required'
              },
              numeric: {
                message: 'Minimum payout amount must be a valid number'
              }
            }
          },
          minimum_blance_amount: {
            validators: {
              notEmpty: {
                message: 'Minimum balance amount is required'
              },
              numeric: {
                message: 'Minimum balance amount must be a valid number'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit()
        }
      });

      // Add reset functionality for the form
      document.getElementById('reset-form').addEventListener('click', function () {
        organizerPayment.reset();
        fvDesignation.resetForm(true);
      });
    }
  })();
});
// add bank details form validations
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {

    // Form for bank details
    const bankForm = document.getElementById('bankForm');
    if (bankForm) {
      const fvBank = FormValidation.formValidation(bankForm, {
        fields: {
          account_holder_name: {
            validators: {
              notEmpty: {
                message: 'Account holder name is required'
              },
              stringLength: {
                min: 9,
                max: 50,
                message: 'Account holder name must be between 9 and 50 characters long'
              },
              regexp: {
                regexp: /^[A-Za-z ]+$/,
                message: 'Only letters and spaces are allowed'
              }
            },

          },
          account_number: {
            validators: {
              notEmpty: {
                message: 'Account number is required'
              },
              stringLength: {
                min: 9,
                max: 18,
                message: 'Account number must be between 9 and 18 digits'
              },
              regexp: {
                regexp: /^[0-9]+$/,
                message: 'Only numeric digits are allowed'
              }
            }
          },
          bank_name: {
            validators: {
              notEmpty: {
                message: 'Bank name is required'
              },
              stringLength: {
                min: 3,
                max: 100,
                message: 'Bank name must be between 3 and 100 characters long'
              },
              regexp: {
                regexp: /^[A-Za-z.\-\s]+$/,
                message: 'Only letters, spaces, dots (.), and hyphens (-) are allowed'
              }
            }
          },
          branch_name: {
            validators: {
              notEmpty: {
                message: 'Branch name is required'
              },
              stringLength: {
                min: 3,
                max: 100,
                message: 'Branch name must be between 3 and 100 characters long'
              },
              regexp: {
                regexp: /^[A-Za-z.\-\s]+$/,
                message: 'Only letters, spaces, dots (.), and hyphens (-) are allowed'
              }
            }
          },
          ifsc_code: {
            validators: {
              notEmpty: {
                message: 'IFSC code is required'
              },
              regexp: {
                regexp: /^[A-Z]{4}0[A-Z0-9]{6}$/,
                message: 'IFSC code must be in the format: 4 uppercase letters, 0, then 6 alphanumeric characters (e.g., ABCD0A12345)'
              }
            }
          },
          account_type: {
            validators: {
              notEmpty: {
                message: 'Account type is required'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit()
        }
      });
    }

    // Form for UPI details
    const upiForm = document.getElementById('upiForm');
    if (upiForm) {
      const fvUPI = FormValidation.formValidation(upiForm, {
        fields: {
          upi_id: {
            validators: {
              notEmpty: {
                message: 'UPI ID is required'
              },
              regexp: {
                message: 'UPI ID must be a valid format',
                regexp: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit()
        }
      });
    }

    // Add reset functionality for both forms
    document.getElementById('reset-form').addEventListener('click', function () {
      if (bankForm) {
        bankForm.reset();
        fvBank.resetForm(true);
      }
      if (upiForm) {
        upiForm.reset();
        fvUPI.resetForm(true);
      }
    });

  })();
});
// Payout Request form validations
// document.addEventListener('DOMContentLoaded', function (e) {
//   (function () {
//     const payoutRequestForm = document.getElementById('payoutRequestForm');

//     if (payoutRequestForm) {
//       // Get available balance from DOM
//       const availableBalanceElement = document.querySelector('.d-flex.justify-content-between.bg-lighter.p-2.mb-4 .fw-medium');
//       const availableBalance = parseFloat(availableBalanceElement.textContent.replace('₹', '').replace(/,/g, '')) || 0;

//       const fv = FormValidation.formValidation(payoutRequestForm, {
//         fields: {
//           requested_amount: {
//             validators: {
//               notEmpty: {
//                 message: 'Request amount is required'
//               },
//               numeric: {
//                 message: 'Amount must be a valid number',
//                 decimalSeparator: '.',
//                 thousandsSeparator: ','
//               },
//               between: {
//                 min: 1,
//                 max: availableBalance,
//                 message: `Amount must be between ₹1 and ₹${availableBalance.toFixed(2)}`
//               }
//             }
//           },
//           requested_at: {
//             validators: {
//               notEmpty: {
//                 message: 'Request date is required'
//               },
//               date: {
//                 format: 'YYYY-MM-DD',
//                 message: 'Invalid date format (use YYYY-MM-DD)'
//               }
//             }
//           },
//           organizer_payout_details_id: {
//             validators: {
//               notEmpty: {
//                 message: 'Payout method is required'
//               }
//             }
//           }
//         },
//         plugins: {
//           trigger: new FormValidation.plugins.Trigger(),
//           bootstrap5: new FormValidation.plugins.Bootstrap5({
//             eleValidClass: '',
//             eleInvalidClass: ''
//           }),
//           submitButton: new FormValidation.plugins.SubmitButton(),
//           defaultSubmit: new FormValidation.plugins.DefaultSubmit()
//         }
//       });

//       // Reset form validation when offcanvas is closed
//       document.getElementById('addPaymentOffcanvas').addEventListener('hidden.bs.offcanvas', function () {
//         fv.resetForm(true);
//       });
//     }
//   })();
// });
document.addEventListener('DOMContentLoaded', function (e) {
  (function () {
    const payoutRequestForm = document.getElementById('payoutRequestForm');

    if (payoutRequestForm) {
      // Get available balance from DOM
      const availableBalanceElement = document.querySelector('.d-flex.justify-content-between.bg-lighter.p-2.mb-4 .fw-medium');
      const availableBalance = parseFloat(availableBalanceElement.textContent.replace('₹', '').replace(/,/g, '')) || 0;

      const fv = FormValidation.formValidation(payoutRequestForm, {
        fields: {
          requested_amount: {
            validators: {
              notEmpty: {
                message: 'Request amount is required'
              },
              // numeric: {
              //   message: 'Amount must be a valid number',
              //   decimalSeparator: '.',
              //   thousandsSeparator: ','
              // },
              // between: {
              //   min: 1,
              //   max: availableBalance,
              //   message: `Amount must be between ₹1 and ₹${availableBalance.toFixed(2)}`
              // }
            }
          },
          requested_at: {
            validators: {
              notEmpty: {
                message: 'Request date is required'
              },
              date: {
                format: 'YYYY-MM-DD',
                message: 'Invalid date format (use YYYY-MM-DD)'
              }
            }
          },
          organizer_payout_details_id: {
            validators: {
              notEmpty: {
                message: 'Payout method is required'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            rowSelector: '.mb-6',  // ✅ key fix: tell FormValidation where to insert messages
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit()
        }
      });

      // Reset form validation when offcanvas is closed
      document.getElementById('addPaymentOffcanvas').addEventListener('hidden.bs.offcanvas', function () {
        fv.resetForm(true);
      });
    }
  })();
});

//tournament validation
// document.addEventListener('DOMContentLoaded', function (e) {
//   (function () {
//     const tournament_form = document.getElementById('tournamentForm');

//     if (tournament_form) {
//       // const hiddenBannerImgValue = document.querySelector('input[name="hiddenBannerImg"]').value;

//       const fvDesignation = FormValidation.formValidation(tournament_form, {
//         fields: {
//           name: {
//             validators: {
//               notEmpty: {
//                 message: 'Tournament name is required'
//               },
//               stringLength: {
//                 min: 3,
//                 max: 60,
//                 message: 'Name must be 3-60 characters long'
//               },
//               regexp: {
//                 regexp: /.*\S.*/,
//                 message: 'Name cannot be only spaces'
//               }
//             }
//           },
//           tournament_type: {
//             validators: {
//               notEmpty: { message: 'Tournament type is required' }
//             }
//           },
//           tournament_formate: {
//             validators: {
//               notEmpty: { message: 'Tournament format is required' }
//             }
//           },
//           fixture_formate: {
//             validators: {
//               notEmpty: { message: 'Fixture format is required' }
//             }
//           },
//           address: {
//             validators: {
//               notEmpty: { message: 'Location is required' },
//               stringLength: {
//                 min: 5,
//                 max: 200,
//                 message: 'Location must be 5-200 characters'
//               }
//             }
//           },
//           tournament_start_date: {
//             validators: {
//               notEmpty: {
//                 message: 'Start date is required'
//               },
//               date: {
//                 format: 'YYYY-MM-DD',
//                 message: 'Invalid date format (YYYY-MM-DD)'
//               },
//               callback: {
//                 message: 'Start date must be before end date and within event date range',
//                 callback: function (input) {
//                   const startVal = input.value;
//                   const endVal = document.querySelector('input[name="tournament_end_date"]')?.value;
//                   const eventStart = document.querySelector('input[name="eventStartDate"]')?.value;
//                   const eventEnd = document.querySelector('input[name="eventEndDate"]')?.value;

//                   if (!startVal || !eventStart || !eventEnd) return true;

//                   const start = new Date(startVal);
//                   const end = endVal ? new Date(endVal) : null;
//                   const evtStart = new Date(eventStart);
//                   const evtEnd = new Date(eventEnd);

//                   const isInRange = start >= evtStart && start <= evtEnd;
//                   const isBeforeEnd = !end || start < end;

//                   return isInRange && isBeforeEnd;
//                 }
//               }
//             }
//           },
//           tournament_end_date: {
//             validators: {
//               notEmpty: {
//                 message: 'End date is required'
//               },
//               date: {
//                 format: 'YYYY-MM-DD',
//                 message: 'Invalid date format (YYYY-MM-DD)'
//               },
//               callback: {
//                 message: 'End date must be after start date and within event date range',
//                 callback: function (input) {
//                   const endVal = input.value;
//                   const startVal = document.querySelector('input[name="tournament_start_date"]')?.value;
//                   const eventStart = document.querySelector('input[name="eventStartDate"]')?.value;
//                   const eventEnd = document.querySelector('input[name="eventEndDate"]')?.value;

//                   if (!endVal || !eventStart || !eventEnd) return true;

//                   const end = new Date(endVal);
//                   const start = startVal ? new Date(startVal) : null;
//                   const evtStart = new Date(eventStart);
//                   const evtEnd = new Date(eventEnd);

//                   const isInRange = end >= evtStart && end <= evtEnd;
//                   const isAfterStart = !start || end > start;

//                   return isInRange && isAfterStart;
//                 }
//               }
//             }
//           },
//           registration_deadline: {
//             validators: {
//               date: {
//                 format: 'YYYY-MM-DD',
//                 message: 'Invalid date format (YYYY-MM-DD)'
//               },
//               callback: {
//                 message: 'Deadline must be before start date',
//                 callback: function (value, validator) {
//                   const startInput = validator.getFieldElements('event_start_date')[0];
//                   const startDate = startInput ? startInput.value : null;
//                   return !startDate || !value || new Date(value) < new Date(startDate);
//                 }
//               }
//             }
//           },
//           discounts_offers: {
//             validators: {
//               numeric: { message: 'Must be a valid number' },
//               between: {
//                 min: 0,
//                 max: 100,
//                 message: 'Discount must be 0-100%'
//               }
//             }
//           },
//           amount: {
//             validators: {
//               notEmpty: {
//                 message: 'Entry fee is required'
//               },
//               numeric: {
//                 message: 'Must be a valid number'
//               },
//               greaterThan: {
//                 min: 1,
//                 message: 'Must be a positive number'
//               },
//               lessThan: {
//                 max: 99999999,
//                 message: 'Cannot be more than 8 digits'
//               }
//             }
//           },
//           // banner_img: {
//           //   validators: hiddenBannerImgValue ? {} : {
//           //     notEmpty: { message: 'Banner image is required' },
//           //     file: {
//           //       extension: 'jpeg,jpg,png',
//           //       type: 'image/jpeg,image/png,image/jpg',
//           //       maxSize: 2 * 1024 * 1024, // 2MB
//           //       message: 'Please select a valid image (JPEG/JPG/PNG, max 2MB)'
//           //     }
//           //   }
//           // }
//         },
//         plugins: {
//           trigger: new FormValidation.plugins.Trigger(),
//           bootstrap5: new FormValidation.plugins.Bootstrap5({
//             eleValidClass: '',
//             eleInvalidClass: ''
//           }),
//           submitButton: new FormValidation.plugins.SubmitButton(),
//           defaultSubmit: new FormValidation.plugins.DefaultSubmit()
//         }
//       });

//       // Reset form functionality
//       document.getElementById('reset-form').addEventListener('click', function () {
//         tournament_form.reset();
//         fvDesignation.resetForm(true);
//       });
//     }
//   })();
// });


// Team player validations
// document.addEventListener('DOMContentLoaded', function () {
//   (function () {
//     const playerForm = document.getElementById('playerForm');

//     if (playerForm) {
//       const fv = FormValidation.formValidation(playerForm, {
//         fields: {
//             name: {
//               validators: {
//                 notEmpty: {
//                   message: 'Full Name is required'
//                 },
//                 stringLength: {
//                   min: 3,
//                   max: 100,
//                   message: 'Full Name must be between 3 and 100 characters'
//                 },
//                 regexp: {
//                   regexp: /^[A-Za-z\s]+$/,
//                   message: 'Full Name can only contain letters and spaces'
//                 }
//               }
//             },
//           email: {
//             validators: {
//               notEmpty: {
//                 message: 'Email is required'
//               },
//               emailAddress: {
//                 message: 'Please enter a valid email address'
//               }
//             }
//           },
//           contact_no: {
//             validators: {
//               notEmpty: {
//                 message: 'Contact Number is required'
//               },
//               digits: {
//                 message: 'Contact Number must contain only digits'
//               },
//               stringLength: {
//                 min: 7,
//                 max: 15,
//                 message: 'Contact Number must be between 7 and 15 digits'
//               }
//             }
//           },
//           gender: {
//             validators: {
//               notEmpty: {
//                 message: 'Gender is required'
//               }
//             }
//           },
//            birthdate: {
//                 validators: {
//                   notEmpty: {
//                     message: 'Date of Birth is required'
//                   },
//                   callback: {
//                     message: 'Player must be older than 5 years.',
//                     callback: function (input) {
//                       const birthdate = input.value;
//                       if (!birthdate) return true;

//                       // Parse DD-MM-YYYY format correctly
//                       const [day, month, year] = birthdate.split('-').map(Number);
//                       const birthDateObj = new Date(year, month - 1, day); // month is 0-indexed

//                       const today = new Date();
//                       const cutoffDate = new Date();
//                       cutoffDate.setFullYear(today.getFullYear() - 5); // 5 years ago

//                       return birthDateObj <= cutoffDate; // Valid if born on or before cutoff
//                     }
//                   }
//                 }
//               },
//           height: {
//             validators: {
//               notEmpty: {
//                 message: 'Height is required'
//               },
//               regexp: {
//                 regexp: /^[0-9]+(\.[0-9]+)?$/,
//                 message: 'Height must be a valid positive number'
//               },
//               between: {
//                 min: 100,
//                 max: 250,
//                 message: 'Height must be between 100 cm and 250 cm'
//               }
//             }
//           },
//           weight: {
//             validators: {
//               notEmpty: {
//                 message: 'Weight is required'
//               },
//               regexp: {
//                 regexp: /^[0-9]+(\.[0-9]+)?$/,
//                 message: 'Weight must be a valid positive number'
//               },
//               between: {
//                 min: 30,
//                 max: 200,
//                 message: 'Weight must be between 30 kg and 200 kg'
//               }
//             }
//           },
//           blood_group: {
//             validators: {
//               notEmpty: {
//                 message: 'Blood Group is required'
//               }
//             }
//           },
//           status: {
//             validators: {
//               notEmpty: {
//                 message: 'Status is required'
//               }
//             }
//           },
//             role: {
//               validators: {
//                 notEmpty: {
//                   message: 'Role is required'
//                 },
//                 regexp: {
//                   regexp: /^[A-Za-z\s]+$/,
//                   message: 'Role can only contain letters and spaces'
//                 }
//               }
//             },
//           age_category: {
//             validators: {
//               notEmpty: {
//                 message: 'Age Category is required'
//               }
//             }
//           },
//           weight_category: {
//             validators: {
//               notEmpty: {
//                 message: 'Weight Category is required'
//               }
//             }
//           },
//           country: {
//             validators: {
//               notEmpty: {
//                 message: 'Country is required'
//               }
//             }
//           },
//           state: {
//             validators: {
//               notEmpty: {
//                 message: 'State is required'
//               }
//             }
//           },
//           city: {
//             validators: {
//               notEmpty: {
//                 message: 'City is required'
//               }
//             }
//           },
//           player_type: {
//             validators: {
//               notEmpty: {
//                 message: 'Player Type is required'
//               }
//             }
//           },
//           player_style: {
//             validators: {
//               notEmpty: {
//                 message: 'Player Style is required'
//               }
//             }
//           },
//           aadhar_number: {
//             validators: {
//               notEmpty: {
//                 message: 'Aadhar Number is required'
//               },
//               regexp: {
//                 regexp: /^\d{4}-\d{4}-\d{4}$/,
//                 message: 'Aadhar Number must be in XXXX-XXXX-XXXX format'
//               }
//             }
//           },
//           preferred_position: {
//             validators: {
//               notEmpty: {
//                 message: 'Preferred Position is required'
//               },
//               stringLength: {
//                 max: 30,
//                 message: 'Preferred Position must be less than 30 characters long'
//               }
//             }
//           },
//           jersey_number: {
//             validators: {
//               notEmpty: {
//                 message: 'Jersey Number is required'
//               },
//               digits: {
//                 message: 'Jersey Number must be numeric'
//               },
//               stringLength: {
//                 max: 3,
//                 message: 'Jersey Number must not exceed 3 digits'
//               }
//             }
//           },
//           profile_img: {
//             validators: {
//               notEmpty: {
//                 message: 'Profile Image is required'
//               },
//               file: {
//                 extension: 'jpeg,jpg,png,gif',
//                 type: 'image/jpeg,image/png,image/gif',
//                 maxSize: 1048576, // 1MB
//                 message: 'Please upload a valid image (jpeg, jpg, png, gif) under 1MB'
//               }
//             }
//           }
//         },
//         plugins: {
//           trigger: new FormValidation.plugins.Trigger(),
//           bootstrap5: new FormValidation.plugins.Bootstrap5({
//             rowSelector: '.col-md-4, .col-md-3, .col-md-1',
//             eleValidClass: '',
//             eleInvalidClass: ''
//           }),
//           submitButton: new FormValidation.plugins.SubmitButton(),
//           defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
//           autoFocus: new FormValidation.plugins.AutoFocus()
//         }
//       });

//       // Conditionally disable profile image validators if existing image is present
//       const hiddenProfileImg = document.querySelector('input[name="hiddenProfileImg"]');
//       if (hiddenProfileImg && hiddenProfileImg.value !== '') {
//         fv.disableValidator('profile_img', 'notEmpty');
//         fv.disableValidator('profile_img', 'file');
//       } else {
//         fv.enableValidator('profile_img', 'notEmpty');
//         fv.enableValidator('profile_img', 'file');
//       }

//       // Reset form validation on reset
//       const resetBtn = playerForm.querySelector('button[type="reset"]');
//       if (resetBtn) {
//         resetBtn.addEventListener('click', () => {
//           fv.resetForm(true);
//         });
//       }
//     }
//   })();
// });

// Add matches details Form
document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const paymentFilterForm = document.getElementById('payment-filter');
    const tournamentStartDate = document.getElementById('tournamentStartDate').value;
    const tournamentEndDate = document.getElementById('tournamentEndDate').value;

    if (paymentFilterForm) {
      const fvPaymentFilter = FormValidation.formValidation(paymentFilterForm, {
        fields: {
          payment_status: {
            validators: {
              notEmpty: {
                message: 'Status is required'
              }
            }
          },
          start_date: {
            validators: {
              notEmpty: {
                message: 'Start date is required'
              },
              regexp: {
                regexp: /^\d{4}-\d{2}-\d{2}$/,
                message: 'Date must be in YYYY-MM-DD format'
              },
              callback: {
                message: 'Start date must be within tournament dates',
                callback: function(input) {
                  if (!input.value || !tournamentStartDate || !tournamentEndDate) return true;

                  const tournamentStart = new Date(tournamentStartDate);
                  const tournamentEnd = new Date(tournamentEndDate);
                  const startDate = new Date(input.value);

                  // Set time to 00:00:00 for accurate comparison
                  tournamentStart.setHours(0, 0, 0, 0);
                  tournamentEnd.setHours(0, 0, 0, 0);
                  startDate.setHours(0, 0, 0, 0);

                  return startDate >= tournamentStart && startDate <= tournamentEnd;
                }
              }
            }
          },
          end_date: {
            validators: {
              notEmpty: {
                message: 'End date is required'
              },
              regexp: {
                regexp: /^\d{4}-\d{2}-\d{2}$/,
                message: 'Date must be in YYYY-MM-DD format'
              },
              callback: {
                message: 'End date must be within tournament dates and after start date',
                callback: function(input) {
                  const endDateVal = input.value;
                  const startDateVal = document.querySelector('[name="start_date"]').value;

                  if (!endDateVal || !tournamentEndDate || !startDateVal) return true;

                  const tournamentEnd = new Date(tournamentEndDate);
                  const endDate = new Date(endDateVal);
                  const startDate = new Date(startDateVal);

                  // Set time to 00:00:00 for accurate comparison
                  tournamentEnd.setHours(0, 0, 0, 0);
                  endDate.setHours(0, 0, 0, 0);
                  startDate.setHours(0, 0, 0, 0);

                  return endDate <= tournamentEnd && endDate >= startDate;
                }
              }
            }
          },
          // Time is optional but if filled, should be valid time (HH:MM or HH:MM:SS)
          expiry_date: {
            validators: {
              regexp: {
                regexp: /^$|^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/,
                message: 'Time must be in HH:MM or HH:MM:SS format'
              }
            }
          },
          location: {
            validators: {
              notEmpty: {
                message: 'Location is required'
              },
              stringLength: {
                max: 100,
                message: 'Location must be less than 100 characters'
              }
            }
          },
          'scorekeeper_ids[]': {
            validators: {
              notEmpty: {
                message: 'Please select a scorekeeper'
              }
            }
          },
          round: {
            validators: {
              integer: {
                message: 'The value must be an integer',
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit() // allows form to submit if valid
        }
      });

      // Optional: add reset button handling if you have a reset button in form
      const resetBtn = paymentFilterForm.querySelector('button[type="reset"]');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          paymentFilterForm.reset();
          fvPaymentFilter.resetForm(true);
        });
      }
    }
  })();
});

// Pont Configuration form validations
document.addEventListener('DOMContentLoaded', function () {
  (function () {
    const pointsConfigForm = document.getElementById('pointsConfigForm');

    if (pointsConfigForm) {
      const fv = FormValidation.formValidation(pointsConfigForm, {
        fields: {
          win_points: {
            validators: {
              notEmpty: {
                message: 'Win points are required'
              },
              numeric: {
                message: 'Win points must be a valid number',
                decimalSeparator: '.',
              },
              between: {
                min: 0,
                max: 100,
                message: 'Win points must be between 0 and 100'
              }
            }
          },
          draw_points: {
            validators: {
              notEmpty: {
                message: 'Draw points are required'
              },
              numeric: {
                message: 'Draw points must be a valid number',
                decimalSeparator: '.',
              },
              between: {
                min: 0,
                max: 100,
                message: 'Draw points must be between 0 and 100'
              }
            }
          },
          loss_points: {
            validators: {
              notEmpty: {
                message: 'Loss points are required'
              },
              numeric: {
                message: 'Loss points must be a valid number',
                decimalSeparator: '.',
              },
              between: {
                min: 0,
                max: 100,
                message: 'Loss points must be between 0 and 100'
              }
            }
          }
        },
        plugins: {
          trigger: new FormValidation.plugins.Trigger(),
          bootstrap5: new FormValidation.plugins.Bootstrap5({
            rowSelector: '.col-md-10', // matches your input wrapper divs
            eleValidClass: '',
            eleInvalidClass: ''
          }),
          submitButton: new FormValidation.plugins.SubmitButton(),
          defaultSubmit: new FormValidation.plugins.DefaultSubmit()
        }
      });

      // Reset form validation when modal is hidden
      document.getElementById('pointsConfigModal').addEventListener('hidden.bs.modal', function () {
        fv.resetForm(true);
      });
    }
  })();
});


// bout type form validation
document.addEventListener('DOMContentLoaded', function () {
  const awardForm = document.getElementById('awardForm');
  if (awardForm) {
    const fvageCateg = FormValidation.formValidation(awardForm, {
      fields: {
            'award': {
              validators: {
                notEmpty: {
                  message: 'Award is required'
                }
              }
            },
            'team': {
              validators: {
                notEmpty: {
                  message: 'Team is required'
                }
              }
            },
            'player': {
              validators: {
                notEmpty: {
                  message: 'Player is required'
                }
              }
            },
            'status': {
              validators: {
                notEmpty: {
                  message: 'Status is required'
                }
              }
            },
     

      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          eleValidClass: '',
          eleInvalidClass: ''
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Add reset functionality for the form
    document.getElementById('reset-form').addEventListener('click', function () {
      awardForm.reset();
      fvageCateg.resetForm(true);
    });
  }
});

// Abbreviation form validation
document.addEventListener('DOMContentLoaded', function () {
  const addDistanceForm = document.getElementById('addDistanceForm');
  if (addDistanceForm) {
    const fvDistance = FormValidation.formValidation(addDistanceForm, {
      fields: {
        abbreviation_id: {
          validators: {
            notEmpty: {
              message: 'Abbreviation is required'
            }
          }
        },
        gender: {
          validators: {
            notEmpty: {
              message: 'Gender is required'
            }
          }
        },
        distance: {
          validators: {
            notEmpty: {
              message: 'Distance is required'
            },
            numeric: {
              message: 'Please enter a valid number'
            },
            between: {
              min: 1,
              max: 999999,
              message: 'Distance must be between 1 and 999999 meters'
            }
          }
        },
        status: {
          validators: {
            notEmpty: {
              message: 'Status is required'
            }
          }
        },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          // ✅ Add classes for valid/invalid states
          eleValidClass: 'is-valid',
          eleInvalidClass: 'is-invalid',
          rowSelector: '.mb-3',
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
      },
    });
  }
});

// Discipline form validation
document.addEventListener('DOMContentLoaded', function () {
  const disciplineLimitForm = document.getElementById('disciplineLimitForm');

  if (disciplineLimitForm) {
    const fvDisciplineLimit = FormValidation.formValidation(disciplineLimitForm, {
      fields: {
        competition_level: {
          validators: {
            notEmpty: {
              message: 'Competition Level is required'
            }
          }
        },
        player_limit: {
          validators: {
            notEmpty: {
              message: 'Player Limit is required'
            },
            numeric: {
              message: 'Please enter a valid number'
            },
            between: {
              min: 1,
              max: 9999,
              message: 'Player Limit must be between 1 and 9999'
            }
          }
        },
        status: {
          validators: {
            notEmpty: {
              message: 'Status is required'
            }
          }
        },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap5: new FormValidation.plugins.Bootstrap5({
          rowSelector: '.col-md-3',
          eleValidClass: 'is-valid',
          eleInvalidClass: 'is-invalid'
        }),
        submitButton: new FormValidation.plugins.SubmitButton(),
        defaultSubmit: new FormValidation.plugins.DefaultSubmit()
      }
    });

    // Optional: reset validation when the form resets
    const resetBtn = document.getElementById('reset-form');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        disciplineLimitForm.reset();
        fvDisciplineLimit.resetForm(true);
      });
    }
  }
});















