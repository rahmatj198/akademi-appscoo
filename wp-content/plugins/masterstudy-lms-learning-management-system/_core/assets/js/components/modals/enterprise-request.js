"use strict";

(function ($) {
  $(document).ready(function () {
    $('.masterstudy-enterprise-modal form').on('submit', function (e) {
      e.preventDefault();
      var fields;
      var data;
      var multipleElement = $(this).find('.masterstudy-group-fields-form__multiple');
      var messageElement = $('.masterstudy-enterprise-modal .masterstudy-group-fields-request__message');
      var modalButton = $(this).parents('.masterstudy-enterprise-modal-parent').find('.lms_become_instructor_btn');
      var submitButton = $(this).find('button[type="submit"]');
      messageElement.hide().html('');
      submitButton.prop('disabled', true).addClass('masterstudy-group-fields-loading');
      if (multipleElement.length > 0) {
        fields = 'custom';
        var formData = [];
        var currentField = $(this).find('.masterstudy-group-fields-form__additional-fields');
        $(currentField).each(function () {
          var isRadio = $(this).is(':radio');
          if (isRadio && !$(this).prop('checked')) {
            return;
          }
          if ($(this).is(':checkbox')) {
            if ($(this).prop('checked')) {
              var label = $(this).parents('.masterstudy-become-instructor-form__item').find('> label').clone().find('span').remove().end().text();
              if (!formData.some(function (item) {
                return item.label === label;
              })) {
                formData.push({
                  label: label,
                  value: $(this).data('value')
                });
              } else {
                var existingItem = formData.find(function (item) {
                  return item.label === label;
                });
                existingItem.value += ', ' + $(this).data('value');
              }
            }
          } else {
            formData.push({
              label: $(this).data('label'),
              value: isRadio ? $(this).data('value') : $(this).val()
            });
          }
        });
        data = formData;
      } else {
        fields = 'default';
        data = {
          name: $(this).find('input[name="name"]').val(),
          email: $(this).find('input[name="email"]').val(),
          text: $(this).find('textarea[name="textarea"]').val()
        };
      }
      $.ajax({
        url: masterstudy_enterprise_request_data.ajax_url + '?action=stm_lms_enterprise&fields=' + fields + '&nonce=' + masterstudy_enterprise_request_data.get_nonce,
        type: 'POST',
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: "application/json",
        success: function success(response) {
          modalButton.attr('disabled', true);
          submitButton.removeClass('masterstudy-group-fields-loading');
          var messageClass = 'masterstudy-group-fields-request__message-' + response.status;
          messageElement.text(response.message).addClass(messageClass).show();
        }
      });
    });
  });
})(jQuery);