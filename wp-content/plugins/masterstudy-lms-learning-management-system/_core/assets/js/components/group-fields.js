"use strict";

(function ($) {
  $(document).ready(function () {
    var dropAreas = document.querySelectorAll('.masterstudy-group-fields-form');
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
        var fileInput = dropArea.querySelector('.masterstudy-file-upload__input');
        if (fileInput) {
          fileInput.addEventListener('change', function (e) {
            handleFileInputChange(dropArea, e.target);
          });
        }

        // add files by click on button in upload area
        var fileButton = dropArea.querySelector('.masterstudy-file-upload__field-button');
        if (fileButton) {
          fileButton.addEventListener('click', function () {
            dropArea.querySelector('.masterstudy-file-upload__input').click();
          });
        }
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
      $(dropArea).parent().find('.masterstudy-file-upload__field-error').addClass('masterstudy-file-upload__field-error_show').text(masterstudy_group_fields_data.only_one_file);
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
    formData.append('nonce', masterstudy_group_fields_data.file_upload_nonce);
    if (extensions.length > 0) {
      formData.append('extensions', extensions.trim());
    }
    $.ajax({
      url: masterstudy_group_fields_data.ajax_url,
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
          $(dropArea).parent().find('.masterstudy-group-fields-form__item-file input').val(data.url);
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
          var fieldToUpdate = masterstudy_group_fields_data.additional_fields.find(function (field) {
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
      icon_url = masterstudy_group_fields_data.icon_url + icon + '.svg';
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
      formData.append('nonce', masterstudy_group_fields_data.file_delete_nonce);
      $.ajax({
        url: masterstudy_group_fields_data.ajax_url,
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