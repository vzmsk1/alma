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

/***/ "./src/js/libs/dd.js":
/*!***************************!*\
  !*** ./src/js/libs/dd.js ***!
  \***************************/
/***/ (() => {

"use strict";


function DynamicAdapt(type) {
  this.type = type;
}
DynamicAdapt.prototype.init = function () {
  const _this = this;
  this.оbjects = [];
  this.daClassname = '_dynamic_adapt_';
  this.nodes = document.querySelectorAll('[data-da]');
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(',');
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
    оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }
  this.arraySort(this.оbjects);
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + '-width: ' + item.breakpoint + 'px),' + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};
DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    //for (let i = 0; i < оbjects.length; i++) {
    for (let i = оbjects.length - 1; i >= 0; i--) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
};
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
};
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === 'min') {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === 'first' || b.place === 'last') {
          return -1;
        }
        if (a.place === 'last' || b.place === 'first') {
          return 1;
        }
        return a.place - b.place;
      }
      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }
        if (a.place === 'first' || b.place === 'last') {
          return 1;
        }
        if (a.place === 'last' || b.place === 'first') {
          return -1;
        }
        return b.place - a.place;
      }
      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};
const da = new DynamicAdapt('max');
da.init();

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
  min-height: 100%;
  padding: 0;
}

