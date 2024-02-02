/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dev/kie6er.js":
/*!******************************!*\
  !*** ./src/js/dev/kie6er.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/markusDM.js":
/*!********************************!*\
  !*** ./src/js/dev/markusDM.js ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/ukik0.js":
/*!*****************************!*\
  !*** ./src/js/dev/ukik0.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/dev/vzmsk1.js":
/*!******************************!*\
  !*** ./src/js/dev/vzmsk1.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/modules.js":
/*!***************************!*\
  !*** ./src/js/modules.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modules: () => (/* binding */ modules)
/* harmony export */ });
const modules = {};

/***/ }),

/***/ "./src/js/utils/accordion.js":
/*!***********************************!*\
  !*** ./src/js/utils/accordion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordion: () => (/* binding */ accordion)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils/utils.js");

const accordion = () => {
  const accordionItems = document.querySelectorAll('[data-accordion]');
  if (accordionItems.length) {
    const initAccordion = function (accordionItems) {
      let matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      accordionItems.forEach(accordionGroup => {
        accordionGroup = matchMedia ? accordionGroup.item : accordionGroup;
        if (matchMedia.matches || !matchMedia) {
          accordionGroup.classList.add('_accordion-init');
          initAccordionBody(accordionGroup);
          accordionGroup.addEventListener('click', setAccordionActions);
        } else {
          accordionGroup.classList.remove('_accordion-init');
          initAccordionBody(accordionGroup, false);
          accordionGroup.removeEventListener('click', setAccordionActions);
        }
      });
    };
    const initAccordionBody = function (accordionGroup) {
      let hideAccordionBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      let titles = accordionGroup.querySelectorAll('[data-accordion-item]');
      if (titles.length) {
        titles = Array.from(titles).filter(item => item.closest('[data-accordion]') === accordionGroup);
        titles.forEach(title => {
          if (hideAccordionBody) {
            title.removeAttribute('tabindex');
            if (!title.classList.contains('_accordion-active')) {
              title.nextElementSibling.hidden = true;
            }
          } else {
            title.setAttribute('tabindex', '-1');
            title.nextElementSibling.hidden = false;
          }
        });
      }
    };
    const setAccordionActions = e => {
      const target = e.target;
      if (target.closest('[data-accordion-item]')) {
        const title = target.closest('[data-accordion-item]');
        const group = title.closest('[data-accordion]');
        const isOneActiveItem = group.hasAttribute('data-accordion-one-active');
        const accordionSpeed = group.dataset.accordionSpeed ? parseInt(group.dataset.accordionSpeed) : 500;
        if (!group.querySelectorAll('._slide').length) {
          if (isOneActiveItem && !title.classList.contains('_accordion-active')) {
            hideAccordionBody(group);
          }
          title.classList.toggle('_accordion-active');
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(title.nextElementSibling, accordionSpeed);
        }
        e.preventDefault();
      }
    };
    const hideAccordionBody = accordionGroup => {
      const activeTitle = accordionGroup.querySelector('[data-accordion-item]._accordion-active');
      const accordionSpeed = accordionGroup.dataset.accordionSpeed ? parseInt(accordionGroup.dataset.accordionSpeed) : 500;
      if (activeTitle && !accordionGroup.querySelectorAll('._slide').length) {
        activeTitle.classList.remove('_accordion-active');
        (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(activeTitle.nextElementSibling, accordionSpeed);
      }
    };
    const accordionClose = document.querySelectorAll('[data-accordion-close]');
    if (accordionClose.length) {
      document.addEventListener('click', function (e) {
        const target = e.target;
        if (!target.closest('[data-accordion]')) {
          accordionClose.forEach(accordionItemClose => {
            const group = accordionItemClose.closest('[data-accordion]');
            const speed = spollersBlock.dataset.accordionSpeed ? parseInt(group.dataset.accordionSpeed) : 500;
            accordionItemClose.classList.remove('_accordion-active');
            (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(accordionItemClose.nextElementSibling, speed);
          });
        }
      });
    }
    const regItems = Array.from(accordionItems).filter(function (item, index, self) {
      return !item.dataset.accordion.split(',')[0];
    });

    // init regular accordion items
    if (regItems.length) {
      initAccordion(regItems);
    }

    // get accordion items with media queries
    const mdQueriesArray = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.dataMediaQueries)(accordionItems, 'accordion');
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach(mdQueriesItem => {
        // event
        mdQueriesItem.matchMedia.addEventListener('change', function () {
          initAccordion(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        initAccordion(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
  }
};
accordion();

/***/ }),

/***/ "./src/js/utils/forms.js":
/*!*******************************!*\
  !*** ./src/js/utils/forms.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formFieldsInit: () => (/* binding */ formFieldsInit),
/* harmony export */   formSubmit: () => (/* binding */ formSubmit)
/* harmony export */ });
/**
 * adds actions to form fields
 * @param {object} options object
 */
function formFieldsInit() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    viewPass: false
  };
  const formFields = document.querySelectorAll('input[placeholder],textarea[placeholder]');
  if (formFields.length) {
    formFields.forEach(formField => {
      if (!formField.hasAttribute('data-placeholder-nohide')) {
        formField.dataset.placeholder = formField.placeholder;
      }
    });
  }
  document.body.addEventListener('focusin', function (e) {
    const targetElement = e.target;
    if (targetElement.tagName === 'INPUT' && targetElement.type !== 'file' && targetElement.type !== 'checkbox' && targetElement.type !== 'radio' && !targetElement.closest('.quantity') && !targetElement.closest('.input-row') || targetElement.tagName === 'TEXTAREA') {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = '';
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.add('_form-focus');
        targetElement.parentElement.classList.add('_form-focus');
      }
      targetElement.closest('.input').classList.remove('_filled');
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener('focusout', function (e) {
    const targetElement = e.target;
    if (targetElement.tagName === 'INPUT' && targetElement.type !== 'file' && targetElement.type !== 'checkbox' && targetElement.type !== 'radio' && !targetElement.closest('.quantity') && !targetElement.closest('.input-row') || targetElement.tagName === 'TEXTAREA') {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.remove('_form-focus');
        targetElement.parentElement.classList.remove('_form-focus');
      }
      if (targetElement.hasAttribute('data-validate')) {
        formValidate.validateInput(targetElement);
      }
      if (!targetElement.classList.contains('_form-error') && targetElement.value.trim()) {
        targetElement.closest('.input').classList.add('_filled');
      } else {
        targetElement.closest('.input').classList.remove('_filled');
      }
    }
  });
  if (document.querySelectorAll('[data-file-input]').length) {
    document.querySelectorAll('[data-file-input]').forEach(fileInput => {
      formValidate.validateInput(fileInput);
      fileInput.addEventListener('input', function () {
        formValidate.validateInput(fileInput);
      });
    });
  }
  if (options.viewPass) {
    document.addEventListener('click', function (e) {
      let targetElement = e.target;
      if (targetElement.closest('[class*="__viewpass"]')) {
        let inputType = targetElement.classList.contains('_viewpass-active') ? 'password' : 'text';
        targetElement.parentElement.querySelector('input').setAttribute('type', inputType);
        targetElement.classList.toggle('_viewpass-active');
      }
    });
  }
}

// validation var
let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll('*[data-required]');
    if (formRequiredItems.length) {
      formRequiredItems.forEach(formRequiredItem => {
        if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === 'SELECT') && !formRequiredItem.disabled) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === 'email') {
      formRequiredItem.value = formRequiredItem.value.replace(' ', '');
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.type === 'checkbox' && !formRequiredItem.checked) {
      this.addError(formRequiredItem);
      error++;
    } else if (formRequiredItem.type === 'file') {
      const ths = this;
      const reader = new FileReader();
      reader.onload = function (e) {
        const maxSize = Number(formRequiredItem.dataset.fileInput);
        const file = formRequiredItem.files[0];
        if (maxSize && file) {
          const parent = formRequiredItem.closest('.file-input');
          const text = parent.querySelector('[data-file-txt]');
          const name = parent.querySelector('[data-file-name]');
          const extension = parent.querySelector('[data-file-extension]');
          const img = parent.querySelector('[data-file-img]');
          const size = parent.querySelector('[data-file-size]');
          const removeBtn = parent.querySelector('[data-remove-file-btn]');
          const data = {
            name: file.name.split('.').slice(0, -1).join(''),
            size: file.size / 1000000,
            extension: file.name.split('.').pop()
          };
          img ? img.src = e.target.result : null;
          text ? text.innerHTML = `Максимальный размер файла - ${maxSize} мб` : null;
          name ? name.innerHTML = data.name : null;
          extension ? extension.innerHTML = data.extension : null;
          size ? size.innerHTML = data.size.toFixed(1) : null;
          if (data.size > maxSize) {
            parent.classList.add('_error');
            parent.classList.remove('_filled');
            text.innerHTML = 'Большой размер файла';
            ths.addError(formRequiredItem);
          } else {
            parent.classList.remove('_error');
            parent.classList.add('_filled');
            ths.removeError(formRequiredItem);
          }
          if (removeBtn) {
            removeBtn.addEventListener('click', function () {
              parent.classList.remove('_error');
              parent.classList.remove('_filled');
              formRequiredItem.value = '';
              ths.removeError(formRequiredItem);
            });
          }
        }
      };
      if (formRequiredItem.files[0]) reader.readAsDataURL(formRequiredItem.files[0]);
    } else {
      if (!formRequiredItem.value.trim() && !formRequiredItem.hasAttribute('data-static')) {
        this.addError(formRequiredItem);
        error++;
      } else if (formRequiredItem.dataset.validate === 'letters-only') {
        const pattern = /[0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (pattern.test(formRequiredItem.value)) {
          formRequiredItem.dataset.error = ``;
          this.addError(formRequiredItem);
          error++;
        }
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    console.log(formRequiredItem);
    formRequiredItem.classList.add('_form-error');
    formRequiredItem.parentElement.classList.add('_form-error');
    formRequiredItem.parentElement.classList.remove('_filled');
    let inputError = formRequiredItem.parentElement.querySelector('.form-error');
    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML('beforeend', `<div class="form-error txt16">${formRequiredItem.dataset.error}</div>`);
    }
    if (formRequiredItem.closest('.input_validate')) {
      formRequiredItem.closest('form').classList.add('_error');
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error');
    formRequiredItem.parentElement.classList.remove('_form-error');
    if (formRequiredItem.parentElement.querySelector('.form-error')) {
      formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector('.form-error'));
    }
    if (formRequiredItem.closest('.input_validate')) {
      formRequiredItem.closest('form').classList.remove('_error');
    }
  },
  formClean(form) {
    if (!form.hasAttribute('data-save-fields')) {
      form.reset();
      setTimeout(() => {
        let inputs = form.querySelectorAll('input,textarea');
        for (let index = 0; index < inputs.length; index++) {
          const el = inputs[index];
          el.parentElement.classList.remove('_form-focus');
          el.classList.remove('_form-focus');
          formValidate.removeError(el);
          if (el.type && el.type === 'file') {
            el.value = '';
            el.closest('.file-input').classList.remove('_filled');
            el.closest('.file-input').classList.remove('_error');
          }
        }
        let checkboxes = form.querySelectorAll('.checkbox__input');
        if (checkboxes.length > 0) {
          for (let index = 0; index < checkboxes.length; index++) {
            const checkbox = checkboxes[index];
            checkbox.checked = false;
          }
        }
      }, 0);
    }
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
  }
};

/**
 * adds submit logic
 * @param {object} options object
 */
function formSubmit() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    validate: true
  };
  const forms = document.forms;
  if (forms.length) {
    for (const form of forms) {
      form.addEventListener('submit', function (e) {
        const form = e.target;
        formSubmitAction(form, e);
      });
      form.addEventListener('reset', function (e) {
        const form = e.target;
        formValidate.formClean(form);
      });
    }
  }
  async function formSubmitAction(form, e) {
    const error = !form.hasAttribute('data-no-validate') ? formValidate.getErrors(form) : 0;
    if (error === 0 && !form.querySelector('._form-error')) {
      const ajax = form.hasAttribute('data-ajax');
      if (ajax) {
        e.preventDefault();
        const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
        const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
        const formData = new FormData(form);
        form.classList.add('_sending');
        const response = await fetch(formAction, {
          method: formMethod,
          body: formData
        });
        if (response.ok) {
          let responseResult = await response.json();
          form.classList.remove('_sending');
          formSent(form, responseResult);
        } else {
          alert('error');
          form.classList.remove('_sending');
        }
      } else if (form.hasAttribute('data-dev')) {
        // in development mode
        e.preventDefault();
        formSent(form);
      }
    } else {
      e.preventDefault();
      const formError = form.querySelector('._form-error');
      if (formError && form.hasAttribute('data-goto-error')) {
        gotoBlock(formError, true, 1000);
      }
    }
  }
  // actions after submitting the form
  function formSent(form) {
    let responseResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ``;
    // show popup, if popup module is connected and form has setting
    // setTimeout(() => {
    //     if (modules.modal) {
    //         const modal = form.dataset.modalMessage;
    //         modal ? modules.modal.open(modal) : null;
    //     }
    // }, 0);

    // form submit event
    document.dispatchEvent(new CustomEvent('formSent', {
      detail: {
        form: form
      }
    }));
    // clean form
    formValidate.formClean(form);
  }
}

/***/ }),

/***/ "./src/js/utils/modals.js":
/*!********************************!*\
  !*** ./src/js/utils/modals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules.js */ "./src/js/modules.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/js/utils/utils.js");



// --------------------------------------------------------------------------

class Modal {
  constructor(options) {
    let config = {
      logging: true,
      init: true,
      attributeOpenButton: 'data-modal',
      attributeCloseButton: 'data-close',
      fixElementSelector: '[data-lp]',
      youtubeAttribute: 'data-modal-youtube',
      youtubePlaceAttribute: 'data-modal-youtube-place',
      setAutoplayYoutube: true,
      classes: {
        modal: 'modal',
        // modalWrapper: 'modal__wrapper',
        modalContent: 'modal__content',
        modalActive: 'modal_show',
        bodyActive: 'modal-show'
      },
      focusCatch: true,
      closeEsc: true,
      bodyLock: true,
      hashSettings: {
        location: true,
        goHash: true
      },
      on: {
        beforeOpen: function () {},
        afterOpen: function () {},
        beforeClose: function () {},
        afterClose: function () {}
      }
    };
    this.youTubeCode;
    this.isOpen = false;
    this.targetOpen = {
      selector: false,
      element: false
    };
    this.previousOpen = {
      selector: false,
      element: false
    };
    this.lastClosed = {
      selector: false,
      element: false
    };
    this._dataValue = false;
    this.hash = false;
    this._reopen = false;
    this._selectorOpen = false;
    this.lastFocusEl = false;
    this._focusEl = ['a[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'area[href]', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
    //this.options = Object.assign(config, options);
    this.options = {
      ...config,
      ...options,
      classes: {
        ...config.classes,
        ...options?.classes
      },
      hashSettings: {
        ...config.hashSettings,
        ...options?.hashSettings
      },
      on: {
        ...config.on,
        ...options?.on
      }
    };
    this.bodyLock = false;
    this.options.init ? this.initmodals() : null;
  }
  initmodals() {
    this.eventsmodal();
  }
  eventsmodal() {
    document.addEventListener('click', function (e) {
      const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
      if (buttonOpen) {
        e.preventDefault();
        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : 'error';
        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
        if (this._dataValue !== 'error') {
          if (!this.isOpen) this.lastFocusEl = buttonOpen;
          this.targetOpen.selector = `${this._dataValue}`;
          this._selectorOpen = true;
          this.open();
          return;
        }
        return;
      }
      const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
      if (!e.target.closest('#unconfirmedAgeModal') && !e.target.closest('#confirmAgeModal') && (buttonClose || !e.target.closest(`.${this.options.classes.modalContent}`) && this.isOpen)) {
        e.preventDefault();
        this.close();
        return;
      }
    }.bind(this));
    document.addEventListener('keydown', function (e) {
      if (this.options.closeEsc && e.which == 27 && e.code === 'Escape' && this.isOpen) {
        e.preventDefault();
        this.close();
        return;
      }
      if (this.options.focusCatch && e.which == 9 && this.isOpen) {
        this._focusCatch(e);
        return;
      }
    }.bind(this));
    if (this.options.hashSettings.goHash) {
      window.addEventListener('hashchange', function () {
        if (window.location.hash) {
          this._openToHash();
        } else {
          this.close(this.targetOpen.selector);
        }
      }.bind(this));
      window.addEventListener('load', function () {
        if (window.location.hash) {
          this._openToHash();
        }
      }.bind(this));
    }
  }
  open(selectorValue) {
    if (_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.bodyLockStatus) {
      this.bodyLock = document.documentElement.classList.contains('lock') && !this.isOpen ? true : false;
      if (selectorValue && typeof selectorValue === 'string' && selectorValue.trim() !== '') {
        this.targetOpen.selector = selectorValue;
        this._selectorOpen = true;
      }
      if (this.isOpen) {
        this._reopen = true;
        this.close();
      }
      if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
      if (!this._reopen) this.previousActiveElement = document.activeElement;
      this.targetOpen.element = document.querySelector(this.targetOpen.selector);
      if (this.targetOpen.element) {
        if (this.youTubeCode) {
          const codeVideo = this.youTubeCode;
          const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
          const iframe = document.createElement('iframe');
          iframe.setAttribute('allowfullscreen', '');
          const autoplay = this.options.setAutoplayYoutube ? 'autoplay;' : '';
          iframe.setAttribute('allow', `${autoplay}; encrypted-media`);
          iframe.setAttribute('src', urlVideo);
          if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
            const youtubePlace = this.targetOpen.element.querySelector('.modal__text').setAttribute(`${this.options.youtubePlaceAttribute}`, '');
          }
          this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
        }
        if (this.options.hashSettings.location) {
          this._getHash();
          this._setHash();
        }
        this.options.on.beforeOpen(this);
        document.dispatchEvent(new CustomEvent('beforemodalOpen', {
          detail: {
            modal: this
          }
        }));
        this.targetOpen.element.classList.add(this.options.classes.modalActive);
        document.documentElement.classList.add(this.options.classes.bodyActive);
        if (!this._reopen) {
          const m = document.querySelector(this.hash);
          setTimeout(() => {
            !this.bodyLock && !m.hasAttribute('data-bl-mobile') || !this.bodyLock && window.innerWidth <= 768 && m.hasAttribute('data-bl-mobile') ? (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.bodyLock)() : null;
          }, 0);
        } else this._reopen = false;
        this.targetOpen.element.setAttribute('aria-hidden', 'false');
        this.previousOpen.selector = this.targetOpen.selector;
        this.previousOpen.element = this.targetOpen.element;
        this._selectorOpen = false;
        this.isOpen = true;
        setTimeout(() => {
          this._focusTrap();
        }, 50);
        this.options.on.afterOpen(this);
        document.dispatchEvent(new CustomEvent('aftermodalOpen', {
          detail: {
            modal: this
          }
        }));
      }
    }
  }
  close(selectorValue) {
    if (selectorValue && typeof selectorValue === 'string' && selectorValue.trim() !== '') {
      this.previousOpen.selector = selectorValue;
    }
    if (!this.isOpen || !_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.bodyLockStatus) {
      return;
    }
    this.options.on.beforeClose(this);
    document.dispatchEvent(new CustomEvent('beforemodalClose', {
      detail: {
        modal: this
      }
    }));
    if (this.youTubeCode) {
      if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = '';
    }
    this.previousOpen.element.classList.remove(this.options.classes.modalActive);
    // aria-hidden
    this.previousOpen.element.setAttribute('aria-hidden', 'true');
    if (!this._reopen) {
      document.documentElement.classList.remove(this.options.classes.bodyActive);
      !this.bodyLock ? (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.bodyUnlock)() : null;
      this.isOpen = false;
    }
    this._removeHash();
    if (this._selectorOpen) {
      this.lastClosed.selector = this.previousOpen.selector;
      this.lastClosed.element = this.previousOpen.element;
    }
    this.options.on.afterClose(this);
    document.dispatchEvent(new CustomEvent('aftermodalClose', {
      detail: {
        modal: this
      }
    }));
    setTimeout(() => {
      this._focusTrap();
    }, 50);
  }
  _getHash() {
    if (this.options.hashSettings.location) {
      this.hash = this.targetOpen.selector.includes('#') ? this.targetOpen.selector : this.targetOpen.selector.replace('.', '#');
    }
  }
  _openToHash() {
    let classInHash = document.querySelector(`.${window.location.hash.replace('#', '')}`) ? `.${window.location.hash.replace('#', '')}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
    const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace('.', '#')}"]`);
    if (buttons && classInHash) this.open(classInHash);
  }
  _setHash() {
    history.pushState('', '', this.hash);
  }
  _removeHash() {
    history.pushState('', '', window.location.href.split('#')[0]);
  }
  _focusCatch(e) {
    const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
    const focusArray = Array.prototype.slice.call(focusable);
    const focusedIndex = focusArray.indexOf(document.activeElement);
    if (e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }
    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }
  _focusTrap() {
    const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
    if (!this.isOpen && this.lastFocusEl) {
      this.lastFocusEl.focus();
    } else {
      focusable[0].focus();
    }
  }
}
_modules_js__WEBPACK_IMPORTED_MODULE_0__.modules.modal = new Modal({});

// show age modal
if (document.querySelector('.mainpage')) {
  const confirmAgeBtn = document.getElementById('confirm-age-btn');
  // modules.modal.open('#confirmAgeModal');
  confirmAgeBtn.addEventListener('click', function () {
    _modules_js__WEBPACK_IMPORTED_MODULE_0__.modules.modal.close('#confirmAgeModal');
  });
}

/***/ }),

