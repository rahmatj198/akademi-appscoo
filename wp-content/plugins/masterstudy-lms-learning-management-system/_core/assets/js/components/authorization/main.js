"use strict";

(function ($) {
  $(document).ready(function () {
    setTimeout(function () {
      $('.masterstudy-authorization-modal').removeAttr('style');
    }, 1000);
    $('[data-authorization-modal]').on('click', function (e) {
      e.preventDefault();
      $(this).attr('data-authorization-modal') === 'register' ? open_register_form() : open_login_form();
      $('.masterstudy-authorization-modal').addClass('masterstudy-authorization-modal_open');
      $('body').addClass('masterstudy-authorization-body-hidden');
    });
    $('.masterstudy-authorization-modal__close, [data-id="masterstudy-authorization-close-button"]').click(function (e) {
      e.preventDefault();
      $(this).closest('.masterstudy-authorization-modal').removeClass('masterstudy-authorization-modal_open');
      $('body').removeClass('masterstudy-authorization-body-hidden');
      setTimeout(function () {
        var modal = $('[data-authorization-modal]');
        if (modal.length > 0) {
          modal.attr('data-authorization-modal') === 'register' ? open_register_form() : open_login_form();
        } else {
          authorization_settings.register_mode ? open_register_form() : open_login_form();
        }
      }, 1000);
    });
    $('#masterstudy-authorization-sign-up').click(function (e) {
      e.preventDefault();
      open_register_form();
    });
    $('#masterstudy-authorization-sign-in').click(function (e) {
      e.preventDefault();
      open_login_form();
    });
    $('.masterstudy-authorization__switch-lost-pass').click(function () {
      $(this).addClass('masterstudy-authorization__switch-lost-pass_hide');
      $('.masterstudy-authorization__wrapper').addClass('masterstudy-authorization__wrapper_hide');
      $('.masterstudy-authorization__restore').addClass('masterstudy-authorization__restore_show');
    });
    $('.masterstudy-authorization__restore-header-back').click(function () {
      $('.masterstudy-authorization__switch-lost-pass').removeClass('masterstudy-authorization__switch-lost-pass_hide');
      $('.masterstudy-authorization__wrapper').removeClass('masterstudy-authorization__wrapper_hide');
      $('.masterstudy-authorization__restore').removeClass('masterstudy-authorization__restore_show');
    });
    $('.masterstudy-authorization__form-show-pass').click(function () {
      $(this).toggleClass('masterstudy-authorization__form-show-pass_open');
      var field = $(this).parent().find('input');
      field.attr('type', field.attr('type') === 'password' ? 'text' : 'password');
    });
    $('.masterstudy-authorization__checkbox-title').click(function () {
      $(this).parent().find('.masterstudy-authorization__checkbox-wrapper').trigger('click');
    });
    $('.masterstudy-authorization__radio-title').click(function () {
      $(this).parent().find('.masterstudy-authorization__radio-wrapper').trigger('click');
    });
    $('.masterstudy-authorization__gdpr-text').click(function () {
      $('.masterstudy-authorization__gdpr .masterstudy-authorization__checkbox-wrapper').trigger('click');
    });
    $('.masterstudy-authorization__checkbox-wrapper').click(function () {
      $(this).toggleClass('masterstudy-authorization__checkbox-wrapper_checked');
      var input = $(this).prev();
      var container = input.closest('.masterstudy-authorization__checkbox-group');
      input.prop('checked', !input.prop('checked'));
      if (input.attr('id') === 'masterstudy-authorization-gdbr') {
        $('.masterstudy-authorization').find('[data-error-id="policy"]').remove();
      }
      if (container.length > 0) {
        container.find('[data-error-id="required"]').remove();
      }
    });
    $('.masterstudy-authorization__radio-wrapper').click(function () {
      $(this).addClass('masterstudy-authorization__radio-wrapper_checked');
      var input = $(this).prev();
      input.prop('checked', true);
      $(this).closest('.masterstudy-authorization__radio-container').siblings().find('input[type="radio"]').prop('checked', false);
      $(this).closest('.masterstudy-authorization__radio-container').siblings().find('.masterstudy-authorization__radio-wrapper').removeClass('masterstudy-authorization__radio-wrapper_checked');
    });
    $('.masterstudy-authorization__radio-wrapper_checked').prev().prop('checked', true);
    $('.masterstudy-authorization__select').each(function () {
      var $parent = $(this).parent();
      $(this).select2({
        dropdownParent: $parent,
        minimumResultsForSearch: Infinity
      });
    });
    $('.masterstudy-authorization input, .masterstudy-authorization textarea').on('input', function () {
      $(this).parent().find('.masterstudy-authorization__form-field-error').remove();
      $(this).parent().removeClass('masterstudy-authorization__form-field_has-error');
    });
  });
  function open_register_form() {
    setFormProperties('register', authorization_settings.titles.register);
  }
  function open_login_form() {
    setFormProperties('login', authorization_settings.titles.login);
  }
  function setFormProperties(formType, titles) {
    $('.masterstudy-authorization').removeClass(formType === 'register' ? 'masterstudy-authorization_login' : 'masterstudy-authorization_register').addClass("masterstudy-authorization_".concat(formType));
    $('.masterstudy-authorization__switch-lost-pass').removeClass('masterstudy-authorization__switch-lost-pass_hide');
    $('.masterstudy-authorization__wrapper').removeClass('masterstudy-authorization__wrapper_hide');
    $('.masterstudy-authorization__restore').removeClass('masterstudy-authorization__restore_show');
    $('#masterstudy-authorization-restore-pass').removeClass('masterstudy-authorization__send-mail_show');
    $('#masterstudy-authorization-confirm-email').removeClass('masterstudy-authorization__send-mail_show');
    $('.masterstudy-authorization__switch').removeClass('masterstudy-authorization__switch_hide');
    $('.masterstudy-authorization__header-title').text(titles.main);
    $('.masterstudy-authorization__separator-title').text(titles.separator);
    $('.masterstudy-authorization__switch-account-title').text(titles.account);
    $('.masterstudy-authorization__form-field-error_privacy_policy').toggleClass('masterstudy-authorization__form-field-error_hide');
  }
})(jQuery);