"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function ($) {
  $(document).ready(function () {
    $('[data-id="masterstudy-authorization-restore-button"]').click(function (e) {
      e.preventDefault();
      restore();
    });
    $('.masterstudy-authorization__form-input').keypress(function (e) {
      if (e.which === 13) {
        if ($(this).closest('#masterstudy-authorization-form-login').length > 0) {
          $('[data-id="masterstudy-authorization-login-button"]').trigger('click');
        } else if ($(this).closest('#masterstudy-authorization-form-register').length > 0) {
          $('[data-id="masterstudy-authorization-register-button"]').trigger('click');
        }
      }
    });
    $('[data-id="masterstudy-authorization-login-button"]').click(function (e) {
      e.preventDefault();
      var login_data = {
        'user_login': $('input[name="user_login"]').val(),
        'user_password': $('input[name="user_password"]').val(),
        'remember': $('#masterstudy-authorization-remember').prop('checked')
      };
      if (authorization_data.recaptcha_site_key && typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(function () {
          grecaptcha.execute(authorization_data.recaptcha_site_key, {
            action: 'login'
          }).then(function (token) {
            login_data['recaptcha'] = token;
            login(login_data, false);
          });
        });
      } else {
        login(login_data, false);
      }
    });
    $('[data-id="masterstudy-authorization-register-button"]').click(function (e) {
      e.preventDefault();
      if (Object.keys(authorization_data.default_fields).length > 0) {
        for (var fieldName in authorization_data.default_fields) {
          if (authorization_data.default_fields.hasOwnProperty(fieldName)) {
            authorization_data.default_fields[fieldName].value = $("[name=\"".concat(fieldName, "\"]")).val();
          }
        }
      }
      if (authorization_data.additional_fields.length > 0) {
        var _iterator = _createForOfIteratorHelper(authorization_data.additional_fields),
          _step;
        try {
          var _loop = function _loop() {
            var field = _step.value;
            if (field.type === 'checkbox') {
              var checkedValues = [];
              $("[name=\"".concat(field.field_name, "\"]")).each(function () {
                if ($(this).prop('checked')) {
                  checkedValues.push($(this).val());
                }
              });
              field.value = checkedValues.join(',');
            } else if (field.type === 'radio') {
              $("[name=\"".concat(field.field_name, "\"]")).each(function () {
                if ($(this).prop('checked')) {
                  field.value = $(this).val();
                }
              });
            } else if (field.type !== 'file') {
              field.value = $("[name=\"".concat(field.field_name, "\"]")).val();
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var register_data = {
        'register_user_login': $('input[name="register_user_login"]').val(),
        'register_user_email': $('input[name="register_user_email"]').val(),
        'register_user_password': $('input[name="register_user_password"]').val(),
        'register_user_password_re': $('input[name="register_user_password_re"]').val(),
        'profile_default_fields_for_register': authorization_data.default_fields,
        'additional': authorization_data.additional_fields,
        'privacy_policy': $('#masterstudy-authorization-gdbr').length > 0 ? $('#masterstudy-authorization-gdbr').prop('checked') : true,
        'redirect_page': window.location.href
      };
      if (authorization_data.recaptcha_site_key && typeof grecaptcha !== 'undefined') {
        grecaptcha.ready(function () {
          grecaptcha.execute(authorization_data.recaptcha_site_key, {
            action: 'register'
          }).then(function (token) {
            register_data['recaptcha'] = token;
            register(register_data, false);
          });
        });
      } else {
        register(register_data, false);
      }
    });

    // initialization of files upload area
    var dropAreas = document.querySelectorAll('.masterstudy-authorization__form-field .masterstudy-file-upload__field');
    if (dropAreas !== null) {
      dropAreas.forEach(function (dropArea) {
        //highlight files upload area
        dropArea.addEventListener('dragenter', function (e) {
          e.preventDefault();
          dropArea.classList.add('masterstudy-file-upload__field_highlight');
        });
        dropArea.addEventListener('dragover', function (e) {
          e.preventDefault();
        });

        // remove highlight files upload area
        dropArea.addEventListener('dragleave', function (e) {
          var rect = dropArea.getBoundingClientRect();
          var x = e.clientX;
          var y = e.clientY;
          if (!(x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom)) {
            dropArea.classList.remove('masterstudy-file-upload__field_highlight');
          }
        });

        // Add files to upload area - drop event
        dropArea.addEventListener('drop', function (e) {
          e.preventDefault();
          dropArea.classList.remove('masterstudy-file-upload__field_highlight');
          handleFileInputChange(dropArea, e.dataTransfer.files[0]);
        });

        // Watch change of files in input
        dropArea.querySelector('.masterstudy-file-upload__input').addEventListener('change', function (e) {
          handleFileInputChange(dropArea, e.target);
        });

        // add files by click on button in upload area
        dropArea.querySelector('.masterstudy-file-upload__field-button').addEventListener('click', function () {
          dropArea.querySelector('.masterstudy-file-upload__input').click();
        });
      });
      $(document).on('click', '.masterstudy-file-upload__link', function (e) {
        e.preventDefault();
        var dropArea = $(this).closest('.masterstudy-file-upload').find('.masterstudy-file-upload__field');
        deleteFile($(this).data('id'), dropArea);
      });
      $("[data-id='form_builder_file_alert']").find("[data-id='cancel'], .masterstudy-alert__header-close").click(function (e) {
        e.preventDefault();
        $("[data-id='form_builder_file_alert']").removeClass('masterstudy-alert_open');
      });
    }
  });
  function login(login_data, redirect) {
    var url = authorization_data.ajax_url + '?action=stm_lms_login&nonce=' + authorization_data.login_nonce;
    $('[data-id="masterstudy-authorization-login-button"]').addClass('masterstudy-button_loading');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login_data)
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('not ok');
    }).then(function (data) {
      $('[data-id="masterstudy-authorization-login-button"]').removeClass('masterstudy-button_loading');
      if (data.status === 'error') {
        data.errors.forEach(function (error) {
          var inputField = $("input[name=\"".concat(error.field, "\"]"));
          var html = "<span data-error-id=\"".concat(error.id, "\" class=\"masterstudy-authorization__form-field-error\">").concat(error.text, "</span>");
          if (inputField.length > 0) {
            inputField.parent().addClass('masterstudy-authorization__form-field_has-error');
            if (inputField.parent().find("span[data-error-id=\"".concat(error.id, "\"]")).length === 0) {
              inputField.after(html);
            }
          }
        });
        return;
      }
      if (data.status === 'success') {
        redirect ? window.location = data.user_page : location.reload();
      }
    });
  }
  function register(register_data, redirect) {
    var url = authorization_data.ajax_url + '?action=stm_lms_register&nonce=' + authorization_data.register_nonce;
    $('[data-id="masterstudy-authorization-register-button"]').addClass('masterstudy-button_loading');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(register_data)
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('not ok');
    }).then(function (data) {
      $('[data-id="masterstudy-authorization-register-button"]').removeClass('masterstudy-button_loading');
      if (data.status === 'error') {
        data.errors.forEach(function (error) {
          var inputField = $("[name=\"".concat(error.field, "\"]")),
            html = "<span data-error-id=\"".concat(error.id, "\" class=\"masterstudy-authorization__form-field-error\">").concat(error.text, "</span>");
          if (inputField.length > 0) {
            if (error.field === 'privacy_policy' || error.field === 'recaptcha') {
              if ($('.masterstudy-authorization').find("span[data-error-id=\"".concat(error.id, "\"]")).length === 0) {
                var errorElement = $(html);
                errorElement.addClass("masterstudy-authorization__form-field-error_main masterstudy-authorization__form-field-error_".concat(error.field));
                $('.masterstudy-authorization__actions').before(errorElement);
              }
            } else {
              if (inputField.parent().hasClass('masterstudy-authorization__checkbox')) {
                var container = inputField.closest('.masterstudy-authorization__checkbox-group');
                var block = container.find('.masterstudy-authorization__custom-description');
                if (container.find("span[data-error-id=\"".concat(error.id, "\"]")).length === 0) {
                  block.length > 0 ? $(html).insertBefore(block) : inputField.closest('.masterstudy-authorization__checkbox-group').append(html);
                }
              } else if (inputField.parent().parent().hasClass('masterstudy-file-upload')) {
                var _container = inputField.closest('.masterstudy-file-upload');
                $(_container).parent().addClass('masterstudy-authorization__form-field_has-error');
                if ($(_container).find("span[data-error-id=\"".concat(error.id, "\"]")).length === 0) {
                  $(_container).find('.masterstudy-file-upload__field').after(html);
                }
              } else {
                inputField.parent().addClass('masterstudy-authorization__form-field_has-error');
                if (inputField.parent().find("span[data-error-id=\"".concat(error.id, "\"]")).length === 0) {
                  inputField.after(html);
                }
              }
            }
          }
        });
        var modalWrapper = $('.masterstudy-authorization-modal__container'),
          firstErrorField = $('.masterstudy-authorization__form-field_has-error').first();
        if (firstErrorField.length > 0) {
          var topOffset = firstErrorField.offset().top;
          if (modalWrapper.length > 0) {
            topOffset -= modalWrapper.offset().top;
            var scrollTo = modalWrapper.scrollTop() + topOffset - 10;
            modalWrapper.animate({
              scrollTop: scrollTo
            }, 500);
          } else {
            if (!isElementVisible(firstErrorField[0])) {
              $('html, body').animate({
                scrollTop: topOffset - 10
              }, 500);
            }
          }
        }
        return;
      }
      if (data.status === 'success') {
        if (authorization_data.email_confirmation) {
          open_confirmation_email_form();
          return;
        }
        redirect ? window.location = data.user_page : location.reload();
      }
    });
  }
  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  function restore() {
    var url = authorization_data.ajax_url + '?action=stm_lms_lost_password&nonce=' + authorization_data.restore_nonce,
      user_mail = $('input[name="restore_user_login"]').val(),
      restore_data = JSON.stringify({
        'restore_user_login': user_mail
      });
    $('[data-id="masterstudy-authorization-restore-button"]').addClass('masterstudy-button_loading');
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: restore_data
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('not ok');
    }).then(function (data) {
      $('[data-id="masterstudy-authorization-restore-button"]').removeClass('masterstudy-button_loading');
      if (data.status === 'error') {
        data.errors.forEach(function (error) {
          var inputField = $("input[name=\"".concat(error.field, "\"]"));
          var html = "<span data-error-id=\"".concat(error.id, "\" class=\"masterstudy-authorization__form-field-error\">").concat(error.text, "</span>");
          if (inputField.length > 0) {
            inputField.parent().addClass('masterstudy-authorization__form-field_has-error');
            if (inputField.parent().find("span[data-error-id=\"".concat(error.id, "\"]")).length === 0) {
              inputField.after(html);
            }
          }
        });
        return;
      }
      if (data.status === 'success') {
        $('.masterstudy-authorization__send-mail-content-subtitle').text(function (index, oldText) {
          return oldText + user_mail;
        });
        $('.masterstudy-authorization__restore').removeClass('masterstudy-authorization__restore_show');
        $('#masterstudy-authorization-restore-pass').addClass('masterstudy-authorization__send-mail_show');
        $('.masterstudy-authorization__switch').addClass('masterstudy-authorization__switch_hide');
      }
    });
  }
  function open_confirmation_email_form() {
    $('.masterstudy-authorization__wrapper').addClass('masterstudy-authorization__wrapper_hide');
    $('.masterstudy-authorization__switch').addClass('masterstudy-authorization__switch_hide');
    $('#masterstudy-authorization-confirm-email').addClass('masterstudy-authorization__send-mail_show');
  }
  var formats = {
    'img': ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'],
    'excel': ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    'word': ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    'powerpoint': ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    'pdf': ['application/pdf'],
    'video': ['video/mp4', 'video/avi', 'video/flv', 'video/webm', 'video/x-ms-wmv', 'video/quicktime'],
    'audio': ['audio/mp3', 'audio/x-ms-wma', 'audio/aac', 'audio/mpeg'],
    'archive': ['application/zip', 'application/gzip', 'application/x-rar-compressed', 'application/x-7z-compressed', 'application/x-zip-compressed']
  };
  function handleFileInputChange(dropArea, fileInput) {
    if ($(dropArea).parent().find('.masterstudy-file-upload__item').length > 0) {
      $(dropArea).parent().find('.masterstudy-file-upload__field-error').addClass('masterstudy-file-upload__field-error_show').text(authorization_data.only_one_file);
      return;
    } else {
      $(dropArea).parent().find('.masterstudy-file-upload__field-error').removeClass('masterstudy-file-upload__field-error_show');
    }
    var file = fileInput.files[0];
    if (file) {
      handleFiles(file, dropArea);
    }
    fileInput.value = null;
  }
  function getFileType(fileType) {
    return Object.keys(formats).filter(function (type) {
      return formats[type].includes(fileType);
    });
  }
  function handleFiles(file, dropArea) {
    var loadingBar = dropArea.querySelector('.masterstudy-file-upload__field-progress-bar-filled');
    var totalFiles = 1;
    var extensions = dropArea.querySelector('.masterstudy-hint__text').textContent;
    var uploadedFiles = 0;
    var current_percent = 0;
    var total_percent = 0;
    var formData = new FormData();
    formData.append('file', file);
    formData.append('action', 'stm_lms_upload_form_file');
    formData.append('nonce', authorization_data.file_upload_nonce);
    if (extensions.length > 0) {
      formData.append('extensions', extensions.trim());
    }
    $.ajax({
      url: authorization_data.ajax_url,
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      xhr: function xhr() {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener('progress', function (event) {
          if (event.lengthComputable) {
            current_percent = current_percent === 100 ? 95 : event.loaded / event.total / totalFiles * 100;
            if (totalFiles === 1) {
              loadingBar.style.width = current_percent + '%';
            }
          }
        }, false);
        return xhr;
      },
      beforeSend: function beforeSend() {
        $(dropArea).parent().find('.masterstudy-file-upload__field').addClass('masterstudy-file-upload__field_loading');
      },
      success: function success(data) {
        uploadedFiles++;
        if (data.error === false) {
          file.id = data.id;
          generateFileHtml(file);
        }
        if (totalFiles === 1 && data.error !== false) {
          $(dropArea).parent().find('.masterstudy-file-upload__field-error').text(data.message);
          $(dropArea).parent().find('.masterstudy-file-upload__field-error').addClass('masterstudy-file-upload__field-error_show');
        }
        if (totalFiles === uploadedFiles) {
          loadingBar.style.width = '100%';
          setTimeout(function () {
            $(dropArea).parent().find('.masterstudy-file-upload__field').removeClass('masterstudy-file-upload__field_loading');
            loadingBar.style.width = '0';
          }, 500);
          setTimeout(function () {
            $(dropArea).parent().find('.masterstudy-file-upload__field-error').removeClass('masterstudy-file-upload__field-error_show');
          }, 1500);
          var fieldToUpdate = authorization_data.additional_fields.find(function (field) {
            return field.field_name === dropArea.id;
          });
          if (fieldToUpdate) {
            fieldToUpdate.value = data.url;
          }
          $(dropArea).parent().find('.masterstudy-authorization__form-field-error').remove();
        } else {
          total_percent = total_percent + current_percent;
          loadingBar.style.width = total_percent + '%';
        }
      }
    });
  }
  function generateFileHtml(file) {
    var filesize = Math.round(file.size / 1024),
      filesize_label = filesize > 1000 ? 'mb' : 'kb',
      icon = getFileType(file.type).length > 0 ? getFileType(file.type) : 'unknown',
      icon_url = authorization_data.icon_url + icon + '.svg';
    filesize = filesize > 1000 ? Math.round(filesize / 1024) : filesize;
    var html = "\n            <div class=\"masterstudy-file-upload__item\">\n                <img src=\"".concat(icon_url, "\" class=\"masterstudy-file-upload__image\">\n                <div class=\"masterstudy-file-upload__wrapper\">\n                    <span class=\"masterstudy-file-upload__title\">").concat(file.name, "</span>\n                    <span class=\"masterstudy-file-upload__size\">").concat(filesize, " ").concat(filesize_label, "</span>\n                    <a class=\"masterstudy-file-upload__link\" href=\"#\" data-id=\"").concat(file.id, "\"></a>\n                </div>\n            </div>");
    $('.masterstudy-file-upload__item-wrapper').append(html);
  }
  function deleteFile(id, dropArea) {
    $("[data-id='form_builder_file_alert']").addClass('masterstudy-alert_open');
    $("[data-id='form_builder_file_alert']").find("[data-id='submit']").one('click', function (e) {
      var formData = new FormData();
      formData.append('file_id', id);
      formData.append('action', 'stm_lms_delete_form_file');
      formData.append('nonce', authorization_data.file_delete_nonce);
      $.ajax({
        url: authorization_data.ajax_url,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        beforeSend: function beforeSend() {
          $("[data-id='form_builder_file_alert']").removeClass('masterstudy-alert_open');
        },
        success: function success(data) {
          if (data === 'OK') {
            $('[data-id=' + id + ']').closest('.masterstudy-file-upload__item').remove();
            $(dropArea).parent().find('.masterstudy-file-upload__field-error').removeClass('masterstudy-file-upload__field-error_show');
          }
        }
      });
    });
  }
})(jQuery);