/***/ "./src/js/utils/select.js":
/*!********************************!*\
  !*** ./src/js/utils/select.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Select: () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils/utils.js");

class Select {
  // setup ------------------------------------------------------------------

  constructor() {
    this._this = this;

    // custom select classes
    this.classes = {
      // html build classes
      sel: 'select',
      body: 'select__body',
      label: 'select__label',
      title: 'select__title',
      val: 'select__value',
      content: 'select__content',
      options: 'select__options',
      option: 'select__option',
      scroll: 'select__scroll',
      group: 'select__group',
      inp: 'select__input',
      asset: 'select__asset',
      txt: 'select__text',
      hint: 'select__hint',
      // state classes
      active: '_select-active',
      focused: '_select-focused',
      opened: '_select-opened',
      filled: '_select-filled',
      selected: '_select-selected',
      disabled: '_select-disabled',
      // additional classes
      list: '_select-list',
      error: '_select-error',
      multiple: '_select-multiple',
      checkbox: '_select-checkbox',
      label: '_select-label'
    };

    // all select items
    const selectList = document.querySelectorAll('select');
    if (selectList.length) {
      this.init(selectList);
    }
  }

  // select initialization & build ------------------------------------------

  // initialization
  init(selectList) {
    // init
    selectList.forEach((select, index) => {
      this.initSelItem(select, index + 1);
    });

    // events
    document.addEventListener('click', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('keydown', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('focusin', function (e) {
      this.setActions(e);
    }.bind(this));
    document.addEventListener('focusout', function (e) {
      this.setActions(e);
    }.bind(this));
  }
  // single select item initialization
  initSelItem(relativeSel, index) {
    const _this = this;
    const select = document.createElement('div');
    select.classList.add(this.classes.sel);
    relativeSel.parentNode.insertBefore(select, relativeSel);
    select.appendChild(relativeSel);
    relativeSel.hidden = true;
    index ? relativeSel.dataset.selId = index : null;
    if (this.getPlaceholder(relativeSel)) {
      relativeSel.dataset.optPlaceholder = this.getPlaceholder(relativeSel).value;
      if (this.getPlaceholder(relativeSel).label.show) {
        const selTitle = this.getSelect(select, this.classes.title).twinSel;
        selTitle.insertAdjacentHTML('afterbegin', `<span class="${this.classes.label}">${this.getPlaceholder(relativeSel).label.text ? this.getPlaceholder(relativeSel).label.text : this.getPlaceholder(relativeSel).value}</span>`);
      }
    }
    select.insertAdjacentHTML('beforeend', `<div class="${this.classes.body}">
                    <div ${!relativeSel.hasAttribute('data-no-slide') ? 'hidden' : ''}  class="${this.classes.options}">

                    </div>
                </div>`);
    this.build(relativeSel);
    relativeSel.dataset.speed = relativeSel.dataset.speed ? relativeSel.dataset.speed : '150';
    relativeSel.addEventListener('change', function (e) {
      _this.initSelections(e);
    });
  }
  // select build
  build(relativeSel) {
    const select = relativeSel.parentElement;

    // set id
    select.dataset.selId = relativeSel.dataset.selId;
    // set value
    this.setValue(select, relativeSel);
    // set options
    this.setOptions(select, relativeSel);
    // set css modificator
    relativeSel.dataset.selAddonClass ? select.classList.add(`select_${relativeSel.dataset.selAddonClass}`) : null;
    // set class if select is multiple
    relativeSel.multiple ? select.classList.add(this.classes.multiple) : select.classList.remove(this.classes.multiple);
    // set class if select checkboxes are set
    relativeSel.hasAttribute('data-sel-checkboxes') && relativeSel.multiple ? select.classList.add(this.classes.checkbox) : select.classList.remove(this.classes.checkbox);
    // disable select
    this.disableSelect(select, relativeSel);
    // set search actions if data-sel-search is set
    relativeSel.hasAttribute('data-sel-search') ? this.setSearchActions(select) : null;
    // set select actions if it's initially opened
    relativeSel.hasAttribute('data-sel-opened') ? this.setAction(select) : null;

    // set select hint
    if (relativeSel.dataset.selHint) {
      relativeSel.parentElement.insertAdjacentHTML('beforeend', `<div class="select__hint">${relativeSel.dataset.selHint}</div>`);
    }

    // show / hide selection from select title
    if (relativeSel.hasAttribute('data-show-val')) {
      select.classList.add('_select-show-val');
    } else {
      select.classList.remove('_select-show-val');
    }
  }
  // set twin select title value
  setValue(select, relativeSel) {
    const selBody = this.getSelect(select, this.classes.body).twinSel;
    const selTitle = this.getSelect(select, this.classes.title).twinSel;
    if (selTitle) selTitle.remove();
    selBody.insertAdjacentHTML('afterbegin', this.getValue(select, relativeSel));
  }
  // set twin select options
  setOptions(select, relativeSel) {
    const _this = this;
    const options = this.getSelect(select, this.classes.options).twinSel;
    const relativeSelOptions = this.getSelect(select, this.classes.options).relativeSel;
    options.innerHTML = this.getOptions(relativeSel);
    window.addEventListener('resize', function () {
      _this.getOptions(relativeSel);
    });
    if (relativeSelOptions.querySelector('[selected]')) {
      options.querySelector(`.${this.classes.option}`).classList.add(this.classes.selected);
    }
  }
  // disable select
  disableSelect(select, relativeSel) {
    if (relativeSel.disabled) {
      select.classList.add(this.classes.disabled);
      this.getSelect(select, this.classes.title).twinSel.disabled = true;
    } else {
      select.classList.remove(this.classes.disabled);
      this.getSelect(select, this.classes.title).twinSel.disabled = false;
    }
  }

  // main actions -----------------------------------------------------------

  // set main actions
  setActions(e) {
    const target = e.target;
    const type = e.type;
    if (target.closest(this.getClass(this.classes.sel)) || target.closest(this.getClass(this.classes.list))) {
      const select = target.closest('.select') ? target.closest('.select') : document.querySelector(`.${this.classes.sel}[data-sel-id="${target.closest(this.getClass(this.classes.list)).dataset.selectId}"]`);
      const relativeSel = this.getSelect(select).relativeSel;
      if (type === 'click') {
        if (!relativeSel.disabled) {
          if (target.closest(this.getClass(this.classes.list))) {
            const selList = target.closest(this.getClass(this.classes.list));
            const selOption = document.querySelector(`.${this.classes.sel}[data-sel-id="${selList.dataset.selId}"] .select__option[data-opt-val="${selList.dataset.optVal}"]`);
            this.setOptionAction(select, relativeSel, selOption);
          } else if (target.closest(this.getClass(this.classes.title))) {
            this.setAction(select);
          } else if (target.closest(this.getClass(this.classes.option))) {
            const selOption = target.closest(this.getClass(this.classes.option));
            this.setOptionAction(select, relativeSel, selOption);
          }
        }
      } else if (type === 'focusin' || type === 'focusout') {
        if (target.closest(this.getClass(this.classes.sel))) {
          if (type === 'focusin') {
            select.classList.add(this.classes.focused);
          } else {
            select.classList.remove(this.classes.focused);
            if (relativeSel.hasAttribute('data-validate')) {
              if (!select.classList.contains(this.classes.filled)) {
                this.addErr(relativeSel, select);
              } else {
                this.removeErr(relativeSel, select);
              }
            }
          }
        }
      } else if (type === 'keydown' && e.code === 'Escape') {
        this.closeGroup();
      }
    } else {
      this.closeGroup();
    }
  }
  // set single select action
  setAction(select) {
    const relativeSel = this.getSelect(select).relativeSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel;
    if (relativeSel.closest('[data-one-select]')) {
      const selectOneGroup = relativeSel.closest('[data-one-select]');
      this.closeGroup(selectOneGroup, relativeSel);
    }
    if (!selOptions.classList.contains('_slide')) {
      select.classList.toggle(this.classes.opened);
      if (!relativeSel.hasAttribute('data-no-slide')) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideToggle)(selOptions, relativeSel.dataset.speed);
      if (select.classList.contains(this.classes.opened) && relativeSel.hasAttribute('data-validate') && select.classList.contains(this.classes.error)) {
        this.removeErr(relativeSel, select);
      }
    }
  }
  // close single select group
  closeGroup(group, select) {
    const selGroup = group ? group : document;
    const selections = selGroup.querySelectorAll(`${this.getClass(this.classes.sel)}${this.getClass(this.classes.opened)}`);
    if (selections.length) {
      selections.forEach(selection => {
        if (!select || select && selection.dataset.selId !== select.dataset.selId) {
          this.closeItem(selection);
        }
      });
    }
  }
  // close single select item
  closeItem(select) {
    const relativeSel = this.getSelect(select).relativeSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel;
    if (!selOptions.classList.contains('_slide')) {
      select.classList.remove(this.classes.opened);
      if (!relativeSel.hasAttribute('data-no-slide')) (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._slideUp)(selOptions, relativeSel.dataset.speed);
    }
  }
  // set single option actions
  setOptionAction(select, relativeSel, option) {
    if (relativeSel.multiple) {
      option.classList.toggle(this.classes.selected);
      const relativeSelections = this.getData(relativeSel).elements;
      relativeSelections.forEach(relativeSelection => {
        relativeSelection.removeAttribute('selected');
      });
      const twinSelections = select.querySelectorAll(this.getClass(this.classes.selected));
      twinSelections.forEach(twinSelection => {
        relativeSel.querySelector(`option[value="${twinSelection.dataset.optVal}"]`).setAttribute('selected', 'selected');
      });
      if (!option.classList.contains(this.classes.selected)) {
        console.log(relativeSel.querySelector(`option[value="${option.dataset.optVal}"]`));
        relativeSel.querySelector(`option[value="${option.dataset.optVal}"]`).removeAttribute('selected');
      }
    } else {
      select.querySelectorAll('.select__option').forEach(opt => opt.classList.remove(this.classes.selected));
      option.classList.add(this.classes.selected);
      if (!relativeSel.hasAttribute('data-show-selection')) {
        if (select.querySelector(`${this.getClass(this.classes.option)}[hidden]`)) {
          select.querySelector(`${this.getClass(this.classes.option)}[hidden]`).hidden = false;
        }
        option.hidden = true;
      }
      relativeSel.value = option.hasAttribute('data-opt-val') ? option.dataset.optVal : option.textContent;
      this.setAction(select);
    }
    this.setValue(select, relativeSel);
    this.setSelections(relativeSel);
  }
  // set search actions
  setSearchActions(select) {
    const _this = this;
    const selInput = this.getSelect(select, this.classes.inp).twinSel;
    const selOptions = this.getSelect(select, this.classes.options).twinSel.querySelectorAll(`.${this.classes.option}`);
    selInput.addEventListener('input', function () {
      selOptions.forEach(selOption => {
        if (selOption.textContent.toUpperCase().indexOf(selInput.value.toUpperCase()) >= 0) {
          selOption.hidden = false;
        } else {
          selOption.hidden = true;
        }
      });
      selOptions.hidden === true ? _this.setAction(select) : null;
    });
  }
  // set select subtitle
  setSubtitle(relativeSel) {}

  // validation -------------------------------------------------------------

  // add an error to a select
  addErr(relativeSel, select) {
    select.classList.add(this.classes.error);
    if (relativeSel.dataset.selError && !relativeSel.dataset.selHint) {
      relativeSel.parentElement.insertAdjacentHTML('beforeend', `<div class="select__hint">${relativeSel.dataset.selError}</div>`);
    }
  }
  // remove an error from a select
  removeErr(relativeSel, select) {
    if (select.classList.contains(this.classes.error)) {
      select.classList.remove(this.classes.error);
    }
    if (relativeSel.parentElement.querySelector('.select__hint') && !relativeSel.dataset.selHint) {
      relativeSel.parentElement.removeChild(relativeSel.parentElement.querySelector('.select__hint'));
    }
  }

  // utils ------------------------------------------------------------------

  // get custom class
  getClass(cssClass) {
    return `.${cssClass}`;
  }
  // get single select item
  getSelect(select, cssClass) {
    return {
      relativeSel: select.querySelector('select'),
      twinSel: select.querySelector(this.getClass(cssClass))
    };
  }
  // get selected item value
  getValue(select, relativeSel) {
    let attr,
      attrClass,
      titleVal = this.getData(relativeSel, 2).html;

    // set title value
    titleVal = titleVal.length ? titleVal : relativeSel.dataset.selLabel ? relativeSel.dataset.selLabel : '';

    // set active class to select if it contains any values
    if (this.getData(relativeSel).values.length) {
      select.classList.add(this.classes.active);
    } else {
      select.classList.remove(this.classes.active);
    }

    // set select label
    if (relativeSel.hasAttribute('data-sel-label')) {
      attr = relativeSel.dataset.selLabel ? ` data-sel-label="${relativeSel.dataset.selLabel}"` : ` data-sel-label="Выбор"`;
      attrClass = ` ${this.classes.label}`;
    }

    // push selections to the list inside of select title
    if (relativeSel.multiple && relativeSel.hasAttribute('data-sel-list')) {
      titleVal = this.getData(relativeSel).elements.map(option => `<span data-opt-id="${select.dataset.selId}" data-opt-val="${option.value}" class="_list-item">${this.getContent(option)}</span>`).join('');
      if (relativeSel.dataset.list && document.querySelector(relativeSel.dataset.list)) {
        document.querySelector(relativeSel.dataset.list).innerHTML = titleVal;
        if (relativeSel.hasAttribute('data-sel-search')) titleVal = false;
      }
    }

    // init select search
    if (relativeSel.hasAttribute('data-sel-search')) {
      return `<div class="${this.classes.title}"><span ${attr} class="${this.classes.val}"><input autocomplete="off" type="search" placeholder="${titleVal}" data-placeholder="${titleVal}" class="${this.classes.inp}"></span></div>`;
    } else {
      const customClass = this.getData(relativeSel).elements.length && this.getData(relativeSel).elements[0].dataset.optClass ? ` ${this.getData(relativeSel).elements[0].dataset.optClass}` : '';
      return `<button type="button" class="${this.classes.title}"><span ${attr ? attr : ''} class="${this.classes.val} ${attrClass ? attrClass : ''}"><span class="${this.classes.content}${customClass}">${titleVal}</span></span></button>`;
    }
  }
  // get options
  getOptions(relativeSel) {
    const selScroll = relativeSel.hasAttribute('data-sel-scroll') ? `data-simplebar` : '';
    const data = selScroll ? relativeSel.dataset.selScroll.trim().split(',') : null;
    let selScrollHeight = relativeSel.dataset.selScroll && data ? `style="max-height:${window.innerWidth > 768 ? data[0] : data[1]}rem"` : '';
    let selOptions = Array.from(relativeSel.options);
    if (selOptions.length) {
      let selOptionsHTML = ``;
      if (this.getPlaceholder(relativeSel) && !this.getPlaceholder(relativeSel).show || relativeSel.multiple) {
        selOptions = selOptions.filter(option => option.value);
      }
      selOptionsHTML += selScroll ? `<div ${selScroll} ${selScrollHeight} data-sel-scroll="${relativeSel.dataset.selScroll}" class="${this.classes.scroll}">` : '';
      selOptions.forEach(option => {
        selOptionsHTML += this.getOption(option, relativeSel);
      });
      selOptionsHTML += selScroll ? `</div>` : '';
      return selOptionsHTML;
    }
  }
  // get option
  getOption(option, relativeSel) {
    const selections = option.selected && relativeSel.multiple ? ` ${this.classes.selected}` : '';
    const showSelection = option.selected && !relativeSel.hasAttribute('data-show-selection') && !relativeSel.multiple ? `hidden` : ``;
    const optionClass = option.dataset.optClass ? ` ${option.dataset.optClass}` : '';
    const optionLink = option.dataset.optionLink ? option.dataset.optionLink : false;
    const optionLinkTarget = option.hasAttribute('data-option-link-target') ? `target="_blank"` : '';
    let optionHTML = ``;
    optionHTML += optionLink ? `<a ${optionLinkTarget} ${showSelection} href="${optionLink}" data-opt-val="${option.value}" class="${this.classes.option}${optionClass}${selections}">` : `<button ${showSelection} class="${this.classes.option}${optionClass}${selections}" data-opt-val="${option.value}" type="button">`;
    optionHTML += this.getContent(option);
    optionHTML += optionLink ? `</a>` : `</button>`;
    return optionHTML;
  }
  // get select content
  getContent(option) {
    const optionData = option.dataset.optAsset ? `${option.dataset.optAsset}` : '';
    const optionDataHTML = optionData.indexOf('img') >= 0 ? `<img src="${optionData}" alt="">` : optionData;
    let optionContentHTML = ``;
    optionContentHTML += optionData ? `<span class="${this.classes.group}">` : '';
    optionContentHTML += optionData ? `<span class="${this.classes.asset}">` : '';
    optionContentHTML += optionData ? optionDataHTML : '';
    optionContentHTML += optionData ? `</span>` : '';
    optionContentHTML += optionData ? `<span class="${this.classes.txt}">` : '';
    optionContentHTML += option.textContent;
    optionContentHTML += optionData ? `</span>` : '';
    optionContentHTML += optionData ? `</span>` : '';
    return optionContentHTML;
  }
  // get select placeholder
  getPlaceholder(relativeSel) {
    const placeholder = Array.from(relativeSel.options).find(option => !option.value);
    if (placeholder) {
      placeholder.classList.add(this.classes.subtitle);
      return {
        value: placeholder.textContent,
        show: placeholder.hasAttribute('data-sel-ph-show'),
        label: {
          show: placeholder.hasAttribute('data-sel-ph'),
          text: placeholder.dataset.optPlaceholder
        }
      };
    }
  }
  // get selected options data
  getData(relativeSel) {
    let selections = [];
    if (relativeSel.multiple) {
      selections = Array.from(relativeSel.options).filter(option => option.value).filter(option => option.selected);
    } else {
      selections.push(relativeSel.options[relativeSel.selectedIndex]);
    }
    return {
      elements: selections.map(option => option),
      values: selections.filter(option => option.value).map(option => option.value),
      html: selections.map(option => this.getContent(option))
    };
  }

  // selections -------------------------------------------------------------

  // init selections
  initSelections(e) {
    const relativeSel = e.target;
    this.build(relativeSel);
    this.setSelections(relativeSel);
  }
  // set selections
  setSelections(relativeSel) {
    const select = relativeSel.parentElement;
    if (relativeSel.hasAttribute('data-submit') && relativeSel.value) {
      let tempButton = document.createElement('button');
      tempButton.type = 'submit';
      relativeSel.closest('form').append(tempButton);
      tempButton.click();
      tempButton.remove();
    }
    relativeSel.parentElement.classList.add(this.classes.filled);
    this.selection(select, relativeSel);
  }
  // custom select event (listen to any selections / mutations)
  selection(select, relativeSel) {
    document.dispatchEvent(new CustomEvent('selection', {
      detail: {
        select: relativeSel
      }
    }));
  }
}
new Select({});

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _slideDown: () => (/* binding */ _slideDown),
/* harmony export */   _slideToggle: () => (/* binding */ _slideToggle),
/* harmony export */   _slideUp: () => (/* binding */ _slideUp),
/* harmony export */   bodyLock: () => (/* binding */ bodyLock),
/* harmony export */   bodyLockStatus: () => (/* binding */ bodyLockStatus),
/* harmony export */   bodyLockToggle: () => (/* binding */ bodyLockToggle),
/* harmony export */   bodyUnlock: () => (/* binding */ bodyUnlock),
/* harmony export */   dataMediaQueries: () => (/* binding */ dataMediaQueries),
/* harmony export */   getHash: () => (/* binding */ getHash),
/* harmony export */   remToPx: () => (/* binding */ remToPx),
/* harmony export */   removeClasses: () => (/* binding */ removeClasses),
/* harmony export */   setHash: () => (/* binding */ setHash)
/* harmony export */ });
/**
 * set hash to url
 * @param {string} hash
 */
const setHash = hash => {
  hash = hash ? `#${hash}` : window.location.href.split('#')[0];
  history.pushState('', '', hash);
};

/**
 * get hash from url
 * @returns string
 */
const getHash = () => {
  if (location.hash) {
    return location.hash.replace('#', '');
  }
};

// body lock
let bodyLockStatus = true;
/**
 * toggles body lock
 * @param {number} delay
 */
const bodyLockToggle = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (document.documentElement.classList.contains('lock')) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
/**
 * unlocks body
 * @param {number} delay
 */
const bodyUnlock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (bodyLockStatus) {
    setTimeout(() => {
      document.documentElement.classList.remove('lock');
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
/**
 * locks body
 * @param {number} delay
 */
const bodyLock = function () {
  let delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
  if (bodyLockStatus) {
    document.documentElement.classList.add('lock');
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};

/**
 *
 * @param {array} array
 * @param {number} dataSetValue
 * process media requests from attributes
 */
const dataMediaQueries = (array, dataSetValue) => {
  // get objects with media queries
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(',')[0];
    }
  });
  // objects with media queries initialization
  if (media.length) {
    const breakpointsArray = [];
    media.forEach(item => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(',');
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // get unique breakpoints
    let mdQueries = breakpointsArray.map(function (item) {
      return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
    });
    mdQueries = uniqueArray(mdQueries);
    const mdQueriesArray = [];
    if (mdQueries.length) {
      // work with every breakpoint
      mdQueries.forEach(breakpoint => {
        const paramsArray = breakpoint.split(',');
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // objects with conditions
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia
        });
      });
      return mdQueriesArray;
    }
  }
};

/**
 * smoothly slides up
 * @param {HTMLElement} target
 * @param {number} duration
 * @param {boolean} showmore
 */
const _slideUp = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty('height') : null;
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      !showmore ? target.style.removeProperty('overflow') : null;
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideUpDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};

/**
 * smoothly slides down
 * @param {HTMLElement} target
 * @param {number} duration
 * @param {boolean} showmore
 */