body {
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  min-height: 100%;
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

section {
  margin-bottom: 18rem;
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
  background-color: #6981d7;
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
  white-space: nowrap;
}
.btn__txt {
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
}
.round-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 4.6rem;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;
  background-color: #6981d7;
}
.round-btn svg {
  flex: 0 0 2.6rem;
  width: 2.6rem;
  height: 2.3rem;
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

.doctors-images {
  display: flex;
}
.doctors-images__image-wrap {
  flex: 0 0 4rem;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 50%;
  overflow: hidden;
}
.doctors-images__image-wrap:nth-child(2), .doctors-images__image-wrap:nth-child(3) {
  margin-left: -1rem;
}
.doctors-images__image {
  height: 100%;
  object-fit: cover;
}

.figure-link {
  position: relative;
  padding: 1.6rem 4.8rem 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
}
.figure-link::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: url(#clFigure);
  background-color: #ffffff;
}
.figure-link__text {
  margin-bottom: 1.5rem;
  font-family: "Nunito";
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 87%;
}
.figure-link__round-btn {
  position: absolute;
  right: -0.3rem;
  bottom: 0;
}

.wrap-link {
  position: relative;
  padding: 2rem 1.1rem;
  border-radius: 2.4rem;
  overflow: hidden;
}
.wrap-link::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2.4rem;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2.5rem);
}
.about-hero__container {
  display: flex;
  flex-direction: column;
}
.about-hero__breadcrumbs {
  margin-bottom: 2.4rem;
}
.about-hero__body {
  display: flex;
  column-gap: 2.4rem;
}
.about-hero__content {
  display: flex;
  flex-direction: column;
}
.about-hero__heading {
  margin-bottom: 3.2rem;
}
.about-hero__text {
  margin-bottom: 5rem;
}
.about-hero__btn {
  justify-content: space-between;
}
.about-hero__bg {
  position: relative;
  margin-bottom: 5rem;
}
.about-hero__bg-content {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.about-hero__bg-text {
  position: absolute;
  bottom: -0.4rem;
  left: 0.7rem;
  max-width: 21.8rem;
}
.about-hero__wrap-link {
  position: absolute;
  top: 2.4rem;
  left: 2.4rem;
}
.about-hero__figure-link {
  position: absolute;
  right: 1.5rem;
  bottom: 2.8rem;
}
.about-hero__bg-image-wrap {
  height: 53.2rem;
}
.about-hero__bg-image {
  clip-path: url(#clHeroBg);
  height: 100%;
  object-fit: cover;
}

.advantages__container {
  display: flex;
  column-gap: 15.6rem;
}
.advantages__cards {
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
}
.advantages__content {
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
}
.advantages__heading {
  margin-bottom: 3.2rem;
}
.advantages__text-wrap {
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
}
.advantage-card {
  padding: 2.4rem 2.4rem 2.8rem 2.4rem;
  display: flex;
  flex-direction: column;
  row-gap: 8.6rem;
  border-radius: 2.4rem;
  background-color: #ffffff;
}
.advantage-card_blue {
  color: #ffffff;
  background-image: url("./assets/images/bg/blue-bckdrop.webp");
  background-size: cover;
  background-repeat: no-repeat;
}
.advantage-card_blue .advantage-card__icon-wrap {
  border: 1px solid #ffffff;
}
.advantage-card__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 2rem;
}
.advantage-card__icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 6rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: #6981d7;
}
.advantage-card__icon {
  width: 2.4rem;
  object-fit: contain;
}
.advantage-card__image-wrap {
  flex: 0 0 29rem;
  width: 29rem;
  height: 20.9rem;
}
.advantage-card__image {
  height: 100%;
  clip-path: url(#clAdvCard);
  object-fit: cover;
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
  ._mobile-only {
    display: none;
  }
  .txt16 {
    font-size: 1.6rem;
  }
  .about-hero__content {
    flex: 1 1 auto;
  }
  .about-hero__btn {
    align-self: flex-start;
    justify-content: center;
  }
  .about-hero__bg {
    margin-bottom: 0;
    flex: 0 0 90rem;
  }
  .about-hero__bg-image-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .advantages__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2.4rem;
    row-gap: 1.8rem;
    flex: 0 0 76.8rem;
  }
  .advantages__cards .advantage-card_has-image {
    grid-column: span 2;
  }
  .advantages__content {
    margin-bottom: 0;
    flex: 1 1 auto;
  }
  .advantage-card_has-image {
    padding: 2rem 1.7rem 1.9rem 2.4rem;
    display: grid;
    grid-template: auto auto/1fr 29rem;
  }
  .advantage-card_has-image .advantage-card__icon-wrap {
    display: none;
  }
  .advantage-card_has-image .advantage-card__head {
    grid-column: 1;
    grid-row: 1;
  }
  .advantage-card_has-image .advantage-card__body {
    grid-column: 1;
    grid-row: 2;
  }
  .advantage-card_has-image .advantage-card__image-wrap {
    grid-column: 2;
    grid-row: span 2;
  }
  .advantage-card_has-image .advantage-card__heading {
    margin-bottom: auto;
  }
}
@media (min-width: 1920px){
  html {
    font-size: 10px;
  }
}
@media (max-width: 48em){
  section {
    margin-bottom: 20rem;
  }
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
  ._desktop-only {
    display: none;
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
  .round-btn {
    flex: 0 0 9rem;
    width: 9rem;
    height: 9rem;
  }
  .round-btn svg {
    flex: 0 0 4rem;
    width: 4rem;
    height: 4.6rem;
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
  .doctors-images__image-wrap {
    flex: 0 0 8rem;
    width: 8rem;
    height: 8rem;
  }
  .wrap-link {
    padding: 1.6rem 2.4rem;
    border-radius: 3.2rem;
  }
  .wrap-link .btn {
    justify-content: space-between;
    width: 100%;
  }
  .about-hero__breadcrumbs {
    margin-bottom: 6.4rem;
  }
  .about-hero__body {
    flex-direction: column-reverse;
  }
  .about-hero__heading {
    margin-bottom: 6.4rem;
    order: 1;
  }
  .about-hero__bg-text {
    bottom: auto;
    top: 0;
    left: 0;
    max-width: 35.6rem;
    font-size: 2.4rem;
  }
  .about-hero__wrap-link {
    top: auto;
    bottom: 3rem;
    left: 50%;
    width: calc(100% - 4.8rem);
    transform: translateX(-50%);
  }
  .about-hero__wrap-link .btn__icon {
    display: none;
  }
  .about-hero__wrap-link .btn__txt {
    font-size: 3.6rem;
    font-weight: 400;
    color: #000000;
  }
  .about-hero__figure-link {
    display: none;
  }
  .about-hero__bg-image {
    clip-path: url(#clHeroBg-m);
  }
  .advantages__container {
    flex-direction: column-reverse;
  }
  .advantages__card {
    row-gap: normal;
    min-height: 47.2rem;
  }
  .advantages__card .advantage-card__head {
    margin-bottom: auto;
  }
  .advantages__heading {
    margin-bottom: 4.8rem;
  }
  .advantages__text-wrap {
    row-gap: 2rem;
  }
  .advantage-card {
    padding: 4.8rem;
    border-radius: 4.8rem;
  }
  .advantage-card_has-image .advantage-card__image-wrap {
    display: none;
  }
  .advantage-card__head {
    align-items: center;
  }
  .advantage-card__icon-wrap {
    flex: 0 0 9rem;
    width: 9rem;
    height: 9rem;
  }
  .advantage-card__icon {
    width: 3.2rem;
  }
  .advantage-card__text {
    max-width: 51rem;
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
  .wrap-link .btn_ghost:hover {
    border: 1px solid transparent;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/set.scss","webpack://./src/scss/style.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_link.scss","webpack://./src/ui/styles/_arrow.scss","webpack://./src/ui/styles/_badge.scss","webpack://./src/ui/styles/_breadcrumbs.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_accordion.scss","webpack://./src/ui/styles/_modals.scss","webpack://./src/ui/styles/_doctors-images.scss","webpack://./src/ui/styles/_figure-link.scss","webpack://./src/ui/styles/_wrap-link.scss","webpack://./src/scss/sections/_about-hero.scss","webpack://./src/scss/sections/_advantages.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: 'Roboto Flex'; // шрифт по умолчанию по сайту\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    min-height: 100%;\n    padding: 0;\n}\n\nbody {\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    min-height: 100%;\n    font-size: 1.8rem;\n    color: $fontColor; // цвет по умолчанию текста по сайту\n    background-color: $bgColor;\n}\n\ninput,\ntextarea {\n    -webkit-animation: bugfix infinite 1s;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\na {\n    color: unset;\n}\na,\na:hover {\n    text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        outline: none;\n    }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: 0;\n    padding: 0;\n}\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n\nbutton {\n    border: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    padding: 0;\n    background-color: transparent;\n}\nul {\n    padding: 0;\n    margin: 0;\n}\n\nul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\nsection {\n    margin-bottom: 18rem;\n\n    @media (max-width: 48em) {\n        margin-bottom: 20rem;\n    }\n}\n\n.container {\n    width: 156rem;\n    margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n}\n\nsvg,\nimg {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (min-width: 1920px) {\n    html {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 48em) {\n    html {\n        font-size: 5px;\n        font-size: 1.5625vw;\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n        -webkit-text-size-adjust: none;\n    }\n\n    body {\n        font-size: 3rem;\n        -webkit-text-size-adjust: none;\n    }\n\n    .container {\n        padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n        width: 100%;\n    }\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n// colors\n$white: #ffffff;\n$black: #000000;\n$fontColor: #2e2e2e;\n$bgColor: #eff1f3;\n$blue: #6981d7;\n$lightBlue: #63b3df;\n$red: #d7697d;\n$gray: #dee2e7;\n$textGray: #898e9f;\n$lightGray: #e9ecf5;\n\n// ---------------------------------- fonts ---------------------------------\n\n@import url(https://fonts.googleapis.com/css?family=Montserrat:300,regular,700&display=swap);\n@import url(https://fonts.googleapis.com/css?family=Roboto+Flex:regular,500,600,800&display=swap);\n@import url(https://fonts.googleapis.com/css?family=Nunito:regular,500,600,700&display=swap);\n\n// local fonts\n// @import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// html\nhtml.lock,\nhtml.lock body {\n    overflow: hidden;\n    touch-action: none;\n}\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\n// main\nmain {\n    position: relative;\n}\n\n.wrapper {\n    margin: 0 auto;\n    max-width: 1920px;\n}\n\n._mobile-only {\n    @media (min-width: 48em) {\n        display: none;\n    }\n}\n\n._desktop-only {\n    @media (max-width: 48em) {\n        display: none;\n    }\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './sections/header';\n@import './sections/footer';\n\n// ui\n@import '../ui/styles/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n@import './dev/kie6er.scss';\n",".h {\n    font-family: 'Nunito';\n    font-weight: 500;\n    line-height: 120%;\n\n    &_h1 {\n        font-size: 6rem;\n    }\n\n    &_h2 {\n        font-size: 3.4rem;\n        @media (max-width: 48em) {\n            font-size: 4.4rem;\n        }\n    }\n\n    &_h3 {\n        font-size: 2.4rem;\n\n        @media (max-width: 48em) {\n            font-size: 3.6rem;\n        }\n    }\n}\n\n.txt16 {\n    line-height: 120%;\n\n    &_caps {\n        text-transform: uppercase;\n    }\n\n    @media (min-width: 48em) {\n        font-size: 1.6rem;\n    }\n}\n",".btn {\n    padding: 1.6rem 3.2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 1.6rem;\n    border-radius: 10rem;\n    color: $white;\n    background-color: $blue;\n\n    &_white {\n        color: rgba(105, 129, 215, 1);\n        background-color: $white;\n        svg path {\n            stroke: rgba(105, 129, 215, 1);\n        }\n    }\n\n    &_primary {\n        svg {\n            width: 2.6rem;\n        }\n\n        .btn__icon {\n            flex: 0 0 2.6rem;\n            width: 2.6rem;\n            height: 2.1rem;\n        }\n\n        @media (max-width: 48em) {\n            padding: 3.2rem 5rem;\n\n            svg {\n                width: 4rem;\n            }\n\n            .btn__icon {\n                flex: 0 0 4rem;\n                width: 4rem;\n                height: 3.5rem;\n            }\n        }\n    }\n\n    &_ghost {\n        padding: 0.4rem 0.4rem 0.4rem 1.4rem;\n        justify-content: space-between;\n        color: $red;\n        background-color: transparent;\n        border: 1px solid transparent;\n        transition: border 0.3s ease;\n\n        .arr {\n            background-color: $blue;\n        }\n\n        .btn__txt {\n            font-weight: 600;\n            white-space: nowrap;\n        }\n\n        @media (max-width: 48em) {\n            padding: 0;\n            border: none;\n        }\n    }\n\n    @media (any-hover: hover) and (min-width: 48em) {\n        &_primary {\n            &:hover {\n                svg path {\n                    &:first-child {\n                        animation: arrAnim1 0.8s linear 0s infinite;\n                    }\n                    &:nth-child(2) {\n                        animation: arrAnim2 0.8s linear 0s infinite;\n                    }\n                    &:last-child {\n                        animation: arrAnim3 0.8s linear 0s infinite;\n                    }\n                }\n            }\n        }\n        &_ghost {\n            &:hover {\n                border: 1px solid $blue;\n                .arr {\n                    background-color: $blue;\n                }\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        column-gap: 3.2rem;\n        border-radius: 20rem;\n    }\n\n    // .btn__txt\n\n    &__txt {\n        font-weight: 500;\n        font-size: 2rem;\n        line-height: 1;\n\n        @media (max-width: 48em) {\n            font-size: 3rem;\n        }\n    }\n\n    // .btn__icon\n\n    &__icon {\n    }\n}\n\n.round-btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 4.6rem;\n    width: 4.6rem;\n    height: 4.6rem;\n    border-radius: 50%;\n    background-color: $blue;\n\n    svg {\n        flex: 0 0 2.6rem;\n        width: 2.6rem;\n        height: 2.3rem;\n    }\n\n    @media (max-width: 48em) {\n        flex: 0 0 9rem;\n        width: 9rem;\n        height: 9rem;\n\n        svg {\n            flex: 0 0 4rem;\n            width: 4rem;\n            height: 4.6rem;\n        }\n    }\n}\n\n@keyframes arrAnim1 {\n    33% {\n        stroke-opacity: 1;\n    }\n    66% {\n        stroke-opacity: 0.5;\n    }\n    100% {\n        stroke-opacity: 0.2;\n    }\n}\n@keyframes arrAnim2 {\n    33% {\n        stroke-opacity: 0.2;\n    }\n    66% {\n        stroke-opacity: 1;\n    }\n    100% {\n        stroke-opacity: 0.5;\n    }\n}\n@keyframes arrAnim3 {\n    33% {\n        stroke-opacity: 0.5;\n    }\n    66% {\n        stroke-opacity: 0.2;\n    }\n    100% {\n        stroke-opacity: 1;\n    }\n}\n",".link {\n    position: relative;\n    display: inline-flex;\n\n    &::after {\n        content: '';\n        position: absolute;\n        top: calc(100% + 0.2rem);\n        left: 0;\n        width: 100%;\n        height: 0.2rem;\n        background-color: $blue;\n        transform-origin: left;\n        transition: transform 0.3s ease;\n    }\n\n    @media (any-hover: hover) and (min-width: 48em) {\n        &:hover {\n            &::after {\n                transform: scalex(0);\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        border-bottom: 0.4rem solid $blue;\n        &::after {\n            content: none;\n        }\n    }\n}\n",".arr {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 4rem;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    background-color: $gray;\n    transition: background-color 0.3s ease;\n\n    &_vertical {\n        svg {\n            transform: rotate(90deg);\n        }\n    }\n\n    svg {\n        width: 1rem;\n        transition: transform 0.3s ease;\n    }\n\n    @media (any-hover: hover) {\n        &:hover {\n            background-color: rgba(53, 106, 172, 1);\n        }\n    }\n\n    @media (max-width: 48em) {\n        flex: 0 0 5rem;\n        width: 5rem;\n        height: 5rem;\n\n        svg {\n            width: 1.5rem;\n        }\n    }\n}\n",".badge {\n    padding: 1.6rem 3.2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10rem;\n    background-color: $white;\n    transition: background-color 0.3s ease, color 0.3s ease;\n\n    &_blue {\n        background-color: $blue;\n        color: $white;\n    }\n\n    &_gray {\n        color: $white;\n        background-color: $textGray;\n    }\n\n    @media (any-hover: hover) {\n        &_has-hover {\n            &:hover {\n                background-color: rgba(96, 133, 180, 1);\n                color: $white;\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        padding: 2.4rem 4.8rem;\n        border-radius: 20rem;\n    }\n\n    // .badge__txt\n\n    &__txt {\n        font-weight: 600;\n    }\n}\n",".breadcrumbs {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    column-gap: 1.4rem;\n\n    a {\n        position: relative;\n        color: $textGray;\n\n        &::after {\n            content: '/';\n            position: absolute;\n            top: 0;\n            right: -0.4rem;\n            transform: translateX(100%);\n        }\n    }\n\n    @media (max-width: 48em) {\n        column-gap: 2.6rem;\n\n        a {\n            &::after {\n                right: -0.8rem;\n            }\n        }\n    }\n\n    // .breadcrumbs__txt\n\n    &__txt {\n    }\n}\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.input {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    row-gap: 1.2rem;\n    &._form-error {\n        .input__label {\n            &::after {\n                content: attr(data-error);\n                white-space: nowrap;\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        row-gap: 1.6rem;\n    }\n\n    // .input__field\n\n    &__field {\n        padding: 1.6rem 2rem;\n        display: block;\n        width: 100%;\n        background-color: $white;\n        line-height: 1;\n        border: 1px solid transparent;\n        border-radius: 1.6rem;\n        transition: color 0.3s ease, border 0.3s ease;\n        &::placeholder {\n            color: $textGray;\n            transition: color 0.3s ease;\n        }\n        &._form-error {\n            border: 1px solid $red;\n            color: $red;\n        }\n\n        @media (max-width: 48em) {\n            padding: 2.4rem 3.6rem;\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .input__label\n\n    &__label {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        column-gap: 3rem;\n        white-space: nowrap;\n        color: $lightGray;\n    }\n\n    &._form-focus {\n    }\n    &._form-error {\n        .input__field::placeholder {\n            color: $red;\n        }\n    }\n}\n",".dropdown {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1.2rem;\n\n    @media (max-width: 48em) {\n        row-gap: 1.6rem;\n    }\n\n    // .dropdown__label\n\n    &__label {\n        color: $lightGray;\n    }\n}\n\n.select {\n    position: relative;\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        position: relative;\n        z-index: 3;\n        width: 100%;\n        border-radius: 1.6rem;\n        background-color: $white;\n        cursor: pointer;\n\n        @media (max-width: 48em) {\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .select__value\n\n    &__value {\n        padding: 1.6rem 2rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n        height: 5.6rem;\n        width: 100%;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 2rem;\n            width: 2rem;\n            height: 2rem;\n            background-image: url(./assets/images/icons/sel-arr.svg);\n            background-size: contain;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n        }\n        &._select-label {\n            &::before {\n                content: attr(data-sel-label);\n                transition: color 0.3s ease;\n                ._select-filled & {\n                    display: none;\n                }\n            }\n        }\n        &._select-label::before,\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        @media (max-width: 48em) {\n            padding: 2.4rem 3.2rem;\n            gap: 4rem;\n            height: 8.8rem;\n            &::after {\n                flex: 0 0 3.2rem;\n                width: 3.2rem;\n                height: 3.2rem;\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        // &:not(._select-filled &) {\n        //     display: none;\n        // }\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% + 0.8rem);\n        left: 0;\n        padding: 2rem;\n        min-width: 100%;\n        border-radius: 1.6rem;\n        background-color: $white;\n        box-shadow: 0 0 2rem rgba(52, 52, 52, 0.15);\n\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 19rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n            }\n            .simplebar-scrollbar {\n            }\n        }\n    }\n\n    // .select__option\n    &__option {\n        padding: 1.5rem 0;\n        width: 100%;\n        transition: color 0.3s ease;\n        &:first-child {\n            padding-top: 0;\n        }\n        &:last-child {\n            padding-bottom: 0;\n        }\n        &:not(:last-child) {\n            border-bottom: 1px solid $gray;\n        }\n\n        &._select-selected {\n            font-weight: 500;\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                }\n            }\n        }\n        @media (max-width: 48em) {\n            padding: 2.4rem 0;\n        }\n    }\n\n    // .select__group\n\n    &__group {\n        display: inline-flex;\n        align-items: flex-start;\n        flex-direction: column-reverse;\n    }\n\n    // .select__asset\n\n    &__asset {\n    }\n\n    // .select__text\n\n    &__text {\n    }\n\n    // .select__hint\n\n    &__hint {\n    }\n\n    // .select__subtitle\n\n    &__subtitle {\n        cursor: text;\n    }\n\n    // select state\n    &._select-opened {\n        z-index: 5;\n        .select__value::after {\n            transform: rotate(-180deg);\n        }\n    }\n    &._select-focused {\n    }\n    &._select-error {\n        &:not(&._select-filled, &._select-opened) {\n            .select__value._select-label {\n                &::before {\n                    color: $red;\n                }\n            }\n        }\n    }\n    &._select-filled {\n        &:not(&._select-opened) {\n            &:not(&._select-show-val) {\n            }\n        }\n    }\n    &._select-show-val {\n        &._select-focused,\n        &._select-filled,\n        &._select-error,\n        &._select-disabled {\n        }\n    }\n    &._select-disabled {\n    }\n    &._select-multiple {\n    }\n    &._select-active {\n    }\n    &._select-checkbox {\n    }\n}\n\n// list\n._select-list {\n    cursor: pointer;\n}\n",".accordion {\n    // .accordion__item\n\n    &__item {\n        border-radius: 2.4rem;\n        background-color: $white;\n        @media (max-width: 48em) {\n            border-radius: 5rem;\n        }\n    }\n\n    // .accordion__title\n\n    &__title {\n        padding: 2.4rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n        &._accordion-active {\n            .arr svg {\n                transform: rotate(-90deg);\n            }\n            .arr {\n                background-color: $blue;\n            }\n        }\n        .arr {\n            flex: 0 0 5rem;\n            width: 5rem;\n            height: 5rem;\n            @media (any-hover: hover) {\n                &:hover {\n                    background-color: $blue;\n                }\n            }\n        }\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            .arr {\n                flex: 0 0 9rem;\n                width: 9rem;\n                height: 9rem;\n            }\n        }\n    }\n\n    // .accordion__title-txt\n\n    &__title-txt {\n    }\n\n    // .accordion__body\n\n    &__body {\n        padding: 2.4rem;\n        padding-top: 0;\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            padding-top: 0;\n        }\n    }\n\n    // .accordion__text\n\n    &__text {\n        color: rgba(132, 132, 132, 1);\n        &:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n}\n","body::after {\n    content: '';\n    position: fixed;\n    z-index: 149;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(66, 66, 66, 0.1);\n    backdrop-filter: blur(2rem);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.8s ease 0s;\n    .modal-show & {\n        opacity: 1;\n    }\n}\n\n.modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 3rem 2.4rem;\n    visibility: hidden;\n    pointer-events: none;\n    transition: visibility 0.8s ease 0s;\n    &.modal_show {\n        z-index: 150;\n        visibility: visible;\n        overflow: auto;\n        pointer-events: auto;\n        .modal__content {\n            visibility: visible;\n            transform: scale(1);\n        }\n    }\n\n    // .modal__wrapper\n\n    &__wrapper {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        flex: 1 1 auto;\n        width: 100%;\n        min-height: 100%;\n    }\n\n    // .modal__content\n\n    &__content {\n        position: relative;\n        width: 100%;\n        visibility: hidden;\n        transform: scale(0);\n        transition: transform 0.3s ease 0s;\n        .lock & {\n            visibility: visible;\n        }\n    }\n\n    // .modal__close\n\n    &__close {\n        margin-bottom: 3.3rem;\n        width: 4rem;\n        align-self: flex-end;\n        img {\n            object-fit: contain;\n        }\n        @media (max-width: 48em) {\n            margin-bottom: 8rem;\n            width: 4.8rem;\n        }\n    }\n}\n\n// --------------------------------------------------------------------------\n",".doctors-images {\n    display: flex;\n\n    // .doctors-images__image-wrap\n\n    &__image-wrap {\n        flex: 0 0 4rem;\n        width: 4rem;\n        height: 4rem;\n        border: 1px solid rgba(221, 221, 221, 1);\n        border-radius: 50%;\n        overflow: hidden;\n        &:nth-child(2),\n        &:nth-child(3) {\n            margin-left: -1rem;\n        }\n\n        @media (max-width: 48em) {\n            flex: 0 0 8rem;\n            width: 8rem;\n            height: 8rem;\n        }\n    }\n\n    // .doctors-images__image\n\n    &__image {\n        height: 100%;\n        object-fit: cover;\n    }\n}\n",".figure-link {\n    position: relative;\n    padding: 1.6rem 4.8rem 1.2rem 1.6rem;\n    display: flex;\n    flex-direction: column;\n    border-radius: 2rem;\n\n    &::before {\n        content: '';\n        position: absolute;\n        z-index: -1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        clip-path: url(#clFigure);\n        background-color: $white;\n    }\n\n    // .figure-link__text\n\n    &__text {\n        margin-bottom: 1.5rem;\n        font-family: 'Nunito';\n        font-weight: 500;\n        font-size: 2.4rem;\n        line-height: 87%;\n    }\n\n    // .figure-link__images\n\n    &__images {\n    }\n\n    // .figure-link__round-btn\n\n    &__round-btn {\n        position: absolute;\n        right: -0.3rem;\n        bottom: 0;\n    }\n}\n",".wrap-link {\n    position: relative;\n    padding: 2rem 1.1rem;\n    border-radius: 2.4rem;\n    overflow: hidden;\n\n    &::after {\n        content: '';\n        position: absolute;\n        z-index: -1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 2.4rem;\n        border: 1.5px solid rgba(255, 255, 255, 0.5);\n        background-color: rgba(255, 255, 255, 0.3);\n        backdrop-filter: blur(2.5rem);\n    }\n\n    @media (any-hover: hover) {\n        .btn_ghost:hover {\n            border: 1px solid transparent;\n        }\n    }\n\n    @media (max-width: 48em) {\n        padding: 1.6rem 2.4rem;\n        border-radius: 3.2rem;\n\n        .btn {\n            justify-content: space-between;\n            width: 100%;\n        }\n    }\n\n    // .wrap-link__btn\n\n    &__btn {\n    }\n}\n",".about-hero {\n    // .about-hero__container\n\n    &__container {\n        display: flex;\n        flex-direction: column;\n    }\n\n    // .about-hero__breadcrumbs\n\n    &__breadcrumbs {\n        margin-bottom: 2.4rem;\n\n        @media (max-width: 48em) {\n            margin-bottom: 6.4rem;\n        }\n    }\n\n    // .about-hero__body\n\n    &__body {\n        display: flex;\n        column-gap: 2.4rem;\n\n        @media (max-width: 48em) {\n            flex-direction: column-reverse;\n        }\n    }\n\n    // .about-hero__content\n\n    &__content {\n        display: flex;\n        flex-direction: column;\n\n        @media (min-width: 48em) {\n            flex: 1 1 auto;\n        }\n    }\n\n    // .about-hero__heading\n\n    &__heading {\n        margin-bottom: 3.2rem;\n\n        @media (max-width: 48em) {\n            margin-bottom: 6.4rem;\n            order: 1;\n        }\n    }\n\n    // .about-hero__text\n\n    &__text {\n        margin-bottom: 5rem;\n    }\n\n    // .about-hero__btn\n\n    &__btn {\n        justify-content: space-between;\n\n        @media (min-width: 48em) {\n            align-self: flex-start;\n            justify-content: center;\n        }\n    }\n\n    // .about-hero__bg\n\n    &__bg {\n        position: relative;\n        margin-bottom: 5rem;\n\n        @media (min-width: 48em) {\n            margin-bottom: 0;\n            flex: 0 0 90rem;\n        }\n    }\n\n    // .about-hero__bg-content\n\n    &__bg-content {\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    // .about-hero__bg-text\n\n    &__bg-text {\n        position: absolute;\n        bottom: -0.4rem;\n        left: 0.7rem;\n        max-width: 21.8rem;\n\n        @media (max-width: 48em) {\n            bottom: auto;\n            top: 0;\n            left: 0;\n            max-width: 35.6rem;\n            font-size: 2.4rem;\n        }\n    }\n\n    // .about-hero__wrap-link\n\n    &__wrap-link {\n        position: absolute;\n        top: 2.4rem;\n        left: 2.4rem;\n\n        @media (max-width: 48em) {\n            top: auto;\n            bottom: 3rem;\n            left: 50%;\n            width: calc(100% - 4.8rem);\n            transform: translateX(-50%);\n\n            .btn__icon {\n                display: none;\n            }\n\n            .btn__txt {\n                font-size: 3.6rem;\n                font-weight: 400;\n                color: $black;\n            }\n        }\n    }\n\n    // .about-hero__figure-link\n\n    &__figure-link {\n        position: absolute;\n        right: 1.5rem;\n        bottom: 2.8rem;\n\n        @media (max-width: 48em) {\n            display: none;\n        }\n    }\n\n    // .about-hero__bg-image-wrap\n\n    &__bg-image-wrap {\n        height: 53.2rem;\n\n        @media (min-width: 48em) {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n    }\n\n    // .about-hero__bg-image\n\n    &__bg-image {\n        clip-path: url(#clHeroBg);\n        height: 100%;\n        object-fit: cover;\n\n        @media (max-width: 48em) {\n            clip-path: url(#clHeroBg-m);\n        }\n    }\n}\n",".advantages {\n    // .advantages__container\n\n    &__container {\n        display: flex;\n        column-gap: 15.6rem;\n\n        @media (max-width: 48em) {\n            flex-direction: column-reverse;\n        }\n    }\n\n    // .advantages__cards\n\n    &__cards {\n        display: flex;\n        flex-direction: column;\n        row-gap: 2.4rem;\n\n        @media (min-width: 48em) {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            column-gap: 2.4rem;\n            row-gap: 1.8rem;\n            flex: 0 0 76.8rem;\n\n            .advantage-card_has-image {\n                grid-column: span 2;\n            }\n        }\n    }\n\n    // .advantages__card\n\n    &__card {\n        @media (max-width: 48em) {\n            row-gap: normal;\n            min-height: 47.2rem;\n\n            .advantage-card__head {\n                margin-bottom: auto;\n            }\n        }\n    }\n\n    // .advantages__content\n\n    &__content {\n        margin-bottom: 6rem;\n        display: flex;\n        flex-direction: column;\n\n        @media (min-width: 48em) {\n            margin-bottom: 0;\n            flex: 1 1 auto;\n        }\n    }\n\n    // .advantages__heading\n\n    &__heading {\n        margin-bottom: 3.2rem;\n\n        @media (max-width: 48em) {\n            margin-bottom: 4.8rem;\n        }\n    }\n\n    // .advantages__text-wrap\n\n    &__text-wrap {\n        display: flex;\n        flex-direction: column;\n        row-gap: 4rem;\n\n        @media (max-width: 48em) {\n            row-gap: 2rem;\n        }\n    }\n\n    // .advantages__text\n\n    &__text {\n    }\n}\n\n.advantage-card {\n    padding: 2.4rem 2.4rem 2.8rem 2.4rem;\n    display: flex;\n    flex-direction: column;\n    row-gap: 8.6rem;\n    border-radius: 2.4rem;\n    background-color: $white;\n\n    @media (max-width: 48em) {\n        padding: 4.8rem;\n        border-radius: 4.8rem;\n    }\n\n    // .advantage-card_blue\n\n    &_blue {\n        color: $white;\n        background-image: url('./assets/images/bg/blue-bckdrop.webp');\n        background-size: cover;\n        background-repeat: no-repeat;\n\n        .advantage-card__icon-wrap {\n            border: 1px solid $white;\n        }\n    }\n\n    // .advantage-card_has-image\n\n    &_has-image {\n        @media (max-width: 48em) {\n            .advantage-card__image-wrap {\n                display: none;\n            }\n        }\n\n        @media (min-width: 48em) {\n            padding: 2rem 1.7rem 1.9rem 2.4rem;\n            display: grid;\n            grid-template: auto auto / 1fr 29rem;\n\n            .advantage-card__icon-wrap {\n                display: none;\n            }\n\n            .advantage-card__head {\n                grid-column: 1;\n                grid-row: 1;\n            }\n\n            .advantage-card__body {\n                grid-column: 1;\n                grid-row: 2;\n            }\n\n            .advantage-card__image-wrap {\n                grid-column: 2;\n                grid-row: span 2;\n            }\n\n            .advantage-card__heading {\n                margin-bottom: auto;\n            }\n        }\n    }\n\n    // .advantage-card__head\n\n    &__head {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        column-gap: 2rem;\n\n        @media (max-width: 48em) {\n            align-items: center;\n        }\n    }\n\n    // .advantage-card__heading\n\n    &__heading {\n    }\n\n    // .advantage-card__icon-wrap\n\n    &__icon-wrap {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 6rem;\n        width: 6rem;\n        height: 6rem;\n        border-radius: 50%;\n        background-color: $blue;\n\n        @media (max-width: 48em) {\n            flex: 0 0 9rem;\n            width: 9rem;\n            height: 9rem;\n        }\n    }\n\n    // .advantage-card__icon\n\n    &__icon {\n        width: 2.4rem;\n        object-fit: contain;\n\n        @media (max-width: 48em) {\n            width: 3.2rem;\n        }\n    }\n\n    // .advantage-card__body\n\n    &__body {\n    }\n\n    // .advantage-card__text\n\n    &__text {\n        @media (max-width: 48em) {\n            max-width: 51rem;\n        }\n    }\n\n    // .advantage-card__image-wrap\n\n    &__image-wrap {\n        flex: 0 0 29rem;\n        width: 29rem;\n        height: 20.9rem;\n    }\n\n    // .advantage-card__image\n\n    &__image {\n        height: 100%;\n        clip-path: url(#clAdvCard);\n        object-fit: cover;\n    }\n}\n",null],"sourceRoot":""}]);
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
/* harmony import */ var _libs_dd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/dd.js */ "./src/js/libs/dd.js");
/* harmony import */ var _libs_dd_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_libs_dd_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev/vzmsk1.js */ "./src/js/dev/vzmsk1.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev/markusDM.js */ "./src/js/dev/markusDM.js");
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dev_markusDM_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dev/ukik0.js */ "./src/js/dev/ukik0.js");
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dev/kie6er.js */ "./src/js/dev/kie6er.js");
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dev_kie6er_js__WEBPACK_IMPORTED_MODULE_9__);


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


// --------------------------------------------------------------------------





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOHdCQUE4d0IsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxRQUFRLFVBQVUsVUFBVSxVQUFVLEtBQUssUUFBUSxVQUFVLEtBQUssUUFBUSxVQUFVLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxRQUFRLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksT0FBTyxPQUFPLFdBQVcsWUFBWSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sUUFBUSxPQUFPLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sUUFBUSxPQUFPLFVBQVUsTUFBTSxPQUFPLFFBQVEsT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sWUFBWSxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxRQUFRLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFFBQVEsT0FBTyxZQUFZLE9BQU8sT0FBTyxXQUFXLE9BQU8sb0RBQW9ELDZCQUE2QixHQUFHLFFBQVEsa0NBQWtDLDREQUE0RCxrRUFBa0UsMEJBQTBC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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7O0FBRTVCOztBQUUwQzs7QUFFMUM7QUFDQTdPLDJEQUFvQixDQUFDO0VBQUUvRCxRQUFRLEVBQUU7QUFBTSxDQUFDLENBQUM7O0FBRXpDO0FBQ0ErRCx1REFBZ0IsQ0FBQyxDQUFDOztBQUVsQjs7QUFFQTtBQUNBOztBQUVBO0FBQzhCOztBQUU5QjtBQUMyQjs7QUFFM0I7QUFDMkI7O0FBRTNCOztBQUVBO0FBQ3NCOztBQUV0Qjs7QUFFeUI7QUFDRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2xpYnMvZGQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL21vZGFscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvc2VsZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzcz82YzJkIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBEeW5hbWljQWRhcHQodHlwZSkge1xuICB0aGlzLnR5cGUgPSB0eXBlO1xufVxuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gIHRoaXMu0L5iamVjdHMgPSBbXTtcbiAgdGhpcy5kYUNsYXNzbmFtZSA9ICdfZHluYW1pY19hZGFwdF8nO1xuICB0aGlzLm5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGFdJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzW2ldO1xuICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGFzZXQuZGEudHJpbSgpO1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IGRhdGEuc3BsaXQoJywnKTtcbiAgICBjb25zdCDQvmJqZWN0ID0ge307XG4gICAg0L5iamVjdC5lbGVtZW50ID0gbm9kZTtcbiAgICDQvmJqZWN0LnBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICDQvmJqZWN0LmRlc3RpbmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihkYXRhQXJyYXlbMF0udHJpbSgpKTtcbiAgICDQvmJqZWN0LmJyZWFrcG9pbnQgPSBkYXRhQXJyYXlbMV0gPyBkYXRhQXJyYXlbMV0udHJpbSgpIDogJzc2Nyc7XG4gICAg0L5iamVjdC5wbGFjZSA9IGRhdGFBcnJheVsyXSA/IGRhdGFBcnJheVsyXS50cmltKCkgOiAnbGFzdCc7XG4gICAg0L5iamVjdC5pbmRleCA9IHRoaXMuaW5kZXhJblBhcmVudCjQvmJqZWN0LnBhcmVudCwg0L5iamVjdC5lbGVtZW50KTtcbiAgICB0aGlzLtC+YmplY3RzLnB1c2go0L5iamVjdCk7XG4gIH1cbiAgdGhpcy5hcnJheVNvcnQodGhpcy7QvmJqZWN0cyk7XG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgIHRoaXMu0L5iamVjdHMsXG4gICAgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICcoJyArXG4gICAgICAgIHRoaXMudHlwZSArXG4gICAgICAgICctd2lkdGg6ICcgK1xuICAgICAgICBpdGVtLmJyZWFrcG9pbnQgK1xuICAgICAgICAncHgpLCcgK1xuICAgICAgICBpdGVtLmJyZWFrcG9pbnRcbiAgICAgICk7XG4gICAgfSxcbiAgICB0aGlzXG4gICk7XG4gIHRoaXMubWVkaWFRdWVyaWVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgIHRoaXMubWVkaWFRdWVyaWVzLFxuICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoc2VsZiwgaXRlbSkgPT09IGluZGV4O1xuICAgIH1cbiAgKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1lZGlhUXVlcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYVF1ZXJpZXNbaV07XG4gICAgY29uc3QgbWVkaWFTcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQuY2FsbChtZWRpYSwgJywnKTtcbiAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFTcGxpdFswXSk7XG4gICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gbWVkaWFTcGxpdFsxXTtcbiAgICBjb25zdCDQvmJqZWN0c0ZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcbiAgICAgIHRoaXMu0L5iamVjdHMsXG4gICAgICBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5icmVha3BvaW50ID09PSBtZWRpYUJyZWFrcG9pbnQ7XG4gICAgICB9XG4gICAgKTtcbiAgICBtYXRjaE1lZGlhLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm1lZGlhSGFuZGxlcihtYXRjaE1lZGlhLCDQvmJqZWN0c0ZpbHRlcik7XG4gICAgfSk7XG4gICAgdGhpcy5tZWRpYUhhbmRsZXIobWF0Y2hNZWRpYSwg0L5iamVjdHNGaWx0ZXIpO1xuICB9XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tZWRpYUhhbmRsZXIgPSBmdW5jdGlvbiAobWF0Y2hNZWRpYSwg0L5iamVjdHMpIHtcbiAgaWYgKG1hdGNoTWVkaWEubWF0Y2hlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcbiAgICAgINC+YmplY3QuaW5kZXggPSB0aGlzLmluZGV4SW5QYXJlbnQo0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCk7XG4gICAgICB0aGlzLm1vdmVUbyjQvmJqZWN0LnBsYWNlLCDQvmJqZWN0LmVsZW1lbnQsINC+YmplY3QuZGVzdGluYXRpb24pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvL2ZvciAobGV0IGkgPSAwOyBpIDwg0L5iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBpID0g0L5iamVjdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0INC+YmplY3QgPSDQvmJqZWN0c1tpXTtcbiAgICAgIGlmICjQvmJqZWN0LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZGFDbGFzc25hbWUpKSB7XG4gICAgICAgIHRoaXMubW92ZUJhY2so0L5iamVjdC5wYXJlbnQsINC+YmplY3QuZWxlbWVudCwg0L5iamVjdC5pbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbiAocGxhY2UsIGVsZW1lbnQsIGRlc3RpbmF0aW9uKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmRhQ2xhc3NuYW1lKTtcbiAgaWYgKHBsYWNlID09PSAnbGFzdCcgfHwgcGxhY2UgPj0gZGVzdGluYXRpb24uY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBlbGVtZW50KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBsYWNlID09PSAnZmlyc3QnKSB7XG4gICAgZGVzdGluYXRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgZWxlbWVudCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRlc3RpbmF0aW9uLmNoaWxkcmVuW3BsYWNlXS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZWxlbWVudCk7XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5tb3ZlQmFjayA9IGZ1bmN0aW9uIChwYXJlbnQsIGVsZW1lbnQsIGluZGV4KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmRhQ2xhc3NuYW1lKTtcbiAgaWYgKHBhcmVudC5jaGlsZHJlbltpbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgIHBhcmVudC5jaGlsZHJlbltpbmRleF0uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHBhcmVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsIGVsZW1lbnQpO1xuICB9XG59O1xuRHluYW1pY0FkYXB0LnByb3RvdHlwZS5pbmRleEluUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCwgZWxlbWVudCkge1xuICBjb25zdCBhcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHBhcmVudC5jaGlsZHJlbik7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtZW50KTtcbn07XG5EeW5hbWljQWRhcHQucHJvdG90eXBlLmFycmF5U29ydCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKHRoaXMudHlwZSA9PT0gJ21pbicpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuc29ydC5jYWxsKGFyciwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhLmJyZWFrcG9pbnQgPT09IGIuYnJlYWtwb2ludCkge1xuICAgICAgICBpZiAoYS5wbGFjZSA9PT0gYi5wbGFjZSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdmaXJzdCcgfHwgYi5wbGFjZSA9PT0gJ2xhc3QnKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYS5wbGFjZSAtIGIucGxhY2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhLmJyZWFrcG9pbnQgLSBiLmJyZWFrcG9pbnQ7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnNvcnQuY2FsbChhcnIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYS5icmVha3BvaW50ID09PSBiLmJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKGEucGxhY2UgPT09IGIucGxhY2UpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhLnBsYWNlID09PSAnZmlyc3QnIHx8IGIucGxhY2UgPT09ICdsYXN0Jykge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEucGxhY2UgPT09ICdsYXN0JyB8fCBiLnBsYWNlID09PSAnZmlyc3QnKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGIucGxhY2UgLSBhLnBsYWNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYi5icmVha3BvaW50IC0gYS5icmVha3BvaW50O1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxufTtcbmNvbnN0IGRhID0gbmV3IER5bmFtaWNBZGFwdCgnbWF4Jyk7XG5kYS5pbml0KCk7XG4iLCJleHBvcnQgY29uc3QgbW9kdWxlcyA9IHt9O1xuIiwiaW1wb3J0IHtcbiAgZGF0YU1lZGlhUXVlcmllcyxcbiAgX3NsaWRlVG9nZ2xlLFxuICBfc2xpZGVVcCxcbiAgX3NsaWRlRG93bixcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhY2NvcmRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuXG4gIGlmIChhY2NvcmRpb25JdGVtcy5sZW5ndGgpIHtcbiAgICBjb25zdCBpbml0QWNjb3JkaW9uID0gKGFjY29yZGlvbkl0ZW1zLCBtYXRjaE1lZGlhID0gZmFsc2UpID0+IHtcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goYWNjb3JkaW9uR3JvdXAgPT4ge1xuICAgICAgICBhY2NvcmRpb25Hcm91cCA9IG1hdGNoTWVkaWEgPyBhY2NvcmRpb25Hcm91cC5pdGVtIDogYWNjb3JkaW9uR3JvdXA7XG4gICAgICAgIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMgfHwgIW1hdGNoTWVkaWEpIHtcbiAgICAgICAgICBhY2NvcmRpb25Hcm91cC5jbGFzc0xpc3QuYWRkKCdfYWNjb3JkaW9uLWluaXQnKTtcbiAgICAgICAgICBpbml0QWNjb3JkaW9uQm9keShhY2NvcmRpb25Hcm91cCk7XG4gICAgICAgICAgYWNjb3JkaW9uR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRBY2NvcmRpb25BY3Rpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2NvcmRpb25Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdfYWNjb3JkaW9uLWluaXQnKTtcbiAgICAgICAgICBpbml0QWNjb3JkaW9uQm9keShhY2NvcmRpb25Hcm91cCwgZmFsc2UpO1xuICAgICAgICAgIGFjY29yZGlvbkdyb3VwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0QWNjb3JkaW9uQWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaW5pdEFjY29yZGlvbkJvZHkgPSAoYWNjb3JkaW9uR3JvdXAsIGhpZGVBY2NvcmRpb25Cb2R5ID0gdHJ1ZSkgPT4ge1xuICAgICAgbGV0IHRpdGxlcyA9IGFjY29yZGlvbkdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgaWYgKHRpdGxlcy5sZW5ndGgpIHtcbiAgICAgICAgdGl0bGVzID0gQXJyYXkuZnJvbSh0aXRsZXMpLmZpbHRlcihcbiAgICAgICAgICBpdGVtID0+IGl0ZW0uY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uXScpID09PSBhY2NvcmRpb25Hcm91cFxuICAgICAgICApO1xuICAgICAgICB0aXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XG4gICAgICAgICAgaWYgKGhpZGVBY2NvcmRpb25Cb2R5KSB7XG4gICAgICAgICAgICB0aXRsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICBpZiAoIXRpdGxlLmNsYXNzTGlzdC5jb250YWlucygnX2FjY29yZGlvbi1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICB0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmcuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgdGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzZXRBY2NvcmRpb25BY3Rpb25zID0gZSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJykpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGl0bGUuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICBjb25zdCBpc09uZUFjdGl2ZUl0ZW0gPSBncm91cC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYWNjb3JkaW9uLW9uZS1hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgYWNjb3JkaW9uU3BlZWQgPSBncm91cC5kYXRhc2V0LmFjY29yZGlvblNwZWVkXG4gICAgICAgICAgPyBwYXJzZUludChncm91cC5kYXRhc2V0LmFjY29yZGlvblNwZWVkKVxuICAgICAgICAgIDogNTAwO1xuXG4gICAgICAgIGlmICghZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLl9zbGlkZScpLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzT25lQWN0aXZlSXRlbSAmJlxuICAgICAgICAgICAgIXRpdGxlLmNsYXNzTGlzdC5jb250YWlucygnX2FjY29yZGlvbi1hY3RpdmUnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaGlkZUFjY29yZGlvbkJvZHkoZ3JvdXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdfYWNjb3JkaW9uLWFjdGl2ZScpO1xuICAgICAgICAgIF9zbGlkZVRvZ2dsZSh0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmcsIGFjY29yZGlvblNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoaWRlQWNjb3JkaW9uQm9keSA9IGFjY29yZGlvbkdyb3VwID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVRpdGxlID0gYWNjb3JkaW9uR3JvdXAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ1tkYXRhLWFjY29yZGlvbi1pdGVtXS5fYWNjb3JkaW9uLWFjdGl2ZSdcbiAgICAgICk7XG4gICAgICBjb25zdCBhY2NvcmRpb25TcGVlZCA9IGFjY29yZGlvbkdyb3VwLmRhdGFzZXQuYWNjb3JkaW9uU3BlZWRcbiAgICAgICAgPyBwYXJzZUludChhY2NvcmRpb25Hcm91cC5kYXRhc2V0LmFjY29yZGlvblNwZWVkKVxuICAgICAgICA6IDUwMDtcbiAgICAgIGlmIChhY3RpdmVUaXRsZSAmJiAhYWNjb3JkaW9uR3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLl9zbGlkZScpLmxlbmd0aCkge1xuICAgICAgICBhY3RpdmVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWNjb3JkaW9uLWFjdGl2ZScpO1xuICAgICAgICBfc2xpZGVVcChhY3RpdmVUaXRsZS5uZXh0RWxlbWVudFNpYmxpbmcsIGFjY29yZGlvblNwZWVkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFjY29yZGlvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uLWNsb3NlXScpO1xuICAgIGlmIChhY2NvcmRpb25DbG9zZS5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjY29yZGlvbl0nKSkge1xuICAgICAgICAgIGFjY29yZGlvbkNsb3NlLmZvckVhY2goYWNjb3JkaW9uSXRlbUNsb3NlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYWNjb3JkaW9uSXRlbUNsb3NlLmNsb3Nlc3QoJ1tkYXRhLWFjY29yZGlvbl0nKTtcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gc3BvbGxlcnNCbG9jay5kYXRhc2V0LmFjY29yZGlvblNwZWVkXG4gICAgICAgICAgICAgID8gcGFyc2VJbnQoZ3JvdXAuZGF0YXNldC5hY2NvcmRpb25TcGVlZClcbiAgICAgICAgICAgICAgOiA1MDA7XG4gICAgICAgICAgICBhY2NvcmRpb25JdGVtQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX2FjY29yZGlvbi1hY3RpdmUnKTtcbiAgICAgICAgICAgIF9zbGlkZVVwKGFjY29yZGlvbkl0ZW1DbG9zZS5uZXh0RWxlbWVudFNpYmxpbmcsIHNwZWVkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnSXRlbXMgPSBBcnJheS5mcm9tKGFjY29yZGlvbkl0ZW1zKS5maWx0ZXIoZnVuY3Rpb24gKFxuICAgICAgaXRlbSxcbiAgICAgIGluZGV4LFxuICAgICAgc2VsZlxuICAgICkge1xuICAgICAgcmV0dXJuICFpdGVtLmRhdGFzZXQuYWNjb3JkaW9uLnNwbGl0KCcsJylbMF07XG4gICAgfSk7XG5cbiAgICAvLyBpbml0IHJlZ3VsYXIgYWNjb3JkaW9uIGl0ZW1zXG4gICAgaWYgKHJlZ0l0ZW1zLmxlbmd0aCkge1xuICAgICAgaW5pdEFjY29yZGlvbihyZWdJdGVtcyk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFjY29yZGlvbiBpdGVtcyB3aXRoIG1lZGlhIHF1ZXJpZXNcbiAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IGRhdGFNZWRpYVF1ZXJpZXMoYWNjb3JkaW9uSXRlbXMsICdhY2NvcmRpb24nKTtcblxuICAgIGlmIChtZFF1ZXJpZXNBcnJheSAmJiBtZFF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcbiAgICAgIG1kUXVlcmllc0FycmF5LmZvckVhY2gobWRRdWVyaWVzSXRlbSA9PiB7XG4gICAgICAgIC8vIGV2ZW50XG4gICAgICAgIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5pdEFjY29yZGlvbihtZFF1ZXJpZXNJdGVtLml0ZW1zQXJyYXksIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbml0QWNjb3JkaW9uKG1kUXVlcmllc0l0ZW0uaXRlbXNBcnJheSwgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbmFjY29yZGlvbigpO1xuIiwiLyoqXG4gKiBhZGRzIGFjdGlvbnMgdG8gZm9ybSBmaWVsZHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybUZpZWxkc0luaXQob3B0aW9ucyA9IHsgdmlld1Bhc3M6IGZhbHNlIH0pIHtcbiAgY29uc3QgZm9ybUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2lucHV0W3BsYWNlaG9sZGVyXSx0ZXh0YXJlYVtwbGFjZWhvbGRlcl0nXG4gICk7XG4gIGlmIChmb3JtRmllbGRzLmxlbmd0aCkge1xuICAgIGZvcm1GaWVsZHMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xuICAgICAgaWYgKCFmb3JtRmllbGQuaGFzQXR0cmlidXRlKCdkYXRhLXBsYWNlaG9sZGVyLW5vaGlkZScpKSB7XG4gICAgICAgIGZvcm1GaWVsZC5kYXRhc2V0LnBsYWNlaG9sZGVyID0gZm9ybUZpZWxkLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgICh0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnZmlsZScgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnY2hlY2tib3gnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ3JhZGlvJyAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcucXVhbnRpdHknKSAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQtcm93JykpIHx8XG4gICAgICB0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdURVhUQVJFQSdcbiAgICApIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1mb2N1cy1jbGFzc2VzJykpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgICAgZm9ybVZhbGlkYXRlLnJlbW92ZUVycm9yKHRhcmdldEVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICAodGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2ZpbGUnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2NoZWNrYm94JyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdyYWRpbycgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLnF1YW50aXR5JykgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0LXJvdycpKSB8fFxuICAgICAgdGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgKSB7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5kYXRhc2V0LnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGxhY2Vob2xkZXIgPSB0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgICBpZiAoIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW5vLWZvY3VzLWNsYXNzZXMnKSkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcbiAgICAgICAgZm9ybVZhbGlkYXRlLnZhbGlkYXRlSW5wdXQodGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICF0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnX2Zvcm0tZXJyb3InKSAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnZhbHVlLnRyaW0oKVxuICAgICAgKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LmFkZCgnX2ZpbGxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsZS1pbnB1dF0nKS5sZW5ndGgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWxlLWlucHV0XScpLmZvckVhY2goZmlsZUlucHV0ID0+IHtcbiAgICAgIGZvcm1WYWxpZGF0ZS52YWxpZGF0ZUlucHV0KGZpbGVJbnB1dCk7XG4gICAgICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm1WYWxpZGF0ZS52YWxpZGF0ZUlucHV0KGZpbGVJbnB1dCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnZpZXdQYXNzKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tjbGFzcyo9XCJfX3ZpZXdwYXNzXCJdJykpIHtcbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfdmlld3Bhc3MtYWN0aXZlJylcbiAgICAgICAgICA/ICdwYXNzd29yZCdcbiAgICAgICAgICA6ICd0ZXh0JztcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfdmlld3Bhc3MtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gdmFsaWRhdGlvbiB2YXJcbmxldCBmb3JtVmFsaWRhdGUgPSB7XG4gIGdldEVycm9ycyhmb3JtKSB7XG4gICAgbGV0IGVycm9yID0gMDtcbiAgICBsZXQgZm9ybVJlcXVpcmVkSXRlbXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1yZXF1aXJlZF0nKTtcbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtcy5mb3JFYWNoKGZvcm1SZXF1aXJlZEl0ZW0gPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGZvcm1SZXF1aXJlZEl0ZW0ub2Zmc2V0UGFyZW50ICE9PSBudWxsIHx8XG4gICAgICAgICAgICBmb3JtUmVxdWlyZWRJdGVtLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSAmJlxuICAgICAgICAgICFmb3JtUmVxdWlyZWRJdGVtLmRpc2FibGVkXG4gICAgICAgICkge1xuICAgICAgICAgIGVycm9yICs9IHRoaXMudmFsaWRhdGVJbnB1dChmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfSxcbiAgdmFsaWRhdGVJbnB1dChmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgbGV0IGVycm9yID0gMDtcblxuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQucmVxdWlyZWQgPT09ICdlbWFpbCcpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUgPSBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgICBpZiAodGhpcy5lbWFpbFRlc3QoZm9ybVJlcXVpcmVkSXRlbSkpIHtcbiAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgZXJyb3IrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJlxuICAgICAgIWZvcm1SZXF1aXJlZEl0ZW0uY2hlY2tlZFxuICAgICkge1xuICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgIGVycm9yKys7XG4gICAgfSBlbHNlIGlmIChmb3JtUmVxdWlyZWRJdGVtLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgY29uc3QgdGhzID0gdGhpcztcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gTnVtYmVyKGZvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5maWxlSW5wdXQpO1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybVJlcXVpcmVkSXRlbS5maWxlc1swXTtcblxuICAgICAgICBpZiAobWF4U2l6ZSAmJiBmaWxlKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gZm9ybVJlcXVpcmVkSXRlbS5jbG9zZXN0KCcuZmlsZS1pbnB1dCcpO1xuICAgICAgICAgIGNvbnN0IHRleHQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsZS10eHRdJyk7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWxlLW5hbWVdJyk7XG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbGUtZXh0ZW5zaW9uXScpO1xuICAgICAgICAgIGNvbnN0IGltZyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWxlLWltZ10nKTtcbiAgICAgICAgICBjb25zdCBzaXplID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbGUtc2l6ZV0nKTtcbiAgICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVtb3ZlLWZpbGUtYnRuXScpO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUuc3BsaXQoJy4nKS5zbGljZSgwLCAtMSkuam9pbignJyksXG4gICAgICAgICAgICBzaXplOiBmaWxlLnNpemUgLyAxMDAwMDAwLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaW1nID8gKGltZy5zcmMgPSBlLnRhcmdldC5yZXN1bHQpIDogbnVsbDtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICA/ICh0ZXh0LmlubmVySFRNTCA9IGDQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAINGE0LDQudC70LAgLSAke21heFNpemV9INC80LFgKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIG5hbWUgPyAobmFtZS5pbm5lckhUTUwgPSBkYXRhLm5hbWUpIDogbnVsbDtcbiAgICAgICAgICBleHRlbnNpb24gPyAoZXh0ZW5zaW9uLmlubmVySFRNTCA9IGRhdGEuZXh0ZW5zaW9uKSA6IG51bGw7XG4gICAgICAgICAgc2l6ZSA/IChzaXplLmlubmVySFRNTCA9IGRhdGEuc2l6ZS50b0ZpeGVkKDEpKSA6IG51bGw7XG5cbiAgICAgICAgICBpZiAoZGF0YS5zaXplID4gbWF4U2l6ZSkge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ19lcnJvcicpO1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gJ9CR0L7Qu9GM0YjQvtC5INGA0LDQt9C80LXRgCDRhNCw0LnQu9CwJztcbiAgICAgICAgICAgIHRocy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19lcnJvcicpO1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ19maWxsZWQnKTtcbiAgICAgICAgICAgIHRocy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVtb3ZlQnRuKSB7XG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyb3InKTtcbiAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgICAgICAgICAgZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICB0aHMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmZpbGVzWzBdKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmb3JtUmVxdWlyZWRJdGVtLmZpbGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICAhZm9ybVJlcXVpcmVkSXRlbS52YWx1ZS50cmltKCkgJiZcbiAgICAgICAgIWZvcm1SZXF1aXJlZEl0ZW0uaGFzQXR0cmlidXRlKCdkYXRhLXN0YXRpYycpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgZXJyb3IrKztcbiAgICAgIH0gZWxzZSBpZiAoZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LnZhbGlkYXRlID09PSAnbGV0dGVycy1vbmx5Jykge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gL1swLTlgIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/fl0vO1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yID0gYGA7XG4gICAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgICBlcnJvcisrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcjtcbiAgfSxcbiAgYWRkRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSkge1xuICAgIGNvbnNvbGUubG9nKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZXJyb3InKTtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZXJyb3InKTtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgIGxldCBpbnB1dEVycm9yID1cbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lcnJvcicpO1xuICAgIGlmIChpbnB1dEVycm9yKSBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5wdXRFcnJvcik7XG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5lcnJvcikge1xuICAgICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1lcnJvciB0eHQxNlwiPiR7Zm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yfTwvZGl2PmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmNsb3Nlc3QoJy5pbnB1dF92YWxpZGF0ZScpKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QuYWRkKCdfZXJyb3InKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pIHtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWVycm9yJyk7XG4gICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWVycm9yJyk7XG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lcnJvcicpKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lcnJvcicpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbS5jbG9zZXN0KCcuaW5wdXRfdmFsaWRhdGUnKSkge1xuICAgICAgZm9ybVJlcXVpcmVkSXRlbS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJyk7XG4gICAgfVxuICB9LFxuICBmb3JtQ2xlYW4oZm9ybSkge1xuICAgIGlmICghZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2F2ZS1maWVsZHMnKSkge1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LHRleHRhcmVhJyk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSBpbnB1dHNbaW5kZXhdO1xuICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICAgIGZvcm1WYWxpZGF0ZS5yZW1vdmVFcnJvcihlbCk7XG5cbiAgICAgICAgICBpZiAoZWwudHlwZSAmJiBlbC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBlbC5jbG9zZXN0KCcuZmlsZS1pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgICAgICAgIGVsLmNsb3Nlc3QoJy5maWxlLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVja2JveGVzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0Jyk7XG4gICAgICAgIGlmIChjaGVja2JveGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hlY2tib3hlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2tib3hlc1tpbmRleF07XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH0sXG4gIGVtYWlsVGVzdChmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgcmV0dXJuICEvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsOH0pKyQvLnRlc3QoXG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlXG4gICAgKTtcbiAgfSxcbn07XG5cbi8qKlxuICogYWRkcyBzdWJtaXQgbG9naWNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybVN1Ym1pdChvcHRpb25zID0geyB2YWxpZGF0ZTogdHJ1ZSB9KSB7XG4gIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuZm9ybXM7XG4gIGlmIChmb3Jtcy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICBmb3JtU3VibWl0QWN0aW9uKGZvcm0sIGUpO1xuICAgICAgfSk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICBmb3JtVmFsaWRhdGUuZm9ybUNsZWFuKGZvcm0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGZvcm1TdWJtaXRBY3Rpb24oZm9ybSwgZSkge1xuICAgIGNvbnN0IGVycm9yID0gIWZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLW5vLXZhbGlkYXRlJylcbiAgICAgID8gZm9ybVZhbGlkYXRlLmdldEVycm9ycyhmb3JtKVxuICAgICAgOiAwO1xuICAgIGlmIChlcnJvciA9PT0gMCAmJiAhZm9ybS5xdWVyeVNlbGVjdG9yKCcuX2Zvcm0tZXJyb3InKSkge1xuICAgICAgY29uc3QgYWpheCA9IGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLWFqYXgnKTtcbiAgICAgIGlmIChhamF4KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKVxuICAgICAgICAgID8gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLnRyaW0oKVxuICAgICAgICAgIDogJyMnO1xuICAgICAgICBjb25zdCBmb3JtTWV0aG9kID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ21ldGhvZCcpXG4gICAgICAgICAgPyBmb3JtLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykudHJpbSgpXG4gICAgICAgICAgOiAnR0VUJztcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdfc2VuZGluZycpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm1BY3Rpb24sIHtcbiAgICAgICAgICBtZXRob2Q6IGZvcm1NZXRob2QsXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBsZXQgcmVzcG9uc2VSZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VuZGluZycpO1xuICAgICAgICAgIGZvcm1TZW50KGZvcm0sIHJlc3BvbnNlUmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydCgnZXJyb3InKTtcbiAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZW5kaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZGV2JykpIHtcbiAgICAgICAgLy8gaW4gZGV2ZWxvcG1lbnQgbW9kZVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm1TZW50KGZvcm0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5fZm9ybS1lcnJvcicpO1xuICAgICAgaWYgKGZvcm1FcnJvciAmJiBmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1nb3RvLWVycm9yJykpIHtcbiAgICAgICAgZ290b0Jsb2NrKGZvcm1FcnJvciwgdHJ1ZSwgMTAwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGFjdGlvbnMgYWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybVxuICBmdW5jdGlvbiBmb3JtU2VudChmb3JtLCByZXNwb25zZVJlc3VsdCA9IGBgKSB7XG4gICAgLy8gc2hvdyBwb3B1cCwgaWYgcG9wdXAgbW9kdWxlIGlzIGNvbm5lY3RlZCBhbmQgZm9ybSBoYXMgc2V0dGluZ1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICBpZiAobW9kdWxlcy5tb2RhbCkge1xuICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBmb3JtLmRhdGFzZXQubW9kYWxNZXNzYWdlO1xuICAgIC8vICAgICAgICAgbW9kYWwgPyBtb2R1bGVzLm1vZGFsLm9wZW4obW9kYWwpIDogbnVsbDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIDApO1xuXG4gICAgLy8gZm9ybSBzdWJtaXQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCdmb3JtU2VudCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBjbGVhbiBmb3JtXG4gICAgZm9ybVZhbGlkYXRlLmZvcm1DbGVhbihmb3JtKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbW9kdWxlcyB9IGZyb20gJy4uL21vZHVsZXMuanMnO1xuaW1wb3J0IHsgYm9keUxvY2tTdGF0dXMsIGJvZHlMb2NrLCBib2R5VW5sb2NrIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBsZXQgY29uZmlnID0ge1xuICAgICAgbG9nZ2luZzogdHJ1ZSxcbiAgICAgIGluaXQ6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVPcGVuQnV0dG9uOiAnZGF0YS1tb2RhbCcsXG4gICAgICBhdHRyaWJ1dGVDbG9zZUJ1dHRvbjogJ2RhdGEtY2xvc2UnLFxuICAgICAgZml4RWxlbWVudFNlbGVjdG9yOiAnW2RhdGEtbHBdJyxcbiAgICAgIHlvdXR1YmVBdHRyaWJ1dGU6ICdkYXRhLW1vZGFsLXlvdXR1YmUnLFxuICAgICAgeW91dHViZVBsYWNlQXR0cmlidXRlOiAnZGF0YS1tb2RhbC15b3V0dWJlLXBsYWNlJyxcbiAgICAgIHNldEF1dG9wbGF5WW91dHViZTogdHJ1ZSxcbiAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgbW9kYWw6ICdtb2RhbCcsXG4gICAgICAgIC8vIG1vZGFsV3JhcHBlcjogJ21vZGFsX193cmFwcGVyJyxcbiAgICAgICAgbW9kYWxDb250ZW50OiAnbW9kYWxfX2NvbnRlbnQnLFxuICAgICAgICBtb2RhbEFjdGl2ZTogJ21vZGFsX3Nob3cnLFxuICAgICAgICBib2R5QWN0aXZlOiAnbW9kYWwtc2hvdycsXG4gICAgICB9LFxuICAgICAgZm9jdXNDYXRjaDogdHJ1ZSxcbiAgICAgIGNsb3NlRXNjOiB0cnVlLFxuICAgICAgYm9keUxvY2s6IHRydWUsXG4gICAgICBoYXNoU2V0dGluZ3M6IHtcbiAgICAgICAgbG9jYXRpb246IHRydWUsXG4gICAgICAgIGdvSGFzaDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBiZWZvcmVPcGVuOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgYWZ0ZXJPcGVuOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBhZnRlckNsb3NlOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB0aGlzLnlvdVR1YmVDb2RlO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgdGhpcy50YXJnZXRPcGVuID0ge1xuICAgICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgICAgZWxlbWVudDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLnByZXZpb3VzT3BlbiA9IHtcbiAgICAgIHNlbGVjdG9yOiBmYWxzZSxcbiAgICAgIGVsZW1lbnQ6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5sYXN0Q2xvc2VkID0ge1xuICAgICAgc2VsZWN0b3I6IGZhbHNlLFxuICAgICAgZWxlbWVudDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLl9kYXRhVmFsdWUgPSBmYWxzZTtcbiAgICB0aGlzLmhhc2ggPSBmYWxzZTtcblxuICAgIHRoaXMuX3Jlb3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuX3NlbGVjdG9yT3BlbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5sYXN0Rm9jdXNFbCA9IGZhbHNlO1xuICAgIHRoaXMuX2ZvY3VzRWwgPSBbXG4gICAgICAnYVtocmVmXScsXG4gICAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcbiAgICAgICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXG4gICAgICAnc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxuICAgICAgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxuICAgICAgJ2FyZWFbaHJlZl0nLFxuICAgICAgJ2lmcmFtZScsXG4gICAgICAnb2JqZWN0JyxcbiAgICAgICdlbWJlZCcsXG4gICAgICAnW2NvbnRlbnRlZGl0YWJsZV0nLFxuICAgICAgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKScsXG4gICAgXTtcbiAgICAvL3RoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oY29uZmlnLCBvcHRpb25zKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5jb25maWcsXG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY2xhc3Nlczoge1xuICAgICAgICAuLi5jb25maWcuY2xhc3NlcyxcbiAgICAgICAgLi4ub3B0aW9ucz8uY2xhc3NlcyxcbiAgICAgIH0sXG4gICAgICBoYXNoU2V0dGluZ3M6IHtcbiAgICAgICAgLi4uY29uZmlnLmhhc2hTZXR0aW5ncyxcbiAgICAgICAgLi4ub3B0aW9ucz8uaGFzaFNldHRpbmdzLFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIC4uLmNvbmZpZy5vbixcbiAgICAgICAgLi4ub3B0aW9ucz8ub24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5ib2R5TG9jayA9IGZhbHNlO1xuICAgIHRoaXMub3B0aW9ucy5pbml0ID8gdGhpcy5pbml0bW9kYWxzKCkgOiBudWxsO1xuICB9XG4gIGluaXRtb2RhbHMoKSB7XG4gICAgdGhpcy5ldmVudHNtb2RhbCgpO1xuICB9XG4gIGV2ZW50c21vZGFsKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uT3BlbiA9IGUudGFyZ2V0LmNsb3Nlc3QoXG4gICAgICAgICAgYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufV1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChidXR0b25PcGVuKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuX2RhdGFWYWx1ZSA9IGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b25cbiAgICAgICAgICApXG4gICAgICAgICAgICA/IGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9uKVxuICAgICAgICAgICAgOiAnZXJyb3InO1xuICAgICAgICAgIHRoaXMueW91VHViZUNvZGUgPSBidXR0b25PcGVuLmdldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy55b3V0dWJlQXR0cmlidXRlXG4gICAgICAgICAgKVxuICAgICAgICAgICAgPyBidXR0b25PcGVuLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMueW91dHViZUF0dHJpYnV0ZSlcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICBpZiAodGhpcy5fZGF0YVZhbHVlICE9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB0aGlzLmxhc3RGb2N1c0VsID0gYnV0dG9uT3BlbjtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA9IGAke3RoaXMuX2RhdGFWYWx1ZX1gO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3JPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidXR0b25DbG9zZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXG4gICAgICAgICAgYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVDbG9zZUJ1dHRvbn1dYFxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoJyN1bmNvbmZpcm1lZEFnZU1vZGFsJykgJiZcbiAgICAgICAgICAhZS50YXJnZXQuY2xvc2VzdCgnI2NvbmZpcm1BZ2VNb2RhbCcpICYmXG4gICAgICAgICAgKGJ1dHRvbkNsb3NlIHx8XG4gICAgICAgICAgICAoIWUudGFyZ2V0LmNsb3Nlc3QoYC4ke3RoaXMub3B0aW9ucy5jbGFzc2VzLm1vZGFsQ29udGVudH1gKSAmJlxuICAgICAgICAgICAgICB0aGlzLmlzT3BlbikpXG4gICAgICAgICkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAna2V5ZG93bicsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5vcHRpb25zLmNsb3NlRXNjICYmXG4gICAgICAgICAgZS53aGljaCA9PSAyNyAmJlxuICAgICAgICAgIGUuY29kZSA9PT0gJ0VzY2FwZScgJiZcbiAgICAgICAgICB0aGlzLmlzT3BlblxuICAgICAgICApIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZvY3VzQ2F0Y2ggJiYgZS53aGljaCA9PSA5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNDYXRjaChlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmhhc2hTZXR0aW5ncy5nb0hhc2gpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnaGFzaGNoYW5nZScsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX29wZW5Ub0hhc2goKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSh0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICApO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2xvYWQnLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9vcGVuVG9IYXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIG9wZW4oc2VsZWN0b3JWYWx1ZSkge1xuICAgIGlmIChib2R5TG9ja1N0YXR1cykge1xuICAgICAgdGhpcy5ib2R5TG9jayA9XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSAmJiAhdGhpcy5pc09wZW5cbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGZhbHNlO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdG9yVmFsdWUgJiZcbiAgICAgICAgdHlwZW9mIHNlbGVjdG9yVmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgIHNlbGVjdG9yVmFsdWUudHJpbSgpICE9PSAnJ1xuICAgICAgKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA9IHNlbGVjdG9yVmFsdWU7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yT3BlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5fcmVvcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9zZWxlY3Rvck9wZW4pXG4gICAgICAgIHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA9IHRoaXMubGFzdENsb3NlZC5zZWxlY3RvcjtcbiAgICAgIGlmICghdGhpcy5fcmVvcGVuKSB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy50YXJnZXRPcGVuLmVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMueW91VHViZUNvZGUpIHtcbiAgICAgICAgICBjb25zdCBjb2RlVmlkZW8gPSB0aGlzLnlvdVR1YmVDb2RlO1xuICAgICAgICAgIGNvbnN0IHVybFZpZGVvID0gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7Y29kZVZpZGVvfT9yZWw9MCZzaG93aW5mbz0wJmF1dG9wbGF5PTFgO1xuICAgICAgICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcblxuICAgICAgICAgIGNvbnN0IGF1dG9wbGF5ID0gdGhpcy5vcHRpb25zLnNldEF1dG9wbGF5WW91dHViZSA/ICdhdXRvcGxheTsnIDogJyc7XG4gICAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCBgJHthdXRvcGxheX07IGVuY3J5cHRlZC1tZWRpYWApO1xuXG4gICAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsVmlkZW8pO1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCB5b3V0dWJlUGxhY2UgPSB0aGlzLnRhcmdldE9wZW4uZWxlbWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm1vZGFsX190ZXh0JylcbiAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShgJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfWAsICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy50YXJnZXRPcGVuLmVsZW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKVxuICAgICAgICAgICAgLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oYXNoU2V0dGluZ3MubG9jYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9nZXRIYXNoKCk7XG4gICAgICAgICAgdGhpcy5fc2V0SGFzaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uLmJlZm9yZU9wZW4odGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdiZWZvcmVtb2RhbE9wZW4nLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgbW9kYWw6IHRoaXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuY2xhc3Nlcy5tb2RhbEFjdGl2ZSk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmUpO1xuXG4gICAgICAgIGlmICghdGhpcy5fcmVvcGVuKSB7XG4gICAgICAgICAgY29uc3QgbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5oYXNoKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICghdGhpcy5ib2R5TG9jayAmJiAhbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtYmwtbW9iaWxlJykpIHx8XG4gICAgICAgICAgICAoIXRoaXMuYm9keUxvY2sgJiZcbiAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggPD0gNzY4ICYmXG4gICAgICAgICAgICAgIG0uaGFzQXR0cmlidXRlKCdkYXRhLWJsLW1vYmlsZScpKVxuICAgICAgICAgICAgICA/IGJvZHlMb2NrKClcbiAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9IGVsc2UgdGhpcy5fcmVvcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgIHRoaXMucHJldmlvdXNPcGVuLnNlbGVjdG9yID0gdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yO1xuICAgICAgICB0aGlzLnByZXZpb3VzT3Blbi5lbGVtZW50ID0gdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fc2VsZWN0b3JPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzVHJhcCgpO1xuICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uLmFmdGVyT3Blbih0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2FmdGVybW9kYWxPcGVuJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgIG1vZGFsOiB0aGlzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjbG9zZShzZWxlY3RvclZhbHVlKSB7XG4gICAgaWYgKFxuICAgICAgc2VsZWN0b3JWYWx1ZSAmJlxuICAgICAgdHlwZW9mIHNlbGVjdG9yVmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICBzZWxlY3RvclZhbHVlLnRyaW0oKSAhPT0gJydcbiAgICApIHtcbiAgICAgIHRoaXMucHJldmlvdXNPcGVuLnNlbGVjdG9yID0gc2VsZWN0b3JWYWx1ZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzT3BlbiB8fCAhYm9keUxvY2tTdGF0dXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zLm9uLmJlZm9yZUNsb3NlKHRoaXMpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2JlZm9yZW1vZGFsQ2xvc2UnLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIG1vZGFsOiB0aGlzLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKHRoaXMueW91VHViZUNvZGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgWyR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1dYFxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFske3RoaXMub3B0aW9ucy55b3V0dWJlUGxhY2VBdHRyaWJ1dGV9XWBcbiAgICAgICAgKS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c09wZW4uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgdGhpcy5vcHRpb25zLmNsYXNzZXMubW9kYWxBY3RpdmVcbiAgICApO1xuICAgIC8vIGFyaWEtaGlkZGVuXG4gICAgdGhpcy5wcmV2aW91c09wZW4uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBpZiAoIXRoaXMuX3Jlb3Blbikge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgIHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmVcbiAgICAgICk7XG4gICAgICAhdGhpcy5ib2R5TG9jayA/IGJvZHlVbmxvY2soKSA6IG51bGw7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9yZW1vdmVIYXNoKCk7XG4gICAgaWYgKHRoaXMuX3NlbGVjdG9yT3Blbikge1xuICAgICAgdGhpcy5sYXN0Q2xvc2VkLnNlbGVjdG9yID0gdGhpcy5wcmV2aW91c09wZW4uc2VsZWN0b3I7XG4gICAgICB0aGlzLmxhc3RDbG9zZWQuZWxlbWVudCA9IHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQ7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5vbi5hZnRlckNsb3NlKHRoaXMpO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2FmdGVybW9kYWxDbG9zZScsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgbW9kYWw6IHRoaXMsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2ZvY3VzVHJhcCgpO1xuICAgIH0sIDUwKTtcbiAgfVxuICBfZ2V0SGFzaCgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmhhc2hTZXR0aW5ncy5sb2NhdGlvbikge1xuICAgICAgdGhpcy5oYXNoID0gdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yLmluY2x1ZGVzKCcjJylcbiAgICAgICAgPyB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3JcbiAgICAgICAgOiB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3IucmVwbGFjZSgnLicsICcjJyk7XG4gICAgfVxuICB9XG4gIF9vcGVuVG9IYXNoKCkge1xuICAgIGxldCBjbGFzc0luSGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7d2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKX1gXG4gICAgKVxuICAgICAgPyBgLiR7d2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKX1gXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YClcbiAgICAgID8gYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YFxuICAgICAgOiBudWxsO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b259ID0gXCIke2NsYXNzSW5IYXNofVwiXWBcbiAgICApXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaH1cIl1gXG4gICAgICAgIClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b259ID0gXCIke2NsYXNzSW5IYXNoLnJlcGxhY2UoXG4gICAgICAgICAgICAnLicsXG4gICAgICAgICAgICAnIydcbiAgICAgICAgICApfVwiXWBcbiAgICAgICAgKTtcbiAgICBpZiAoYnV0dG9ucyAmJiBjbGFzc0luSGFzaCkgdGhpcy5vcGVuKGNsYXNzSW5IYXNoKTtcbiAgfVxuICBfc2V0SGFzaCgpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIHRoaXMuaGFzaCk7XG4gIH1cbiAgX3JlbW92ZUhhc2goKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoJycsICcnLCB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdKTtcbiAgfVxuICBfZm9jdXNDYXRjaChlKSB7XG4gICAgY29uc3QgZm9jdXNhYmxlID0gdGhpcy50YXJnZXRPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9mb2N1c0VsKTtcbiAgICBjb25zdCBmb2N1c0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZm9jdXNhYmxlKTtcbiAgICBjb25zdCBmb2N1c2VkSW5kZXggPSBmb2N1c0FycmF5LmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICBpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IDApIHtcbiAgICAgIGZvY3VzQXJyYXlbZm9jdXNBcnJheS5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZm9jdXNlZEluZGV4ID09PSBmb2N1c0FycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIGZvY3VzQXJyYXlbMF0uZm9jdXMoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbiAgX2ZvY3VzVHJhcCgpIHtcbiAgICBjb25zdCBmb2N1c2FibGUgPSB0aGlzLnByZXZpb3VzT3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9jdXNFbCk7XG4gICAgaWYgKCF0aGlzLmlzT3BlbiAmJiB0aGlzLmxhc3RGb2N1c0VsKSB7XG4gICAgICB0aGlzLmxhc3RGb2N1c0VsLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvY3VzYWJsZVswXS5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGVzLm1vZGFsID0gbmV3IE1vZGFsKHt9KTtcblxuLy8gc2hvdyBhZ2UgbW9kYWxcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbnBhZ2UnKSkge1xuICBjb25zdCBjb25maXJtQWdlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tYWdlLWJ0bicpO1xuICAvLyBtb2R1bGVzLm1vZGFsLm9wZW4oJyNjb25maXJtQWdlTW9kYWwnKTtcbiAgY29uZmlybUFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBtb2R1bGVzLm1vZGFsLmNsb3NlKCcjY29uZmlybUFnZU1vZGFsJyk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0IHtcbiAgLy8gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBjdXN0b20gc2VsZWN0IGNsYXNzZXNcbiAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAvLyBodG1sIGJ1aWxkIGNsYXNzZXNcbiAgICAgIHNlbDogJ3NlbGVjdCcsXG4gICAgICBib2R5OiAnc2VsZWN0X19ib2R5JyxcbiAgICAgIGxhYmVsOiAnc2VsZWN0X19sYWJlbCcsXG4gICAgICB0aXRsZTogJ3NlbGVjdF9fdGl0bGUnLFxuICAgICAgdmFsOiAnc2VsZWN0X192YWx1ZScsXG4gICAgICBjb250ZW50OiAnc2VsZWN0X19jb250ZW50JyxcbiAgICAgIG9wdGlvbnM6ICdzZWxlY3RfX29wdGlvbnMnLFxuICAgICAgb3B0aW9uOiAnc2VsZWN0X19vcHRpb24nLFxuICAgICAgc2Nyb2xsOiAnc2VsZWN0X19zY3JvbGwnLFxuICAgICAgZ3JvdXA6ICdzZWxlY3RfX2dyb3VwJyxcbiAgICAgIGlucDogJ3NlbGVjdF9faW5wdXQnLFxuICAgICAgYXNzZXQ6ICdzZWxlY3RfX2Fzc2V0JyxcbiAgICAgIHR4dDogJ3NlbGVjdF9fdGV4dCcsXG4gICAgICBoaW50OiAnc2VsZWN0X19oaW50JyxcblxuICAgICAgLy8gc3RhdGUgY2xhc3Nlc1xuICAgICAgYWN0aXZlOiAnX3NlbGVjdC1hY3RpdmUnLFxuICAgICAgZm9jdXNlZDogJ19zZWxlY3QtZm9jdXNlZCcsXG4gICAgICBvcGVuZWQ6ICdfc2VsZWN0LW9wZW5lZCcsXG4gICAgICBmaWxsZWQ6ICdfc2VsZWN0LWZpbGxlZCcsXG4gICAgICBzZWxlY3RlZDogJ19zZWxlY3Qtc2VsZWN0ZWQnLFxuICAgICAgZGlzYWJsZWQ6ICdfc2VsZWN0LWRpc2FibGVkJyxcblxuICAgICAgLy8gYWRkaXRpb25hbCBjbGFzc2VzXG4gICAgICBsaXN0OiAnX3NlbGVjdC1saXN0JyxcbiAgICAgIGVycm9yOiAnX3NlbGVjdC1lcnJvcicsXG4gICAgICBtdWx0aXBsZTogJ19zZWxlY3QtbXVsdGlwbGUnLFxuICAgICAgY2hlY2tib3g6ICdfc2VsZWN0LWNoZWNrYm94JyxcbiAgICAgIGxhYmVsOiAnX3NlbGVjdC1sYWJlbCcsXG4gICAgfTtcblxuICAgIC8vIGFsbCBzZWxlY3QgaXRlbXNcbiAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG4gICAgaWYgKHNlbGVjdExpc3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXQoc2VsZWN0TGlzdCk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VsZWN0IGluaXRpYWxpemF0aW9uICYgYnVpbGQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gaW5pdGlhbGl6YXRpb25cbiAgaW5pdChzZWxlY3RMaXN0KSB7XG4gICAgLy8gaW5pdFxuICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5pbml0U2VsSXRlbShzZWxlY3QsIGluZGV4ICsgMSk7XG4gICAgfSk7XG5cbiAgICAvLyBldmVudHNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdmb2N1c2luJyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdmb2N1c291dCcsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9XG4gIC8vIHNpbmdsZSBzZWxlY3QgaXRlbSBpbml0aWFsaXphdGlvblxuICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsKTtcbiAgICByZWxhdGl2ZVNlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocmVsYXRpdmVTZWwpO1xuICAgIHJlbGF0aXZlU2VsLmhpZGRlbiA9IHRydWU7XG4gICAgaW5kZXggPyAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZCA9IGluZGV4KSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkpIHtcbiAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPVxuICAgICAgICB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcbiAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC5zaG93KSB7XG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XG4gICAgICAgIHNlbFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMubGFiZWx9XCI+JHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcbiAgICAgICAgICAgICAgPyB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XG4gICAgICAgICAgICAgIDogdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWVcbiAgICAgICAgICB9PC9zcGFuPmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICR7XG4gICAgICAgICAgICAgICAgICAgICAgIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1zbGlkZScpID8gJ2hpZGRlbicgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9ICBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICk7XG5cbiAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcblxuICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkXG4gICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWRcbiAgICAgIDogJzE1MCc7XG4gICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLmluaXRTZWxlY3Rpb25zKGUpO1xuICAgIH0pO1xuICB9XG4gIC8vIHNlbGVjdCBidWlsZFxuICBidWlsZChyZWxhdGl2ZVNlbCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAvLyBzZXQgaWRcbiAgICBzZWxlY3QuZGF0YXNldC5zZWxJZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQ7XG4gICAgLy8gc2V0IHZhbHVlXG4gICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXG4gICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzXG4gICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RfJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3N9YClcbiAgICAgIDogbnVsbDtcbiAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGlzIG11bHRpcGxlXG4gICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxuICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMubXVsdGlwbGUpO1xuICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgY2hlY2tib3hlcyBhcmUgc2V0XG4gICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1jaGVja2JveGVzJykgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNoZWNrYm94KVxuICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xuICAgIC8vIGRpc2FibGUgc2VsZWN0XG4gICAgdGhpcy5kaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XG4gICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKVxuICAgICAgPyB0aGlzLnNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KVxuICAgICAgOiBudWxsO1xuICAgIC8vIHNldCBzZWxlY3QgYWN0aW9ucyBpZiBpdCdzIGluaXRpYWxseSBvcGVuZWRcbiAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLW9wZW5lZCcpID8gdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XG5cbiAgICAvLyBzZXQgc2VsZWN0IGhpbnRcbiAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnR9PC9kaXY+YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcbiAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0LXNob3ctdmFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0LXNob3ctdmFsJyk7XG4gICAgfVxuICB9XG4gIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxuICBzZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgY29uc3Qgc2VsQm9keSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmJvZHkpLnR3aW5TZWw7XG4gICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcblxuICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XG4gICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpXG4gICAgKTtcbiAgfVxuICAvLyBzZXQgdHdpbiBzZWxlY3Qgb3B0aW9uc1xuICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG4gICAgY29uc3QgcmVsYXRpdmVTZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3QoXG4gICAgICBzZWxlY3QsXG4gICAgICB0aGlzLmNsYXNzZXMub3B0aW9uc1xuICAgICkucmVsYXRpdmVTZWw7XG4gICAgb3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5nZXRPcHRpb25zKHJlbGF0aXZlU2VsKTtcbiAgICB9KTtcbiAgICBpZiAocmVsYXRpdmVTZWxPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ1tzZWxlY3RlZF0nKSkge1xuICAgICAgb3B0aW9uc1xuICAgICAgICAucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuICAvLyBkaXNhYmxlIHNlbGVjdFxuICBkaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICBpZiAocmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1haW4gYWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHNldCBtYWluIGFjdGlvbnNcbiAgc2V0QWN0aW9ucyhlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdHlwZSA9IGUudHlwZTtcblxuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpIHx8XG4gICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcbiAgICApIHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcbiAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7XG4gICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXG4gICAgICAgICAgICB9XCJdYFxuICAgICAgICAgICk7XG4gICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMudGl0bGUpKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSB0YXJnZXQuY2xvc2VzdChcbiAgICAgICAgICAgICAgdGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb2N1c2luJyB8fCB0eXBlID09PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSkge1xuICAgICAgICAgIGlmICh0eXBlID09PSAnZm9jdXNpbicpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XG4gICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcbiAgICB9XG4gIH1cbiAgLy8gc2V0IHNpbmdsZSBzZWxlY3QgYWN0aW9uXG4gIHNldEFjdGlvbihzZWxlY3QpIHtcbiAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG5cbiAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xuICAgICAgY29uc3Qgc2VsZWN0T25lR3JvdXAgPSByZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpO1xuICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwLCByZWxhdGl2ZVNlbCk7XG4gICAgfVxuXG4gICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tc2xpZGUnKSlcbiAgICAgICAgX3NsaWRlVG9nZ2xlKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xuICAgICAgaWYgKFxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5vcGVuZWQpICYmXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpICYmXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGdyb3VwXG4gIGNsb3NlR3JvdXAoZ3JvdXAsIHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbEdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGRvY3VtZW50O1xuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKX0ke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wZW5lZCl9YFxuICAgICk7XG4gICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0aW9uID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFzZWxlY3QgfHxcbiAgICAgICAgICAoc2VsZWN0ICYmIHNlbGVjdGlvbi5kYXRhc2V0LnNlbElkICE9PSBzZWxlY3QuZGF0YXNldC5zZWxJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUl0ZW0oc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxuICBjbG9zZUl0ZW0oc2VsZWN0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xuICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xuXG4gICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tc2xpZGUnKSlcbiAgICAgICAgX3NsaWRlVXAoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XG4gICAgfVxuICB9XG4gIC8vIHNldCBzaW5nbGUgb3B0aW9uIGFjdGlvbnNcbiAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xuICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xuICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlU2VsZWN0aW9ucyA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHM7XG5cbiAgICAgIHJlbGF0aXZlU2VsZWN0aW9ucy5mb3JFYWNoKHJlbGF0aXZlU2VsZWN0aW9uID0+IHtcbiAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHR3aW5TZWxlY3Rpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbGVjdGVkKVxuICAgICAgKTtcbiAgICAgIHR3aW5TZWxlY3Rpb25zLmZvckVhY2godHdpblNlbGVjdGlvbiA9PiB7XG4gICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7dHdpblNlbGVjdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcbiAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIHJlbGF0aXZlU2VsLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICk7XG4gICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19vcHRpb24nKVxuICAgICAgICAuZm9yRWFjaChvcHQgPT4gb3B0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApXG4gICAgICAgICkge1xuICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWBcbiAgICAgICAgICApLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVsYXRpdmVTZWwudmFsdWUgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdC12YWwnKVxuICAgICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdFZhbFxuICAgICAgICA6IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcbiAgfVxuICAvLyBzZXQgc2VhcmNoIGFjdGlvbnNcbiAgc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3Qgc2VsSW5wdXQgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5pbnApLnR3aW5TZWw7XG4gICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KFxuICAgICAgc2VsZWN0LFxuICAgICAgdGhpcy5jbGFzc2VzLm9wdGlvbnNcbiAgICApLnR3aW5TZWwucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKTtcblxuICAgIHNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKHNlbE9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZWxPcHRpb24udGV4dENvbnRlbnRcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWxPcHRpb25zLmhpZGRlbiA9PT0gdHJ1ZSA/IF90aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcbiAgICB9KTtcbiAgfVxuICAvLyBzZXQgc2VsZWN0IHN1YnRpdGxlXG4gIHNldFN1YnRpdGxlKHJlbGF0aXZlU2VsKSB7fVxuXG4gIC8vIHZhbGlkYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGFkZCBhbiBlcnJvciB0byBhIHNlbGVjdFxuICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XG5cbiAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvciAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIHJlbW92ZSBhbiBlcnJvciBmcm9tIGEgc2VsZWN0XG4gIHJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XG4gICAgaWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKSkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmVycm9yKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykgJiZcbiAgICAgICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnRcbiAgICApIHtcbiAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGdldCBjdXN0b20gY2xhc3NcbiAgZ2V0Q2xhc3MoY3NzQ2xhc3MpIHtcbiAgICByZXR1cm4gYC4ke2Nzc0NsYXNzfWA7XG4gIH1cbiAgLy8gZ2V0IHNpbmdsZSBzZWxlY3QgaXRlbVxuICBnZXRTZWxlY3Qoc2VsZWN0LCBjc3NDbGFzcykge1xuICAgIHJldHVybiB7XG4gICAgICByZWxhdGl2ZVNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpLFxuICAgIH07XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdGVkIGl0ZW0gdmFsdWVcbiAgZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgIGxldCBhdHRyLFxuICAgICAgYXR0ckNsYXNzLFxuICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XG5cbiAgICAvLyBzZXQgdGl0bGUgdmFsdWVcbiAgICB0aXRsZVZhbCA9IHRpdGxlVmFsLmxlbmd0aFxuICAgICAgPyB0aXRsZVZhbFxuICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgIDogJyc7XG5cbiAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXG4gICAgaWYgKHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkudmFsdWVzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIHNldCBzZWxlY3QgbGFiZWxcbiAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XG4gICAgICBhdHRyID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgICA/IGAgZGF0YS1zZWwtbGFiZWw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWx9XCJgXG4gICAgICAgIDogYCBkYXRhLXNlbC1sYWJlbD1cItCS0YvQsdC+0YBcImA7XG4gICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XG4gICAgfVxuXG4gICAgLy8gcHVzaCBzZWxlY3Rpb25zIHRvIHRoZSBsaXN0IGluc2lkZSBvZiBzZWxlY3QgdGl0bGVcbiAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUgJiYgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1saXN0JykpIHtcbiAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKVxuICAgICAgICAuZWxlbWVudHMubWFwKFxuICAgICAgICAgIG9wdGlvbiA9PlxuICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xuICAgICAgICAgICAgICBvcHRpb24udmFsdWVcbiAgICAgICAgICAgIH1cIiBjbGFzcz1cIl9saXN0LWl0ZW1cIj4ke3RoaXMuZ2V0Q29udGVudChvcHRpb24pfTwvc3Bhbj5gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCAmJlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdClcbiAgICAgICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkuaW5uZXJIVE1MID0gdGl0bGVWYWw7XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB0aXRsZVZhbCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxuICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHJ9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuaW5wfVwiPjwvc3Bhbj48L2Rpdj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXN0b21DbGFzcyA9XG4gICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHMubGVuZ3RoICYmXG4gICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xuICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXG4gICAgICAgICAgOiAnJztcbiAgICAgIHJldHVybiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke1xuICAgICAgICBhdHRyID8gYXR0ciA6ICcnXG4gICAgICB9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfSAke1xuICAgICAgICBhdHRyQ2xhc3MgPyBhdHRyQ2xhc3MgOiAnJ1xuICAgICAgfVwiPjxzcGFuIGNsYXNzPVwiJHtcbiAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcbiAgICAgIH0ke2N1c3RvbUNsYXNzfVwiPiR7dGl0bGVWYWx9PC9zcGFuPjwvc3Bhbj48L2J1dHRvbj5gO1xuICAgIH1cbiAgfVxuICAvLyBnZXQgb3B0aW9uc1xuICBnZXRPcHRpb25zKHJlbGF0aXZlU2VsKSB7XG4gICAgY29uc3Qgc2VsU2Nyb2xsID0gcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zY3JvbGwnKVxuICAgICAgPyBgZGF0YS1zaW1wbGViYXJgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0IGRhdGEgPSBzZWxTY3JvbGxcbiAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwudHJpbSgpLnNwbGl0KCcsJylcbiAgICAgIDogbnVsbDtcbiAgICBsZXQgc2VsU2Nyb2xsSGVpZ2h0ID1cbiAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsICYmIGRhdGFcbiAgICAgICAgPyBgc3R5bGU9XCJtYXgtaGVpZ2h0OiR7d2luZG93LmlubmVyV2lkdGggPiA3NjggPyBkYXRhWzBdIDogZGF0YVsxXX1yZW1cImBcbiAgICAgICAgOiAnJztcbiAgICBsZXQgc2VsT3B0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucyk7XG5cbiAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGxldCBzZWxPcHRpb25zSFRNTCA9IGBgO1xuXG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSAmJlxuICAgICAgICAgICF0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5zaG93KSB8fFxuICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgKSB7XG4gICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxuICAgICAgICA/IGA8ZGl2ICR7c2VsU2Nyb2xsfSAke3NlbFNjcm9sbEhlaWdodH0gZGF0YS1zZWwtc2Nyb2xsPVwiJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbH1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnNjcm9sbH1cIj5gXG4gICAgICAgIDogJyc7XG4gICAgICBzZWxPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gdGhpcy5nZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCk7XG4gICAgICB9KTtcbiAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XG4gICAgICByZXR1cm4gc2VsT3B0aW9uc0hUTUw7XG4gICAgfVxuICB9XG4gIC8vIGdldCBvcHRpb25cbiAgZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBzZWxlY3Rpb25zID1cbiAgICAgIG9wdGlvbi5zZWxlY3RlZCAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICA/IGAgJHt0aGlzLmNsYXNzZXMuc2VsZWN0ZWR9YFxuICAgICAgICA6ICcnO1xuICAgIGNvbnN0IHNob3dTZWxlY3Rpb24gPVxuICAgICAgb3B0aW9uLnNlbGVjdGVkICYmXG4gICAgICAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykgJiZcbiAgICAgICFyZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICA/IGBoaWRkZW5gXG4gICAgICAgIDogYGA7XG4gICAgY29uc3Qgb3B0aW9uQ2xhc3MgPSBvcHRpb24uZGF0YXNldC5vcHRDbGFzc1xuICAgICAgPyBgICR7b3B0aW9uLmRhdGFzZXQub3B0Q2xhc3N9YFxuICAgICAgOiAnJztcbiAgICBjb25zdCBvcHRpb25MaW5rID0gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGlua1xuICAgICAgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rXG4gICAgICA6IGZhbHNlO1xuICAgIGNvbnN0IG9wdGlvbkxpbmtUYXJnZXQgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdGlvbi1saW5rLXRhcmdldCcpXG4gICAgICA/IGB0YXJnZXQ9XCJfYmxhbmtcImBcbiAgICAgIDogJyc7XG4gICAgbGV0IG9wdGlvbkhUTUwgPSBgYDtcblxuICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGlua1xuICAgICAgPyBgPGEgJHtvcHRpb25MaW5rVGFyZ2V0fSAke3Nob3dTZWxlY3Rpb259IGhyZWY9XCIke29wdGlvbkxpbmt9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCI+YFxuICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xuICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XG4gICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rID8gYDwvYT5gIDogYDwvYnV0dG9uPmA7XG4gICAgcmV0dXJuIG9wdGlvbkhUTUw7XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdCBjb250ZW50XG4gIGdldENvbnRlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0XG4gICAgICA/IGAke29wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0fWBcbiAgICAgIDogJyc7XG4gICAgY29uc3Qgb3B0aW9uRGF0YUhUTUwgPVxuICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwXG4gICAgICAgID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmBcbiAgICAgICAgOiBvcHRpb25EYXRhO1xuICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xuXG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YVxuICAgICAgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ncm91cH1cIj5gXG4gICAgICA6ICcnO1xuICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGFcbiAgICAgID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYXNzZXR9XCI+YFxuICAgICAgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YUhUTUwgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnR4dH1cIj5gIDogJyc7XG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgcmV0dXJuIG9wdGlvbkNvbnRlbnRIVE1MO1xuICB9XG4gIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcbiAgZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucykuZmluZChcbiAgICAgIG9wdGlvbiA9PiAhb3B0aW9uLnZhbHVlXG4gICAgKTtcblxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc3VidGl0bGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxuICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoJyksXG4gICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIuZGF0YXNldC5vcHRQbGFjZWhvbGRlcixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIC8vIGdldCBzZWxlY3RlZCBvcHRpb25zIGRhdGFcbiAgZ2V0RGF0YShyZWxhdGl2ZVNlbCkge1xuICAgIGxldCBzZWxlY3Rpb25zID0gW107XG5cbiAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcbiAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0aW9ucy5wdXNoKHJlbGF0aXZlU2VsLm9wdGlvbnNbcmVsYXRpdmVTZWwuc2VsZWN0ZWRJbmRleF0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudHM6IHNlbGVjdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24pLFxuICAgICAgdmFsdWVzOiBzZWxlY3Rpb25zXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSxcbiAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKG9wdGlvbiA9PiB0aGlzLmdldENvbnRlbnQob3B0aW9uKSksXG4gICAgfTtcbiAgfVxuXG4gIC8vIHNlbGVjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGluaXQgc2VsZWN0aW9uc1xuICBpbml0U2VsZWN0aW9ucyhlKSB7XG4gICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcblxuICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gIH1cbiAgLy8gc2V0IHNlbGVjdGlvbnNcbiAgc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1pdCcpICYmIHJlbGF0aXZlU2VsLnZhbHVlKSB7XG4gICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgdGVtcEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xuICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xuICAgICAgdGVtcEJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5maWxsZWQpO1xuICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICB9XG4gIC8vIGN1c3RvbSBzZWxlY3QgZXZlbnQgKGxpc3RlbiB0byBhbnkgc2VsZWN0aW9ucyAvIG11dGF0aW9ucylcbiAgc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24nLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdDogcmVsYXRpdmVTZWwsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbm5ldyBTZWxlY3Qoe30pO1xuIiwiLyoqXG4gKiBzZXQgaGFzaCB0byB1cmxcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRIYXNoID0gaGFzaCA9PiB7XG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XG4gIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaCk7XG59O1xuXG4vKipcbiAqIGdldCBoYXNoIGZyb20gdXJsXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgfVxufTtcblxuLy8gYm9keSBsb2NrXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbi8qKlxuICogdG9nZ2xlcyBib2R5IGxvY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keUxvY2tUb2dnbGUgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xuICAgIGJvZHlVbmxvY2soZGVsYXkpO1xuICB9IGVsc2Uge1xuICAgIGJvZHlMb2NrKGRlbGF5KTtcbiAgfVxufTtcbi8qKlxuICogdW5sb2NrcyBib2R5XG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlVbmxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgIH0sIGRlbGF5KTtcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcbi8qKlxuICogbG9ja3MgYm9keVxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5TG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gZGF0YVNldFZhbHVlXG4gKiBwcm9jZXNzIG1lZGlhIHJlcXVlc3RzIGZyb20gYXR0cmlidXRlc1xuICovXG5leHBvcnQgY29uc3QgZGF0YU1lZGlhUXVlcmllcyA9IChhcnJheSwgZGF0YVNldFZhbHVlKSA9PiB7XG4gIC8vIGdldCBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllc1xuICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICBpZiAoaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0pIHtcbiAgICAgIHJldHVybiBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXS5zcGxpdCgnLCcpWzBdO1xuICAgIH1cbiAgfSk7XG4gIC8vIG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzIGluaXRpYWxpemF0aW9uXG4gIGlmIChtZWRpYS5sZW5ndGgpIHtcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XG4gICAgbWVkaWEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdO1xuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHt9O1xuICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoJywnKTtcbiAgICAgIGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcbiAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogJ21heCc7XG4gICAgICBicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xuICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpO1xuICAgIH0pO1xuICAgIC8vIGdldCB1bmlxdWUgYnJlYWtwb2ludHNcbiAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICcoJyArXG4gICAgICAgIGl0ZW0udHlwZSArXG4gICAgICAgICctd2lkdGg6ICcgK1xuICAgICAgICBpdGVtLnZhbHVlICtcbiAgICAgICAgJ3B4KSwnICtcbiAgICAgICAgaXRlbS52YWx1ZSArXG4gICAgICAgICcsJyArXG4gICAgICAgIGl0ZW0udHlwZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBtZFF1ZXJpZXMgPSB1bmlxdWVBcnJheShtZFF1ZXJpZXMpO1xuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XG5cbiAgICBpZiAobWRRdWVyaWVzLmxlbmd0aCkge1xuICAgICAgLy8gd29yayB3aXRoIGV2ZXJ5IGJyZWFrcG9pbnRcbiAgICAgIG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoJywnKTtcbiAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdO1xuICAgICAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGFyYW1zQXJyYXlbMF0pO1xuICAgICAgICAvLyBvYmplY3RzIHdpdGggY29uZGl0aW9uc1xuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbWVkaWFCcmVha3BvaW50ICYmIGl0ZW0udHlwZSA9PT0gbWVkaWFUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcbiAgICAgICAgICBpdGVtc0FycmF5LFxuICAgICAgICAgIG1hdGNoTWVkaWEsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIHNtb290aGx5IHNsaWRlcyB1cFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZVVwRG9uZScsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiBzbW9vdGhseSBzbGlkZXMgZG93blxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XG4gICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XG4gICAgICAvLyBjcmVhdGUgZXZlbnRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVEb3duRG9uZScsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiB0b2dnbGVzIHNtb290aCBzbGlkZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEByZXR1cm5zIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xuICBpZiAodGFyZ2V0LmhpZGRlbikge1xuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtVmFsdWVcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW1WYWx1ZSkge1xuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQuNC5INCx0LDQt9C+0LLRi9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgKGZvbnQtc2l6ZSkg0LjQtyDRjdC70LXQvNC10L3RgtCwIDxodG1sPlxuICB2YXIgaHRtbEZvbnRTaXplID0gcGFyc2VGbG9hdChcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemVcbiAgKTtcblxuICAvLyDQn9C10YDQtdCy0L7QtNC40Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3IHJlbSDQsiBweFxuICB2YXIgcHhWYWx1ZSA9IHJlbVZhbHVlICogaHRtbEZvbnRTaXplO1xuXG4gIC8vINCe0LrRgNGD0LPQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INC00L4g0YbQtdC70YvRhSDQv9C40LrRgdC10LvQtdC5ICjQv9C+INC20LXQu9Cw0L3QuNGOKVxuICByZXR1cm4gTWF0aC5yb3VuZChweFZhbHVlKSArICdweCc7XG59XG5cbi8vIHJlbW92ZSBjbGFzcyBmcm9tIGFsbCBhcnJheSBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzZXMgPSAoYXJyYXksIGNsYXNzTmFtZSkgPT4ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG59O1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLHJlZ3VsYXIsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0ZsZXg6cmVndWxhciw1MDAsNjAwLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzpyZWd1bGFyLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBGbGV4XCI7XG4gIGZvbnQtc2l6ZTogMC41MjA4MzM1dnc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogIzJlMmUyZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjFmMztcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5hIHtcbiAgY29sb3I6IHVuc2V0O1xufVxuXG5hLFxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYnV0dG9uLFxuaW5wdXQsXG5hLFxudGV4dGFyZWEge1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5idXR0b246Zm9jdXMsXG5pbnB1dDpmb2N1cyxcbmE6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5idXR0b246YWN0aXZlLFxuaW5wdXQ6YWN0aXZlLFxuYTphY3RpdmUsXG50ZXh0YXJlYTphY3RpdmUge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbnVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE4cmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1NnJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuc3ZnLFxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbmh0bWwubG9jayxcbmh0bWwubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG59XG5cbi5oIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMjAlO1xufVxuLmhfaDEge1xuICBmb250LXNpemU6IDZyZW07XG59XG4uaF9oMiB7XG4gIGZvbnQtc2l6ZTogMy40cmVtO1xufVxuLmhfaDMge1xuICBmb250LXNpemU6IDIuNHJlbTtcbn1cblxuLnR4dDE2IHtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG59XG4udHh0MTZfY2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxLjZyZW0gMy4ycmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDEuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTByZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xufVxuLmJ0bl93aGl0ZSB7XG4gIGNvbG9yOiByZ2IoMTA1LCAxMjksIDIxNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuX3doaXRlIHN2ZyBwYXRoIHtcbiAgc3Ryb2tlOiByZ2IoMTA1LCAxMjksIDIxNSk7XG59XG4uYnRuX3ByaW1hcnkgc3ZnIHtcbiAgd2lkdGg6IDIuNnJlbTtcbn1cbi5idG5fcHJpbWFyeSAuYnRuX19pY29uIHtcbiAgZmxleDogMCAwIDIuNnJlbTtcbiAgd2lkdGg6IDIuNnJlbTtcbiAgaGVpZ2h0OiAyLjFyZW07XG59XG4uYnRuX2dob3N0IHtcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbSAwLjRyZW0gMS40cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjZDc2OTdkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XG59XG4uYnRuX2dob3N0IC5hcnIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xufVxuLmJ0bl9naG9zdCAuYnRuX190eHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmJ0bl9fdHh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5yb3VuZC1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA0LjZyZW07XG4gIHdpZHRoOiA0LjZyZW07XG4gIGhlaWdodDogNC42cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTgxZDc7XG59XG4ucm91bmQtYnRuIHN2ZyB7XG4gIGZsZXg6IDAgMCAyLjZyZW07XG4gIHdpZHRoOiAyLjZyZW07XG4gIGhlaWdodDogMi4zcmVtO1xufVxuXG5Aa2V5ZnJhbWVzIGFyckFuaW0xIHtcbiAgMzMlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMTtcbiAgfVxuICA2NiUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAwLjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDAuMjtcbiAgfVxufVxuQGtleWZyYW1lcyBhcnJBbmltMiB7XG4gIDMzJSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDAuMjtcbiAgfVxuICA2NiUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAwLjU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYXJyQW5pbTMge1xuICAzMyUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAwLjU7XG4gIH1cbiAgNjYlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMC4yO1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAxO1xuICB9XG59XG4ubGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4ubGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYygxMDAlICsgMC4ycmVtKTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uYXJyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgNHJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU3O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cbi5hcnJfdmVydGljYWwgc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLmFyciBzdmcge1xuICB3aWR0aDogMXJlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLmJhZGdlIHtcbiAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5iYWRnZV9ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5ODFkNztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYmFkZ2VfZ3JheSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODk4ZTlmO1xufVxuLmJhZGdlX190eHQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYnJlYWRjcnVtYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbHVtbi1nYXA6IDEuNHJlbTtcbn1cbi5icmVhZGNydW1icyBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzg5OGU5Zjtcbn1cbi5icmVhZGNydW1icyBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiL1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0wLjRyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9dGVsXSxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDEuMnJlbTtcbn1cbi5pbnB1dC5fZm9ybS1lcnJvciAuaW5wdXRfX2xhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1lcnJvcik7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaW5wdXRfX2ZpZWxkIHtcbiAgcGFkZGluZzogMS42cmVtIDJyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxLjZyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyIDAuM3MgZWFzZTtcbn1cbi5pbnB1dF9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4OThlOWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5pbnB1dF9fZmllbGQuX2Zvcm0tZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDc2OTdkO1xuICBjb2xvcjogI2Q3Njk3ZDtcbn1cbi5pbnB1dF9fbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbHVtbi1nYXA6IDNyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTllY2Y1O1xufVxuLmlucHV0Ll9mb3JtLWVycm9yIC5pbnB1dF9fZmllbGQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNkNzY5N2Q7XG59XG5cbi5kcm9wZG93biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHJvdy1nYXA6IDEuMnJlbTtcbn1cbi5kcm9wZG93bl9fbGFiZWwge1xuICBjb2xvcjogI2U5ZWNmNTtcbn1cblxuLnNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX2JvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VsZWN0X190aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlbGVjdF9fdmFsdWUge1xuICBwYWRkaW5nOiAxLjZyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJyZW07XG4gIGhlaWdodDogNS42cmVtO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWxlY3RfX3ZhbHVlID4gKiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4OiAwIDAgMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zZWwtYXJyLnN2Zyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLXNlbC1sYWJlbCk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5fc2VsZWN0LWZpbGxlZCAuc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbDo6YmVmb3JlLFxuLnNlbGVjdF9fdmFsdWUgLnNlbGVjdF9fY29udGVudCB7XG4gIG1heC13aWR0aDogMzEuNHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uc2VsZWN0X190ZXh0IHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X19pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnNlbGVjdF9fb3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjhyZW0pO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAycmVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gcmdiYSg1MiwgNTIsIDUyLCAwLjE1KTtcbn1cbi5zZWxlY3RfX3Njcm9sbCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMTlyZW07XG59XG4uc2VsZWN0X19vcHRpb24ge1xuICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5zZWxlY3RfX29wdGlvbjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnNlbGVjdF9fb3B0aW9uOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5zZWxlY3RfX29wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTc7XG59XG4uc2VsZWN0X19vcHRpb24uX3NlbGVjdC1zZWxlY3RlZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc2VsZWN0X19ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuLnNlbGVjdF9fc3VidGl0bGUge1xuICBjdXJzb3I6IHRleHQ7XG59XG4uc2VsZWN0Ll9zZWxlY3Qtb3BlbmVkIHtcbiAgei1pbmRleDogNTtcbn1cbi5zZWxlY3QuX3NlbGVjdC1vcGVuZWQgLnNlbGVjdF9fdmFsdWU6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4uc2VsZWN0Ll9zZWxlY3QtZXJyb3I6bm90KC5zZWxlY3QuX3NlbGVjdC1lcnJvci5fc2VsZWN0LWZpbGxlZCwgLnNlbGVjdC5fc2VsZWN0LWVycm9yLl9zZWxlY3Qtb3BlbmVkKSAuc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUge1xuICBjb2xvcjogI2Q3Njk3ZDtcbn1cbi5fc2VsZWN0LWxpc3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY2NvcmRpb25fX2l0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAyLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYWNjb3JkaW9uX190aXRsZSB7XG4gIHBhZGRpbmc6IDIuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hY2NvcmRpb25fX3RpdGxlLl9hY2NvcmRpb24tYWN0aXZlIC5hcnIgc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbi5hY2NvcmRpb25fX3RpdGxlLl9hY2NvcmRpb24tYWN0aXZlIC5hcnIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xufVxuLmFjY29yZGlvbl9fdGl0bGUgLmFyciB7XG4gIGZsZXg6IDAgMCA1cmVtO1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xufVxuLmFjY29yZGlvbl9fYm9keSB7XG4gIHBhZGRpbmc6IDIuNHJlbTtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uYWNjb3JkaW9uX190ZXh0IHtcbiAgY29sb3I6IHJnYigxMzIsIDEzMiwgMTMyKTtcbn1cbi5hY2NvcmRpb25fX3RleHQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxNDk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg2NiwgNjYsIDY2LCAwLjEpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcbn1cbi5tb2RhbC1zaG93IGJvZHk6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDNyZW0gMi40cmVtO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuOHMgZWFzZSAwcztcbn1cbi5tb2RhbC5tb2RhbF9zaG93IHtcbiAgei1pbmRleDogMTUwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4ubW9kYWwubW9kYWxfc2hvdyAubW9kYWxfX2NvbnRlbnQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1vZGFsX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5tb2RhbF9fY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSAwcztcbn1cbi5sb2NrIC5tb2RhbF9fY29udGVudCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ubW9kYWxfX2Nsb3NlIHtcbiAgbWFyZ2luLWJvdHRvbTogMy4zcmVtO1xuICB3aWR0aDogNHJlbTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4ubW9kYWxfX2Nsb3NlIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5kb2N0b3JzLWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZG9jdG9ycy1pbWFnZXNfX2ltYWdlLXdyYXAge1xuICBmbGV4OiAwIDAgNHJlbTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMSwgMjIxLCAyMjEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZG9jdG9ycy1pbWFnZXNfX2ltYWdlLXdyYXA6bnRoLWNoaWxkKDIpLCAuZG9jdG9ycy1pbWFnZXNfX2ltYWdlLXdyYXA6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xufVxuLmRvY3RvcnMtaW1hZ2VzX19pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5maWd1cmUtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMS42cmVtIDQuOHJlbSAxLjJyZW0gMS42cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xufVxuLmZpZ3VyZS1saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNsaXAtcGF0aDogdXJsKCNjbEZpZ3VyZSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uZmlndXJlLWxpbmtfX3RleHQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDg3JTtcbn1cbi5maWd1cmUtbGlua19fcm91bmQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTAuM3JlbTtcbiAgYm90dG9tOiAwO1xufVxuXG4ud3JhcC1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAycmVtIDEuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMi40cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXAtbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDIuNHJlbTtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIuNXJlbSk7XG59XG4uYWJvdXQtaGVyb19fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hYm91dC1oZXJvX19icmVhZGNydW1icyB7XG4gIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcbn1cbi5hYm91dC1oZXJvX19ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sdW1uLWdhcDogMi40cmVtO1xufVxuLmFib3V0LWhlcm9fX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFib3V0LWhlcm9fX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XG59XG4uYWJvdXQtaGVyb19fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG4uYWJvdXQtaGVyb19fYnRuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFib3V0LWhlcm9fX2JnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLmFib3V0LWhlcm9fX2JnLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hYm91dC1oZXJvX19iZy10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjRyZW07XG4gIGxlZnQ6IDAuN3JlbTtcbiAgbWF4LXdpZHRoOiAyMS44cmVtO1xufVxuLmFib3V0LWhlcm9fX3dyYXAtbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyLjRyZW07XG4gIGxlZnQ6IDIuNHJlbTtcbn1cbi5hYm91dC1oZXJvX19maWd1cmUtbGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEuNXJlbTtcbiAgYm90dG9tOiAyLjhyZW07XG59XG4uYWJvdXQtaGVyb19fYmctaW1hZ2Utd3JhcCB7XG4gIGhlaWdodDogNTMuMnJlbTtcbn1cbi5hYm91dC1oZXJvX19iZy1pbWFnZSB7XG4gIGNsaXAtcGF0aDogdXJsKCNjbEhlcm9CZyk7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5hZHZhbnRhZ2VzX19jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxNS42cmVtO1xufVxuLmFkdmFudGFnZXNfX2NhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMi40cmVtO1xufVxuLmFkdmFudGFnZXNfX2NvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiA2cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFkdmFudGFnZXNfX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XG59XG4uYWR2YW50YWdlc19fdGV4dC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogNHJlbTtcbn1cbi5hZHZhbnRhZ2UtY2FyZCB7XG4gIHBhZGRpbmc6IDIuNHJlbSAyLjRyZW0gMi44cmVtIDIuNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogOC42cmVtO1xuICBib3JkZXItcmFkaXVzOiAyLjRyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYWR2YW50YWdlLWNhcmRfYmx1ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9pbWFnZXMvYmcvYmx1ZS1iY2tkcm9wLndlYnBcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uYWR2YW50YWdlLWNhcmRfYmx1ZSAuYWR2YW50YWdlLWNhcmRfX2ljb24td3JhcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG59XG4uYWR2YW50YWdlLWNhcmRfX2hlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBjb2x1bW4tZ2FwOiAycmVtO1xufVxuLmFkdmFudGFnZS1jYXJkX19pY29uLXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA2cmVtO1xuICB3aWR0aDogNnJlbTtcbiAgaGVpZ2h0OiA2cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTgxZDc7XG59XG4uYWR2YW50YWdlLWNhcmRfX2ljb24ge1xuICB3aWR0aDogMi40cmVtO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmFkdmFudGFnZS1jYXJkX19pbWFnZS13cmFwIHtcbiAgZmxleDogMCAwIDI5cmVtO1xuICB3aWR0aDogMjlyZW07XG4gIGhlaWdodDogMjAuOXJlbTtcbn1cbi5hZHZhbnRhZ2UtY2FyZF9faW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNsaXAtcGF0aDogdXJsKCNjbEFkdkNhcmQpO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3ZlcikgYW5kIChtaW4td2lkdGg6IDQ4ZW0pe1xuICAuYnRuX3ByaW1hcnk6aG92ZXIgc3ZnIHBhdGg6Zmlyc3QtY2hpbGQge1xuICAgIGFuaW1hdGlvbjogYXJyQW5pbTEgMC44cyBsaW5lYXIgMHMgaW5maW5pdGU7XG4gIH1cbiAgLmJ0bl9wcmltYXJ5OmhvdmVyIHN2ZyBwYXRoOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uOiBhcnJBbmltMiAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbiAgfVxuICAuYnRuX3ByaW1hcnk6aG92ZXIgc3ZnIHBhdGg6bGFzdC1jaGlsZCB7XG4gICAgYW5pbWF0aW9uOiBhcnJBbmltMyAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbiAgfVxuICAuYnRuX2dob3N0OmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjk4MWQ3O1xuICB9XG4gIC5idG5fZ2hvc3Q6aG92ZXIgLmFyciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5ODFkNztcbiAgfVxuICAubGluazpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGV4KDApO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSl7XG4gIC5fbW9iaWxlLW9ubHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnR4dDE2IHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuICAuYWJvdXQtaGVyb19fY29udGVudCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgLmFib3V0LWhlcm9fX2J0biB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuYWJvdXQtaGVyb19fYmcge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZmxleDogMCAwIDkwcmVtO1xuICB9XG4gIC5hYm91dC1oZXJvX19iZy1pbWFnZS13cmFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5hZHZhbnRhZ2VzX19jYXJkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGNvbHVtbi1nYXA6IDIuNHJlbTtcbiAgICByb3ctZ2FwOiAxLjhyZW07XG4gICAgZmxleDogMCAwIDc2LjhyZW07XG4gIH1cbiAgLmFkdmFudGFnZXNfX2NhcmRzIC5hZHZhbnRhZ2UtY2FyZF9oYXMtaW1hZ2Uge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG4gIH1cbiAgLmFkdmFudGFnZXNfX2NvbnRlbnQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgLmFkdmFudGFnZS1jYXJkX2hhcy1pbWFnZSB7XG4gICAgcGFkZGluZzogMnJlbSAxLjdyZW0gMS45cmVtIDIuNHJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0by8xZnIgMjlyZW07XG4gIH1cbiAgLmFkdmFudGFnZS1jYXJkX2hhcy1pbWFnZSAuYWR2YW50YWdlLWNhcmRfX2ljb24td3JhcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuYWR2YW50YWdlLWNhcmRfaGFzLWltYWdlIC5hZHZhbnRhZ2UtY2FyZF9faGVhZCB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDE7XG4gIH1cbiAgLmFkdmFudGFnZS1jYXJkX2hhcy1pbWFnZSAuYWR2YW50YWdlLWNhcmRfX2JvZHkge1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAyO1xuICB9XG4gIC5hZHZhbnRhZ2UtY2FyZF9oYXMtaW1hZ2UgLmFkdmFudGFnZS1jYXJkX19pbWFnZS13cmFwIHtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICBncmlkLXJvdzogc3BhbiAyO1xuICB9XG4gIC5hZHZhbnRhZ2UtY2FyZF9oYXMtaW1hZ2UgLmFkdmFudGFnZS1jYXJkX19oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KXtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSl7XG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcmVtO1xuICB9XG4gIGh0bWwge1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS41NjI1dnc7XG4gICAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzN2dztcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIH1cbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDMuMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuX2Rlc2t0b3Atb25seSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaF9oMiB7XG4gICAgZm9udC1zaXplOiA0LjRyZW07XG4gIH1cbiAgLmhfaDMge1xuICAgIGZvbnQtc2l6ZTogMy42cmVtO1xuICB9XG4gIC5idG5fcHJpbWFyeSB7XG4gICAgcGFkZGluZzogMy4ycmVtIDVyZW07XG4gIH1cbiAgLmJ0bl9wcmltYXJ5IHN2ZyB7XG4gICAgd2lkdGg6IDRyZW07XG4gIH1cbiAgLmJ0bl9wcmltYXJ5IC5idG5fX2ljb24ge1xuICAgIGZsZXg6IDAgMCA0cmVtO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogMy41cmVtO1xuICB9XG4gIC5idG5fZ2hvc3Qge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIC5idG4ge1xuICAgIGNvbHVtbi1nYXA6IDMuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcbiAgfVxuICAuYnRuX190eHQge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICAucm91bmQtYnRuIHtcbiAgICBmbGV4OiAwIDAgOXJlbTtcbiAgICB3aWR0aDogOXJlbTtcbiAgICBoZWlnaHQ6IDlyZW07XG4gIH1cbiAgLnJvdW5kLWJ0biBzdmcge1xuICAgIGZsZXg6IDAgMCA0cmVtO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNC42cmVtO1xuICB9XG4gIC5saW5rIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjRyZW0gc29saWQgIzY5ODFkNztcbiAgfVxuICAubGluazo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbiAgLmFyciB7XG4gICAgZmxleDogMCAwIDVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICB9XG4gIC5hcnIgc3ZnIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICB9XG4gIC5iYWRnZSB7XG4gICAgcGFkZGluZzogMi40cmVtIDQuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcbiAgfVxuICAuYnJlYWRjcnVtYnMge1xuICAgIGNvbHVtbi1nYXA6IDIuNnJlbTtcbiAgfVxuICAuYnJlYWRjcnVtYnMgYTo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAtMC44cmVtO1xuICB9XG4gIC5pbnB1dCB7XG4gICAgcm93LWdhcDogMS42cmVtO1xuICB9XG4gIC5pbnB1dF9fZmllbGQge1xuICAgIHBhZGRpbmc6IDIuNHJlbSAzLjZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMy4ycmVtO1xuICB9XG4gIC5kcm9wZG93biB7XG4gICAgcm93LWdhcDogMS42cmVtO1xuICB9XG4gIC5zZWxlY3RfX3RpdGxlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XG4gIH1cbiAgLnNlbGVjdF9fdmFsdWUge1xuICAgIHBhZGRpbmc6IDIuNHJlbSAzLjJyZW07XG4gICAgZ2FwOiA0cmVtO1xuICAgIGhlaWdodDogOC44cmVtO1xuICB9XG4gIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gICAgZmxleDogMCAwIDMuMnJlbTtcbiAgICB3aWR0aDogMy4ycmVtO1xuICAgIGhlaWdodDogMy4ycmVtO1xuICB9XG4gIC5zZWxlY3RfX29wdGlvbnMge1xuICAgIHBhZGRpbmc6IDMuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9uIHtcbiAgICBwYWRkaW5nOiAyLjRyZW0gMDtcbiAgfVxuICAuYWNjb3JkaW9uX19pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICB9XG4gIC5hY2NvcmRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAzLjJyZW07XG4gIH1cbiAgLmFjY29yZGlvbl9fdGl0bGUgLmFyciB7XG4gICAgZmxleDogMCAwIDlyZW07XG4gICAgd2lkdGg6IDlyZW07XG4gICAgaGVpZ2h0OiA5cmVtO1xuICB9XG4gIC5hY2NvcmRpb25fX2JvZHkge1xuICAgIHBhZGRpbmc6IDMuMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAubW9kYWxfX2Nsb3NlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xuICAgIHdpZHRoOiA0LjhyZW07XG4gIH1cbiAgLmRvY3RvcnMtaW1hZ2VzX19pbWFnZS13cmFwIHtcbiAgICBmbGV4OiAwIDAgOHJlbTtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBoZWlnaHQ6IDhyZW07XG4gIH1cbiAgLndyYXAtbGluayB7XG4gICAgcGFkZGluZzogMS42cmVtIDIuNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XG4gIH1cbiAgLndyYXAtbGluayAuYnRuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFib3V0LWhlcm9fX2JyZWFkY3J1bWJzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2LjRyZW07XG4gIH1cbiAgLmFib3V0LWhlcm9fX2JvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICAuYWJvdXQtaGVyb19faGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNi40cmVtO1xuICAgIG9yZGVyOiAxO1xuICB9XG4gIC5hYm91dC1oZXJvX19iZy10ZXh0IHtcbiAgICBib3R0b206IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiAzNS42cmVtO1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICB9XG4gIC5hYm91dC1oZXJvX193cmFwLWxpbmsge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDNyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0LjhyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuICAuYWJvdXQtaGVyb19fd3JhcC1saW5rIC5idG5fX2ljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFib3V0LWhlcm9fX3dyYXAtbGluayAuYnRuX190eHQge1xuICAgIGZvbnQtc2l6ZTogMy42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLmFib3V0LWhlcm9fX2ZpZ3VyZS1saW5rIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hYm91dC1oZXJvX19iZy1pbWFnZSB7XG4gICAgY2xpcC1wYXRoOiB1cmwoI2NsSGVyb0JnLW0pO1xuICB9XG4gIC5hZHZhbnRhZ2VzX19jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICAuYWR2YW50YWdlc19fY2FyZCB7XG4gICAgcm93LWdhcDogbm9ybWFsO1xuICAgIG1pbi1oZWlnaHQ6IDQ3LjJyZW07XG4gIH1cbiAgLmFkdmFudGFnZXNfX2NhcmQgLmFkdmFudGFnZS1jYXJkX19oZWFkIHtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB9XG4gIC5hZHZhbnRhZ2VzX19oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0LjhyZW07XG4gIH1cbiAgLmFkdmFudGFnZXNfX3RleHQtd3JhcCB7XG4gICAgcm93LWdhcDogMnJlbTtcbiAgfVxuICAuYWR2YW50YWdlLWNhcmQge1xuICAgIHBhZGRpbmc6IDQuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0LjhyZW07XG4gIH1cbiAgLmFkdmFudGFnZS1jYXJkX2hhcy1pbWFnZSAuYWR2YW50YWdlLWNhcmRfX2ltYWdlLXdyYXAge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFkdmFudGFnZS1jYXJkX19oZWFkIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5hZHZhbnRhZ2UtY2FyZF9faWNvbi13cmFwIHtcbiAgICBmbGV4OiAwIDAgOXJlbTtcbiAgICB3aWR0aDogOXJlbTtcbiAgICBoZWlnaHQ6IDlyZW07XG4gIH1cbiAgLmFkdmFudGFnZS1jYXJkX19pY29uIHtcbiAgICB3aWR0aDogMy4ycmVtO1xuICB9XG4gIC5hZHZhbnRhZ2UtY2FyZF9fdGV4dCB7XG4gICAgbWF4LXdpZHRoOiA1MXJlbTtcbiAgfVxufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXtcbiAgLmFycjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxMDYsIDE3Mik7XG4gIH1cbiAgLmJhZGdlX2hhcy1ob3Zlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAxMzMsIDE4MCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0X19vcHRpb246aG92ZXIuc2VsZWN0X19zdWJ0aXRsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYWNjb3JkaW9uX190aXRsZSAuYXJyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xuICB9XG4gIC53cmFwLWxpbmsgLmJ0bl9naG9zdDpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3NldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL190eXBvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19saW5rLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2Fycm93LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2JhZGdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2JyZWFkY3J1bWJzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3NlbGVjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19hY2NvcmRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fbW9kYWxzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2RvY3RvcnMtaW1hZ2VzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX2ZpZ3VyZS1saW5rLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy91aS9zdHlsZXMvX3dyYXAtbGluay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fYWJvdXQtaGVyby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZWN0aW9ucy9fYWR2YW50YWdlcy5zY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0ksc0JBQUE7QUNJSjs7QURGQTtFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNLSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NqQlE7RURrQlIseUJDakJNO0FBc0JWOztBREZBOztFQUVJLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTs7RUFFSSxxQkFBQTtBQ09KOztBREpBOzs7O0VBSUksYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDT0o7QUROSTs7OztFQUNJLGFBQUE7QUNXUjtBRFRJOzs7O0VBQ0ksYUFBQTtBQ2NSOztBRFZBOzs7Ozs7RUFNSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNhSjs7QURYQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtB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SUFDSSx5QlR0QmI7RUF1dkJMO0VhN3VCTTtJQUNJLDZCQUFBO0ViaTZCVjtBQTRNRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBGbGV4JzsgLy8g0YjRgNC40YTRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQv9C+INGB0LDQudGC0YNcXG4gICAgZm9udC1zaXplOiAwLjUyMDgzMzV2dzsgLy8g0L3QsCDRgNCw0LfRgNC10YjQtdC90LjQuCAxOTIwIDAuNTIwODM1dncgPT09IDEwcHhcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGNvbG9yOiAkZm9udENvbG9yOyAvLyDRhtCy0LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDRgtC10LrRgdGC0LAg0L/QviDRgdCw0LnRgtGDXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ0NvbG9yO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5hIHtcXG4gICAgY29sb3I6IHVuc2V0O1xcbn1cXG5hLFxcbmE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5hLFxcbnRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAmOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG4gICAgJjphY3RpdmUge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbmltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxudWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbnVsIGxpIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMThyZW07XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHJlbTtcXG4gICAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDE1NnJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9J251bWJlciddOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9J251bWJlciddIHtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxufVxcblxcbnN2ZyxcXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgIGh0bWwge1xcbiAgICAgICAgZm9udC1zaXplOiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDEuNTYyNXZ3O1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKCgxMDAgLyAzNzUpICogNXZ3KTsgLy8g0LPQtNC1IDM3NSDRjdGC0L4g0YjQuNGA0LjQvdCwINC80L7QsSDQstC10YDRgdC40Lgg0LzQsNC60LXRgtCwXFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgYm9keSB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAwIDMuMnJlbTsgLy8g0LIg0LzQvtCxINCy0LXRgNGB0LjQuCDQvtGC0YHRgtGD0L8g0L7RgiDQutGA0LDRjyDQt9Cw0LTQsNC10Lwg0LTQu9GPINCy0YHQtdGFINC60L7QvdGC0LXQudC90LXRgNC+0LIsINCwINGC0LDQvCDQs9C00LUg0L3QtSDQvdGD0LbQvdC+INC80L7QttC10Lwg0YLQvtGH0LXRh9C90L4g0YPQsdGA0LDRgtGMXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbn1cXG5cIixcIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtaXhpbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuQGltcG9ydCAnLi9taXhpbnMnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZhcmlhYmxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuLy8gY29sb3JzXFxuJHdoaXRlOiAjZmZmZmZmO1xcbiRibGFjazogIzAwMDAwMDtcXG4kZm9udENvbG9yOiAjMmUyZTJlO1xcbiRiZ0NvbG9yOiAjZWZmMWYzO1xcbiRibHVlOiAjNjk4MWQ3O1xcbiRsaWdodEJsdWU6ICM2M2IzZGY7XFxuJHJlZDogI2Q3Njk3ZDtcXG4kZ3JheTogI2RlZTJlNztcXG4kdGV4dEdyYXk6ICM4OThlOWY7XFxuJGxpZ2h0R3JheTogI2U5ZWNmNTtcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCxyZWd1bGFyLDcwMCZkaXNwbGF5PXN3YXApO1xcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rRmxleDpyZWd1bGFyLDUwMCw2MDAsODAwJmRpc3BsYXk9c3dhcCk7XFxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzpyZWd1bGFyLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCk7XFxuXFxuLy8gbG9jYWwgZm9udHNcXG4vLyBAaW1wb3J0ICcuL2ZvbnRzJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJhc2Ugc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGJhc2Ugc2NzcyBmaWxlXFxuQGltcG9ydCAnLi9zZXQnO1xcblxcbi8vIGh0bWxcXG5odG1sLmxvY2ssXFxuaHRtbC5sb2NrIGJvZHkge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLy8gbWFpblxcbm1haW4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogMTkyMHB4O1xcbn1cXG5cXG4uX21vYmlsZS1vbmx5IHtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLl9kZXNrdG9wLW9ubHkge1xcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGhlYWRlciAvIGZvb3RlclxcbkBpbXBvcnQgJy4vc2VjdGlvbnMvaGVhZGVyJztcXG5AaW1wb3J0ICcuL3NlY3Rpb25zL2Zvb3Rlcic7XFxuXFxuLy8gdWlcXG5AaW1wb3J0ICcuLi91aS9zdHlsZXMvdWkuc2Nzcyc7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5AaW1wb3J0ICcuL2Rldi92em1zazEuc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYvbWFya3VzRE0uc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYvdWtpazAuc2Nzcyc7XFxuQGltcG9ydCAnLi9kZXYva2llNmVyLnNjc3MnO1xcblwiLFwiLmgge1xcbiAgICBmb250LWZhbWlseTogJ051bml0byc7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMjAlO1xcblxcbiAgICAmX2gxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgfVxcblxcbiAgICAmX2gyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy40cmVtO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDQuNHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX2gzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMuNnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4udHh0MTYge1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG5cXG4gICAgJl9jYXBzIHtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICB9XFxufVxcblwiLFwiLmJ0biB7XFxuICAgIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMS42cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuXFxuICAgICZfd2hpdGUge1xcbiAgICAgICAgY29sb3I6IHJnYmEoMTA1LCAxMjksIDIxNSwgMSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBzdmcgcGF0aCB7XFxuICAgICAgICAgICAgc3Ryb2tlOiByZ2JhKDEwNSwgMTI5LCAyMTUsIDEpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfcHJpbWFyeSB7XFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIHdpZHRoOiAyLjZyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuX19pY29uIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMi42cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAyLjZyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiAyLjFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuMnJlbSA1cmVtO1xcblxcbiAgICAgICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYnRuX19pY29uIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDRyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9naG9zdCB7XFxuICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDAuNHJlbSAxLjRyZW07XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBjb2xvcjogJHJlZDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlO1xcblxcbiAgICAgICAgLmFyciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuYnRuX190eHQge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgJl9wcmltYXJ5IHtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgc3ZnIHBhdGgge1xcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhcnJBbmltMSAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFyckFuaW0yIDAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFyckFuaW0zIDAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJl9naG9zdCB7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xcbiAgICAgICAgICAgICAgICAuYXJyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX190eHRcXG5cXG4gICAgJl9fdHh0IHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBsaW5lLWhlaWdodDogMTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2ljb25cXG5cXG4gICAgJl9faWNvbiB7XFxuICAgIH1cXG59XFxuXFxuLnJvdW5kLWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMCAwIDQuNnJlbTtcXG4gICAgd2lkdGg6IDQuNnJlbTtcXG4gICAgaGVpZ2h0OiA0LjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgICBmbGV4OiAwIDAgMi42cmVtO1xcbiAgICAgICAgd2lkdGg6IDIuNnJlbTtcXG4gICAgICAgIGhlaWdodDogMi4zcmVtO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmbGV4OiAwIDAgOXJlbTtcXG4gICAgICAgIHdpZHRoOiA5cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA5cmVtO1xcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNHJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDQuNnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFyckFuaW0xIHtcXG4gICAgMzMlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDY2JSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMC41O1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuMjtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFyckFuaW0yIHtcXG4gICAgMzMlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAwLjI7XFxuICAgIH1cXG4gICAgNjYlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAxO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuNTtcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFyckFuaW0zIHtcXG4gICAgMzMlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAwLjU7XFxuICAgIH1cXG4gICAgNjYlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAwLjI7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cIixcIi5saW5rIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDAuMnJlbSk7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDAuMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxleCgwKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNHJlbSBzb2xpZCAkYmx1ZTtcXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLmFyciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleDogMCAwIDRyZW07XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcblxcbiAgICAmX3ZlcnRpY2FsIHtcXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHN2ZyB7XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUzLCAxMDYsIDE3MiwgMSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIGZsZXg6IDAgMCA1cmVtO1xcbiAgICAgICAgd2lkdGg6IDVyZW07XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuXFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIuYmFkZ2Uge1xcbiAgICBwYWRkaW5nOiAxLjZyZW0gMy4ycmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBjb2xvciAwLjNzIGVhc2U7XFxuXFxuICAgICZfYmx1ZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIH1cXG5cXG4gICAgJl9ncmF5IHtcXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dEdyYXk7XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAmX2hhcy1ob3ZlciB7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTYsIDEzMywgMTgwLCAxKTtcXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgIHBhZGRpbmc6IDIuNHJlbSA0LjhyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuYmFkZ2VfX3R4dFxcblxcbiAgICAmX190eHQge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgfVxcbn1cXG5cIixcIi5icmVhZGNydW1icyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgY29sdW1uLWdhcDogMS40cmVtO1xcblxcbiAgICBhIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGNvbG9yOiAkdGV4dEdyYXk7XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogJy8nO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgcmlnaHQ6IC0wLjRyZW07XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAyLjZyZW07XFxuXFxuICAgICAgICBhIHtcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC44cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYnJlYWRjcnVtYnNfX3R4dFxcblxcbiAgICAmX190eHQge1xcbiAgICB9XFxufVxcblwiLFwiaW5wdXRbdHlwZT0ndGV4dCddLFxcbmlucHV0W3R5cGU9J2VtYWlsJ10sXFxuaW5wdXRbdHlwZT0ndGVsJ10sXFxudGV4dGFyZWEge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG59XFxudGV4dGFyZWE6Zm9jdXMsXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDEuMnJlbTtcXG4gICAgJi5fZm9ybS1lcnJvciB7XFxuICAgICAgICAuaW5wdXRfX2xhYmVsIHtcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1lcnJvcik7XFxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICByb3ctZ2FwOiAxLjZyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmlucHV0X19maWVsZFxcblxcbiAgICAmX19maWVsZCB7XFxuICAgICAgICBwYWRkaW5nOiAxLjZyZW0gMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBib3JkZXIgMC4zcyBlYXNlO1xcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkdGV4dEdyYXk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgfVxcbiAgICAgICAgJi5fZm9ybS1lcnJvciB7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHJlZDtcXG4gICAgICAgICAgICBjb2xvcjogJHJlZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMi40cmVtIDMuNnJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmlucHV0X19sYWJlbFxcblxcbiAgICAmX19sYWJlbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGNvbHVtbi1nYXA6IDNyZW07XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgY29sb3I6ICRsaWdodEdyYXk7XFxuICAgIH1cXG5cXG4gICAgJi5fZm9ybS1mb2N1cyB7XFxuICAgIH1cXG4gICAgJi5fZm9ybS1lcnJvciB7XFxuICAgICAgICAuaW5wdXRfX2ZpZWxkOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgY29sb3I6ICRyZWQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCIsXCIuZHJvcGRvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAxLjJyZW07XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICByb3ctZ2FwOiAxLjZyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmRyb3Bkb3duX19sYWJlbFxcblxcbiAgICAmX19sYWJlbCB7XFxuICAgICAgICBjb2xvcjogJGxpZ2h0R3JheTtcXG4gICAgfVxcbn1cXG5cXG4uc2VsZWN0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAvLyAuc2VsZWN0X19ib2R5XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RpdGxlXFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3ZhbHVlXFxuXFxuICAgICZfX3ZhbHVlIHtcXG4gICAgICAgIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDUuNnJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgPiAqIHtcXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAycmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NlbC1hcnIuc3ZnKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG4gICAgICAgIH1cXG4gICAgICAgICYuX3NlbGVjdC1sYWJlbCB7XFxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXNlbC1sYWJlbCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICAgICAgICAgLl9zZWxlY3QtZmlsbGVkICYge1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgICYuX3NlbGVjdC1sYWJlbDo6YmVmb3JlLFxcbiAgICAgICAgLnNlbGVjdF9fY29udGVudCB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMS40cmVtO1xcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMi40cmVtIDMuMnJlbTtcXG4gICAgICAgICAgICBnYXA6IDRyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA4LjhyZW07XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMy4ycmVtO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMy4ycmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMnJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fY29udGVudFxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIC8vIGhpZGUgLyBzaG93IHNlbGVjdGVkIHZhbHVlXFxuICAgICAgICAvLyAmOm5vdCguX3NlbGVjdC1maWxsZWQgJikge1xcbiAgICAgICAgLy8gICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAvLyB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2lucHV0XFxuXFxuICAgICZfX2lucHV0IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uc1xcblxcbiAgICAmX19vcHRpb25zIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgICAgICB0b3A6IGNhbGMoMTAwJSArIDAuOHJlbSk7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoNTIsIDUyLCA1MiwgMC4xNSk7XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuMnJlbTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fc2Nyb2xsXFxuXFxuICAgICZfX3Njcm9sbCB7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcblxcbiAgICAgICAgLy8gbWF4aW11bSBoZWlnaHRcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE5cmVtO1xcblxcbiAgICAgICAgLy8gc2Nyb2xsYmFyIHN0eWxlc1xcbiAgICAgICAgJi5zaW1wbGViYXItc2Nyb2xsYWJsZS15IHtcXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5zaW1wbGViYXItc2Nyb2xsYmFyIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fb3B0aW9uXFxuICAgICZfX29wdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICB9XFxuICAgICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLl9zZWxlY3Qtc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgJjpub3QoJi5zZWxlY3RfX3N1YnRpdGxlKSB7XFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuNHJlbSAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2dyb3VwXFxuXFxuICAgICZfX2dyb3VwIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fYXNzZXRcXG5cXG4gICAgJl9fYXNzZXQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9faGludFxcblxcbiAgICAmX19oaW50IHtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19zdWJ0aXRsZVxcblxcbiAgICAmX19zdWJ0aXRsZSB7XFxuICAgICAgICBjdXJzb3I6IHRleHQ7XFxuICAgIH1cXG5cXG4gICAgLy8gc2VsZWN0IHN0YXRlXFxuICAgICYuX3NlbGVjdC1vcGVuZWQge1xcbiAgICAgICAgei1pbmRleDogNTtcXG4gICAgICAgIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWZvY3VzZWQge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1lcnJvciB7XFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3QtZmlsbGVkLCAmLl9zZWxlY3Qtb3BlbmVkKSB7XFxuICAgICAgICAgICAgLnNlbGVjdF9fdmFsdWUuX3NlbGVjdC1sYWJlbCB7XFxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZDtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZmlsbGVkIHtcXG4gICAgICAgICY6bm90KCYuX3NlbGVjdC1vcGVuZWQpIHtcXG4gICAgICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtc2hvdy12YWwpIHtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LXNob3ctdmFsIHtcXG4gICAgICAgICYuX3NlbGVjdC1mb2N1c2VkLFxcbiAgICAgICAgJi5fc2VsZWN0LWZpbGxlZCxcXG4gICAgICAgICYuX3NlbGVjdC1lcnJvcixcXG4gICAgICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWRpc2FibGVkIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtbXVsdGlwbGUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1hY3RpdmUge1xcbiAgICB9XFxuICAgICYuX3NlbGVjdC1jaGVja2JveCB7XFxuICAgIH1cXG59XFxuXFxuLy8gbGlzdFxcbi5fc2VsZWN0LWxpc3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLFwiLmFjY29yZGlvbiB7XFxuICAgIC8vIC5hY2NvcmRpb25fX2l0ZW1cXG5cXG4gICAgJl9faXRlbSB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyLjRyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFjY29yZGlvbl9fdGl0bGVcXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgcGFkZGluZzogMi40cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICYuX2FjY29yZGlvbi1hY3RpdmUge1xcbiAgICAgICAgICAgIC5hcnIgc3ZnIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmFyciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5hcnIge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA1cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICAgICAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMy4ycmVtO1xcbiAgICAgICAgICAgIC5hcnIge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgOXJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDlyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFjY29yZGlvbl9fdGl0bGUtdHh0XFxuXFxuICAgICZfX3RpdGxlLXR4dCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLmFjY29yZGlvbl9fYm9keVxcblxcbiAgICAmX19ib2R5IHtcXG4gICAgICAgIHBhZGRpbmc6IDIuNHJlbTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAzLjJyZW07XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFjY29yZGlvbl9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIGNvbG9yOiByZ2JhKDEzMiwgMTMyLCAxMzIsIDEpO1xcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiYm9keTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxNDk7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg2NiwgNjYsIDY2LCAwLjEpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZSAwcztcXG4gICAgLm1vZGFsLXNob3cgJiB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBwYWRkaW5nOiAzcmVtIDIuNHJlbTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjhzIGVhc2UgMHM7XFxuICAgICYubW9kYWxfc2hvdyB7XFxuICAgICAgICB6LWluZGV4OiAxNTA7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gICAgICAgIC5tb2RhbF9fY29udGVudCB7XFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5tb2RhbF9fd3JhcHBlclxcblxcbiAgICAmX193cmFwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLy8gLm1vZGFsX19jb250ZW50XFxuXFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSAwcztcXG4gICAgICAgIC5sb2NrICYge1xcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLm1vZGFsX19jbG9zZVxcblxcbiAgICAmX19jbG9zZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjNyZW07XFxuICAgICAgICB3aWR0aDogNHJlbTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xcbiAgICAgICAgICAgIHdpZHRoOiA0LjhyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cIixcIi5kb2N0b3JzLWltYWdlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIC8vIC5kb2N0b3JzLWltYWdlc19faW1hZ2Utd3JhcFxcblxcbiAgICAmX19pbWFnZS13cmFwIHtcXG4gICAgICAgIGZsZXg6IDAgMCA0cmVtO1xcbiAgICAgICAgd2lkdGg6IDRyZW07XFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMSwgMjIxLCAyMjEsIDEpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICY6bnRoLWNoaWxkKDIpLFxcbiAgICAgICAgJjpudGgtY2hpbGQoMykge1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMCAwIDhyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDhyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA4cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5kb2N0b3JzLWltYWdlc19faW1hZ2VcXG5cXG4gICAgJl9faW1hZ2Uge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIH1cXG59XFxuXCIsXCIuZmlndXJlLWxpbmsge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDEuNnJlbSA0LjhyZW0gMS4ycmVtIDEuNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG5cXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogLTE7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBjbGlwLXBhdGg6IHVybCgjY2xGaWd1cmUpO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICB9XFxuXFxuICAgIC8vIC5maWd1cmUtbGlua19fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA4NyU7XFxuICAgIH1cXG5cXG4gICAgLy8gLmZpZ3VyZS1saW5rX19pbWFnZXNcXG5cXG4gICAgJl9faW1hZ2VzIHtcXG4gICAgfVxcblxcbiAgICAvLyAuZmlndXJlLWxpbmtfX3JvdW5kLWJ0blxcblxcbiAgICAmX19yb3VuZC1idG4ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcmlnaHQ6IC0wLjNyZW07XFxuICAgICAgICBib3R0b206IDA7XFxuICAgIH1cXG59XFxuXCIsXCIud3JhcC1saW5rIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAycmVtIDEuMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMi40cmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgICAmOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiAnJztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IC0xO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi40cmVtO1xcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMi41cmVtKTtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXG4gICAgICAgIC5idG5fZ2hvc3Q6aG92ZXIge1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBwYWRkaW5nOiAxLjZyZW0gMi40cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMy4ycmVtO1xcblxcbiAgICAgICAgLmJ0biB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC53cmFwLWxpbmtfX2J0blxcblxcbiAgICAmX19idG4ge1xcbiAgICB9XFxufVxcblwiLFwiLmFib3V0LWhlcm8ge1xcbiAgICAvLyAuYWJvdXQtaGVyb19fY29udGFpbmVyXFxuXFxuICAgICZfX2NvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAvLyAuYWJvdXQtaGVyb19fYnJlYWRjcnVtYnNcXG5cXG4gICAgJl9fYnJlYWRjcnVtYnMge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2LjRyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX2JvZHlcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgY29sdW1uLWdhcDogMi40cmVtO1xcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX2NvbnRlbnRcXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX2hlYWRpbmdcXG5cXG4gICAgJl9faGVhZGluZyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYuNHJlbTtcXG4gICAgICAgICAgICBvcmRlcjogMTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWJvdXQtaGVyb19fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX2J0blxcblxcbiAgICAmX19idG4ge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hYm91dC1oZXJvX19iZ1xcblxcbiAgICAmX19iZyB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcblxcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCA5MHJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWJvdXQtaGVyb19fYmctY29udGVudFxcblxcbiAgICAmX19iZy1jb250ZW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX2JnLXRleHRcXG5cXG4gICAgJl9fYmctdGV4dCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IC0wLjRyZW07XFxuICAgICAgICBsZWZ0OiAwLjdyZW07XFxuICAgICAgICBtYXgtd2lkdGg6IDIxLjhyZW07XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGJvdHRvbTogYXV0bztcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1LjZyZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX3dyYXAtbGlua1xcblxcbiAgICAmX193cmFwLWxpbmsge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAyLjRyZW07XFxuICAgICAgICBsZWZ0OiAyLjRyZW07XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHRvcDogYXV0bztcXG4gICAgICAgICAgICBib3R0b206IDNyZW07XFxuICAgICAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0LjhyZW0pO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cXG4gICAgICAgICAgICAuYnRuX19pY29uIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmJ0bl9fdHh0IHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hYm91dC1oZXJvX19maWd1cmUtbGlua1xcblxcbiAgICAmX19maWd1cmUtbGluayB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICByaWdodDogMS41cmVtO1xcbiAgICAgICAgYm90dG9tOiAyLjhyZW07XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX2JnLWltYWdlLXdyYXBcXG5cXG4gICAgJl9fYmctaW1hZ2Utd3JhcCB7XFxuICAgICAgICBoZWlnaHQ6IDUzLjJyZW07XFxuXFxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFib3V0LWhlcm9fX2JnLWltYWdlXFxuXFxuICAgICZfX2JnLWltYWdlIHtcXG4gICAgICAgIGNsaXAtcGF0aDogdXJsKCNjbEhlcm9CZyk7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgY2xpcC1wYXRoOiB1cmwoI2NsSGVyb0JnLW0pO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLmFkdmFudGFnZXMge1xcbiAgICAvLyAuYWR2YW50YWdlc19fY29udGFpbmVyXFxuXFxuICAgICZfX2NvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgY29sdW1uLWdhcDogMTUuNnJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hZHZhbnRhZ2VzX19jYXJkc1xcblxcbiAgICAmX19jYXJkcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIHJvdy1nYXA6IDIuNHJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDIuNHJlbTtcXG4gICAgICAgICAgICByb3ctZ2FwOiAxLjhyZW07XFxuICAgICAgICAgICAgZmxleDogMCAwIDc2LjhyZW07XFxuXFxuICAgICAgICAgICAgLmFkdmFudGFnZS1jYXJkX2hhcy1pbWFnZSB7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hZHZhbnRhZ2VzX19jYXJkXFxuXFxuICAgICZfX2NhcmQge1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICByb3ctZ2FwOiBub3JtYWw7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogNDcuMnJlbTtcXG5cXG4gICAgICAgICAgICAuYWR2YW50YWdlLWNhcmRfX2hlYWQge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWR2YW50YWdlc19fY29udGVudFxcblxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWR2YW50YWdlc19faGVhZGluZ1xcblxcbiAgICAmX19oZWFkaW5nIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMuMnJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNC44cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hZHZhbnRhZ2VzX190ZXh0LXdyYXBcXG5cXG4gICAgJl9fdGV4dC13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgcm93LWdhcDogNHJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcm93LWdhcDogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWR2YW50YWdlc19fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgfVxcbn1cXG5cXG4uYWR2YW50YWdlLWNhcmQge1xcbiAgICBwYWRkaW5nOiAyLjRyZW0gMi40cmVtIDIuOHJlbSAyLjRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDguNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMi40cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBwYWRkaW5nOiA0LjhyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0LjhyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmFkdmFudGFnZS1jYXJkX2JsdWVcXG5cXG4gICAgJl9ibHVlIHtcXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltYWdlcy9iZy9ibHVlLWJja2Ryb3Aud2VicCcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuXFxuICAgICAgICAuYWR2YW50YWdlLWNhcmRfX2ljb24td3JhcCB7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hZHZhbnRhZ2UtY2FyZF9oYXMtaW1hZ2VcXG5cXG4gICAgJl9oYXMtaW1hZ2Uge1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICAuYWR2YW50YWdlLWNhcmRfX2ltYWdlLXdyYXAge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxLjdyZW0gMS45cmVtIDIuNHJlbTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIDFmciAyOXJlbTtcXG5cXG4gICAgICAgICAgICAuYWR2YW50YWdlLWNhcmRfX2ljb24td3JhcCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5hZHZhbnRhZ2UtY2FyZF9faGVhZCB7XFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmFkdmFudGFnZS1jYXJkX19ib2R5IHtcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuYWR2YW50YWdlLWNhcmRfX2ltYWdlLXdyYXAge1xcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IHNwYW4gMjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmFkdmFudGFnZS1jYXJkX19oZWFkaW5nIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFkdmFudGFnZS1jYXJkX19oZWFkXFxuXFxuICAgICZfX2hlYWQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgY29sdW1uLWdhcDogMnJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWR2YW50YWdlLWNhcmRfX2hlYWRpbmdcXG5cXG4gICAgJl9faGVhZGluZyB7XFxuICAgIH1cXG5cXG4gICAgLy8gLmFkdmFudGFnZS1jYXJkX19pY29uLXdyYXBcXG5cXG4gICAgJl9faWNvbi13cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZmxleDogMCAwIDZyZW07XFxuICAgICAgICB3aWR0aDogNnJlbTtcXG4gICAgICAgIGhlaWdodDogNnJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgOXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogOXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFkdmFudGFnZS1jYXJkX19pY29uXFxuXFxuICAgICZfX2ljb24ge1xcbiAgICAgICAgd2lkdGg6IDIuNHJlbTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHdpZHRoOiAzLjJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmFkdmFudGFnZS1jYXJkX19ib2R5XFxuXFxuICAgICZfX2JvZHkge1xcbiAgICB9XFxuXFxuICAgIC8vIC5hZHZhbnRhZ2UtY2FyZF9fdGV4dFxcblxcbiAgICAmX190ZXh0IHtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuYWR2YW50YWdlLWNhcmRfX2ltYWdlLXdyYXBcXG5cXG4gICAgJl9faW1hZ2Utd3JhcCB7XFxuICAgICAgICBmbGV4OiAwIDAgMjlyZW07XFxuICAgICAgICB3aWR0aDogMjlyZW07XFxuICAgICAgICBoZWlnaHQ6IDIwLjlyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmFkdmFudGFnZS1jYXJkX19pbWFnZVxcblxcbiAgICAmX19pbWFnZSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBjbGlwLXBhdGg6IHVybCgjY2xBZHZDYXJkKTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB9XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL2dyb3VwLWNzcy1tZWRpYS1xdWVyaWVzLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZvcm1zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgKiBhcyBmb3JtcyBmcm9tICcuL3V0aWxzL2Zvcm1zLmpzJztcblxuLy8gZm9ybSBmaWVsZHNcbmZvcm1zLmZvcm1GaWVsZHNJbml0KHsgdmlld1Bhc3M6IGZhbHNlIH0pO1xuXG4vLyBmb3JtIHN1Ym1pdFxuZm9ybXMuZm9ybVN1Ym1pdCgpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0YWJzXG4vLyBpbXBvcnQgJy4vdXRpbHMvdGFicy5qcyc7XG5cbi8vIGFjY29yZGlvblxuaW1wb3J0ICcuL3V0aWxzL2FjY29yZGlvbi5qcyc7XG5cbi8vIHNlbGVjdFxuaW1wb3J0ICcuL3V0aWxzL3NlbGVjdC5qcyc7XG5cbi8vIG1vZGFsc1xuaW1wb3J0ICcuL3V0aWxzL21vZGFscy5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbGlicyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIGR5bmFtaWMgZG9tXG5pbXBvcnQgJy4vbGlicy9kZC5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmltcG9ydCAnLi9kZXYvdnptc2sxLmpzJztcbmltcG9ydCAnLi9kZXYvbWFya3VzRE0uanMnO1xuaW1wb3J0ICcuL2Rldi91a2lrMC5qcyc7XG5pbXBvcnQgJy4vZGV2L2tpZTZlci5qcyc7XG4iXSwibmFtZXMiOlsiRHluYW1pY0FkYXB0IiwidHlwZSIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsItC+YmplY3RzIiwiZGFDbGFzc25hbWUiLCJub2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJub2RlIiwiZGF0YSIsImRhdGFzZXQiLCJkYSIsInRyaW0iLCJkYXRhQXJyYXkiLCJzcGxpdCIsItC+YmplY3QiLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImRlc3RpbmF0aW9uIiwicXVlcnlTZWxlY3RvciIsImJyZWFrcG9pbnQiLCJwbGFjZSIsImluZGV4IiwiaW5kZXhJblBhcmVudCIsInB1c2giLCJhcnJheVNvcnQiLCJtZWRpYVF1ZXJpZXMiLCJBcnJheSIsIm1hcCIsImNhbGwiLCJpdGVtIiwiZmlsdGVyIiwic2VsZiIsImluZGV4T2YiLCJtZWRpYSIsIm1lZGlhU3BsaXQiLCJTdHJpbmciLCJtYXRjaE1lZGlhIiwid2luZG93IiwibWVkaWFCcmVha3BvaW50Iiwi0L5iamVjdHNGaWx0ZXIiLCJhZGRMaXN0ZW5lciIsIm1lZGlhSGFuZGxlciIsIm1hdGNoZXMiLCJtb3ZlVG8iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm1vdmVCYWNrIiwiYWRkIiwiY2hpbGRyZW4iLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJyZW1vdmUiLCJ1bmRlZmluZWQiLCJhcnJheSIsInNsaWNlIiwiYXJyIiwic29ydCIsImEiLCJiIiwibW9kdWxlcyIsImRhdGFNZWRpYVF1ZXJpZXMiLCJfc2xpZGVUb2dnbGUiLCJfc2xpZGVVcCIsIl9zbGlkZURvd24iLCJhY2NvcmRpb24iLCJhY2NvcmRpb25JdGVtcyIsImluaXRBY2NvcmRpb24iLCJhcmd1bWVudHMiLCJmb3JFYWNoIiwiYWNjb3JkaW9uR3JvdXAiLCJpbml0QWNjb3JkaW9uQm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRBY2NvcmRpb25BY3Rpb25zIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVBY2NvcmRpb25Cb2R5IiwidGl0bGVzIiwiZnJvbSIsImNsb3Nlc3QiLCJ0aXRsZSIsInJlbW92ZUF0dHJpYnV0ZSIsIm5leHRFbGVtZW50U2libGluZyIsImhpZGRlbiIsInNldEF0dHJpYnV0ZSIsImUiLCJ0YXJnZXQiLCJncm91cCIsImlzT25lQWN0aXZlSXRlbSIsImhhc0F0dHJpYnV0ZSIsImFjY29yZGlvblNwZWVkIiwicGFyc2VJbnQiLCJ0b2dnbGUiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGl2ZVRpdGxlIiwiYWNjb3JkaW9uQ2xvc2UiLCJhY2NvcmRpb25JdGVtQ2xvc2UiLCJzcGVlZCIsInNwb2xsZXJzQmxvY2siLCJyZWdJdGVtcyIsIm1kUXVlcmllc0FycmF5IiwibWRRdWVyaWVzSXRlbSIsIml0ZW1zQXJyYXkiLCJmb3JtRmllbGRzSW5pdCIsIm9wdGlvbnMiLCJ2aWV3UGFzcyIsImZvcm1GaWVsZHMiLCJmb3JtRmllbGQiLCJwbGFjZWhvbGRlciIsImJvZHkiLCJ0YXJnZXRFbGVtZW50IiwidGFnTmFtZSIsInBhcmVudEVsZW1lbnQiLCJmb3JtVmFsaWRhdGUiLCJyZW1vdmVFcnJvciIsInZhbGlkYXRlSW5wdXQiLCJ2YWx1ZSIsImZpbGVJbnB1dCIsImlucHV0VHlwZSIsImdldEVycm9ycyIsImZvcm0iLCJlcnJvciIsImZvcm1SZXF1aXJlZEl0ZW1zIiwiZm9ybVJlcXVpcmVkSXRlbSIsIm9mZnNldFBhcmVudCIsImRpc2FibGVkIiwicmVxdWlyZWQiLCJyZXBsYWNlIiwiZW1haWxUZXN0IiwiYWRkRXJyb3IiLCJjaGVja2VkIiwidGhzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsIm1heFNpemUiLCJOdW1iZXIiLCJmaWxlIiwiZmlsZXMiLCJ0ZXh0IiwibmFtZSIsImV4dGVuc2lvbiIsImltZyIsInNpemUiLCJyZW1vdmVCdG4iLCJqb2luIiwicG9wIiwic3JjIiwicmVzdWx0IiwiaW5uZXJIVE1MIiwidG9GaXhlZCIsInJlYWRBc0RhdGFVUkwiLCJ2YWxpZGF0ZSIsInBhdHRlcm4iLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImlucHV0RXJyb3IiLCJyZW1vdmVDaGlsZCIsImluc2VydEFkamFjZW50SFRNTCIsImZvcm1DbGVhbiIsInJlc2V0Iiwic2V0VGltZW91dCIsImlucHV0cyIsImVsIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwiZm9ybVN1Ym1pdCIsImZvcm1zIiwiZm9ybVN1Ym1pdEFjdGlvbiIsImFqYXgiLCJmb3JtQWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwiZm9ybU1ldGhvZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJyZXNwb25zZVJlc3VsdCIsImpzb24iLCJmb3JtU2VudCIsImFsZXJ0IiwiZm9ybUVycm9yIiwiZ290b0Jsb2NrIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5TG9jayIsImJvZHlVbmxvY2siLCJNb2RhbCIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwibG9nZ2luZyIsImF0dHJpYnV0ZU9wZW5CdXR0b24iLCJhdHRyaWJ1dGVDbG9zZUJ1dHRvbiIsImZpeEVsZW1lbnRTZWxlY3RvciIsInlvdXR1YmVBdHRyaWJ1dGUiLCJ5b3V0dWJlUGxhY2VBdHRyaWJ1dGUiLCJzZXRBdXRvcGxheVlvdXR1YmUiLCJjbGFzc2VzIiwibW9kYWwiLCJtb2RhbENvbnRlbnQiLCJtb2RhbEFjdGl2ZSIsImJvZHlBY3RpdmUiLCJmb2N1c0NhdGNoIiwiY2xvc2VFc2MiLCJoYXNoU2V0dGluZ3MiLCJsb2NhdGlvbiIsImdvSGFzaCIsIm9uIiwiYmVmb3JlT3BlbiIsImFmdGVyT3BlbiIsImJlZm9yZUNsb3NlIiwiYWZ0ZXJDbG9zZSIsInlvdVR1YmVDb2RlIiwiaXNPcGVuIiwidGFyZ2V0T3BlbiIsInNlbGVjdG9yIiwicHJldmlvdXNPcGVuIiwibGFzdENsb3NlZCIsIl9kYXRhVmFsdWUiLCJoYXNoIiwiX3Jlb3BlbiIsIl9zZWxlY3Rvck9wZW4iLCJsYXN0Rm9jdXNFbCIsIl9mb2N1c0VsIiwiaW5pdG1vZGFscyIsImV2ZW50c21vZGFsIiwiYnV0dG9uT3BlbiIsIm9wZW4iLCJidXR0b25DbG9zZSIsImNsb3NlIiwiYmluZCIsIndoaWNoIiwiY29kZSIsIl9mb2N1c0NhdGNoIiwiX29wZW5Ub0hhc2giLCJzZWxlY3RvclZhbHVlIiwiZG9jdW1lbnRFbGVtZW50IiwicHJldmlvdXNBY3RpdmVFbGVtZW50IiwiYWN0aXZlRWxlbWVudCIsImNvZGVWaWRlbyIsInVybFZpZGVvIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsImF1dG9wbGF5IiwieW91dHViZVBsYWNlIiwiYXBwZW5kQ2hpbGQiLCJfZ2V0SGFzaCIsIl9zZXRIYXNoIiwibSIsImlubmVyV2lkdGgiLCJfZm9jdXNUcmFwIiwiX3JlbW92ZUhhc2giLCJpbmNsdWRlcyIsImNsYXNzSW5IYXNoIiwiYnV0dG9ucyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJocmVmIiwiZm9jdXNhYmxlIiwiZm9jdXNBcnJheSIsImZvY3VzZWRJbmRleCIsInNoaWZ0S2V5IiwiZm9jdXMiLCJjb25maXJtQWdlQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJTZWxlY3QiLCJzZWwiLCJsYWJlbCIsInZhbCIsImNvbnRlbnQiLCJvcHRpb24iLCJzY3JvbGwiLCJpbnAiLCJhc3NldCIsInR4dCIsImhpbnQiLCJhY3RpdmUiLCJmb2N1c2VkIiwib3BlbmVkIiwiZmlsbGVkIiwic2VsZWN0ZWQiLCJsaXN0IiwibXVsdGlwbGUiLCJzZWxlY3RMaXN0Iiwic2VsZWN0IiwiaW5pdFNlbEl0ZW0iLCJzZXRBY3Rpb25zIiwicmVsYXRpdmVTZWwiLCJpbnNlcnRCZWZvcmUiLCJzZWxJZCIsImdldFBsYWNlaG9sZGVyIiwib3B0UGxhY2Vob2xkZXIiLCJzaG93Iiwic2VsVGl0bGUiLCJnZXRTZWxlY3QiLCJ0d2luU2VsIiwiYnVpbGQiLCJpbml0U2VsZWN0aW9ucyIsInNldFZhbHVlIiwic2V0T3B0aW9ucyIsInNlbEFkZG9uQ2xhc3MiLCJkaXNhYmxlU2VsZWN0Iiwic2V0U2VhcmNoQWN0aW9ucyIsInNldEFjdGlvbiIsInNlbEhpbnQiLCJzZWxCb2R5IiwiZ2V0VmFsdWUiLCJyZWxhdGl2ZVNlbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwiZ2V0Q2xhc3MiLCJzZWxlY3RJZCIsInNlbExpc3QiLCJzZWxPcHRpb24iLCJvcHRWYWwiLCJzZXRPcHRpb25BY3Rpb24iLCJhZGRFcnIiLCJyZW1vdmVFcnIiLCJjbG9zZUdyb3VwIiwic2VsT3B0aW9ucyIsInNlbGVjdE9uZUdyb3VwIiwic2VsR3JvdXAiLCJzZWxlY3Rpb25zIiwic2VsZWN0aW9uIiwiY2xvc2VJdGVtIiwicmVsYXRpdmVTZWxlY3Rpb25zIiwiZ2V0RGF0YSIsImVsZW1lbnRzIiwicmVsYXRpdmVTZWxlY3Rpb24iLCJ0d2luU2VsZWN0aW9ucyIsInR3aW5TZWxlY3Rpb24iLCJvcHQiLCJ0ZXh0Q29udGVudCIsInNldFNlbGVjdGlvbnMiLCJzZWxJbnB1dCIsInRvVXBwZXJDYXNlIiwic2V0U3VidGl0bGUiLCJzZWxFcnJvciIsImNzc0NsYXNzIiwiYXR0ciIsImF0dHJDbGFzcyIsInRpdGxlVmFsIiwiaHRtbCIsInNlbExhYmVsIiwidmFsdWVzIiwiZ2V0Q29udGVudCIsImN1c3RvbUNsYXNzIiwib3B0Q2xhc3MiLCJzZWxTY3JvbGwiLCJzZWxTY3JvbGxIZWlnaHQiLCJzZWxPcHRpb25zSFRNTCIsImdldE9wdGlvbiIsInNob3dTZWxlY3Rpb24iLCJvcHRpb25DbGFzcyIsIm9wdGlvbkxpbmsiLCJvcHRpb25MaW5rVGFyZ2V0Iiwib3B0aW9uSFRNTCIsIm9wdGlvbkRhdGEiLCJvcHRBc3NldCIsIm9wdGlvbkRhdGFIVE1MIiwib3B0aW9uQ29udGVudEhUTUwiLCJmaW5kIiwic3VidGl0bGUiLCJzZWxlY3RlZEluZGV4IiwidGVtcEJ1dHRvbiIsImFwcGVuZCIsImNsaWNrIiwic2V0SGFzaCIsImdldEhhc2giLCJib2R5TG9ja1RvZ2dsZSIsImRlbGF5IiwiZGF0YVNldFZhbHVlIiwiYnJlYWtwb2ludHNBcnJheSIsInBhcmFtcyIsInBhcmFtc0FycmF5IiwibWRRdWVyaWVzIiwidW5pcXVlQXJyYXkiLCJtZWRpYVR5cGUiLCJkdXJhdGlvbiIsInNob3dtb3JlIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1Ub1B4IiwicmVtVmFsdWUiLCJodG1sRm9udFNpemUiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImZvbnRTaXplIiwicHhWYWx1ZSIsIk1hdGgiLCJyb3VuZCIsInJlbW92ZUNsYXNzZXMiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9