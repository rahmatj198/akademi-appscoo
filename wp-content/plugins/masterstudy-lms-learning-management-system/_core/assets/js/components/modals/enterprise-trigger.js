"use strict";

(function ($) {
  $(document).ready(function (e) {
    $('.masterstudy-enterprise-modal__header-title-close, .masterstudy-enterprise-modal__close').on('click', function () {
      $(this).parents().removeClass('active');
      $('.masterstudy-group-fields-form')[0].reset();
    });
    $('[data-masterstudy-modal]').on('click', function (e) {
      e.preventDefault();
      if ($(this).attr('disabled') === 'disabled') {
        return;
      }
      var modalName = $(this).data('masterstudy-modal');
      var group_fields_form_multiple = $(this).parent().find('.masterstudy-group-fields-form__multiple');
      if (group_fields_form_multiple.height() >= 284) {
        group_fields_form_multiple.addClass('scrolled');
      }
      var commonParentModal = $(this).parents('.masterstudy-enterprise-modal-parent');
      commonParentModal.find(".".concat(modalName)).addClass('active');
      setTimeout(function () {
        commonParentModal.find(".".concat(modalName, " .masterstudy-enterprise-modal__wrapper")).addClass('active');
      }, 30);
    });
  });
})(jQuery);