const _slideDown = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let showmore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty('height') : null;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}rem` : `0`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
      // create event
      document.dispatchEvent(new CustomEvent('slideDownDone', {
        detail: {
          target: target
        }
      }));
    }, duration);
  }
};

/**
 * toggles smooth slide
 * @param {HTMLElement} target
 * @param {number} duration
 * @returns function
 */
const _slideToggle = function (target) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};

/**
 * converts rem to pixels
 * @param {number} remValue
 * @returns string
 */
function remToPx(remValue) {
  // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
  var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  // Переводим значение из rem в px
  var pxValue = remValue * htmlFontSize;

  // Округляем значение до целых пикселей (по желанию)
  return Math.round(pxValue) + 'px';
}

// remove class from all array elements
const removeClasses = (array, className) => {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:300,regular,700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto+Flex:regular,500,600,800&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Nunito:regular,500,600,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Roboto Flex";
  font-size: 0.5208335vw;
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  height: 100%;
  padding: 0;
}

body {
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 1.8rem;
  color: #2e2e2e;
  background-color: #eff1f3;
}

input,
textarea {
  -webkit-animation: bugfix infinite 1s;
  line-height: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
}

a {
  color: unset;
}

a,
a:hover {
  text-decoration: none;
}

button,
input,
a,
textarea {
  outline: none;
  cursor: pointer;
  font: inherit;
}
button:focus,
input:focus,
a:focus,
textarea:focus {
  outline: none;
}
button:active,
input:active,
a:active,
textarea:active {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
  margin: 0;
  padding: 0;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

button {
  border: none;
  color: inherit;
  font: inherit;
  text-align: inherit;
  padding: 0;
  background-color: transparent;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  width: 156rem;
  margin: 0 auto;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

svg,
img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
html.lock,
html.lock body {
  overflow: hidden;
  touch-action: none;
}

html,
body {
  overflow-x: hidden;
}

main {
  position: relative;
}

.wrapper {
  margin: 0 auto;
  max-width: 1920px;
}

.h {
  font-family: "Nunito";
  font-weight: 500;
  line-height: 120%;
}
.h_h1 {
  font-size: 6rem;
}
.h_h2 {
  font-size: 3.4rem;
}
.h_h3 {
  font-size: 2.4rem;
}

.txt16 {
  line-height: 120%;
}
.txt16_caps {
  text-transform: uppercase;
}

.btn {
  padding: 1.6rem 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 1.6rem;
  border-radius: 10rem;
  color: #ffffff;
  background-color: rgb(53, 106, 172);
}
.btn_white {
  color: rgb(105, 129, 215);
  background-color: #ffffff;
}
.btn_white svg path {
  stroke: rgb(105, 129, 215);
}
.btn_primary svg {
  width: 2.6rem;
}
.btn_primary .btn__icon {
  flex: 0 0 2.6rem;
  width: 2.6rem;
  height: 2.1rem;
}
.btn_ghost {
  padding: 0.4rem 0.4rem 0.4rem 1.4rem;
  justify-content: space-between;
  color: #d7697d;
  background-color: transparent;
  border: 1px solid transparent;
  transition: border 0.3s ease;
}
.btn_ghost .arr {
  background-color: #6981d7;
}
.btn_ghost .btn__txt {
  font-weight: 600;
}
.btn__txt {
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
}
@keyframes arrAnim1 {
  33% {
    stroke-opacity: 1;
  }
  66% {
    stroke-opacity: 0.5;
  }
  100% {
    stroke-opacity: 0.2;
  }
}
@keyframes arrAnim2 {
  33% {
    stroke-opacity: 0.2;
  }
  66% {
    stroke-opacity: 1;
  }
  100% {
    stroke-opacity: 0.5;
  }
}
@keyframes arrAnim3 {
  33% {
    stroke-opacity: 0.5;
  }
  66% {
    stroke-opacity: 0.2;
  }
  100% {
    stroke-opacity: 1;
  }
}
.link {
  position: relative;
  display: inline-flex;
}
.link::after {
  content: "";
  position: absolute;
  top: calc(100% + 0.2rem);
  left: 0;
  width: 100%;
  height: 0.2rem;
  background-color: #6981d7;
  transform-origin: left;
  transition: transform 0.3s ease;
}

.arr {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #dee2e7;
  transition: background-color 0.3s ease;
}
.arr_vertical svg {
  transform: rotate(90deg);
}
.arr svg {
  width: 1rem;
  transition: transform 0.3s ease;
}

.badge {
  padding: 1.6rem 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background-color: #ffffff;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.badge_blue {
  background-color: #6981d7;
  color: #ffffff;
}
.badge_gray {
  color: #ffffff;
  background-color: #898e9f;
}
.badge__txt {
  font-weight: 600;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 1.4rem;
}
.breadcrumbs a {
  position: relative;
  color: #898e9f;
}
.breadcrumbs a::after {
  content: "/";
  position: absolute;
  top: 0;
  right: -0.4rem;
  transform: translateX(100%);
}
input[type=text],
input[type=email],
input[type=tel],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

textarea:focus,
input:focus {
  outline: none;
}

.input {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
}
.input._form-error .input__label::after {
  content: attr(data-error);
  white-space: nowrap;
}
.input__field {
  padding: 1.6rem 2rem;
  display: block;
  width: 100%;
  background-color: #ffffff;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: 1.6rem;
  transition: color 0.3s ease, border 0.3s ease;
}
.input__field::placeholder {
  color: #898e9f;
  transition: color 0.3s ease;
}
.input__field._form-error {
  border: 1px solid #d7697d;
  color: #d7697d;
}
.input__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3rem;
  white-space: nowrap;
  color: #e9ecf5;
}
.input._form-error .input__field::placeholder {
  color: #d7697d;
}

.dropdown {
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
}
.dropdown__label {
  color: #e9ecf5;
}

.select {
  position: relative;
}
.select__body {
  position: relative;
}
.select__title {
  position: relative;
  z-index: 3;
  width: 100%;
  border-radius: 1.6rem;
  background-color: #ffffff;
  cursor: pointer;
}
.select__value {
  padding: 1.6rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 5.6rem;
  width: 100%;
}
.select__value > * {
  flex: 1 1 auto;
}
.select__value::after {
  content: "";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 2rem;
  width: 2rem;
  height: 2rem;
  background-image: url(./assets/images/icons/sel-arr.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}
.select__value._select-label::before {
  content: attr(data-sel-label);
  transition: color 0.3s ease;
}
._select-filled .select__value._select-label::before {
  display: none;
}
.select__value._select-label::before,
.select__value .select__content {
  max-width: 31.4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.select__text {
  flex: 1 1 auto;
}
.select__input {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.select__options {
  position: absolute;
  z-index: 2;
  top: calc(100% + 0.8rem);
  left: 0;
  padding: 2rem;
  min-width: 100%;
  border-radius: 1.6rem;
  background-color: #ffffff;
  box-shadow: 0 0 2rem rgba(52, 52, 52, 0.15);
}
.select__scroll {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 19rem;
}
.select__option {
  padding: 1.5rem 0;
  width: 100%;
  transition: color 0.3s ease;
}
.select__option:first-child {
  padding-top: 0;
}
.select__option:last-child {
  padding-bottom: 0;
}
.select__option:not(:last-child) {
  border-bottom: 1px solid #dee2e7;
}
.select__option._select-selected {
  font-weight: 500;
}
.select__group {
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column-reverse;
}
.select__subtitle {
  cursor: text;
}
.select._select-opened {
  z-index: 5;
}
.select._select-opened .select__value::after {
  transform: rotate(-180deg);
}
.select._select-error:not(.select._select-error._select-filled, .select._select-error._select-opened) .select__value._select-label::before {
  color: #d7697d;
}
._select-list {
  cursor: pointer;
}

.accordion__item {
  border-radius: 2.4rem;
  background-color: #ffffff;
}
.accordion__title {
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.accordion__title._accordion-active .arr svg {
  transform: rotate(-90deg);
}
.accordion__title._accordion-active .arr {
  background-color: #6981d7;
}
.accordion__title .arr {
  flex: 0 0 5rem;
  width: 5rem;
  height: 5rem;
}
.accordion__body {
  padding: 2.4rem;
  padding-top: 0;
}
.accordion__text {
  color: rgb(132, 132, 132);
}
.accordion__text:not(:last-child) {
  margin-bottom: 1rem;
}

body::after {
  content: "";
  position: fixed;
  z-index: 149;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(66, 66, 66, 0.1);
  backdrop-filter: blur(2rem);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.8s ease 0s;
}
.modal-show body::after {
  opacity: 1;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 3rem 2.4rem;
  visibility: hidden;
  pointer-events: none;
  transition: visibility 0.8s ease 0s;
}
.modal.modal_show {
  z-index: 150;
  visibility: visible;
  overflow: auto;
  pointer-events: auto;
}
.modal.modal_show .modal__content {
  visibility: visible;
  transform: scale(1);
}
.modal__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  width: 100%;
  min-height: 100%;
}
.modal__content {
  position: relative;
  width: 100%;
  visibility: hidden;
  transform: scale(0);
  transition: transform 0.3s ease 0s;
}
.lock .modal__content {
  visibility: visible;
}
.modal__close {
  margin-bottom: 3.3rem;
  width: 4rem;
  align-self: flex-end;
}
.modal__close img {
  object-fit: contain;
}
@media (any-hover: hover) and (min-width: 48em){
  .btn_primary:hover svg path:first-child {
    animation: arrAnim1 0.8s linear 0s infinite;
  }
  .btn_primary:hover svg path:nth-child(2) {
    animation: arrAnim2 0.8s linear 0s infinite;
  }
  .btn_primary:hover svg path:last-child {
    animation: arrAnim3 0.8s linear 0s infinite;
  }
  .btn_ghost:hover {
    border: 1px solid #6981d7;
  }
  .btn_ghost:hover .arr {
    background-color: #6981d7;
  }
  .link:hover::after {
    transform: scalex(0);
  }
}
@media (min-width: 48em){
  .txt16 {
    font-size: 1.6rem;
  }
}
@media (min-width: 1920px){
  html {
    font-size: 10px;
  }
}
@media (max-width: 48em){
  html {
    font-size: 5px;
    font-size: 1.5625vw;
    font-size: 1.3333333333vw;
    -webkit-text-size-adjust: none;
  }
  body {
    font-size: 3rem;
    -webkit-text-size-adjust: none;
  }
  .container {
    padding: 0 3.2rem;
    width: 100%;
  }
  .h_h2 {
    font-size: 4.4rem;
  }
  .h_h3 {
    font-size: 3.6rem;
  }
  .btn_primary {
    padding: 3.2rem 5rem;
  }
  .btn_primary svg {
    width: 4rem;
  }
  .btn_primary .btn__icon {
    flex: 0 0 4rem;
    width: 4rem;
    height: 3.5rem;
  }
  .btn_ghost {
    padding: 0;
    border: none;
  }
  .btn {
    column-gap: 3.2rem;
    border-radius: 20rem;
  }
  .btn__txt {
    font-size: 3rem;
  }
  .link {
    border-bottom: 0.4rem solid #6981d7;
  }
  .link::after {
    content: none;
  }
  .arr {
    flex: 0 0 5rem;
    width: 5rem;
    height: 5rem;
  }
  .arr svg {
    width: 1.5rem;
  }
  .badge {
    padding: 2.4rem 4.8rem;
    border-radius: 20rem;
  }
  .breadcrumbs {
    column-gap: 2.6rem;
  }
  .breadcrumbs a::after {
    right: -0.8rem;
  }
  .input {
    row-gap: 1.6rem;
  }
  .input__field {
    padding: 2.4rem 3.6rem;
    border-radius: 3.2rem;
  }
  .dropdown {
    row-gap: 1.6rem;
  }
  .select__title {
    border-radius: 3.2rem;
  }
  .select__value {
    padding: 2.4rem 3.2rem;
    gap: 4rem;
    height: 8.8rem;
  }
  .select__value::after {
    flex: 0 0 3.2rem;
    width: 3.2rem;
    height: 3.2rem;
  }
  .select__options {
    padding: 3.2rem;
    border-radius: 3.2rem;
  }
  .select__option {
    padding: 2.4rem 0;
  }
  .accordion__item {
    border-radius: 5rem;
  }
  .accordion__title {
    padding: 3.2rem;
  }
  .accordion__title .arr {
    flex: 0 0 9rem;
    width: 9rem;
    height: 9rem;
  }
  .accordion__body {
    padding: 3.2rem;
    padding-top: 0;
  }
  .modal__close {
    margin-bottom: 8rem;
    width: 4.8rem;
  }
}
@media (any-hover: hover){
  .arr:hover {
    background-color: rgb(53, 106, 172);
  }
  .badge_has-hover:hover {
    background-color: rgb(96, 133, 180);
    color: #ffffff;
  }
  .select__option:hover:not(.select__option:hover.select__subtitle) {
    cursor: pointer;
  }
  .accordion__title .arr:hover {
    background-color: #6981d7;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/set.scss","webpack://./src/scss/style.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_link.scss","webpack://./src/ui/styles/_arrow.scss","webpack://./src/ui/styles/_badge.scss","webpack://./src/ui/styles/_breadcrumbs.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_accordion.scss","webpack://./src/ui/styles/_modals.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: 'Roboto Flex'; // шрифт по умолчанию по сайту\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    height: 100%;\n    padding: 0;\n}\n\nbody {\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-size: 1.8rem;\n    color: $fontColor; // цвет по умолчанию текста по сайту\n    background-color: $bgColor;\n}\n\ninput,\ntextarea {\n    -webkit-animation: bugfix infinite 1s;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\na {\n    color: unset;\n}\na,\na:hover {\n    text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        outline: none;\n    }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: 0;\n    padding: 0;\n}\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n\nbutton {\n    border: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    padding: 0;\n    background-color: transparent;\n}\nul {\n    padding: 0;\n    margin: 0;\n}\n\nul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.container {\n    width: 156rem;\n    margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n}\n\nsvg,\nimg {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (min-width: 1920px) {\n    html {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 48em) {\n    html {\n        font-size: 5px;\n        font-size: 1.5625vw;\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n        -webkit-text-size-adjust: none;\n    }\n\n    body {\n        font-size: 3rem;\n        -webkit-text-size-adjust: none;\n    }\n\n    .container {\n        padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n        width: 100%;\n    }\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n// colors\n$white: #ffffff;\n$black: #000000;\n$fontColor: #2e2e2e;\n$bgColor: #eff1f3;\n$blue: #6981d7;\n$lightBlue: #63b3df;\n$red: #d7697d;\n$gray: #dee2e7;\n$textGray: #898e9f;\n$lightGray: #e9ecf5;\n\n// ---------------------------------- fonts ---------------------------------\n\n@import url(https://fonts.googleapis.com/css?family=Montserrat:300,regular,700&display=swap);\n@import url(https://fonts.googleapis.com/css?family=Roboto+Flex:regular,500,600,800&display=swap);\n@import url(https://fonts.googleapis.com/css?family=Nunito:regular,500,600,700&display=swap);\n\n// local fonts\n// @import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// html\nhtml.lock,\nhtml.lock body {\n    overflow: hidden;\n    touch-action: none;\n}\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\n// main\nmain {\n    position: relative;\n}\n\n.wrapper {\n    margin: 0 auto;\n    max-width: 1920px;\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './sections/header';\n@import './sections/footer';\n\n// ui\n@import '../ui/styles/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n@import './dev/kie6er.scss';\n",".h {\n    font-family: 'Nunito';\n    font-weight: 500;\n    line-height: 120%;\n\n    &_h1 {\n        font-size: 6rem;\n    }\n\n    &_h2 {\n        font-size: 3.4rem;\n        @media (max-width: 48em) {\n            font-size: 4.4rem;\n        }\n    }\n\n    &_h3 {\n        font-size: 2.4rem;\n\n        @media (max-width: 48em) {\n            font-size: 3.6rem;\n        }\n    }\n}\n\n.txt16 {\n    line-height: 120%;\n\n    &_caps {\n        text-transform: uppercase;\n    }\n\n    @media (min-width: 48em) {\n        font-size: 1.6rem;\n    }\n}\n",".btn {\n    padding: 1.6rem 3.2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 1.6rem;\n    border-radius: 10rem;\n    color: $white;\n    background-color: rgba(53, 106, 172, 1);\n\n    &_white {\n        color: rgba(105, 129, 215, 1);\n        background-color: $white;\n        svg path {\n            stroke: rgba(105, 129, 215, 1);\n        }\n    }\n\n    &_primary {\n        svg {\n            width: 2.6rem;\n        }\n\n        .btn__icon {\n            flex: 0 0 2.6rem;\n            width: 2.6rem;\n            height: 2.1rem;\n        }\n\n        @media (max-width: 48em) {\n            padding: 3.2rem 5rem;\n\n            svg {\n                width: 4rem;\n            }\n\n            .btn__icon {\n                flex: 0 0 4rem;\n                width: 4rem;\n                height: 3.5rem;\n            }\n        }\n    }\n\n    &_ghost {\n        padding: 0.4rem 0.4rem 0.4rem 1.4rem;\n        justify-content: space-between;\n        color: $red;\n        background-color: transparent;\n        border: 1px solid transparent;\n        transition: border 0.3s ease;\n\n        .arr {\n            background-color: $blue;\n        }\n\n        .btn__txt {\n            font-weight: 600;\n        }\n\n        @media (max-width: 48em) {\n            padding: 0;\n            border: none;\n        }\n    }\n\n    @media (any-hover: hover) and (min-width: 48em) {\n        &_primary {\n            &:hover {\n                svg path {\n                    &:first-child {\n                        animation: arrAnim1 0.8s linear 0s infinite;\n                    }\n                    &:nth-child(2) {\n                        animation: arrAnim2 0.8s linear 0s infinite;\n                    }\n                    &:last-child {\n                        animation: arrAnim3 0.8s linear 0s infinite;\n                    }\n                }\n            }\n        }\n        &_ghost {\n            &:hover {\n                border: 1px solid $blue;\n                .arr {\n                    background-color: $blue;\n                }\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        column-gap: 3.2rem;\n        border-radius: 20rem;\n    }\n\n    // .btn__txt\n\n    &__txt {\n        font-weight: 500;\n        font-size: 2rem;\n        line-height: 1;\n\n        @media (max-width: 48em) {\n            font-size: 3rem;\n        }\n    }\n\n    // .btn__icon\n\n    &__icon {\n    }\n}\n\n@keyframes arrAnim1 {\n    33% {\n        stroke-opacity: 1;\n    }\n    66% {\n        stroke-opacity: 0.5;\n    }\n    100% {\n        stroke-opacity: 0.2;\n    }\n}\n@keyframes arrAnim2 {\n    33% {\n        stroke-opacity: 0.2;\n    }\n    66% {\n        stroke-opacity: 1;\n    }\n    100% {\n        stroke-opacity: 0.5;\n    }\n}\n@keyframes arrAnim3 {\n    33% {\n        stroke-opacity: 0.5;\n    }\n    66% {\n        stroke-opacity: 0.2;\n    }\n    100% {\n        stroke-opacity: 1;\n    }\n}\n",".link {\n    position: relative;\n    display: inline-flex;\n\n    &::after {\n        content: '';\n        position: absolute;\n        top: calc(100% + 0.2rem);\n        left: 0;\n        width: 100%;\n        height: 0.2rem;\n        background-color: $blue;\n        transform-origin: left;\n        transition: transform 0.3s ease;\n    }\n\n    @media (any-hover: hover) and (min-width: 48em) {\n        &:hover {\n            &::after {\n                transform: scalex(0);\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        border-bottom: 0.4rem solid $blue;\n        &::after {\n            content: none;\n        }\n    }\n}\n",".arr {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 4rem;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    background-color: $gray;\n    transition: background-color 0.3s ease;\n\n    &_vertical {\n        svg {\n            transform: rotate(90deg);\n        }\n    }\n\n    svg {\n        width: 1rem;\n        transition: transform 0.3s ease;\n    }\n\n    @media (any-hover: hover) {\n        &:hover {\n            background-color: rgba(53, 106, 172, 1);\n        }\n    }\n\n    @media (max-width: 48em) {\n        flex: 0 0 5rem;\n        width: 5rem;\n        height: 5rem;\n\n        svg {\n            width: 1.5rem;\n        }\n    }\n}\n",".badge {\n    padding: 1.6rem 3.2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10rem;\n    background-color: $white;\n    transition: background-color 0.3s ease, color 0.3s ease;\n\n    &_blue {\n        background-color: $blue;\n        color: $white;\n    }\n\n    &_gray {\n        color: $white;\n        background-color: $textGray;\n    }\n\n    @media (any-hover: hover) {\n        &_has-hover {\n            &:hover {\n                background-color: rgba(96, 133, 180, 1);\n                color: $white;\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        padding: 2.4rem 4.8rem;\n        border-radius: 20rem;\n    }\n\n    // .badge__txt\n\n    &__txt {\n        font-weight: 600;\n    }\n}\n",".breadcrumbs {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    column-gap: 1.4rem;\n\n    a {\n        position: relative;\n        color: $textGray;\n\n        &::after {\n            content: '/';\n            position: absolute;\n            top: 0;\n            right: -0.4rem;\n            transform: translateX(100%);\n        }\n    }\n\n    @media (max-width: 48em) {\n        column-gap: 2.6rem;\n\n        a {\n            &::after {\n                right: -0.8rem;\n            }\n        }\n    }\n\n    // .breadcrumbs__txt\n\n    &__txt {\n    }\n}\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.input {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    row-gap: 1.2rem;\n    &._form-error {\n        .input__label {\n            &::after {\n                content: attr(data-error);\n                white-space: nowrap;\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        row-gap: 1.6rem;\n    }\n\n    // .input__field\n\n    &__field {\n        padding: 1.6rem 2rem;\n        display: block;\n        width: 100%;\n        background-color: $white;\n        line-height: 1;\n        border: 1px solid transparent;\n        border-radius: 1.6rem;\n        transition: color 0.3s ease, border 0.3s ease;\n        &::placeholder {\n            color: $textGray;\n            transition: color 0.3s ease;\n        }\n        &._form-error {\n            border: 1px solid $red;\n            color: $red;\n        }\n\n        @media (max-width: 48em) {\n            padding: 2.4rem 3.6rem;\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .input__label\n\n    &__label {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        column-gap: 3rem;\n        white-space: nowrap;\n        color: $lightGray;\n    }\n\n    &._form-focus {\n    }\n    &._form-error {\n        .input__field::placeholder {\n            color: $red;\n        }\n    }\n}\n",".dropdown {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1.2rem;\n\n    @media (max-width: 48em) {\n        row-gap: 1.6rem;\n    }\n\n    // .dropdown__label\n\n    &__label {\n        color: $lightGray;\n    }\n}\n\n.select {\n    position: relative;\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        position: relative;\n        z-index: 3;\n        width: 100%;\n        border-radius: 1.6rem;\n        background-color: $white;\n        cursor: pointer;\n\n        @media (max-width: 48em) {\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .select__value\n\n    &__value {\n        padding: 1.6rem 2rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n        height: 5.6rem;\n        width: 100%;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 2rem;\n            width: 2rem;\n            height: 2rem;\n            background-image: url(./assets/images/icons/sel-arr.svg);\n            background-size: contain;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n        }\n        &._select-label {\n            &::before {\n                content: attr(data-sel-label);\n                transition: color 0.3s ease;\n                ._select-filled & {\n                    display: none;\n                }\n            }\n        }\n        &._select-label::before,\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        @media (max-width: 48em) {\n            padding: 2.4rem 3.2rem;\n            gap: 4rem;\n            height: 8.8rem;\n            &::after {\n                flex: 0 0 3.2rem;\n                width: 3.2rem;\n                height: 3.2rem;\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        // &:not(._select-filled &) {\n        //     display: none;\n        // }\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% + 0.8rem);\n        left: 0;\n        padding: 2rem;\n        min-width: 100%;\n        border-radius: 1.6rem;\n        background-color: $white;\n        box-shadow: 0 0 2rem rgba(52, 52, 52, 0.15);\n\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 19rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n            }\n            .simplebar-scrollbar {\n            }\n        }\n    }\n\n    // .select__option\n    &__option {\n        padding: 1.5rem 0;\n        width: 100%;\n        transition: color 0.3s ease;\n        &:first-child {\n            padding-top: 0;\n        }\n        &:last-child {\n            padding-bottom: 0;\n        }\n        &:not(:last-child) {\n            border-bottom: 1px solid $gray;\n        }\n\n        &._select-selected {\n            font-weight: 500;\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                }\n            }\n        }\n        @media (max-width: 48em) {\n            padding: 2.4rem 0;\n        }\n    }\n\n    // .select__group\n\n    &__group {\n        display: inline-flex;\n        align-items: flex-start;\n        flex-direction: column-reverse;\n    }\n\n    // .select__asset\n\n    &__asset {\n    }\n\n    // .select__text\n\n    &__text {\n    }\n\n    // .select__hint\n\n    &__hint {\n    }\n\n    // .select__subtitle\n\n    &__subtitle {\n        cursor: text;\n    }\n\n    // select state\n    &._select-opened {\n        z-index: 5;\n        .select__value::after {\n            transform: rotate(-180deg);\n        }\n    }\n    &._select-focused {\n    }\n    &._select-error {\n        &:not(&._select-filled, &._select-opened) {\n            .select__value._select-label {\n                &::before {\n                    color: $red;\n                }\n            }\n        }\n    }\n    &._select-filled {\n        &:not(&._select-opened) {\n            &:not(&._select-show-val) {\n            }\n        }\n    }\n    &._select-show-val {\n        &._select-focused,\n        &._select-filled,\n        &._select-error,\n        &._select-disabled {\n        }\n    }\n    &._select-disabled {\n    }\n    &._select-multiple {\n    }\n    &._select-active {\n    }\n    &._select-checkbox {\n    }\n}\n\n// list\n._select-list {\n    cursor: pointer;\n}\n",".accordion {\n    // .accordion__item\n\n    &__item {\n        border-radius: 2.4rem;\n        background-color: $white;\n        @media (max-width: 48em) {\n            border-radius: 5rem;\n        }\n    }\n\n    // .accordion__title\n\n    &__title {\n        padding: 2.4rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n        &._accordion-active {\n            .arr svg {\n                transform: rotate(-90deg);\n            }\n            .arr {\n                background-color: $blue;\n            }\n        }\n        .arr {\n            flex: 0 0 5rem;\n            width: 5rem;\n            height: 5rem;\n            @media (any-hover: hover) {\n                &:hover {\n                    background-color: $blue;\n                }\n            }\n        }\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            .arr {\n                flex: 0 0 9rem;\n                width: 9rem;\n                height: 9rem;\n            }\n        }\n    }\n\n    // .accordion__title-txt\n\n    &__title-txt {\n    }\n\n    // .accordion__body\n\n    &__body {\n        padding: 2.4rem;\n        padding-top: 0;\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            padding-top: 0;\n        }\n    }\n\n    // .accordion__text\n\n    &__text {\n        color: rgba(132, 132, 132, 1);\n        &:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n}\n","body::after {\n    content: '';\n    position: fixed;\n    z-index: 149;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(66, 66, 66, 0.1);\n    backdrop-filter: blur(2rem);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.8s ease 0s;\n    .modal-show & {\n        opacity: 1;\n    }\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 3rem 2.4rem;\n    visibility: hidden;\n    pointer-events: none;\n    transition: visibility 0.8s ease 0s;\n    &.modal_show {\n        z-index: 150;\n        visibility: visible;\n        overflow: auto;\n        pointer-events: auto;\n        .modal__content {\n            visibility: visible;\n            transform: scale(1);\n        }\n    }\n\n    // .modal__wrapper\n\n    &__wrapper {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        flex: 1 1 auto;\n        width: 100%;\n        min-height: 100%;\n    }\n\n    // .modal__content\n\n    &__content {\n        position: relative;\n        width: 100%;\n        visibility: hidden;\n        transform: scale(0);\n        transition: transform 0.3s ease 0s;\n        .lock & {\n            visibility: visible;\n        }\n    }\n\n    // .modal__close\n\n    &__close {\n        margin-bottom: 3.3rem;\n        width: 4rem;\n        align-self: flex-end;\n        img {\n            object-fit: contain;\n        }\n        @media (max-width: 48em) {\n            margin-bottom: 8rem;\n            width: 4.8rem;\n        }\n    }\n}\n\n// --------------------------------------------------------------------------\n",null],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _utils_forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/forms.js */ "./src/js/utils/forms.js");
/* harmony import */ var _utils_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/accordion.js */ "./src/js/utils/accordion.js");
/* harmony import */ var _utils_select_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/select.js */ "./src/js/utils/select.js");
/* harmony import */ var _utils_modals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/modals.js */ "./src/js/utils/modals.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev/vzmsk1.js */ "./src/js/dev/vzmsk1.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev/markusDM.js */ "./src/js/dev/markusDM.js");
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dev_markusDM_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev/ukik0.js */ "./src/js/dev/ukik0.js");
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dev/kie6er.js */ "./src/js/dev/kie6er.js");
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dev_kie6er_js__WEBPACK_IMPORTED_MODULE_8__);


// ---------------------------------- forms ---------------------------------



// form fields
_utils_forms_js__WEBPACK_IMPORTED_MODULE_1__.formFieldsInit({
  viewPass: false
});

// form submit
_utils_forms_js__WEBPACK_IMPORTED_MODULE_1__.formSubmit();

// ---------------------------------- utils ---------------------------------

// tabs
// import './utils/tabs.js';

// accordion


// select


// modals


// ---------------------------------- libs ----------------------------------

// dynamic dom
// import './libs/dd.js';

// --------------------------------------------------------------------------





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saWlCQUFpaUIsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxVQUFVLEtBQUssUUFBUSxVQUFVLEtBQUssUUFBUSxVQUFVLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFFBQVEsUUFBUSxVQUFVLFFBQVEsUUFBUSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZ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Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUU1Qjs7QUFFMEM7O0FBRTFDO0FBQ0EzUCwyREFBb0IsQ0FBQztFQUFFcEUsUUFBUSxFQUFFO0FBQU0sQ0FBQyxDQUFDOztBQUV6QztBQUNBb0UsdURBQWdCLENBQUMsQ0FBQzs7QUFFbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUM4Qjs7QUFFOUI7QUFDMkI7O0FBRTNCO0FBQzJCOztBQUUzQjs7QUFFQTtBQUNBOztBQUVBOztBQUV5QjtBQUNFO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvbW9kdWxlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvbW9kYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzZjMmQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtb2R1bGVzID0ge307XG4iLCJpbXBvcnQge1xuICBkYXRhTWVkaWFRdWVyaWVzLFxuICBfc2xpZGVUb2dnbGUsXG4gIF9zbGlkZVVwLFxuICBfc2xpZGVEb3duLFxufSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGNvbnN0IGFjY29yZGlvbiA9ICgpID0+IHtcbiAgY29uc3QgYWNjb3JkaW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb25dJyk7XG5cbiAgaWYgKGFjY29yZGlvbkl0ZW1zLmxlbmd0aCkge1xuICAgIGNvbnN0IGluaXRBY2NvcmRpb24gPSAoYWNjb3JkaW9uSXRlbXMsIG1hdGNoTWVkaWEgPSBmYWxzZSkgPT4ge1xuICAgICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaChhY2NvcmRpb25Hcm91cCA9PiB7XG4gICAgICAgIGFjY29yZGlvbkdyb3VwID0gbWF0Y2hNZWRpYSA/IGFjY29yZGlvbkdyb3VwLml0ZW0gOiBhY2NvcmRpb25Hcm91cDtcbiAgICAgICAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcyB8fCAhbWF0Y2hNZWRpYSkge1xuICAgICAgICAgIGFjY29yZGlvbkdyb3VwLmNsYXNzTGlzdC5hZGQoJ19hY2NvcmRpb24taW5pdCcpO1xuICAgICAgICAgIGluaXRBY2NvcmRpb25Cb2R5KGFjY29yZGlvbkdyb3VwKTtcbiAgICAgICAgICBhY2NvcmRpb25Hcm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEFjY29yZGlvbkFjdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjY29yZGlvbkdyb3VwLmNsYXNzTGlzdC5yZW1vdmUoJ19hY2NvcmRpb24taW5pdCcpO1xuICAgICAgICAgIGluaXRBY2NvcmRpb25Cb2R5KGFjY29yZGlvbkdyb3VwLCBmYWxzZSk7XG4gICAgICAgICAgYWNjb3JkaW9uR3JvdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRBY2NvcmRpb25BY3Rpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbml0QWNjb3JkaW9uQm9keSA9IChhY2NvcmRpb25Hcm91cCwgaGlkZUFjY29yZGlvbkJvZHkgPSB0cnVlKSA9PiB7XG4gICAgICBsZXQgdGl0bGVzID0gYWNjb3JkaW9uR3JvdXAucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XG4gICAgICBpZiAodGl0bGVzLmxlbmd0aCkge1xuICAgICAgICB0aXRsZXMgPSBBcnJheS5mcm9tKHRpdGxlcykuZmlsdGVyKFxuICAgICAgICAgIGl0ZW0gPT4gaXRlbS5jbG9zZXN0KCdbZGF0YS1hY2NvcmRpb25dJykgPT09IGFjY29yZGlvbkdyb3VwXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICAgICAgICBpZiAoaGlkZUFjY29yZGlvbkJvZHkpIHtcbiAgICAgICAgICAgIHRpdGxlLnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgICAgIGlmICghdGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWNjb3JkaW9uLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgIHRpdGxlLm5leHRFbGVtZW50U2libGluZy5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgICAgICAgICB0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmcuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNldEFjY29yZGlvbkFjdGlvbnMgPSBlID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKSkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY2NvcmRpb24taXRlbV0nKTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aXRsZS5jbG9zZXN0KCdbZGF0YS1hY2NvcmRpb25dJyk7XG4gICAgICAgIGNvbnN0IGlzT25lQWN0aXZlSXRlbSA9IGdyb3VwLmhhc0F0dHJpYnV0ZSgnZGF0YS1hY2NvcmRpb24tb25lLWFjdGl2ZScpO1xuICAgICAgICBjb25zdCBhY2NvcmRpb25TcGVlZCA9IGdyb3VwLmRhdGFzZXQuYWNjb3JkaW9uU3BlZWRcbiAgICAgICAgICA/IHBhcnNlSW50KGdyb3VwLmRhdGFzZXQuYWNjb3JkaW9uU3BlZWQpXG4gICAgICAgICAgOiA1MDA7XG5cbiAgICAgICAgaWYgKCFncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcuX3NsaWRlJykubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgaXNPbmVBY3RpdmVJdGVtICYmXG4gICAgICAgICAgICAhdGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdfYWNjb3JkaW9uLWFjdGl2ZScpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBoaWRlQWNjb3JkaW9uQm9keShncm91cCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ19hY2NvcmRpb24tYWN0aXZlJyk7XG4gICAgICAgICAgX3NsaWRlVG9nZ2xlKHRpdGxlLm5leHRFbGVtZW50U2libGluZywgYWNjb3JkaW9uU3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGhpZGVBY2NvcmRpb25Cb2R5ID0gYWNjb3JkaW9uR3JvdXAgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlVGl0bGUgPSBhY2NvcmRpb25Hcm91cC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dLl9hY2NvcmRpb24tYWN0aXZlJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGFjY29yZGlvblNwZWVkID0gYWNjb3JkaW9uR3JvdXAuZGF0YXNldC5hY2NvcmRpb25TcGVlZFxuICAgICAgICA/IHBhcnNlSW50KGFjY29yZGlvbkdyb3VwLmRhdGFzZXQuYWNjb3JkaW9uU3BlZWQpXG4gICAgICAgIDogNTAwO1xuICAgICAgaWYgKGFjdGl2ZVRpdGxlICYmICFhY2NvcmRpb25Hcm91cC5xdWVyeVNlbGVjdG9yQWxsKCcuX3NsaWRlJykubGVuZ3RoKSB7XG4gICAgICAgIGFjdGl2ZVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ19hY2NvcmRpb24tYWN0aXZlJyk7XG4gICAgICAgIF9zbGlkZVVwKGFjdGl2ZVRpdGxlLm5leHRFbGVtZW50U2libGluZywgYWNjb3JkaW9uU3BlZWQpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYWNjb3JkaW9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb24tY2xvc2VdJyk7XG4gICAgaWYgKGFjY29yZGlvbkNsb3NlLmxlbmd0aCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uXScpKSB7XG4gICAgICAgICAgYWNjb3JkaW9uQ2xvc2UuZm9yRWFjaChhY2NvcmRpb25JdGVtQ2xvc2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhY2NvcmRpb25JdGVtQ2xvc2UuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICAgICAgY29uc3Qgc3BlZWQgPSBzcG9sbGVyc0Jsb2NrLmRhdGFzZXQuYWNjb3JkaW9uU3BlZWRcbiAgICAgICAgICAgICAgPyBwYXJzZUludChncm91cC5kYXRhc2V0LmFjY29yZGlvblNwZWVkKVxuICAgICAgICAgICAgICA6IDUwMDtcbiAgICAgICAgICAgIGFjY29yZGlvbkl0ZW1DbG9zZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWNjb3JkaW9uLWFjdGl2ZScpO1xuICAgICAgICAgICAgX3NsaWRlVXAoYWNjb3JkaW9uSXRlbUNsb3NlLm5leHRFbGVtZW50U2libGluZywgc3BlZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZWdJdGVtcyA9IEFycmF5LmZyb20oYWNjb3JkaW9uSXRlbXMpLmZpbHRlcihmdW5jdGlvbiAoXG4gICAgICBpdGVtLFxuICAgICAgaW5kZXgsXG4gICAgICBzZWxmXG4gICAgKSB7XG4gICAgICByZXR1cm4gIWl0ZW0uZGF0YXNldC5hY2NvcmRpb24uc3BsaXQoJywnKVswXTtcbiAgICB9KTtcblxuICAgIC8vIGluaXQgcmVndWxhciBhY2NvcmRpb24gaXRlbXNcbiAgICBpZiAocmVnSXRlbXMubGVuZ3RoKSB7XG4gICAgICBpbml0QWNjb3JkaW9uKHJlZ0l0ZW1zKTtcbiAgICB9XG5cbiAgICAvLyBnZXQgYWNjb3JkaW9uIGl0ZW1zIHdpdGggbWVkaWEgcXVlcmllc1xuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gZGF0YU1lZGlhUXVlcmllcyhhY2NvcmRpb25JdGVtcywgJ2FjY29yZGlvbicpO1xuXG4gICAgaWYgKG1kUXVlcmllc0FycmF5ICYmIG1kUXVlcmllc0FycmF5Lmxlbmd0aCkge1xuICAgICAgbWRRdWVyaWVzQXJyYXkuZm9yRWFjaChtZFF1ZXJpZXNJdGVtID0+IHtcbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbml0QWNjb3JkaW9uKG1kUXVlcmllc0l0ZW0uaXRlbXNBcnJheSwgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGluaXRBY2NvcmRpb24obWRRdWVyaWVzSXRlbS5pdGVtc0FycmF5LCBtZFF1ZXJpZXNJdGVtLm1hdGNoTWVkaWEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuYWNjb3JkaW9uKCk7XG4iLCIvKipcbiAqIGFkZHMgYWN0aW9ucyB0byBmb3JtIGZpZWxkc1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtRmllbGRzSW5pdChvcHRpb25zID0geyB2aWV3UGFzczogZmFsc2UgfSkge1xuICBjb25zdCBmb3JtRmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnaW5wdXRbcGxhY2Vob2xkZXJdLHRleHRhcmVhW3BsYWNlaG9sZGVyXSdcbiAgKTtcbiAgaWYgKGZvcm1GaWVsZHMubGVuZ3RoKSB7XG4gICAgZm9ybUZpZWxkcy5mb3JFYWNoKGZvcm1GaWVsZCA9PiB7XG4gICAgICBpZiAoIWZvcm1GaWVsZC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGxhY2Vob2xkZXItbm9oaWRlJykpIHtcbiAgICAgICAgZm9ybUZpZWxkLmRhdGFzZXQucGxhY2Vob2xkZXIgPSBmb3JtRmllbGQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgKHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdmaWxlJyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdjaGVja2JveCcgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAncmFkaW8nICYmXG4gICAgICAgICF0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5xdWFudGl0eScpICYmXG4gICAgICAgICF0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5pbnB1dC1yb3cnKSkgfHxcbiAgICAgIHRhcmdldEVsZW1lbnQudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJ1xuICAgICkge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQuZGF0YXNldC5wbGFjZWhvbGRlcikge1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBsYWNlaG9sZGVyID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAoIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW5vLWZvY3VzLWNsYXNzZXMnKSkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19mb3JtLWZvY3VzJyk7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfZm9ybS1mb2N1cycpO1xuICAgICAgfVxuICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJyk7XG4gICAgICBmb3JtVmFsaWRhdGUucmVtb3ZlRXJyb3IodGFyZ2V0RWxlbWVudCk7XG4gICAgfVxuICB9KTtcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgICh0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnZmlsZScgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnY2hlY2tib3gnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ3JhZGlvJyAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcucXVhbnRpdHknKSAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQtcm93JykpIHx8XG4gICAgICB0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdURVhUQVJFQSdcbiAgICApIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wbGFjZWhvbGRlciA9IHRhcmdldEVsZW1lbnQuZGF0YXNldC5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICAgIGlmICghdGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tZm9jdXMtY2xhc3NlcycpKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XG4gICAgICB9XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtdmFsaWRhdGUnKSkge1xuICAgICAgICBmb3JtVmFsaWRhdGUudmFsaWRhdGVJbnB1dCh0YXJnZXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfZm9ybS1lcnJvcicpICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudmFsdWUudHJpbSgpXG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QuYWRkKCdfZmlsbGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJy5pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWxlLWlucHV0XScpLmxlbmd0aCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpbGUtaW5wdXRdJykuZm9yRWFjaChmaWxlSW5wdXQgPT4ge1xuICAgICAgZm9ybVZhbGlkYXRlLnZhbGlkYXRlSW5wdXQoZmlsZUlucHV0KTtcbiAgICAgIGZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9ybVZhbGlkYXRlLnZhbGlkYXRlSW5wdXQoZmlsZUlucHV0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudmlld1Bhc3MpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBsZXQgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnW2NsYXNzKj1cIl9fdmlld3Bhc3NcIl0nKSkge1xuICAgICAgICBsZXQgaW5wdXRUeXBlID0gdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ192aWV3cGFzcy1hY3RpdmUnKVxuICAgICAgICAgID8gJ3Bhc3N3b3JkJ1xuICAgICAgICAgIDogJ3RleHQnO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcignaW5wdXQnKVxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBpbnB1dFR5cGUpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ192aWV3cGFzcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyB2YWxpZGF0aW9uIHZhclxubGV0IGZvcm1WYWxpZGF0ZSA9IHtcbiAgZ2V0RXJyb3JzKGZvcm0pIHtcbiAgICBsZXQgZXJyb3IgPSAwO1xuICAgIGxldCBmb3JtUmVxdWlyZWRJdGVtcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLXJlcXVpcmVkXScpO1xuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW1zLmZvckVhY2goZm9ybVJlcXVpcmVkSXRlbSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoZm9ybVJlcXVpcmVkSXRlbS5vZmZzZXRQYXJlbnQgIT09IG51bGwgfHxcbiAgICAgICAgICAgIGZvcm1SZXF1aXJlZEl0ZW0udGFnTmFtZSA9PT0gJ1NFTEVDVCcpICYmXG4gICAgICAgICAgIWZvcm1SZXF1aXJlZEl0ZW0uZGlzYWJsZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgZXJyb3IgKz0gdGhpcy52YWxpZGF0ZUlucHV0KGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9LFxuICB2YWxpZGF0ZUlucHV0KGZvcm1SZXF1aXJlZEl0ZW0pIHtcbiAgICBsZXQgZXJyb3IgPSAwO1xuXG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5yZXF1aXJlZCA9PT0gJ2VtYWlsJykge1xuICAgICAgZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSA9IGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUucmVwbGFjZSgnICcsICcnKTtcbiAgICAgIGlmICh0aGlzLmVtYWlsVGVzdChmb3JtUmVxdWlyZWRJdGVtKSkge1xuICAgICAgICB0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICBlcnJvcisrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZm9ybVJlcXVpcmVkSXRlbS50eXBlID09PSAnY2hlY2tib3gnICYmXG4gICAgICAhZm9ybVJlcXVpcmVkSXRlbS5jaGVja2VkXG4gICAgKSB7XG4gICAgICB0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgZXJyb3IrKztcbiAgICB9IGVsc2UgaWYgKGZvcm1SZXF1aXJlZEl0ZW0udHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICBjb25zdCB0aHMgPSB0aGlzO1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnN0IG1heFNpemUgPSBOdW1iZXIoZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmZpbGVJbnB1dCk7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmb3JtUmVxdWlyZWRJdGVtLmZpbGVzWzBdO1xuXG4gICAgICAgIGlmIChtYXhTaXplICYmIGZpbGUpIHtcbiAgICAgICAgICBjb25zdCBwYXJlbnQgPSBmb3JtUmVxdWlyZWRJdGVtLmNsb3Nlc3QoJy5maWxlLWlucHV0Jyk7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWxlLXR4dF0nKTtcbiAgICAgICAgICBjb25zdCBuYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbGUtbmFtZV0nKTtcbiAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsZS1leHRlbnNpb25dJyk7XG4gICAgICAgICAgY29uc3QgaW1nID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbGUtaW1nXScpO1xuICAgICAgICAgIGNvbnN0IHNpemUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsZS1zaXplXScpO1xuICAgICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZW1vdmUtZmlsZS1idG5dJyk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZS5zcGxpdCgnLicpLnNsaWNlKDAsIC0xKS5qb2luKCcnKSxcbiAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSAvIDEwMDAwMDAsXG4gICAgICAgICAgICBleHRlbnNpb246IGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpbWcgPyAoaW1nLnNyYyA9IGUudGFyZ2V0LnJlc3VsdCkgOiBudWxsO1xuICAgICAgICAgIHRleHRcbiAgICAgICAgICAgID8gKHRleHQuaW5uZXJIVE1MID0gYNCc0LDQutGB0LjQvNCw0LvRjNC90YvQuSDRgNCw0LfQvNC10YAg0YTQsNC50LvQsCAtICR7bWF4U2l6ZX0g0LzQsWApXG4gICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgbmFtZSA/IChuYW1lLmlubmVySFRNTCA9IGRhdGEubmFtZSkgOiBudWxsO1xuICAgICAgICAgIGV4dGVuc2lvbiA/IChleHRlbnNpb24uaW5uZXJIVE1MID0gZGF0YS5leHRlbnNpb24pIDogbnVsbDtcbiAgICAgICAgICBzaXplID8gKHNpemUuaW5uZXJIVE1MID0gZGF0YS5zaXplLnRvRml4ZWQoMSkpIDogbnVsbDtcblxuICAgICAgICAgIGlmIChkYXRhLnNpemUgPiBtYXhTaXplKSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnX2Vycm9yJyk7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgPSAn0JHQvtC70YzRiNC+0Lkg0YDQsNC30LzQtdGAINGE0LDQudC70LAnO1xuICAgICAgICAgICAgdGhzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJyk7XG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnX2ZpbGxlZCcpO1xuICAgICAgICAgICAgdGhzLnJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyZW1vdmVCdG4pIHtcbiAgICAgICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19lcnJvcicpO1xuICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgICAgICAgICAgICBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgIHRocy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0uZmlsZXNbMF0pXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZvcm1SZXF1aXJlZEl0ZW0uZmlsZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgICFmb3JtUmVxdWlyZWRJdGVtLnZhbHVlLnRyaW0oKSAmJlxuICAgICAgICAhZm9ybVJlcXVpcmVkSXRlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3RhdGljJylcbiAgICAgICkge1xuICAgICAgICB0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICBlcnJvcisrO1xuICAgICAgfSBlbHNlIGlmIChmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQudmFsaWRhdGUgPT09ICdsZXR0ZXJzLW9ubHknKSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSAvWzAtOWAhQCMkJV4mKigpXytcXC09XFxbXFxde307JzpcIlxcXFx8LC48PlxcLz9+XS87XG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QoZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSkpIHtcbiAgICAgICAgICBmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQuZXJyb3IgPSBgYDtcbiAgICAgICAgICB0aGlzLmFkZEVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgICAgIGVycm9yKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9LFxuICBhZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgY29uc29sZS5sb2coZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgZm9ybVJlcXVpcmVkSXRlbS5jbGFzc0xpc3QuYWRkKCdfZm9ybS1lcnJvcicpO1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfZm9ybS1lcnJvcicpO1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJyk7XG4gICAgbGV0IGlucHV0RXJyb3IgPVxuICAgICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWVycm9yJyk7XG4gICAgaWYgKGlucHV0RXJyb3IpIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbnB1dEVycm9yKTtcbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJmb3JtLWVycm9yIHR4dDE2XCI+JHtmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQuZXJyb3J9PC9kaXY+YFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0uY2xvc2VzdCgnLmlucHV0X3ZhbGlkYXRlJykpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0uY2xvc2VzdCgnZm9ybScpLmNsYXNzTGlzdC5hZGQoJ19lcnJvcicpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSkge1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZXJyb3InKTtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZXJyb3InKTtcbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWVycm9yJykpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWVycm9yJylcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmNsb3Nlc3QoJy5pbnB1dF92YWxpZGF0ZScpKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyb3InKTtcbiAgICB9XG4gIH0sXG4gIGZvcm1DbGVhbihmb3JtKSB7XG4gICAgaWYgKCFmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1zYXZlLWZpZWxkcycpKSB7XG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQsdGV4dGFyZWEnKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbCA9IGlucHV0c1tpbmRleF07XG4gICAgICAgICAgZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XG4gICAgICAgICAgZm9ybVZhbGlkYXRlLnJlbW92ZUVycm9yKGVsKTtcblxuICAgICAgICAgIGlmIChlbC50eXBlICYmIGVsLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgICAgICAgZWwudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGVsLmNsb3Nlc3QoJy5maWxlLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgICAgICAgICAgZWwuY2xvc2VzdCgnLmZpbGUtaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyb3InKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoZWNrYm94ZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveF9faW5wdXQnKTtcbiAgICAgICAgaWYgKGNoZWNrYm94ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGVja2JveGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBjaGVja2JveGVzW2luZGV4XTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfSxcbiAgZW1haWxUZXN0KGZvcm1SZXF1aXJlZEl0ZW0pIHtcbiAgICByZXR1cm4gIS9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7Miw4fSkrJC8udGVzdChcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0udmFsdWVcbiAgICApO1xuICB9LFxufTtcblxuLyoqXG4gKiBhZGRzIHN1Ym1pdCBsb2dpY1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtU3VibWl0KG9wdGlvbnMgPSB7IHZhbGlkYXRlOiB0cnVlIH0pIHtcbiAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5mb3JtcztcbiAgaWYgKGZvcm1zLmxlbmd0aCkge1xuICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgIGZvcm1TdWJtaXRBY3Rpb24oZm9ybSwgZSk7XG4gICAgICB9KTtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgIGZvcm1WYWxpZGF0ZS5mb3JtQ2xlYW4oZm9ybSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gZm9ybVN1Ym1pdEFjdGlvbihmb3JtLCBlKSB7XG4gICAgY29uc3QgZXJyb3IgPSAhZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tdmFsaWRhdGUnKVxuICAgICAgPyBmb3JtVmFsaWRhdGUuZ2V0RXJyb3JzKGZvcm0pXG4gICAgICA6IDA7XG4gICAgaWYgKGVycm9yID09PSAwICYmICFmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5fZm9ybS1lcnJvcicpKSB7XG4gICAgICBjb25zdCBhamF4ID0gZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYWpheCcpO1xuICAgICAgaWYgKGFqYXgpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtQWN0aW9uID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpXG4gICAgICAgICAgPyBmb3JtLmdldEF0dHJpYnV0ZSgnYWN0aW9uJykudHJpbSgpXG4gICAgICAgICAgOiAnIyc7XG4gICAgICAgIGNvbnN0IGZvcm1NZXRob2QgPSBmb3JtLmdldEF0dHJpYnV0ZSgnbWV0aG9kJylcbiAgICAgICAgICA/IGZvcm0uZ2V0QXR0cmlidXRlKCdtZXRob2QnKS50cmltKClcbiAgICAgICAgICA6ICdHRVQnO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ19zZW5kaW5nJyk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZm9ybUFjdGlvbiwge1xuICAgICAgICAgIG1ldGhvZDogZm9ybU1ldGhvZCxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGxldCByZXNwb25zZVJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZW5kaW5nJyk7XG4gICAgICAgICAgZm9ybVNlbnQoZm9ybSwgcmVzcG9uc2VSZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KCdlcnJvcicpO1xuICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnX3NlbmRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1kZXYnKSkge1xuICAgICAgICAvLyBpbiBkZXZlbG9wbWVudCBtb2RlXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9ybVNlbnQoZm9ybSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGZvcm1FcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLl9mb3JtLWVycm9yJyk7XG4gICAgICBpZiAoZm9ybUVycm9yICYmIGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLWdvdG8tZXJyb3InKSkge1xuICAgICAgICBnb3RvQmxvY2soZm9ybUVycm9yLCB0cnVlLCAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gYWN0aW9ucyBhZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtXG4gIGZ1bmN0aW9uIGZvcm1TZW50KGZvcm0sIHJlc3BvbnNlUmVzdWx0ID0gYGApIHtcbiAgICAvLyBzaG93IHBvcHVwLCBpZiBwb3B1cCBtb2R1bGUgaXMgY29ubmVjdGVkIGFuZCBmb3JtIGhhcyBzZXR0aW5nXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICAgIGlmIChtb2R1bGVzLm1vZGFsKSB7XG4gICAgLy8gICAgICAgICBjb25zdCBtb2RhbCA9IGZvcm0uZGF0YXNldC5tb2RhbE1lc3NhZ2U7XG4gICAgLy8gICAgICAgICBtb2RhbCA/IG1vZHVsZXMubW9kYWwub3Blbihtb2RhbCkgOiBudWxsO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSwgMCk7XG5cbiAgICAvLyBmb3JtIHN1Ym1pdCBldmVudFxuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2Zvcm1TZW50Jywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICAgIC8vIGNsZWFuIGZvcm1cbiAgICBmb3JtVmFsaWRhdGUuZm9ybUNsZWFuKGZvcm0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBtb2R1bGVzIH0gZnJvbSAnLi4vbW9kdWxlcy5qcyc7XG5pbXBvcnQgeyBib2R5TG9ja1N0YXR1cywgYm9keUxvY2ssIGJvZHlVbmxvY2sgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGxldCBjb25maWcgPSB7XG4gICAgICBsb2dnaW5nOiB0cnVlLFxuICAgICAgaW5pdDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZU9wZW5CdXR0b246ICdkYXRhLW1vZGFsJyxcbiAgICAgIGF0dHJpYnV0ZUNsb3NlQnV0dG9uOiAnZGF0YS1jbG9zZScsXG4gICAgICBmaXhFbGVtZW50U2VsZWN0b3I6ICdbZGF0YS1scF0nLFxuICAgICAgeW91dHViZUF0dHJpYnV0ZTogJ2RhdGEtbW9kYWwteW91dHViZScsXG4gICAgICB5b3V0dWJlUGxhY2VBdHRyaWJ1dGU6ICdkYXRhLW1vZGFsLXlvdXR1YmUtcGxhY2UnLFxuICAgICAgc2V0QXV0b3BsYXlZb3V0dWJlOiB0cnVlLFxuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBtb2RhbDogJ21vZGFsJyxcbiAgICAgICAgLy8gbW9kYWxXcmFwcGVyOiAnbW9kYWxfX3dyYXBwZXInLFxuICAgICAgICBtb2RhbENvbnRlbnQ6ICdtb2RhbF9fY29udGVudCcsXG4gICAgICAgIG1vZGFsQWN0aXZlOiAnbW9kYWxfc2hvdycsXG4gICAgICAgIGJvZHlBY3RpdmU6ICdtb2RhbC1zaG93JyxcbiAgICAgIH0sXG4gICAgICBmb2N1c0NhdGNoOiB0cnVlLFxuICAgICAgY2xvc2VFc2M6IHRydWUsXG4gICAgICBib2R5TG9jazogdHJ1ZSxcbiAgICAgIGhhc2hTZXR0aW5nczoge1xuICAgICAgICBsb2NhdGlvbjogdHJ1ZSxcbiAgICAgICAgZ29IYXNoOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBhZnRlck9wZW46IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMueW91VHViZUNvZGU7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICB0aGlzLnRhcmdldE9wZW4gPSB7XG4gICAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgICBlbGVtZW50OiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMucHJldmlvdXNPcGVuID0ge1xuICAgICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgICAgZWxlbWVudDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmxhc3RDbG9zZWQgPSB7XG4gICAgICBzZWxlY3RvcjogZmFsc2UsXG4gICAgICBlbGVtZW50OiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuX2RhdGFWYWx1ZSA9IGZhbHNlO1xuICAgIHRoaXMuaGFzaCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fcmVvcGVuID0gZmFsc2U7XG4gICAgdGhpcy5fc2VsZWN0b3JPcGVuID0gZmFsc2U7XG5cbiAgICB0aGlzLmxhc3RGb2N1c0VsID0gZmFsc2U7XG4gICAgdGhpcy5fZm9jdXNFbCA9IFtcbiAgICAgICdhW2hyZWZdJyxcbiAgICAgICdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxuICAgICAgJ2J1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcbiAgICAgICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXG4gICAgICAndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXG4gICAgICAnYXJlYVtocmVmXScsXG4gICAgICAnaWZyYW1lJyxcbiAgICAgICdvYmplY3QnLFxuICAgICAgJ2VtYmVkJyxcbiAgICAgICdbY29udGVudGVkaXRhYmxlXScsXG4gICAgICAnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJyxcbiAgICBdO1xuICAgIC8vdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihjb25maWcsIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmNvbmZpZyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgICBjbGFzc2VzOiB7XG4gICAgICAgIC4uLmNvbmZpZy5jbGFzc2VzLFxuICAgICAgICAuLi5vcHRpb25zPy5jbGFzc2VzLFxuICAgICAgfSxcbiAgICAgIGhhc2hTZXR0aW5nczoge1xuICAgICAgICAuLi5jb25maWcuaGFzaFNldHRpbmdzLFxuICAgICAgICAuLi5vcHRpb25zPy5oYXNoU2V0dGluZ3MsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgLi4uY29uZmlnLm9uLFxuICAgICAgICAuLi5vcHRpb25zPy5vbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLmJvZHlMb2NrID0gZmFsc2U7XG4gICAgdGhpcy5vcHRpb25zLmluaXQgPyB0aGlzLmluaXRtb2RhbHMoKSA6IG51bGw7XG4gIH1cbiAgaW5pdG1vZGFscygpIHtcbiAgICB0aGlzLmV2ZW50c21vZGFsKCk7XG4gIH1cbiAgZXZlbnRzbW9kYWwoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBidXR0b25PcGVuID0gZS50YXJnZXQuY2xvc2VzdChcbiAgICAgICAgICBgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b259XWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGJ1dHRvbk9wZW4pIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5fZGF0YVZhbHVlID0gYnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvblxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gYnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b24pXG4gICAgICAgICAgICA6ICdlcnJvcic7XG4gICAgICAgICAgdGhpcy55b3VUdWJlQ29kZSA9IGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnlvdXR1YmVBdHRyaWJ1dGVcbiAgICAgICAgICApXG4gICAgICAgICAgICA/IGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy55b3V0dWJlQXR0cmlidXRlKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIGlmICh0aGlzLl9kYXRhVmFsdWUgIT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc09wZW4pIHRoaXMubGFzdEZvY3VzRWwgPSBidXR0b25PcGVuO1xuICAgICAgICAgICAgdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yID0gYCR7dGhpcy5fZGF0YVZhbHVlfWA7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rvck9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNsb3NlID0gZS50YXJnZXQuY2xvc2VzdChcbiAgICAgICAgICBgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZUNsb3NlQnV0dG9ufV1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhZS50YXJnZXQuY2xvc2VzdCgnI3VuY29uZmlybWVkQWdlTW9kYWwnKSAmJlxuICAgICAgICAgICFlLnRhcmdldC5jbG9zZXN0KCcjY29uZmlybUFnZU1vZGFsJykgJiZcbiAgICAgICAgICAoYnV0dG9uQ2xvc2UgfHxcbiAgICAgICAgICAgICghZS50YXJnZXQuY2xvc2VzdChgLiR7dGhpcy5vcHRpb25zLmNsYXNzZXMubW9kYWxDb250ZW50fWApICYmXG4gICAgICAgICAgICAgIHRoaXMuaXNPcGVuKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuY2xvc2VFc2MgJiZcbiAgICAgICAgICBlLndoaWNoID09IDI3ICYmXG4gICAgICAgICAgZS5jb2RlID09PSAnRXNjYXBlJyAmJlxuICAgICAgICAgIHRoaXMuaXNPcGVuXG4gICAgICAgICkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9jdXNDYXRjaCAmJiBlLndoaWNoID09IDkgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c0NhdGNoKGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFzaFNldHRpbmdzLmdvSGFzaCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdoYXNoY2hhbmdlJyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xuICAgICAgICAgICAgdGhpcy5fb3BlblRvSGFzaCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnbG9hZCcsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX29wZW5Ub0hhc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgb3BlbihzZWxlY3RvclZhbHVlKSB7XG4gICAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgICB0aGlzLmJvZHlMb2NrID1cbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpICYmICF0aGlzLmlzT3BlblxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogZmFsc2U7XG5cbiAgICAgIGlmIChcbiAgICAgICAgc2VsZWN0b3JWYWx1ZSAmJlxuICAgICAgICB0eXBlb2Ygc2VsZWN0b3JWYWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgc2VsZWN0b3JWYWx1ZS50cmltKCkgIT09ICcnXG4gICAgICApIHtcbiAgICAgICAgdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yID0gc2VsZWN0b3JWYWx1ZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3JPcGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICB0aGlzLl9yZW9wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdG9yT3BlbilcbiAgICAgICAgdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yID0gdGhpcy5sYXN0Q2xvc2VkLnNlbGVjdG9yO1xuICAgICAgaWYgKCF0aGlzLl9yZW9wZW4pIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblxuICAgICAgdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3JcbiAgICAgICk7XG5cbiAgICAgIGlmICh0aGlzLnRhcmdldE9wZW4uZWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy55b3VUdWJlQ29kZSkge1xuICAgICAgICAgIGNvbnN0IGNvZGVWaWRlbyA9IHRoaXMueW91VHViZUNvZGU7XG4gICAgICAgICAgY29uc3QgdXJsVmlkZW8gPSBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHtjb2RlVmlkZW99P3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MWA7XG4gICAgICAgICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xuXG4gICAgICAgICAgY29uc3QgYXV0b3BsYXkgPSB0aGlzLm9wdGlvbnMuc2V0QXV0b3BsYXlZb3V0dWJlID8gJ2F1dG9wbGF5OycgOiAnJztcbiAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvdycsIGAke2F1dG9wbGF5fTsgZW5jcnlwdGVkLW1lZGlhYCk7XG5cbiAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmxWaWRlbyk7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFske3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9XWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHlvdXR1YmVQbGFjZSA9IHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3RleHQnKVxuICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKGAke3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9YCwgJycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRhcmdldE9wZW4uZWxlbWVudFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9XWApXG4gICAgICAgICAgICAuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhc2hTZXR0aW5ncy5sb2NhdGlvbikge1xuICAgICAgICAgIHRoaXMuX2dldEhhc2goKTtcbiAgICAgICAgICB0aGlzLl9zZXRIYXNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wdGlvbnMub24uYmVmb3JlT3Blbih0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2JlZm9yZW1vZGFsT3BlbicsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICBtb2RhbDogdGhpcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5jbGFzc2VzLm1vZGFsQWN0aXZlKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmNsYXNzZXMuYm9keUFjdGl2ZSk7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9yZW9wZW4pIHtcbiAgICAgICAgICBjb25zdCBtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmhhc2gpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgKCF0aGlzLmJvZHlMb2NrICYmICFtLmhhc0F0dHJpYnV0ZSgnZGF0YS1ibC1tb2JpbGUnKSkgfHxcbiAgICAgICAgICAgICghdGhpcy5ib2R5TG9jayAmJlxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjggJiZcbiAgICAgICAgICAgICAgbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYmwtbW9iaWxlJykpXG4gICAgICAgICAgICAgID8gYm9keUxvY2soKVxuICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0gZWxzZSB0aGlzLl9yZW9wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgdGhpcy5wcmV2aW91c09wZW4uc2VsZWN0b3IgPSB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3I7XG4gICAgICAgIHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQgPSB0aGlzLnRhcmdldE9wZW4uZWxlbWVudDtcblxuICAgICAgICB0aGlzLl9zZWxlY3Rvck9wZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNUcmFwKCk7XG4gICAgICAgIH0sIDUwKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMub24uYWZ0ZXJPcGVuKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBDdXN0b21FdmVudCgnYWZ0ZXJtb2RhbE9wZW4nLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgbW9kYWw6IHRoaXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNsb3NlKHNlbGVjdG9yVmFsdWUpIHtcbiAgICBpZiAoXG4gICAgICBzZWxlY3RvclZhbHVlICYmXG4gICAgICB0eXBlb2Ygc2VsZWN0b3JWYWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHNlbGVjdG9yVmFsdWUudHJpbSgpICE9PSAnJ1xuICAgICkge1xuICAgICAgdGhpcy5wcmV2aW91c09wZW4uc2VsZWN0b3IgPSBzZWxlY3RvclZhbHVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNPcGVuIHx8ICFib2R5TG9ja1N0YXR1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMub24uYmVmb3JlQ2xvc2UodGhpcyk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudCgnYmVmb3JlbW9kYWxDbG9zZScsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgbW9kYWw6IHRoaXMsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAodGhpcy55b3VUdWJlQ29kZSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgICAgdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYFxuICAgICAgICApLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzT3Blbi5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICB0aGlzLm9wdGlvbnMuY2xhc3Nlcy5tb2RhbEFjdGl2ZVxuICAgICk7XG4gICAgLy8gYXJpYS1oaWRkZW5cbiAgICB0aGlzLnByZXZpb3VzT3Blbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmICghdGhpcy5fcmVvcGVuKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgdGhpcy5vcHRpb25zLmNsYXNzZXMuYm9keUFjdGl2ZVxuICAgICAgKTtcbiAgICAgICF0aGlzLmJvZHlMb2NrID8gYm9keVVubG9jaygpIDogbnVsbDtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX3JlbW92ZUhhc2goKTtcbiAgICBpZiAodGhpcy5fc2VsZWN0b3JPcGVuKSB7XG4gICAgICB0aGlzLmxhc3RDbG9zZWQuc2VsZWN0b3IgPSB0aGlzLnByZXZpb3VzT3Blbi5zZWxlY3RvcjtcbiAgICAgIHRoaXMubGFzdENsb3NlZC5lbGVtZW50ID0gdGhpcy5wcmV2aW91c09wZW4uZWxlbWVudDtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLm9uLmFmdGVyQ2xvc2UodGhpcyk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgIG5ldyBDdXN0b21FdmVudCgnYWZ0ZXJtb2RhbENsb3NlJywge1xuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICBtb2RhbDogdGhpcyxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fZm9jdXNUcmFwKCk7XG4gICAgfSwgNTApO1xuICB9XG4gIF9nZXRIYXNoKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaGFzaFNldHRpbmdzLmxvY2F0aW9uKSB7XG4gICAgICB0aGlzLmhhc2ggPSB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IuaW5jbHVkZXMoJyMnKVxuICAgICAgICA/IHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvclxuICAgICAgICA6IHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvci5yZXBsYWNlKCcuJywgJyMnKTtcbiAgICB9XG4gIH1cbiAgX29wZW5Ub0hhc2goKSB7XG4gICAgbGV0IGNsYXNzSW5IYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHt3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpfWBcbiAgICApXG4gICAgICA/IGAuJHt3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpfWBcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKVxuICAgICAgPyBgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gXG4gICAgICA6IG51bGw7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbn0gPSBcIiR7Y2xhc3NJbkhhc2h9XCJdYFxuICAgIClcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b259ID0gXCIke2NsYXNzSW5IYXNofVwiXWBcbiAgICAgICAgKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbJHt0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbn0gPSBcIiR7Y2xhc3NJbkhhc2gucmVwbGFjZShcbiAgICAgICAgICAgICcuJyxcbiAgICAgICAgICAgICcjJ1xuICAgICAgICAgICl9XCJdYFxuICAgICAgICApO1xuICAgIGlmIChidXR0b25zICYmIGNsYXNzSW5IYXNoKSB0aGlzLm9wZW4oY2xhc3NJbkhhc2gpO1xuICB9XG4gIF9zZXRIYXNoKCkge1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgdGhpcy5oYXNoKTtcbiAgfVxuICBfcmVtb3ZlSGFzaCgpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0pO1xuICB9XG4gIF9mb2N1c0NhdGNoKGUpIHtcbiAgICBjb25zdCBmb2N1c2FibGUgPSB0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2ZvY3VzRWwpO1xuICAgIGNvbnN0IGZvY3VzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmb2N1c2FibGUpO1xuICAgIGNvbnN0IGZvY3VzZWRJbmRleCA9IGZvY3VzQXJyYXkuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcblxuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGZvY3VzZWRJbmRleCA9PT0gMCkge1xuICAgICAgZm9jdXNBcnJheVtmb2N1c0FycmF5Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IGZvY3VzQXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgZm9jdXNBcnJheVswXS5mb2N1cygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuICBfZm9jdXNUcmFwKCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZSA9IHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9mb2N1c0VsKTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuICYmIHRoaXMubGFzdEZvY3VzRWwpIHtcbiAgICAgIHRoaXMubGFzdEZvY3VzRWwuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9jdXNhYmxlWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZXMubW9kYWwgPSBuZXcgTW9kYWwoe30pO1xuXG4vLyBzaG93IGFnZSBtb2RhbFxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWlucGFnZScpKSB7XG4gIGNvbnN0IGNvbmZpcm1BZ2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1hZ2UtYnRuJyk7XG4gIC8vIG1vZHVsZXMubW9kYWwub3BlbignI2NvbmZpcm1BZ2VNb2RhbCcpO1xuICBjb25maXJtQWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1vZHVsZXMubW9kYWwuY2xvc2UoJyNjb25maXJtQWdlTW9kYWwnKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBfc2xpZGVVcCwgX3NsaWRlRG93biwgX3NsaWRlVG9nZ2xlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3Qge1xuICAvLyBzZXR1cCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl90aGlzID0gdGhpcztcblxuICAgIC8vIGN1c3RvbSBzZWxlY3QgY2xhc3Nlc1xuICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgIC8vIGh0bWwgYnVpbGQgY2xhc3Nlc1xuICAgICAgc2VsOiAnc2VsZWN0JyxcbiAgICAgIGJvZHk6ICdzZWxlY3RfX2JvZHknLFxuICAgICAgbGFiZWw6ICdzZWxlY3RfX2xhYmVsJyxcbiAgICAgIHRpdGxlOiAnc2VsZWN0X190aXRsZScsXG4gICAgICB2YWw6ICdzZWxlY3RfX3ZhbHVlJyxcbiAgICAgIGNvbnRlbnQ6ICdzZWxlY3RfX2NvbnRlbnQnLFxuICAgICAgb3B0aW9uczogJ3NlbGVjdF9fb3B0aW9ucycsXG4gICAgICBvcHRpb246ICdzZWxlY3RfX29wdGlvbicsXG4gICAgICBzY3JvbGw6ICdzZWxlY3RfX3Njcm9sbCcsXG4gICAgICBncm91cDogJ3NlbGVjdF9fZ3JvdXAnLFxuICAgICAgaW5wOiAnc2VsZWN0X19pbnB1dCcsXG4gICAgICBhc3NldDogJ3NlbGVjdF9fYXNzZXQnLFxuICAgICAgdHh0OiAnc2VsZWN0X190ZXh0JyxcbiAgICAgIGhpbnQ6ICdzZWxlY3RfX2hpbnQnLFxuXG4gICAgICAvLyBzdGF0ZSBjbGFzc2VzXG4gICAgICBhY3RpdmU6ICdfc2VsZWN0LWFjdGl2ZScsXG4gICAgICBmb2N1c2VkOiAnX3NlbGVjdC1mb2N1c2VkJyxcbiAgICAgIG9wZW5lZDogJ19zZWxlY3Qtb3BlbmVkJyxcbiAgICAgIGZpbGxlZDogJ19zZWxlY3QtZmlsbGVkJyxcbiAgICAgIHNlbGVjdGVkOiAnX3NlbGVjdC1zZWxlY3RlZCcsXG4gICAgICBkaXNhYmxlZDogJ19zZWxlY3QtZGlzYWJsZWQnLFxuXG4gICAgICAvLyBhZGRpdGlvbmFsIGNsYXNzZXNcbiAgICAgIGxpc3Q6ICdfc2VsZWN0LWxpc3QnLFxuICAgICAgZXJyb3I6ICdfc2VsZWN0LWVycm9yJyxcbiAgICAgIG11bHRpcGxlOiAnX3NlbGVjdC1tdWx0aXBsZScsXG4gICAgICBjaGVja2JveDogJ19zZWxlY3QtY2hlY2tib3gnLFxuICAgICAgbGFiZWw6ICdfc2VsZWN0LWxhYmVsJyxcbiAgICB9O1xuXG4gICAgLy8gYWxsIHNlbGVjdCBpdGVtc1xuICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcbiAgICBpZiAoc2VsZWN0TGlzdC5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdChzZWxlY3RMaXN0KTtcbiAgICB9XG4gIH1cblxuICAvLyBzZWxlY3QgaW5pdGlhbGl6YXRpb24gJiBidWlsZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBpbml0aWFsaXphdGlvblxuICBpbml0KHNlbGVjdExpc3QpIHtcbiAgICAvLyBpbml0XG4gICAgc2VsZWN0TGlzdC5mb3JFYWNoKChzZWxlY3QsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmluaXRTZWxJdGVtKHNlbGVjdCwgaW5kZXggKyAxKTtcbiAgICB9KTtcblxuICAgIC8vIGV2ZW50c1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleWRvd24nLFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2ZvY3VzaW4nLFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5zZXRBY3Rpb25zKGUpO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2ZvY3Vzb3V0JyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gIH1cbiAgLy8gc2luZ2xlIHNlbGVjdCBpdGVtIGluaXRpYWxpemF0aW9uXG4gIGluaXRTZWxJdGVtKHJlbGF0aXZlU2VsLCBpbmRleCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWwpO1xuICAgIHJlbGF0aXZlU2VsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChyZWxhdGl2ZVNlbCk7XG4gICAgcmVsYXRpdmVTZWwuaGlkZGVuID0gdHJ1ZTtcbiAgICBpbmRleCA/IChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbElkID0gaW5kZXgpIDogbnVsbDtcblxuICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSkge1xuICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5vcHRQbGFjZWhvbGRlciA9XG4gICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnZhbHVlO1xuICAgICAgaWYgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnNob3cpIHtcbiAgICAgICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcbiAgICAgICAgc2VsVGl0bGUuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgICAgICBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5sYWJlbH1cIj4ke1xuICAgICAgICAgICAgdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkubGFiZWwudGV4dFxuICAgICAgICAgICAgICA/IHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcbiAgICAgICAgICAgICAgOiB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZVxuICAgICAgICAgIH08L3NwYW4+YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmJvZHl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgJHtcbiAgICAgICAgICAgICAgICAgICAgICAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLW5vLXNsaWRlJykgPyAnaGlkZGVuJyA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH0gIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9uc31cIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgKTtcblxuICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xuXG4gICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWRcbiAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZFxuICAgICAgOiAnMTUwJztcbiAgICByZWxhdGl2ZVNlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuaW5pdFNlbGVjdGlvbnMoZSk7XG4gICAgfSk7XG4gIH1cbiAgLy8gc2VsZWN0IGJ1aWxkXG4gIGJ1aWxkKHJlbGF0aXZlU2VsKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcblxuICAgIC8vIHNldCBpZFxuICAgIHNlbGVjdC5kYXRhc2V0LnNlbElkID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZDtcbiAgICAvLyBzZXQgdmFsdWVcbiAgICB0aGlzLnNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgIC8vIHNldCBvcHRpb25zXG4gICAgdGhpcy5zZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgIC8vIHNldCBjc3MgbW9kaWZpY2F0b3JcbiAgICByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3NcbiAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQoYHNlbGVjdF8ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsQWRkb25DbGFzc31gKVxuICAgICAgOiBudWxsO1xuICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgaXMgbXVsdGlwbGVcbiAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMubXVsdGlwbGUpXG4gICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5tdWx0aXBsZSk7XG4gICAgLy8gc2V0IGNsYXNzIGlmIHNlbGVjdCBjaGVja2JveGVzIGFyZSBzZXRcbiAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWNoZWNrYm94ZXMnKSAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgPyBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2hlY2tib3gpXG4gICAgICA6IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jaGVja2JveCk7XG4gICAgLy8gZGlzYWJsZSBzZWxlY3RcbiAgICB0aGlzLmRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgLy8gc2V0IHNlYXJjaCBhY3Rpb25zIGlmIGRhdGEtc2VsLXNlYXJjaCBpcyBzZXRcbiAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpXG4gICAgICA/IHRoaXMuc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpXG4gICAgICA6IG51bGw7XG4gICAgLy8gc2V0IHNlbGVjdCBhY3Rpb25zIGlmIGl0J3MgaW5pdGlhbGx5IG9wZW5lZFxuICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtb3BlbmVkJykgPyB0aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcblxuICAgIC8vIHNldCBzZWxlY3QgaGludFxuICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludH08L2Rpdj5gXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHNob3cgLyBoaWRlIHNlbGVjdGlvbiBmcm9tIHNlbGVjdCB0aXRsZVxuICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy12YWwnKSkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQoJ19zZWxlY3Qtc2hvdy12YWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ19zZWxlY3Qtc2hvdy12YWwnKTtcbiAgICB9XG4gIH1cbiAgLy8gc2V0IHR3aW4gc2VsZWN0IHRpdGxlIHZhbHVlXG4gIHNldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBzZWxCb2R5ID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMuYm9keSkudHdpblNlbDtcbiAgICBjb25zdCBzZWxUaXRsZSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsO1xuXG4gICAgaWYgKHNlbFRpdGxlKSBzZWxUaXRsZS5yZW1vdmUoKTtcbiAgICBzZWxCb2R5Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgIHRoaXMuZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbClcbiAgICApO1xuICB9XG4gIC8vIHNldCB0d2luIHNlbGVjdCBvcHRpb25zXG4gIHNldE9wdGlvbnMoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcbiAgICBjb25zdCByZWxhdGl2ZVNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChcbiAgICAgIHNlbGVjdCxcbiAgICAgIHRoaXMuY2xhc3Nlcy5vcHRpb25zXG4gICAgKS5yZWxhdGl2ZVNlbDtcbiAgICBvcHRpb25zLmlubmVySFRNTCA9IHRoaXMuZ2V0T3B0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgIH0pO1xuICAgIGlmIChyZWxhdGl2ZVNlbE9wdGlvbnMucXVlcnlTZWxlY3RvcignW3NlbGVjdGVkXScpKSB7XG4gICAgICBvcHRpb25zXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWApXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgfVxuICB9XG4gIC8vIGRpc2FibGUgc2VsZWN0XG4gIGRpc2FibGVTZWxlY3Qoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgIGlmIChyZWxhdGl2ZVNlbC5kaXNhYmxlZCkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmRpc2FibGVkKTtcbiAgICAgIHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLnRpdGxlKS50d2luU2VsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gbWFpbiBhY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gc2V0IG1haW4gYWN0aW9uc1xuICBzZXRBY3Rpb25zKGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCB0eXBlID0gZS50eXBlO1xuXG4gICAgaWYgKFxuICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKSkgfHxcbiAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKVxuICAgICkge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5zZWxlY3QnKVxuICAgICAgICA/IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcbiAgICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtcbiAgICAgICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpLmRhdGFzZXQuc2VsZWN0SWRcbiAgICAgICAgICAgIH1cIl1gXG4gICAgICAgICAgKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcbiAgICAgIGlmICh0eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIGlmICghcmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxMaXN0ID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMubGlzdCkpO1xuICAgICAgICAgICAgY29uc3Qgc2VsT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC4ke3RoaXMuY2xhc3Nlcy5zZWx9W2RhdGEtc2VsLWlkPVwiJHtzZWxMaXN0LmRhdGFzZXQuc2VsSWR9XCJdIC5zZWxlY3RfX29wdGlvbltkYXRhLW9wdC12YWw9XCIke3NlbExpc3QuZGF0YXNldC5vcHRWYWx9XCJdYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy50aXRsZSkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGlvbihzZWxlY3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IHRhcmdldC5jbG9zZXN0KFxuICAgICAgICAgICAgICB0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgc2VsT3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZvY3VzaW4nIHx8IHR5cGUgPT09ICdmb2N1c291dCcpIHtcbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpKSB7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdmb2N1c2luJykge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZm9jdXNlZCk7XG4gICAgICAgICAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcbiAgICAgICAgICAgICAgaWYgKCFzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5maWxsZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2tleWRvd24nICYmIGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZUdyb3VwKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xuICAgIH1cbiAgfVxuICAvLyBzZXQgc2luZ2xlIHNlbGVjdCBhY3Rpb25cbiAgc2V0QWN0aW9uKHNlbGVjdCkge1xuICAgIGNvbnN0IHJlbGF0aXZlU2VsID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0KS5yZWxhdGl2ZVNlbDtcbiAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMub3B0aW9ucykudHdpblNlbDtcblxuICAgIGlmIChyZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpKSB7XG4gICAgICBjb25zdCBzZWxlY3RPbmVHcm91cCA9IHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ1tkYXRhLW9uZS1zZWxlY3RdJyk7XG4gICAgICB0aGlzLmNsb3NlR3JvdXAoc2VsZWN0T25lR3JvdXAsIHJlbGF0aXZlU2VsKTtcbiAgICB9XG5cbiAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG4gICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1zbGlkZScpKVxuICAgICAgICBfc2xpZGVUb2dnbGUoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLm9wZW5lZCkgJiZcbiAgICAgICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykgJiZcbiAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgZ3JvdXBcbiAgY2xvc2VHcm91cChncm91cCwgc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsR3JvdXAgPSBncm91cCA/IGdyb3VwIDogZG9jdW1lbnQ7XG4gICAgY29uc3Qgc2VsZWN0aW9ucyA9IHNlbEdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpfSR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3BlbmVkKX1gXG4gICAgKTtcbiAgICBpZiAoc2VsZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXNlbGVjdCB8fFxuICAgICAgICAgIChzZWxlY3QgJiYgc2VsZWN0aW9uLmRhdGFzZXQuc2VsSWQgIT09IHNlbGVjdC5kYXRhc2V0LnNlbElkKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmNsb3NlSXRlbShzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gY2xvc2Ugc2luZ2xlIHNlbGVjdCBpdGVtXG4gIGNsb3NlSXRlbShzZWxlY3QpIHtcbiAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG5cbiAgICBpZiAoIXNlbE9wdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW5lZCk7XG4gICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1zbGlkZScpKVxuICAgICAgICBfc2xpZGVVcChzZWxPcHRpb25zLCByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkKTtcbiAgICB9XG4gIH1cbiAgLy8gc2V0IHNpbmdsZSBvcHRpb24gYWN0aW9uc1xuICBzZXRPcHRpb25BY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCwgb3B0aW9uKSB7XG4gICAgaWYgKHJlbGF0aXZlU2VsLm11bHRpcGxlKSB7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgY29uc3QgcmVsYXRpdmVTZWxlY3Rpb25zID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cztcblxuICAgICAgcmVsYXRpdmVTZWxlY3Rpb25zLmZvckVhY2gocmVsYXRpdmVTZWxlY3Rpb24gPT4ge1xuICAgICAgICByZWxhdGl2ZVNlbGVjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgdHdpblNlbGVjdGlvbnMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgdGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpXG4gICAgICApO1xuICAgICAgdHdpblNlbGVjdGlvbnMuZm9yRWFjaCh0d2luU2VsZWN0aW9uID0+IHtcbiAgICAgICAgcmVsYXRpdmVTZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHt0d2luU2VsZWN0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICAgLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFvcHRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgcmVsYXRpdmVTZWwucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcbiAgICAgICAgKTtcbiAgICAgICAgcmVsYXRpdmVTZWxcbiAgICAgICAgICAucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPVwiJHtvcHRpb24uZGF0YXNldC5vcHRWYWx9XCJdYClcbiAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpXG4gICAgICAgIC5mb3JFYWNoKG9wdCA9PiBvcHQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKTtcbiAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zZWxlY3RlZCk7XG4gICAgICBpZiAoIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zaG93LXNlbGVjdGlvbicpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZWxlY3QucXVlcnlTZWxlY3RvcihgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYClcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgJHt0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5vcHRpb24pfVtoaWRkZW5dYFxuICAgICAgICAgICkuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICByZWxhdGl2ZVNlbC52YWx1ZSA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0LXZhbCcpXG4gICAgICAgID8gb3B0aW9uLmRhdGFzZXQub3B0VmFsXG4gICAgICAgIDogb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICB0aGlzLnNldFNlbGVjdGlvbnMocmVsYXRpdmVTZWwpO1xuICB9XG4gIC8vIHNldCBzZWFyY2ggYWN0aW9uc1xuICBzZXRTZWFyY2hBY3Rpb25zKHNlbGVjdCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICBjb25zdCBzZWxJbnB1dCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmlucCkudHdpblNlbDtcbiAgICBjb25zdCBzZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3QoXG4gICAgICBzZWxlY3QsXG4gICAgICB0aGlzLmNsYXNzZXMub3B0aW9uc1xuICAgICkudHdpblNlbC5xdWVyeVNlbGVjdG9yQWxsKGAuJHt0aGlzLmNsYXNzZXMub3B0aW9ufWApO1xuXG4gICAgc2VsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxPcHRpb25zLmZvckVhY2goc2VsT3B0aW9uID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNlbE9wdGlvbi50ZXh0Q29udGVudFxuICAgICAgICAgICAgLnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIC5pbmRleE9mKHNlbElucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkpID49IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgc2VsT3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNlbE9wdGlvbnMuaGlkZGVuID09PSB0cnVlID8gX3RoaXMuc2V0QWN0aW9uKHNlbGVjdCkgOiBudWxsO1xuICAgIH0pO1xuICB9XG4gIC8vIHNldCBzZWxlY3Qgc3VidGl0bGVcbiAgc2V0U3VidGl0bGUocmVsYXRpdmVTZWwpIHt9XG5cbiAgLy8gdmFsaWRhdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gYWRkIGFuIGVycm9yIHRvIGEgc2VsZWN0XG4gIGFkZEVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XG4gICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmVycm9yKTtcblxuICAgIGlmIChyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yICYmICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnQpIHtcbiAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJzZWxlY3RfX2hpbnRcIj4ke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsRXJyb3J9PC9kaXY+YFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gcmVtb3ZlIGFuIGVycm9yIGZyb20gYSBzZWxlY3RcbiAgcmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpIHtcbiAgICBpZiAoc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZXJyb3IpKSB7XG4gICAgICBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuZXJyb3IpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RfX2hpbnQnKSAmJlxuICAgICAgIXJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSGludFxuICAgICkge1xuICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JylcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gdXRpbHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gZ2V0IGN1c3RvbSBjbGFzc1xuICBnZXRDbGFzcyhjc3NDbGFzcykge1xuICAgIHJldHVybiBgLiR7Y3NzQ2xhc3N9YDtcbiAgfVxuICAvLyBnZXQgc2luZ2xlIHNlbGVjdCBpdGVtXG4gIGdldFNlbGVjdChzZWxlY3QsIGNzc0NsYXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbGF0aXZlU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcignc2VsZWN0JyksXG4gICAgICB0d2luU2VsOiBzZWxlY3QucXVlcnlTZWxlY3Rvcih0aGlzLmdldENsYXNzKGNzc0NsYXNzKSksXG4gICAgfTtcbiAgfVxuICAvLyBnZXQgc2VsZWN0ZWQgaXRlbSB2YWx1ZVxuICBnZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgbGV0IGF0dHIsXG4gICAgICBhdHRyQ2xhc3MsXG4gICAgICB0aXRsZVZhbCA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCwgMikuaHRtbDtcblxuICAgIC8vIHNldCB0aXRsZSB2YWx1ZVxuICAgIHRpdGxlVmFsID0gdGl0bGVWYWwubGVuZ3RoXG4gICAgICA/IHRpdGxlVmFsXG4gICAgICA6IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgOiAnJztcblxuICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gc2VsZWN0IGlmIGl0IGNvbnRhaW5zIGFueSB2YWx1ZXNcbiAgICBpZiAodGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS52YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuYWN0aXZlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHNlbGVjdCBsYWJlbFxuICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxhYmVsJykpIHtcbiAgICAgIGF0dHIgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICAgID8gYCBkYXRhLXNlbC1sYWJlbD1cIiR7cmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbH1cImBcbiAgICAgICAgOiBgIGRhdGEtc2VsLWxhYmVsPVwi0JLRi9Cx0L7RgFwiYDtcbiAgICAgIGF0dHJDbGFzcyA9IGAgJHt0aGlzLmNsYXNzZXMubGFiZWx9YDtcbiAgICB9XG5cbiAgICAvLyBwdXNoIHNlbGVjdGlvbnMgdG8gdGhlIGxpc3QgaW5zaWRlIG9mIHNlbGVjdCB0aXRsZVxuICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSAmJiByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLWxpc3QnKSkge1xuICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwpXG4gICAgICAgIC5lbGVtZW50cy5tYXAoXG4gICAgICAgICAgb3B0aW9uID0+XG4gICAgICAgICAgICBgPHNwYW4gZGF0YS1vcHQtaWQ9XCIke3NlbGVjdC5kYXRhc2V0LnNlbElkfVwiIGRhdGEtb3B0LXZhbD1cIiR7XG4gICAgICAgICAgICAgIG9wdGlvbi52YWx1ZVxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiX2xpc3QtaXRlbVwiPiR7dGhpcy5nZXRDb250ZW50KG9wdGlvbil9PC9zcGFuPmBcbiAgICAgICAgKVxuICAgICAgICAuam9pbignJyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5saXN0ICYmXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KVxuICAgICAgKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocmVsYXRpdmVTZWwuZGF0YXNldC5saXN0KS5pbm5lckhUTUwgPSB0aXRsZVZhbDtcbiAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHRpdGxlVmFsID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5pdCBzZWxlY3Qgc2VhcmNoXG4gICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtc2VhcmNoJykpIHtcbiAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7YXR0cn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy52YWx9XCI+PGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIHR5cGU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgZGF0YS1wbGFjZWhvbGRlcj1cIiR7dGl0bGVWYWx9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5pbnB9XCI+PC9zcGFuPjwvZGl2PmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1c3RvbUNsYXNzID1cbiAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50cy5sZW5ndGggJiZcbiAgICAgICAgdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzXG4gICAgICAgICAgPyBgICR7dGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKS5lbGVtZW50c1swXS5kYXRhc2V0Lm9wdENsYXNzfWBcbiAgICAgICAgICA6ICcnO1xuICAgICAgcmV0dXJuIGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnRpdGxlfVwiPjxzcGFuICR7XG4gICAgICAgIGF0dHIgPyBhdHRyIDogJydcbiAgICAgIH0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy52YWx9ICR7XG4gICAgICAgIGF0dHJDbGFzcyA/IGF0dHJDbGFzcyA6ICcnXG4gICAgICB9XCI+PHNwYW4gY2xhc3M9XCIke1xuICAgICAgICB0aGlzLmNsYXNzZXMuY29udGVudFxuICAgICAgfSR7Y3VzdG9tQ2xhc3N9XCI+JHt0aXRsZVZhbH08L3NwYW4+PC9zcGFuPjwvYnV0dG9uPmA7XG4gICAgfVxuICB9XG4gIC8vIGdldCBvcHRpb25zXG4gIGdldE9wdGlvbnMocmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBzZWxTY3JvbGwgPSByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNjcm9sbCcpXG4gICAgICA/IGBkYXRhLXNpbXBsZWJhcmBcbiAgICAgIDogJyc7XG4gICAgY29uc3QgZGF0YSA9IHNlbFNjcm9sbFxuICAgICAgPyByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbC50cmltKCkuc3BsaXQoJywnKVxuICAgICAgOiBudWxsO1xuICAgIGxldCBzZWxTY3JvbGxIZWlnaHQgPVxuICAgICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwgJiYgZGF0YVxuICAgICAgICA/IGBzdHlsZT1cIm1heC1oZWlnaHQ6JHt3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCA/IGRhdGFbMF0gOiBkYXRhWzFdfXJlbVwiYFxuICAgICAgICA6ICcnO1xuICAgIGxldCBzZWxPcHRpb25zID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKTtcblxuICAgIGlmIChzZWxPcHRpb25zLmxlbmd0aCkge1xuICAgICAgbGV0IHNlbE9wdGlvbnNIVE1MID0gYGA7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpICYmXG4gICAgICAgICAgIXRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLnNob3cpIHx8XG4gICAgICAgIHJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICApIHtcbiAgICAgICAgc2VsT3B0aW9ucyA9IHNlbE9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgfVxuICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsXG4gICAgICAgID8gYDxkaXYgJHtzZWxTY3JvbGx9ICR7c2VsU2Nyb2xsSGVpZ2h0fSBkYXRhLXNlbC1zY3JvbGw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuc2Nyb2xsfVwiPmBcbiAgICAgICAgOiAnJztcbiAgICAgIHNlbE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBzZWxPcHRpb25zSFRNTCArPSB0aGlzLmdldE9wdGlvbihvcHRpb24sIHJlbGF0aXZlU2VsKTtcbiAgICAgIH0pO1xuICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gc2VsU2Nyb2xsID8gYDwvZGl2PmAgOiAnJztcbiAgICAgIHJldHVybiBzZWxPcHRpb25zSFRNTDtcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IG9wdGlvblxuICBnZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbnMgPVxuICAgICAgb3B0aW9uLnNlbGVjdGVkICYmIHJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgID8gYCAke3RoaXMuY2xhc3Nlcy5zZWxlY3RlZH1gXG4gICAgICAgIDogJyc7XG4gICAgY29uc3Qgc2hvd1NlbGVjdGlvbiA9XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgJiZcbiAgICAgICFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSAmJlxuICAgICAgIXJlbGF0aXZlU2VsLm11bHRpcGxlXG4gICAgICAgID8gYGhpZGRlbmBcbiAgICAgICAgOiBgYDtcbiAgICBjb25zdCBvcHRpb25DbGFzcyA9IG9wdGlvbi5kYXRhc2V0Lm9wdENsYXNzXG4gICAgICA/IGAgJHtvcHRpb24uZGF0YXNldC5vcHRDbGFzc31gXG4gICAgICA6ICcnO1xuICAgIGNvbnN0IG9wdGlvbkxpbmsgPSBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rXG4gICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdGlvbkxpbmtcbiAgICAgIDogZmFsc2U7XG4gICAgY29uc3Qgb3B0aW9uTGlua1RhcmdldCA9IG9wdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtb3B0aW9uLWxpbmstdGFyZ2V0JylcbiAgICAgID8gYHRhcmdldD1cIl9ibGFua1wiYFxuICAgICAgOiAnJztcbiAgICBsZXQgb3B0aW9uSFRNTCA9IGBgO1xuXG4gICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rXG4gICAgICA/IGA8YSAke29wdGlvbkxpbmtUYXJnZXR9ICR7c2hvd1NlbGVjdGlvbn0gaHJlZj1cIiR7b3B0aW9uTGlua31cIiBkYXRhLW9wdC12YWw9XCIke29wdGlvbi52YWx1ZX1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbn0ke29wdGlvbkNsYXNzfSR7c2VsZWN0aW9uc31cIj5gXG4gICAgICA6IGA8YnV0dG9uICR7c2hvd1NlbGVjdGlvbn0gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgdHlwZT1cImJ1dHRvblwiPmA7XG4gICAgb3B0aW9uSFRNTCArPSB0aGlzLmdldENvbnRlbnQob3B0aW9uKTtcbiAgICBvcHRpb25IVE1MICs9IG9wdGlvbkxpbmsgPyBgPC9hPmAgOiBgPC9idXR0b24+YDtcbiAgICByZXR1cm4gb3B0aW9uSFRNTDtcbiAgfVxuICAvLyBnZXQgc2VsZWN0IGNvbnRlbnRcbiAgZ2V0Q29udGVudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25EYXRhID0gb3B0aW9uLmRhdGFzZXQub3B0QXNzZXRcbiAgICAgID8gYCR7b3B0aW9uLmRhdGFzZXQub3B0QXNzZXR9YFxuICAgICAgOiAnJztcbiAgICBjb25zdCBvcHRpb25EYXRhSFRNTCA9XG4gICAgICBvcHRpb25EYXRhLmluZGV4T2YoJ2ltZycpID49IDBcbiAgICAgICAgPyBgPGltZyBzcmM9XCIke29wdGlvbkRhdGF9XCIgYWx0PVwiXCI+YFxuICAgICAgICA6IG9wdGlvbkRhdGE7XG4gICAgbGV0IG9wdGlvbkNvbnRlbnRIVE1MID0gYGA7XG5cbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhXG4gICAgICA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLmdyb3VwfVwiPmBcbiAgICAgIDogJyc7XG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YVxuICAgICAgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5hc3NldH1cIj5gXG4gICAgICA6ICcnO1xuICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBvcHRpb25EYXRhSFRNTCA6ICcnO1xuICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudHh0fVwiPmAgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8L3NwYW4+YCA6ICcnO1xuICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICByZXR1cm4gb3B0aW9uQ29udGVudEhUTUw7XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdCBwbGFjZWhvbGRlclxuICBnZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gQXJyYXkuZnJvbShyZWxhdGl2ZVNlbC5vcHRpb25zKS5maW5kKFxuICAgICAgb3B0aW9uID0+ICFvcHRpb24udmFsdWVcbiAgICApO1xuXG4gICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5zdWJ0aXRsZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXIudGV4dENvbnRlbnQsXG4gICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgtc2hvdycpLFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIHNob3c6IHBsYWNlaG9sZGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWwtcGgnKSxcbiAgICAgICAgICB0ZXh0OiBwbGFjZWhvbGRlci5kYXRhc2V0Lm9wdFBsYWNlaG9sZGVyLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdGVkIG9wdGlvbnMgZGF0YVxuICBnZXREYXRhKHJlbGF0aXZlU2VsKSB7XG4gICAgbGV0IHNlbGVjdGlvbnMgPSBbXTtcblxuICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xuICAgICAgc2VsZWN0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucylcbiAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlKVxuICAgICAgICAuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3Rpb25zLnB1c2gocmVsYXRpdmVTZWwub3B0aW9uc1tyZWxhdGl2ZVNlbC5zZWxlY3RlZEluZGV4XSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBlbGVtZW50czogc2VsZWN0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbiksXG4gICAgICB2YWx1ZXM6IHNlbGVjdGlvbnNcbiAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlKVxuICAgICAgICAubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpLFxuICAgICAgaHRtbDogc2VsZWN0aW9ucy5tYXAob3B0aW9uID0+IHRoaXMuZ2V0Q29udGVudChvcHRpb24pKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gc2VsZWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gaW5pdCBzZWxlY3Rpb25zXG4gIGluaXRTZWxlY3Rpb25zKGUpIHtcbiAgICBjb25zdCByZWxhdGl2ZVNlbCA9IGUudGFyZ2V0O1xuXG4gICAgdGhpcy5idWlsZChyZWxhdGl2ZVNlbCk7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcbiAgfVxuICAvLyBzZXQgc2VsZWN0aW9uc1xuICBzZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKSB7XG4gICAgY29uc3Qgc2VsZWN0ID0gcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3VibWl0JykgJiYgcmVsYXRpdmVTZWwudmFsdWUpIHtcbiAgICAgIGxldCB0ZW1wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICB0ZW1wQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgIHJlbGF0aXZlU2VsLmNsb3Nlc3QoJ2Zvcm0nKS5hcHBlbmQodGVtcEJ1dHRvbik7XG4gICAgICB0ZW1wQnV0dG9uLmNsaWNrKCk7XG4gICAgICB0ZW1wQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmZpbGxlZCk7XG4gICAgdGhpcy5zZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gIH1cbiAgLy8gY3VzdG9tIHNlbGVjdCBldmVudCAobGlzdGVuIHRvIGFueSBzZWxlY3Rpb25zIC8gbXV0YXRpb25zKVxuICBzZWxlY3Rpb24oc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdGlvbicsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgc2VsZWN0OiByZWxhdGl2ZVNlbCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxubmV3IFNlbGVjdCh7fSk7XG4iLCIvKipcbiAqIHNldCBoYXNoIHRvIHVybFxuICogQHBhcmFtIHtzdHJpbmd9IGhhc2hcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEhhc2ggPSBoYXNoID0+IHtcbiAgaGFzaCA9IGhhc2ggPyBgIyR7aGFzaH1gIDogd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXTtcbiAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCBoYXNoKTtcbn07XG5cbi8qKlxuICogZ2V0IGhhc2ggZnJvbSB1cmxcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgZ2V0SGFzaCA9ICgpID0+IHtcbiAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xuICB9XG59O1xuXG4vLyBib2R5IGxvY2tcbmV4cG9ydCBsZXQgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuLyoqXG4gKiB0b2dnbGVzIGJvZHkgbG9ja1xuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5TG9ja1RvZ2dsZSA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpKSB7XG4gICAgYm9keVVubG9jayhkZWxheSk7XG4gIH0gZWxzZSB7XG4gICAgYm9keUxvY2soZGVsYXkpO1xuICB9XG59O1xuLyoqXG4gKiB1bmxvY2tzIGJvZHlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keVVubG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gICAgfSwgZGVsYXkpO1xuICAgIGJvZHlMb2NrU3RhdHVzID0gZmFsc2U7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBib2R5TG9ja1N0YXR1cyA9IHRydWU7XG4gICAgfSwgZGVsYXkpO1xuICB9XG59O1xuLyoqXG4gKiBsb2NrcyBib2R5XG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlMb2NrID0gKGRlbGF5ID0gNTAwKSA9PiB7XG4gIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2NrJyk7XG5cbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHthcnJheX0gYXJyYXlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhU2V0VmFsdWVcbiAqIHByb2Nlc3MgbWVkaWEgcmVxdWVzdHMgZnJvbSBhdHRyaWJ1dGVzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXRhTWVkaWFRdWVyaWVzID0gKGFycmF5LCBkYXRhU2V0VmFsdWUpID0+IHtcbiAgLy8gZ2V0IG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzXG4gIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShhcnJheSkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgIGlmIChpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXSkge1xuICAgICAgcmV0dXJuIGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdLnNwbGl0KCcsJylbMF07XG4gICAgfVxuICB9KTtcbiAgLy8gb2JqZWN0cyB3aXRoIG1lZGlhIHF1ZXJpZXMgaW5pdGlhbGl6YXRpb25cbiAgaWYgKG1lZGlhLmxlbmd0aCkge1xuICAgIGNvbnN0IGJyZWFrcG9pbnRzQXJyYXkgPSBbXTtcbiAgICBtZWRpYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgcGFyYW1zID0gaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV07XG4gICAgICBjb25zdCBicmVha3BvaW50ID0ge307XG4gICAgICBjb25zdCBwYXJhbXNBcnJheSA9IHBhcmFtcy5zcGxpdCgnLCcpO1xuICAgICAgYnJlYWtwb2ludC52YWx1ZSA9IHBhcmFtc0FycmF5WzBdO1xuICAgICAgYnJlYWtwb2ludC50eXBlID0gcGFyYW1zQXJyYXlbMV0gPyBwYXJhbXNBcnJheVsxXS50cmltKCkgOiAnbWF4JztcbiAgICAgIGJyZWFrcG9pbnQuaXRlbSA9IGl0ZW07XG4gICAgICBicmVha3BvaW50c0FycmF5LnB1c2goYnJlYWtwb2ludCk7XG4gICAgfSk7XG4gICAgLy8gZ2V0IHVuaXF1ZSBicmVha3BvaW50c1xuICAgIGxldCBtZFF1ZXJpZXMgPSBicmVha3BvaW50c0FycmF5Lm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgJygnICtcbiAgICAgICAgaXRlbS50eXBlICtcbiAgICAgICAgJy13aWR0aDogJyArXG4gICAgICAgIGl0ZW0udmFsdWUgK1xuICAgICAgICAncHgpLCcgK1xuICAgICAgICBpdGVtLnZhbHVlICtcbiAgICAgICAgJywnICtcbiAgICAgICAgaXRlbS50eXBlXG4gICAgICApO1xuICAgIH0pO1xuICAgIG1kUXVlcmllcyA9IHVuaXF1ZUFycmF5KG1kUXVlcmllcyk7XG4gICAgY29uc3QgbWRRdWVyaWVzQXJyYXkgPSBbXTtcblxuICAgIGlmIChtZFF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICAvLyB3b3JrIHdpdGggZXZlcnkgYnJlYWtwb2ludFxuICAgICAgbWRRdWVyaWVzLmZvckVhY2goYnJlYWtwb2ludCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtc0FycmF5ID0gYnJlYWtwb2ludC5zcGxpdCgnLCcpO1xuICAgICAgICBjb25zdCBtZWRpYUJyZWFrcG9pbnQgPSBwYXJhbXNBcnJheVsxXTtcbiAgICAgICAgY29uc3QgbWVkaWFUeXBlID0gcGFyYW1zQXJyYXlbMl07XG4gICAgICAgIGNvbnN0IG1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShwYXJhbXNBcnJheVswXSk7XG4gICAgICAgIC8vIG9iamVjdHMgd2l0aCBjb25kaXRpb25zXG4gICAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBicmVha3BvaW50c0FycmF5LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09PSBtZWRpYUJyZWFrcG9pbnQgJiYgaXRlbS50eXBlID09PSBtZWRpYVR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIG1kUXVlcmllc0FycmF5LnB1c2goe1xuICAgICAgICAgIGl0ZW1zQXJyYXksXG4gICAgICAgICAgbWF0Y2hNZWRpYSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZFF1ZXJpZXNBcnJheTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogc21vb3RobHkgc2xpZGVzIHVwXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XG4gICAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gYCR7dGFyZ2V0Lm9mZnNldEhlaWdodH1weGA7XG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LmhpZGRlbiA9ICFzaG93bW9yZSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICAgICFzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKSA6IG51bGw7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ19zbGlkZScpO1xuICAgICAgLy8gY3JlYXRlIGV2ZW50XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ3NsaWRlVXBEb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIHNtb290aGx5IHNsaWRlcyBkb3duXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHBhcmFtIHtib29sZWFufSBzaG93bW9yZVxuICovXG5leHBvcnQgY29uc3QgX3NsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwLCBzaG93bW9yZSA9IDApID0+IHtcbiAgaWYgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfc2xpZGUnKSkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdfc2xpZGUnKTtcbiAgICB0YXJnZXQuaGlkZGVuID0gdGFyZ2V0LmhpZGRlbiA/IGZhbHNlIDogbnVsbDtcbiAgICBzaG93bW9yZSA/IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0JykgOiBudWxsO1xuICAgIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBzaG93bW9yZSA/IGAke3Nob3dtb3JlfXJlbWAgOiBgMGA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcbiAgICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZURvd25Eb25lJywge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIHRvZ2dsZXMgc21vb3RoIHNsaWRlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvblxuICogQHJldHVybnMgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XG4gIGlmICh0YXJnZXQuaGlkZGVuKSB7XG4gICAgcmV0dXJuIF9zbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9zbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xuICB9XG59O1xuXG4vKipcbiAqIGNvbnZlcnRzIHJlbSB0byBwaXhlbHNcbiAqIEBwYXJhbSB7bnVtYmVyfSByZW1WYWx1ZVxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1Ub1B4KHJlbVZhbHVlKSB7XG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidC40Lkg0LHQsNC30L7QstGL0Lkg0YDQsNC30LzQtdGAINGI0YDQuNGE0YLQsCAoZm9udC1zaXplKSDQuNC3INGN0LvQtdC80LXQvdGC0LAgPGh0bWw+XG4gIHZhciBodG1sRm9udFNpemUgPSBwYXJzZUZsb2F0KFxuICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZVxuICApO1xuXG4gIC8vINCf0LXRgNC10LLQvtC00LjQvCDQt9C90LDRh9C10L3QuNC1INC40LcgcmVtINCyIHB4XG4gIHZhciBweFZhbHVlID0gcmVtVmFsdWUgKiBodG1sRm9udFNpemU7XG5cbiAgLy8g0J7QutGA0YPQs9C70Y/QtdC8INC30L3QsNGH0LXQvdC40LUg0LTQviDRhtC10LvRi9GFINC/0LjQutGB0LXQu9C10LkgKNC/0L4g0LbQtdC70LDQvdC40Y4pXG4gIHJldHVybiBNYXRoLnJvdW5kKHB4VmFsdWUpICsgJ3B4Jztcbn1cblxuLy8gcmVtb3ZlIGNsYXNzIGZyb20gYWxsIGFycmF5IGVsZW1lbnRzXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2xhc3NlcyA9IChhcnJheSwgY2xhc3NOYW1lKSA9PiB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBhcnJheVtpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cbn07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAscmVndWxhciw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rRmxleDpyZWd1bGFyLDUwMCw2MDAsODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOnJlZ3VsYXIsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEZsZXhcIjtcbiAgZm9udC1zaXplOiAwLjUyMDgzMzV2dztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogIzJlMmUyZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmMztcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hIHtcbiAgY29sb3I6IHVuc2V0O1xufVxuXG5hLFxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXQsXG5hLFxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5idXR0b246Zm9jdXMsXG5pbnB1dDpmb2N1cyxcbmE6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b246YWN0aXZlLFxuaW5wdXQ6YWN0aXZlLFxuYTphY3RpdmUsXG50ZXh0YXJlYTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNTZyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbnN2ZyxcbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5odG1sLmxvY2ssXG5odG1sLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTkyMHB4O1xufVxuXG4uaCB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTIwJTtcbn1cbi5oX2gxIHtcbiAgZm9udC1zaXplOiA2cmVtO1xufVxuLmhfaDIge1xuICBmb250LXNpemU6IDMuNHJlbTtcbn1cbi5oX2gzIHtcbiAgZm9udC1zaXplOiAyLjRyZW07XG59XG5cbi50eHQxNiB7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xufVxuLnR4dDE2X2NhcHMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxMDYsIDE3Mik7XG59XG4uYnRuX3doaXRlIHtcbiAgY29sb3I6IHJnYigxMDUsIDEyOSwgMjE1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5idG5fd2hpdGUgc3ZnIHBhdGgge1xuICBzdHJva2U6IHJnYigxMDUsIDEyOSwgMjE1KTtcbn1cbi5idG5fcHJpbWFyeSBzdmcge1xuICB3aWR0aDogMi42cmVtO1xufVxuLmJ0bl9wcmltYXJ5IC5idG5fX2ljb24ge1xuICBmbGV4OiAwIDAgMi42cmVtO1xuICB3aWR0aDogMi42cmVtO1xuICBoZWlnaHQ6IDIuMXJlbTtcbn1cbi5idG5fZ2hvc3Qge1xuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDAuNHJlbSAxLjRyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNkNzY5N2Q7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZTtcbn1cbi5idG5fZ2hvc3QgLmFyciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTgxZDc7XG59XG4uYnRuX2dob3N0IC5idG5fX3R4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYnRuX190eHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuQGtleWZyYW1lcyBhcnJBbmltMSB7XG4gIDMzJSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDE7XG4gIH1cbiAgNjYlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMC41O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAwLjI7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYXJyQW5pbTIge1xuICAzMyUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAwLjI7XG4gIH1cbiAgNjYlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMC41O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFyckFuaW0zIHtcbiAgMzMlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMC41O1xuICB9XG4gIDY2JSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDAuMjtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMTtcbiAgfVxufVxuLmxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLmxpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuMnJlbSk7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5ODFkNztcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmFyciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDRyZW07XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG59XG4uYXJyX3ZlcnRpY2FsIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5hcnIgc3ZnIHtcbiAgd2lkdGg6IDFyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5iYWRnZSB7XG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XG59XG4uYmFkZ2VfYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTgxZDc7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmJhZGdlX2dyYXkge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5OGU5Zjtcbn1cbi5iYWRnZV9fdHh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJyZWFkY3J1bWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2x1bW4tZ2FwOiAxLjRyZW07XG59XG4uYnJlYWRjcnVtYnMgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICM4OThlOWY7XG59XG4uYnJlYWRjcnVtYnMgYTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIi9cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMC40cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXRlbF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG50ZXh0YXJlYTpmb2N1cyxcbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAxLjJyZW07XG59XG4uaW5wdXQuX2Zvcm0tZXJyb3IgLmlucHV0X19sYWJlbDo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtZXJyb3IpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmlucHV0X19maWVsZCB7XG4gIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIGJvcmRlciAwLjNzIGVhc2U7XG59XG4uaW5wdXRfX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODk4ZTlmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4uaW5wdXRfX2ZpZWxkLl9mb3JtLWVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3Njk3ZDtcbiAgY29sb3I6ICNkNzY5N2Q7XG59XG4uaW5wdXRfX2xhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2x1bW4tZ2FwOiAzcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U5ZWNmNTtcbn1cbi5pbnB1dC5fZm9ybS1lcnJvciAuaW5wdXRfX2ZpZWxkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZDc2OTdkO1xufVxuXG4uZHJvcGRvd24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICByb3ctZ2FwOiAxLjJyZW07XG59XG4uZHJvcGRvd25fX2xhYmVsIHtcbiAgY29sb3I6ICNlOWVjZjU7XG59XG5cbi5zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X19ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbGVjdF9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDM7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3RfX3ZhbHVlIHtcbiAgcGFkZGluZzogMS42cmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICBoZWlnaHQ6IDUuNnJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VsZWN0X192YWx1ZSA+ICoge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleDogMCAwIDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2VsLWFyci5zdmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4uX3NlbGVjdC1maWxsZWQgLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSxcbi5zZWxlY3RfX3ZhbHVlIC5zZWxlY3RfX2NvbnRlbnQge1xuICBtYXgtd2lkdGg6IDMxLjRyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnNlbGVjdF9fdGV4dCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9faW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zZWxlY3RfX29wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoNTIsIDUyLCA1MiwgMC4xNSk7XG59XG4uc2VsZWN0X19zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDE5cmVtO1xufVxuLnNlbGVjdF9fb3B0aW9uIHtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG4uc2VsZWN0X19vcHRpb246Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5zZWxlY3RfX29wdGlvbjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2VsZWN0X19vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU3O1xufVxuLnNlbGVjdF9fb3B0aW9uLl9zZWxlY3Qtc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnNlbGVjdF9fZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbn1cbi5zZWxlY3RfX3N1YnRpdGxlIHtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW5lZCB7XG4gIHotaW5kZXg6IDU7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbmVkIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuLnNlbGVjdC5fc2VsZWN0LWVycm9yOm5vdCguc2VsZWN0Ll9zZWxlY3QtZXJyb3IuX3NlbGVjdC1maWxsZWQsIC5zZWxlY3QuX3NlbGVjdC1lcnJvci5fc2VsZWN0LW9wZW5lZCkgLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlIHtcbiAgY29sb3I6ICNkNzY5N2Q7XG59XG4uX3NlbGVjdC1saXN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWNjb3JkaW9uX19pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMi40cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmFjY29yZGlvbl9fdGl0bGUge1xuICBwYWRkaW5nOiAyLjRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWNjb3JkaW9uX190aXRsZS5fYWNjb3JkaW9uLWFjdGl2ZSAuYXJyIHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uYWNjb3JkaW9uX190aXRsZS5fYWNjb3JkaW9uLWFjdGl2ZSAuYXJyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5ODFkNztcbn1cbi5hY2NvcmRpb25fX3RpdGxlIC5hcnIge1xuICBmbGV4OiAwIDAgNXJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbn1cbi5hY2NvcmRpb25fX2JvZHkge1xuICBwYWRkaW5nOiAyLjRyZW07XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmFjY29yZGlvbl9fdGV4dCB7XG4gIGNvbG9yOiByZ2IoMTMyLCAxMzIsIDEzMik7XG59XG4uYWNjb3JkaW9uX190ZXh0Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5ib2R5OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTQ5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjYsIDY2LCA2NiwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJyZW0pO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzIGVhc2UgMHM7XG59XG4ubW9kYWwtc2hvdyBib2R5OjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAzcmVtIDIuNHJlbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjhzIGVhc2UgMHM7XG59XG4ubW9kYWwubW9kYWxfc2hvdyB7XG4gIHotaW5kZXg6IDE1MDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLm1vZGFsLm1vZGFsX3Nob3cgLm1vZGFsX19jb250ZW50IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5tb2RhbF9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4ubW9kYWxfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UgMHM7XG59XG4ubG9jayAubW9kYWxfX2NvbnRlbnQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLm1vZGFsX19jbG9zZSB7XG4gIG1hcmdpbi1ib3R0b206IDMuM3JlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLm1vZGFsX19jbG9zZSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSBhbmQgKG1pbi13aWR0aDogNDhlbSl7XG4gIC5idG5fcHJpbWFyeTpob3ZlciBzdmcgcGF0aDpmaXJzdC1jaGlsZCB7XG4gICAgYW5pbWF0aW9uOiBhcnJBbmltMSAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbiAgfVxuICAuYnRuX3ByaW1hcnk6aG92ZXIgc3ZnIHBhdGg6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb246IGFyckFuaW0yIDAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xuICB9XG4gIC5idG5fcHJpbWFyeTpob3ZlciBzdmcgcGF0aDpsYXN0LWNoaWxkIHtcbiAgICBhbmltYXRpb246IGFyckFuaW0zIDAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xuICB9XG4gIC5idG5fZ2hvc3Q6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2OTgxZDc7XG4gIH1cbiAgLmJ0bl9naG9zdDpob3ZlciAuYXJyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xuICB9XG4gIC5saW5rOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZXgoMCk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKXtcbiAgLnR4dDE2IHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCl7XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pe1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDVweDtcbiAgICBmb250LXNpemU6IDEuNTYyNXZ3O1xuICAgIGZvbnQtc2l6ZTogMS4zMzMzMzMzMzMzdnc7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICB9XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAzLjJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmhfaDIge1xuICAgIGZvbnQtc2l6ZTogNC40cmVtO1xuICB9XG4gIC5oX2gzIHtcbiAgICBmb250LXNpemU6IDMuNnJlbTtcbiAgfVxuICAuYnRuX3ByaW1hcnkge1xuICAgIHBhZGRpbmc6IDMuMnJlbSA1cmVtO1xuICB9XG4gIC5idG5fcHJpbWFyeSBzdmcge1xuICAgIHdpZHRoOiA0cmVtO1xuICB9XG4gIC5idG5fcHJpbWFyeSAuYnRuX19pY29uIHtcbiAgICBmbGV4OiAwIDAgNHJlbTtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDMuNXJlbTtcbiAgfVxuICAuYnRuX2dob3N0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuYnRuIHtcbiAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjByZW07XG4gIH1cbiAgLmJ0bl9fdHh0IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgLmxpbmsge1xuICAgIGJvcmRlci1ib3R0b206IDAuNHJlbSBzb2xpZCAjNjk4MWQ3O1xuICB9XG4gIC5saW5rOjphZnRlciB7XG4gICAgY29udGVudDogbm9uZTtcbiAgfVxuICAuYXJyIHtcbiAgICBmbGV4OiAwIDAgNXJlbTtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gIH1cbiAgLmFyciBzdmcge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gIH1cbiAgLmJhZGdlIHtcbiAgICBwYWRkaW5nOiAyLjRyZW0gNC44cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xuICB9XG4gIC5icmVhZGNydW1icyB7XG4gICAgY29sdW1uLWdhcDogMi42cmVtO1xuICB9XG4gIC5icmVhZGNydW1icyBhOjphZnRlciB7XG4gICAgcmlnaHQ6IC0wLjhyZW07XG4gIH1cbiAgLmlucHV0IHtcbiAgICByb3ctZ2FwOiAxLjZyZW07XG4gIH1cbiAgLmlucHV0X19maWVsZCB7XG4gICAgcGFkZGluZzogMi40cmVtIDMuNnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XG4gIH1cbiAgLmRyb3Bkb3duIHtcbiAgICByb3ctZ2FwOiAxLjZyZW07XG4gIH1cbiAgLnNlbGVjdF9fdGl0bGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDMuMnJlbTtcbiAgfVxuICAuc2VsZWN0X192YWx1ZSB7XG4gICAgcGFkZGluZzogMi40cmVtIDMuMnJlbTtcbiAgICBnYXA6IDRyZW07XG4gICAgaGVpZ2h0OiA4LjhyZW07XG4gIH1cbiAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgICBmbGV4OiAwIDAgMy4ycmVtO1xuICAgIHdpZHRoOiAzLjJyZW07XG4gICAgaGVpZ2h0OiAzLjJyZW07XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9ucyB7XG4gICAgcGFkZGluZzogMy4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDMuMnJlbTtcbiAgfVxuICAuc2VsZWN0X19vcHRpb24ge1xuICAgIHBhZGRpbmc6IDIuNHJlbSAwO1xuICB9XG4gIC5hY2NvcmRpb25fX2l0ZW0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XG4gIH1cbiAgLmFjY29yZGlvbl9fdGl0bGUge1xuICAgIHBhZGRpbmc6IDMuMnJlbTtcbiAgfVxuICAuYWNjb3JkaW9uX190aXRsZSAuYXJyIHtcbiAgICBmbGV4OiAwIDAgOXJlbTtcbiAgICB3aWR0aDogOXJlbTtcbiAgICBoZWlnaHQ6IDlyZW07XG4gIH1cbiAgLmFjY29yZGlvbl9fYm9keSB7XG4gICAgcGFkZGluZzogMy4ycmVtO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5tb2RhbF9fY2xvc2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDhyZW07XG4gICAgd2lkdGg6IDQuOHJlbTtcbiAgfVxufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXtcbiAgLmFycjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxMDYsIDE3Mik7XG4gIH1cbiAgLmJhZGdlX2hhcy1ob3Zlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAxMzMsIDE4MCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0X19vcHRpb246aG92ZXIuc2VsZWN0X19zdWJ0aXRsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYWNjb3JkaW9uX190aXRsZSAuYXJyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fdHlwby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fbGluay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19hcnJvdy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19iYWRnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19icmVhZGNydW1icy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19pbnB1dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19zZWxlY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fYWNjb3JkaW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX21vZGFscy5zY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0ksc0JBQUE7QUNJSjs7QURGQTtFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFNB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QTtFSitXVjtFS2paRjtJQTZCUSxzQkFBQTtJQUNBLG9CQUFBO0VMaVpOO0VNL2FGO0lBb0JRLGtCQUFBO0VOcWJOO0VNbGJVO0lBQ0ksY0FBQTtFTm9iZDtFTy9iRjtJQWVRLGVBQUE7RVA2Y047RU94Y0U7SUFtQlEsc0JBQUE7SUFDQSxxQkFBQTtFUDRjVjtFUWpnQkY7SUFNUSxlQUFBO0VSaWhCTjtFUTVmRTtJQVNRLHFCQUFBO0VSMGdCVjtFUXBnQkU7SUE2Q1Esc0JBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtFUm9nQlY7RVFuZ0JVO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFUnFnQmQ7RVF2ZUU7SUFZUSxlQUFBO0lBQ0EscUJBQUE7RVJtZlY7RVE1ZEU7SUF5QlEsaUJBQUE7RVJtZVY7RVN4cEJFO0lBSVEsbUJBQUE7RVRrckJWO0VTNXFCRTtJQXlCUSxlQUFBO0VUK3FCVjtFUzlxQlU7SUFDSSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RVRnckJkO0VTcHFCRTtJQUlRLGVBQUE7SUFDQSxjQUFBO0VUeXFCVjtFVWxxQkU7SUFRUSxtQkFBQTtJQUNBLGFBQUE7RVZ3dUJWO0FBakVGO0FXbHZCQTtFUHVCUTtJQUNJLG1DQUFBO0VKK1dWO0VLbFhVO0lBQ0ksbUNBQUE7SUFDQSxjTGhCUjtFQWthTjtFUXZQYztJQUNJLGVBQUE7RVJtZWxCO0VTdG5CYztJQUNJLHlCVHRCYjtFQXFzQkw7QUFpREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCc7IC8vINGI0YDQuNGE0YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L/QviDRgdCw0LnRgtGDXFxuICAgIGZvbnQtc2l6ZTogMC41MjA4MzM1dnc7IC8vINC90LAg0YDQsNC30YDQtdGI0LXQvdC40LggMTkyMCAwLjUyMDgzNXZ3ID09PSAxMHB4XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgY29sb3I6ICRmb250Q29sb3I7IC8vINGG0LLQtdGCINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINGC0LXQutGB0YLQsCDQv9C+INGB0LDQudGC0YNcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnQ29sb3I7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcbmEge1xcbiAgICBjb2xvcjogdW5zZXQ7XFxufVxcbmEsXFxuYTpob3ZlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbmEsXFxudGV4dGFyZWEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgICY6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG51bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxudWwgbGkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICB3aWR0aDogMTU2cmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ106Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXFxuc3ZnLFxcbmltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgaHRtbCB7XFxuICAgICAgICBmb250LXNpemU6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41NjI1dnc7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoKDEwMCAvIDM3NSkgKiA1dncpOyAvLyDQs9C00LUgMzc1INGN0YLQviDRiNC40YDQuNC90LAg0LzQvtCxINCy0LXRgNGB0LjQuCDQvNCw0LrQtdGC0LBcXG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gICAgfVxcblxcbiAgICBib2R5IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmc6IDAgMy4ycmVtOyAvLyDQsiDQvNC+0LEg0LLQtdGA0YHQuNC4INC+0YLRgdGC0YPQvyDQvtGCINC60YDQsNGPINC30LDQtNCw0LXQvCDQtNC70Y8g0LLRgdC10YUg0LrQvtC90YLQtdC50L3QtdGA0L7Qsiwg0LAg0YLQsNC8INCz0LTQtSDQvdC1INC90YPQttC90L4g0LzQvtC20LXQvCDRgtC+0YfQtdGH0L3QviDRg9Cx0YDQsNGC0YxcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblwiLFwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1peGlucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5AaW1wb3J0ICcuL21peGlucyc7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmFyaWFibGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4vLyBjb2xvcnNcXG4kd2hpdGU6ICNmZmZmZmY7XFxuJGJsYWNrOiAjMDAwMDAwO1xcbiRmb250Q29sb3I6ICMyZTJlMmU7XFxuJGJnQ29sb3I6ICNlZmYxZjM7XFxuJGJsdWU6ICM2OTgxZDc7XFxuJGxpZ2h0Qmx1ZTogIzYzYjNkZjtcXG4kcmVkOiAjZDc2OTdkO1xcbiRncmF5OiAjZGVlMmU3O1xcbiR0ZXh0R3JheTogIzg5OGU5ZjtcXG4kbGlnaHRHcmF5OiAjZTllY2Y1O1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZm9udHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLHJlZ3VsYXIsNzAwJmRpc3BsYXk9c3dhcCk7XFxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytGbGV4OnJlZ3VsYXIsNTAwLDYwMCw4MDAmZGlzcGxheT1zd2FwKTtcXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOnJlZ3VsYXIsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwKTtcXG5cXG4vLyBsb2NhbCBmb250c1xcbi8vIEBpbXBvcnQgJy4vZm9udHMnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFzZSBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gYmFzZSBzY3NzIGZpbGVcXG5AaW1wb3J0ICcuL3NldCc7XFxuXFxuLy8gaHRtbFxcbmh0bWwubG9jayxcXG5odG1sLmxvY2sgYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vLyBtYWluXFxubWFpbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxOTIwcHg7XFxufVxcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gaGVhZGVyIC8gZm9vdGVyXFxuQGltcG9ydCAnLi9zZWN0aW9ucy9oZWFkZXInO1xcbkBpbXBvcnQgJy4vc2VjdGlvbnMvZm9vdGVyJztcXG5cXG4vLyB1aVxcbkBpbXBvcnQgJy4uL3VpL3N0eWxlcy91aS5zY3NzJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgJy4vZGV2L3Z6bXNrMS5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi9tYXJrdXNETS5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi91a2lrMC5zY3NzJztcXG5AaW1wb3J0ICcuL2Rldi9raWU2ZXIuc2Nzcyc7XFxuXCIsXCIuaCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuXFxuICAgICZfaDEge1xcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICB9XFxuXFxuICAgICZfaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzLjRyZW07XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNC40cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfaDMge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMy42cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi50eHQxNiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcblxcbiAgICAmX2NhcHMge1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIH1cXG59XFxuXCIsXCIuYnRuIHtcXG4gICAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgICBjb2xvcjogJHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUzLCAxMDYsIDE3MiwgMSk7XFxuXFxuICAgICZfd2hpdGUge1xcbiAgICAgICAgY29sb3I6IHJnYmEoMTA1LCAxMjksIDIxNSwgMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBzdmcgcGF0aCB7XFxuICAgICAgICAgICAgc3Ryb2tlOiByZ2JhKDEwNSwgMTI5LCAyMTUsIDEpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfcHJpbWFyeSB7XFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIHdpZHRoOiAyLjZyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuX19pY29uIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMi42cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAyLjZyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuMnJlbSA1cmVtO1xcblxcbiAgICAgICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYnRuX19pY29uIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDRyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9naG9zdCB7XFxuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDAuNHJlbSAxLjRyZW07XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBjb2xvcjogJHJlZDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlO1xcblxcbiAgICAgICAgLmFyciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuX190eHQge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3ZlcikgYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICZfcHJpbWFyeSB7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIHN2ZyBwYXRoIHtcXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYXJyQW5pbTEgMC44cyBsaW5lYXIgMHMgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhcnJBbmltMiAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhcnJBbmltMyAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICZfZ2hvc3Qge1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYmx1ZTtcXG4gICAgICAgICAgICAgICAgLmFyciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgY29sdW1uLWdhcDogMy4ycmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmJ0bl9fdHh0XFxuXFxuICAgICZfX3R4dCB7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX19pY29uXFxuXFxuICAgICZfX2ljb24ge1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYXJyQW5pbTEge1xcbiAgICAzMyUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgNjYlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAwLjU7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMC4yO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgYXJyQW5pbTIge1xcbiAgICAzMyUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuMjtcXG4gICAgfVxcbiAgICA2NiUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDE7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMC41O1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgYXJyQW5pbTMge1xcbiAgICAzMyUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuNTtcXG4gICAgfVxcbiAgICA2NiUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuMjtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblwiLFwiLmxpbmsge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgMC4ycmVtKTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMC4ycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGV4KDApO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC40cmVtIHNvbGlkICRibHVlO1xcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIuYXJyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4OiAwIDAgNHJlbTtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuXFxuICAgICZfdmVydGljYWwge1xcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgc3ZnIHtcXG4gICAgICAgIHdpZHRoOiAxcmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTMsIDEwNiwgMTcyLCAxKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZmxleDogMCAwIDVyZW07XFxuICAgICAgICB3aWR0aDogNXJlbTtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG5cXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5iYWRnZSB7XFxuICAgIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTtcXG5cXG4gICAgJl9ibHVlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgfVxcblxcbiAgICAmX2dyYXkge1xcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0R3JheTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICZfaGFzLWhvdmVyIHtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgMTMzLCAxODAsIDEpO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcGFkZGluZzogMi40cmVtIDQuOHJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIC5iYWRnZV9fdHh0XFxuXFxuICAgICZfX3R4dCB7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxufVxcblwiLFwiLmJyZWFkY3J1bWJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBjb2x1bW4tZ2FwOiAxLjRyZW07XFxuXFxuICAgIGEge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgY29sb3I6ICR0ZXh0R3JheTtcXG5cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnLyc7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICByaWdodDogLTAuNHJlbTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDIuNnJlbTtcXG5cXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0wLjhyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5icmVhZGNydW1ic19fdHh0XFxuXFxuICAgICZfX3R4dCB7XFxuICAgIH1cXG59XFxuXCIsXCJpbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZW1haWwnXSxcXG5pbnB1dFt0eXBlPSd0ZWwnXSxcXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG50ZXh0YXJlYTpmb2N1cyxcXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMS4ycmVtO1xcbiAgICAmLl9mb3JtLWVycm9yIHtcXG4gICAgICAgIC5pbnB1dF9fbGFiZWwge1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLWVycm9yKTtcXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHJvdy1nYXA6IDEuNnJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuaW5wdXRfX2ZpZWxkXFxuXFxuICAgICZfX2ZpZWxkIHtcXG4gICAgICAgIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjZyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIGJvcmRlciAwLjNzIGVhc2U7XFxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgY29sb3I6ICR0ZXh0R3JheTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICB9XFxuICAgICAgICAmLl9mb3JtLWVycm9yIHtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcmVkO1xcbiAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjRyZW0gMy42cmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuaW5wdXRfX2xhYmVsXFxuXFxuICAgICZfX2xhYmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgY29sdW1uLWdhcDogM3JlbTtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICBjb2xvcjogJGxpZ2h0R3JheTtcXG4gICAgfVxcblxcbiAgICAmLl9mb3JtLWZvY3VzIHtcXG4gICAgfVxcbiAgICAmLl9mb3JtLWVycm9yIHtcXG4gICAgICAgIC5pbnB1dF9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBjb2xvcjogJHJlZDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDEuMnJlbTtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHJvdy1nYXA6IDEuNnJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuZHJvcGRvd25fX2xhYmVsXFxuXFxuICAgICZfX2xhYmVsIHtcXG4gICAgICAgIGNvbG9yOiAkbGlnaHRHcmF5O1xcbiAgICB9XFxufVxcblxcbi5zZWxlY3Qge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIC8vIC5zZWxlY3RfX2JvZHlcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGl0bGVcXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdmFsdWVcXG5cXG4gICAgJl9fdmFsdWUge1xcbiAgICAgICAgcGFkZGluZzogMS42cmVtIDJyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMnJlbTtcXG4gICAgICAgIGhlaWdodDogNS42cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICA+ICoge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZmxleDogMCAwIDJyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2VsLWFyci5zdmcpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsIHtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtc2VsLWxhYmVsKTtcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgICAgICAgICAuX3NlbGVjdC1maWxsZWQgJiB7XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJi5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXFxuICAgICAgICAuc2VsZWN0X19jb250ZW50IHtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMxLjRyZW07XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjRyZW0gMy4ycmVtO1xcbiAgICAgICAgICAgIGdhcDogNHJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDguOHJlbTtcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAzLjJyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzLjJyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMy4ycmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19jb250ZW50XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgLy8gaGlkZSAvIHNob3cgc2VsZWN0ZWQgdmFsdWVcXG4gICAgICAgIC8vICY6bm90KC5fc2VsZWN0LWZpbGxlZCAmKSB7XFxuICAgICAgICAvLyAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIC8vIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faW5wdXRcXG5cXG4gICAgJl9faW5wdXQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25zXFxuXFxuICAgICZfX29wdGlvbnMge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMjtcXG4gICAgICAgIHRvcDogY2FsYygxMDAlICsgMC44cmVtKTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSg1MiwgNTIsIDUyLCAwLjE1KTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMy4ycmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19zY3JvbGxcXG5cXG4gICAgJl9fc2Nyb2xsIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuXFxuICAgICAgICAvLyBtYXhpbXVtIGhlaWdodFxcbiAgICAgICAgbWF4LWhlaWdodDogMTlyZW07XFxuXFxuICAgICAgICAvLyBzY3JvbGxiYXIgc3R5bGVzXFxuICAgICAgICAmLnNpbXBsZWJhci1zY3JvbGxhYmxlLXkge1xcbiAgICAgICAgICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19vcHRpb25cXG4gICAgJl9fb3B0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgICAgICB9XFxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuX3NlbGVjdC1zZWxlY3RlZCB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAmOm5vdCgmLnNlbGVjdF9fc3VidGl0bGUpIHtcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMi40cmVtIDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fZ3JvdXBcXG5cXG4gICAgJl9fZ3JvdXAge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19hc3NldFxcblxcbiAgICAmX19hc3NldCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19oaW50XFxuXFxuICAgICZfX2hpbnQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3N1YnRpdGxlXFxuXFxuICAgICZfX3N1YnRpdGxlIHtcXG4gICAgICAgIGN1cnNvcjogdGV4dDtcXG4gICAgfVxcblxcbiAgICAvLyBzZWxlY3Qgc3RhdGVcXG4gICAgJi5fc2VsZWN0LW9wZW5lZCB7XFxuICAgICAgICB6LWluZGV4OiA1O1xcbiAgICAgICAgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZm9jdXNlZCB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWVycm9yIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1maWxsZWQsICYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgICAgICAuc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsIHtcXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1maWxsZWQge1xcbiAgICAgICAgJjpub3QoJi5fc2VsZWN0LW9wZW5lZCkge1xcbiAgICAgICAgICAgICY6bm90KCYuX3NlbGVjdC1zaG93LXZhbCkge1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3Qtc2hvdy12YWwge1xcbiAgICAgICAgJi5fc2VsZWN0LWZvY3VzZWQsXFxuICAgICAgICAmLl9zZWxlY3QtZmlsbGVkLFxcbiAgICAgICAgJi5fc2VsZWN0LWVycm9yLFxcbiAgICAgICAgJi5fc2VsZWN0LWRpc2FibGVkIHtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZGlzYWJsZWQge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1tdWx0aXBsZSB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWFjdGl2ZSB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWNoZWNrYm94IHtcXG4gICAgfVxcbn1cXG5cXG4vLyBsaXN0XFxuLl9zZWxlY3QtbGlzdCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsXCIuYWNjb3JkaW9uIHtcXG4gICAgLy8gLmFjY29yZGlvbl9faXRlbVxcblxcbiAgICAmX19pdGVtIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIuNHJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWNjb3JkaW9uX190aXRsZVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBwYWRkaW5nOiAyLjRyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgJi5fYWNjb3JkaW9uLWFjdGl2ZSB7XFxuICAgICAgICAgICAgLmFyciBzdmcge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuYXJyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmFyciB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDVyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgICAgICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAzLjJyZW07XFxuICAgICAgICAgICAgLmFyciB7XFxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCA5cmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogOXJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWNjb3JkaW9uX190aXRsZS10eHRcXG5cXG4gICAgJl9fdGl0bGUtdHh0IHtcXG4gICAgfVxcblxcbiAgICAvLyAuYWNjb3JkaW9uX19ib2R5XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICAgICAgcGFkZGluZzogMi40cmVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuMnJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWNjb3JkaW9uX190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICAgICAgY29sb3I6IHJnYmEoMTMyLCAxMzIsIDEzMiwgMSk7XFxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCJib2R5OjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE0OTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY2LCA2NiwgNjYsIDAuMSk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycmVtKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlIDBzO1xcbiAgICAubW9kYWwtc2hvdyAmIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHBhZGRpbmc6IDNyZW0gMi40cmVtO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuOHMgZWFzZSAwcztcXG4gICAgJi5tb2RhbF9zaG93IHtcXG4gICAgICAgIHotaW5kZXg6IDE1MDtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICAgICAgLm1vZGFsX19jb250ZW50IHtcXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLm1vZGFsX193cmFwcGVyXFxuXFxuICAgICZfX3dyYXBwZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAvLyAubW9kYWxfX2NvbnRlbnRcXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlIDBzO1xcbiAgICAgICAgLmxvY2sgJiB7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAubW9kYWxfX2Nsb3NlXFxuXFxuICAgICZfX2Nsb3NlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMuM3JlbTtcXG4gICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDQuOHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcblxuLy8gZm9ybSBmaWVsZHNcbmZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xuXG4vLyBmb3JtIHN1Ym1pdFxuZm9ybXMuZm9ybVN1Ym1pdCgpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0YWJzXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XG5cbi8vIGFjY29yZGlvblxuaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XG5cbi8vIHNlbGVjdFxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XG5cbi8vIG1vZGFsc1xuaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGR5bmFtaWMgZG9tXG4vLyBpbXBvcnQgJy4vbGlicy9kZC5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XG4iXSwibmFtZXMiOlsibW9kdWxlcyIsImRhdGFNZWRpYVF1ZXJpZXMiLCJfc2xpZGVUb2dnbGUiLCJfc2xpZGVVcCIsIl9zbGlkZURvd24iLCJhY2NvcmRpb24iLCJhY2NvcmRpb25JdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImluaXRBY2NvcmRpb24iLCJtYXRjaE1lZGlhIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsImFjY29yZGlvbkdyb3VwIiwiaXRlbSIsIm1hdGNoZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbml0QWNjb3JkaW9uQm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRBY2NvcmRpb25BY3Rpb25zIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVBY2NvcmRpb25Cb2R5IiwidGl0bGVzIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwiY2xvc2VzdCIsInRpdGxlIiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbnMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJoaWRkZW4iLCJzZXRBdHRyaWJ1dGUiLCJlIiwidGFyZ2V0IiwiZ3JvdXAiLCJpc09uZUFjdGl2ZUl0ZW0iLCJoYXNBdHRyaWJ1dGUiLCJhY2NvcmRpb25TcGVlZCIsImRhdGFzZXQiLCJwYXJzZUludCIsInRvZ2dsZSIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZlVGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiYWNjb3JkaW9uQ2xvc2UiLCJhY2NvcmRpb25JdGVtQ2xvc2UiLCJzcGVlZCIsInNwb2xsZXJzQmxvY2siLCJyZWdJdGVtcyIsImluZGV4Iiwic2VsZiIsInNwbGl0IiwibWRRdWVyaWVzQXJyYXkiLCJtZFF1ZXJpZXNJdGVtIiwiaXRlbXNBcnJheSIsImZvcm1GaWVsZHNJbml0Iiwib3B0aW9ucyIsInZpZXdQYXNzIiwiZm9ybUZpZWxkcyIsImZvcm1GaWVsZCIsInBsYWNlaG9sZGVyIiwiYm9keSIsInRhcmdldEVsZW1lbnQiLCJ0YWdOYW1lIiwidHlwZSIsInBhcmVudEVsZW1lbnQiLCJmb3JtVmFsaWRhdGUiLCJyZW1vdmVFcnJvciIsInZhbGlkYXRlSW5wdXQiLCJ2YWx1ZSIsInRyaW0iLCJmaWxlSW5wdXQiLCJpbnB1dFR5cGUiLCJnZXRFcnJvcnMiLCJmb3JtIiwiZXJyb3IiLCJmb3JtUmVxdWlyZWRJdGVtcyIsImZvcm1SZXF1aXJlZEl0ZW0iLCJvZmZzZXRQYXJlbnQiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwicmVwbGFjZSIsImVtYWlsVGVzdCIsImFkZEVycm9yIiwiY2hlY2tlZCIsInRocyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJtYXhTaXplIiwiTnVtYmVyIiwiZmlsZSIsImZpbGVzIiwicGFyZW50IiwidGV4dCIsIm5hbWUiLCJleHRlbnNpb24iLCJpbWciLCJzaXplIiwicmVtb3ZlQnRuIiwiZGF0YSIsInNsaWNlIiwiam9pbiIsInBvcCIsInNyYyIsInJlc3VsdCIsImlubmVySFRNTCIsInRvRml4ZWQiLCJyZWFkQXNEYXRhVVJMIiwidmFsaWRhdGUiLCJwYXR0ZXJuIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJmb3JtQ2xlYW4iLCJyZXNldCIsInNldFRpbWVvdXQiLCJpbnB1dHMiLCJlbCIsImNoZWNrYm94ZXMiLCJjaGVja2JveCIsImZvcm1TdWJtaXQiLCJmb3JtcyIsImZvcm1TdWJtaXRBY3Rpb24iLCJhamF4IiwiZm9ybUFjdGlvbiIsImdldEF0dHJpYnV0ZSIsImZvcm1NZXRob2QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwicmVzcG9uc2VSZXN1bHQiLCJqc29uIiwiZm9ybVNlbnQiLCJhbGVydCIsImZvcm1FcnJvciIsImdvdG9CbG9jayIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImJvZHlMb2NrU3RhdHVzIiwiYm9keUxvY2siLCJib2R5VW5sb2NrIiwiTW9kYWwiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImxvZ2dpbmciLCJpbml0IiwiYXR0cmlidXRlT3BlbkJ1dHRvbiIsImF0dHJpYnV0ZUNsb3NlQnV0dG9uIiwiZml4RWxlbWVudFNlbGVjdG9yIiwieW91dHViZUF0dHJpYnV0ZSIsInlvdXR1YmVQbGFjZUF0dHJpYnV0ZSIsInNldEF1dG9wbGF5WW91dHViZSIsImNsYXNzZXMiLCJtb2RhbCIsIm1vZGFsQ29udGVudCIsIm1vZGFsQWN0aXZlIiwiYm9keUFjdGl2ZSIsImZvY3VzQ2F0Y2giLCJjbG9zZUVzYyIsImhhc2hTZXR0aW5ncyIsImxvY2F0aW9uIiwiZ29IYXNoIiwib24iLCJiZWZvcmVPcGVuIiwiYWZ0ZXJPcGVuIiwiYmVmb3JlQ2xvc2UiLCJhZnRlckNsb3NlIiwieW91VHViZUNvZGUiLCJpc09wZW4iLCJ0YXJnZXRPcGVuIiwic2VsZWN0b3IiLCJlbGVtZW50IiwicHJldmlvdXNPcGVuIiwibGFzdENsb3NlZCIsIl9kYXRhVmFsdWUiLCJoYXNoIiwiX3Jlb3BlbiIsIl9zZWxlY3Rvck9wZW4iLCJsYXN0Rm9jdXNFbCIsIl9mb2N1c0VsIiwiaW5pdG1vZGFscyIsImV2ZW50c21vZGFsIiwiYnV0dG9uT3BlbiIsIm9wZW4iLCJidXR0b25DbG9zZSIsImNsb3NlIiwiYmluZCIsIndoaWNoIiwiY29kZSIsIl9mb2N1c0NhdGNoIiwid2luZG93IiwiX29wZW5Ub0hhc2giLCJzZWxlY3RvclZhbHVlIiwiZG9jdW1lbnRFbGVtZW50IiwicHJldmlvdXNBY3RpdmVFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsImNvZGVWaWRlbyIsInVybFZpZGVvIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsImF1dG9wbGF5IiwieW91dHViZVBsYWNlIiwiYXBwZW5kQ2hpbGQiLCJfZ2V0SGFzaCIsIl9zZXRIYXNoIiwibSIsImlubmVyV2lkdGgiLCJfZm9jdXNUcmFwIiwiX3JlbW92ZUhhc2giLCJpbmNsdWRlcyIsImNsYXNzSW5IYXNoIiwiYnV0dG9ucyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJocmVmIiwiZm9jdXNhYmxlIiwiZm9jdXNBcnJheSIsInByb3RvdHlwZSIsImNhbGwiLCJmb2N1c2VkSW5kZXgiLCJpbmRleE9mIiwic2hpZnRLZXkiLCJmb2N1cyIsImNvbmZpcm1BZ2VCdG4iLCJnZXRFbGVtZW50QnlJZCIsIlNlbGVjdCIsIl90aGlzIiwic2VsIiwibGFiZWwiLCJ2YWwiLCJjb250ZW50Iiwib3B0aW9uIiwic2Nyb2xsIiwiaW5wIiwiYXNzZXQiLCJ0eHQiLCJoaW50IiwiYWN0aXZlIiwiZm9jdXNlZCIsIm9wZW5lZCIsImZpbGxlZCIsInNlbGVjdGVkIiwibGlzdCIsIm11bHRpcGxlIiwic2VsZWN0TGlzdCIsInNlbGVjdCIsImluaXRTZWxJdGVtIiwic2V0QWN0aW9ucyIsInJlbGF0aXZlU2VsIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsInNlbElkIiwiZ2V0UGxhY2Vob2xkZXIiLCJvcHRQbGFjZWhvbGRlciIsInNob3ciLCJzZWxUaXRsZSIsImdldFNlbGVjdCIsInR3aW5TZWwiLCJidWlsZCIsImluaXRTZWxlY3Rpb25zIiwic2V0VmFsdWUiLCJzZXRPcHRpb25zIiwic2VsQWRkb25DbGFzcyIsImRpc2FibGVTZWxlY3QiLCJzZXRTZWFyY2hBY3Rpb25zIiwic2V0QWN0aW9uIiwic2VsSGludCIsInNlbEJvZHkiLCJnZXRWYWx1ZSIsInJlbGF0aXZlU2VsT3B0aW9ucyIsImdldE9wdGlvbnMiLCJnZXRDbGFzcyIsInNlbGVjdElkIiwic2VsTGlzdCIsInNlbE9wdGlvbiIsIm9wdFZhbCIsInNldE9wdGlvbkFjdGlvbiIsImFkZEVyciIsInJlbW92ZUVyciIsImNsb3NlR3JvdXAiLCJzZWxPcHRpb25zIiwic2VsZWN0T25lR3JvdXAiLCJzZWxHcm91cCIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb24iLCJjbG9zZUl0ZW0iLCJyZWxhdGl2ZVNlbGVjdGlvbnMiLCJnZXREYXRhIiwiZWxlbWVudHMiLCJyZWxhdGl2ZVNlbGVjdGlvbiIsInR3aW5TZWxlY3Rpb25zIiwidHdpblNlbGVjdGlvbiIsIm9wdCIsInRleHRDb250ZW50Iiwic2V0U2VsZWN0aW9ucyIsInNlbElucHV0IiwidG9VcHBlckNhc2UiLCJzZXRTdWJ0aXRsZSIsInNlbEVycm9yIiwiY3NzQ2xhc3MiLCJhdHRyIiwiYXR0ckNsYXNzIiwidGl0bGVWYWwiLCJodG1sIiwic2VsTGFiZWwiLCJ2YWx1ZXMiLCJtYXAiLCJnZXRDb250ZW50IiwiY3VzdG9tQ2xhc3MiLCJvcHRDbGFzcyIsInNlbFNjcm9sbCIsInNlbFNjcm9sbEhlaWdodCIsInNlbE9wdGlvbnNIVE1MIiwiZ2V0T3B0aW9uIiwic2hvd1NlbGVjdGlvbiIsIm9wdGlvbkNsYXNzIiwib3B0aW9uTGluayIsIm9wdGlvbkxpbmtUYXJnZXQiLCJvcHRpb25IVE1MIiwib3B0aW9uRGF0YSIsIm9wdEFzc2V0Iiwib3B0aW9uRGF0YUhUTUwiLCJvcHRpb25Db250ZW50SFRNTCIsImZpbmQiLCJzdWJ0aXRsZSIsInB1c2giLCJzZWxlY3RlZEluZGV4IiwidGVtcEJ1dHRvbiIsImFwcGVuZCIsImNsaWNrIiwic2V0SGFzaCIsImdldEhhc2giLCJib2R5TG9ja1RvZ2dsZSIsImRlbGF5IiwiYXJyYXkiLCJkYXRhU2V0VmFsdWUiLCJtZWRpYSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJicmVha3BvaW50IiwicGFyYW1zQXJyYXkiLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1lZGlhQnJlYWtwb2ludCIsIm1lZGlhVHlwZSIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW1vdmVQcm9wZXJ0eSIsInJlbVRvUHgiLCJyZW1WYWx1ZSIsImh0bWxGb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNpemUiLCJweFZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzTmFtZSIsImkiXSwic291cmNlUm9vdCI6IiJ9