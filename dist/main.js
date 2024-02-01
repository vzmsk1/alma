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
}`, "",{"version":3,"sources":["webpack://./src/scss/set.scss","webpack://./src/scss/style.scss","webpack://./src/ui/styles/_typo.scss","webpack://./src/ui/styles/_button.scss","webpack://./src/ui/styles/_link.scss","webpack://./src/ui/styles/_arrow.scss","webpack://./src/ui/styles/_badge.scss","webpack://./src/ui/styles/_breadcrumbs.scss","webpack://./src/ui/styles/_input.scss","webpack://./src/ui/styles/_select.scss","webpack://./src/ui/styles/_accordion.scss","<no source>"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\nhtml {\n    font-family: 'Roboto Flex'; // шрифт по умолчанию по сайту\n    font-size: 0.5208335vw; // на разрешении 1920 0.520835vw === 10px\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    height: 100%;\n    padding: 0;\n}\n\nbody {\n    font-style: normal;\n    font-weight: normal;\n    -webkit-animation: bugfix infinite 1s;\n    line-height: 1.2;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    font-size: 1.8rem;\n    color: $fontColor; // цвет по умолчанию текста по сайту\n    background-color: $bgColor;\n}\n\ninput,\ntextarea {\n    -webkit-animation: bugfix infinite 1s;\n    line-height: inherit;\n    margin: 0;\n    padding: 0;\n    background-color: transparent;\n    border: none;\n    color: inherit;\n}\na {\n    color: unset;\n}\na,\na:hover {\n    text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n    outline: none;\n    cursor: pointer;\n    font: inherit;\n    &:focus {\n        outline: none;\n    }\n    &:active {\n        outline: none;\n    }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font: inherit;\n    margin: 0;\n    padding: 0;\n}\np {\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n\nbutton {\n    border: none;\n    color: inherit;\n    font: inherit;\n    text-align: inherit;\n    padding: 0;\n    background-color: transparent;\n}\nul {\n    padding: 0;\n    margin: 0;\n}\n\nul li {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.container {\n    width: 156rem;\n    margin: 0 auto;\n}\n\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type='number'] {\n    -moz-appearance: textfield;\n}\n\nsvg,\nimg {\n    width: 100%;\n    height: auto;\n    object-fit: contain;\n}\n\n@media (min-width: 1920px) {\n    html {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 48em) {\n    html {\n        font-size: 5px;\n        font-size: 1.5625vw;\n        font-size: calc((100 / 375) * 5vw); // где 375 это ширина моб версии макета\n        -webkit-text-size-adjust: none;\n    }\n\n    body {\n        font-size: 3rem;\n        -webkit-text-size-adjust: none;\n    }\n\n    .container {\n        padding: 0 3.2rem; // в моб версии отступ от края задаем для всех контейнеров, а там где не нужно можем точечно убрать\n        width: 100%;\n    }\n}\n","// --------------------------------- mixins ---------------------------------\n\n@import './mixins';\n\n// -------------------------------- variables -------------------------------\n\n// colors\n$white: #ffffff;\n$black: #000000;\n$fontColor: #2e2e2e;\n$bgColor: #eff1f3;\n$blue: #6981d7;\n$lightBlue: #63b3df;\n$red: #d7697d;\n$gray: #dee2e7;\n$textGray: #898e9f;\n$lightGray: #e9ecf5;\n\n// ---------------------------------- fonts ---------------------------------\n\n@import url(https://fonts.googleapis.com/css?family=Montserrat:300,regular,700&display=swap);\n@import url(https://fonts.googleapis.com/css?family=Roboto+Flex:regular,500,600,800&display=swap);\n@import url(https://fonts.googleapis.com/css?family=Nunito:regular,500,600,700&display=swap);\n\n// local fonts\n// @import './fonts';\n\n// ------------------------------- base styles ------------------------------\n\n// base scss file\n@import './set';\n\n// html\nhtml.lock,\nhtml.lock body {\n    overflow: hidden;\n    touch-action: none;\n}\nhtml,\nbody {\n    overflow-x: hidden;\n}\n\n// main\nmain {\n    position: relative;\n}\n\n.wrapper {\n    margin: 0 auto;\n    max-width: 1920px;\n}\n\n// --------------------------------------------------------------------------\n\n// header / footer\n@import './sections/header';\n@import './sections/footer';\n\n// ui\n@import '../ui/styles/ui.scss';\n\n// --------------------------------------------------------------------------\n\n@import './dev/vzmsk1.scss';\n@import './dev/markusDM.scss';\n@import './dev/ukik0.scss';\n@import './dev/kie6er.scss';\n",".h {\n    font-family: 'Nunito';\n    font-weight: 500;\n    line-height: 120%;\n\n    &_h1 {\n        font-size: 6rem;\n    }\n\n    &_h2 {\n        font-size: 3.4rem;\n        @media (max-width: 48em) {\n            font-size: 4.4rem;\n        }\n    }\n\n    &_h3 {\n        font-size: 2.4rem;\n\n        @media (max-width: 48em) {\n            font-size: 3.6rem;\n        }\n    }\n}\n\n.txt16 {\n    line-height: 120%;\n\n    &_caps {\n        text-transform: uppercase;\n    }\n\n    @media (min-width: 48em) {\n        font-size: 1.6rem;\n    }\n}\n",".btn {\n    padding: 1.6rem 3.2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    column-gap: 1.6rem;\n    border-radius: 10rem;\n    color: $white;\n    background-color: rgba(53, 106, 172, 1);\n\n    &_white {\n        color: rgba(105, 129, 215, 1);\n        background-color: $white;\n        svg path {\n            stroke: rgba(105, 129, 215, 1);\n        }\n    }\n\n    &_primary {\n        svg {\n            width: 2.6rem;\n        }\n\n        .btn__icon {\n            flex: 0 0 2.6rem;\n            width: 2.6rem;\n            height: 2.1rem;\n        }\n\n        @media (max-width: 48em) {\n            padding: 3.2rem 5rem;\n\n            svg {\n                width: 4rem;\n            }\n\n            .btn__icon {\n                flex: 0 0 4rem;\n                width: 4rem;\n                height: 3.5rem;\n            }\n        }\n    }\n\n    &_ghost {\n        padding: 0.4rem 0.4rem 0.4rem 1.4rem;\n        justify-content: space-between;\n        color: $red;\n        background-color: transparent;\n        border: 1px solid transparent;\n        transition: border 0.3s ease;\n\n        .arr {\n            background-color: $blue;\n        }\n\n        .btn__txt {\n            font-weight: 600;\n        }\n\n        @media (max-width: 48em) {\n            padding: 0;\n            border: none;\n        }\n    }\n\n    @media (any-hover: hover) and (min-width: 48em) {\n        &_primary {\n            &:hover {\n                svg path {\n                    &:first-child {\n                        animation: arrAnim1 0.8s linear 0s infinite;\n                    }\n                    &:nth-child(2) {\n                        animation: arrAnim2 0.8s linear 0s infinite;\n                    }\n                    &:last-child {\n                        animation: arrAnim3 0.8s linear 0s infinite;\n                    }\n                }\n            }\n        }\n        &_ghost {\n            &:hover {\n                border: 1px solid $blue;\n                .arr {\n                    background-color: $blue;\n                }\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        column-gap: 3.2rem;\n        border-radius: 20rem;\n    }\n\n    // .btn__txt\n\n    &__txt {\n        font-weight: 500;\n        font-size: 2rem;\n        line-height: 1;\n\n        @media (max-width: 48em) {\n            font-size: 3rem;\n        }\n    }\n\n    // .btn__icon\n\n    &__icon {\n    }\n}\n\n@keyframes arrAnim1 {\n    33% {\n        stroke-opacity: 1;\n    }\n    66% {\n        stroke-opacity: 0.5;\n    }\n    100% {\n        stroke-opacity: 0.2;\n    }\n}\n@keyframes arrAnim2 {\n    33% {\n        stroke-opacity: 0.2;\n    }\n    66% {\n        stroke-opacity: 1;\n    }\n    100% {\n        stroke-opacity: 0.5;\n    }\n}\n@keyframes arrAnim3 {\n    33% {\n        stroke-opacity: 0.5;\n    }\n    66% {\n        stroke-opacity: 0.2;\n    }\n    100% {\n        stroke-opacity: 1;\n    }\n}\n",".link {\n    position: relative;\n    display: inline-flex;\n\n    &::after {\n        content: '';\n        position: absolute;\n        top: calc(100% + 0.2rem);\n        left: 0;\n        width: 100%;\n        height: 0.2rem;\n        background-color: $blue;\n        transform-origin: left;\n        transition: transform 0.3s ease;\n    }\n\n    @media (any-hover: hover) and (min-width: 48em) {\n        &:hover {\n            &::after {\n                transform: scalex(0);\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        border-bottom: 0.4rem solid $blue;\n        &::after {\n            content: none;\n        }\n    }\n}\n",".arr {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 4rem;\n    width: 4rem;\n    height: 4rem;\n    border-radius: 50%;\n    background-color: $gray;\n    transition: background-color 0.3s ease;\n\n    &_vertical {\n        svg {\n            transform: rotate(90deg);\n        }\n    }\n\n    svg {\n        width: 1rem;\n        transition: transform 0.3s ease;\n    }\n\n    @media (any-hover: hover) {\n        &:hover {\n            background-color: rgba(53, 106, 172, 1);\n        }\n    }\n\n    @media (max-width: 48em) {\n        flex: 0 0 5rem;\n        width: 5rem;\n        height: 5rem;\n\n        svg {\n            width: 1.5rem;\n        }\n    }\n}\n",".badge {\n    padding: 1.6rem 3.2rem;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10rem;\n    background-color: $white;\n    transition: background-color 0.3s ease, color 0.3s ease;\n\n    &_blue {\n        background-color: $blue;\n        color: $white;\n    }\n\n    &_gray {\n        color: $white;\n        background-color: $textGray;\n    }\n\n    @media (any-hover: hover) {\n        &_has-hover {\n            &:hover {\n                background-color: rgba(96, 133, 180, 1);\n                color: $white;\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        padding: 2.4rem 4.8rem;\n        border-radius: 20rem;\n    }\n\n    // .badge__txt\n\n    &__txt {\n        font-weight: 600;\n    }\n}\n",".breadcrumbs {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    column-gap: 1.4rem;\n\n    a {\n        position: relative;\n        color: $textGray;\n\n        &::after {\n            content: '/';\n            position: absolute;\n            top: 0;\n            right: -0.4rem;\n            transform: translateX(100%);\n        }\n    }\n\n    @media (max-width: 48em) {\n        column-gap: 2.6rem;\n\n        a {\n            &::after {\n                right: -0.8rem;\n            }\n        }\n    }\n\n    // .breadcrumbs__txt\n\n    &__txt {\n    }\n}\n","input[type='text'],\ninput[type='email'],\ninput[type='tel'],\ntextarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\ntextarea:focus,\ninput:focus {\n    outline: none;\n}\n\n.input {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    row-gap: 1.2rem;\n    &._form-error {\n        .input__label {\n            &::after {\n                content: attr(data-error);\n                white-space: nowrap;\n            }\n        }\n    }\n\n    @media (max-width: 48em) {\n        row-gap: 1.6rem;\n    }\n\n    // .input__field\n\n    &__field {\n        padding: 1.6rem 2rem;\n        display: block;\n        width: 100%;\n        background-color: $white;\n        line-height: 1;\n        border: 1px solid transparent;\n        border-radius: 1.6rem;\n        transition: color 0.3s ease, border 0.3s ease;\n        &::placeholder {\n            color: $textGray;\n            transition: color 0.3s ease;\n        }\n        &._form-error {\n            border: 1px solid $red;\n            color: $red;\n        }\n\n        @media (max-width: 48em) {\n            padding: 2.4rem 3.6rem;\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .input__label\n\n    &__label {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        column-gap: 3rem;\n        white-space: nowrap;\n        color: $lightGray;\n    }\n\n    &._form-focus {\n    }\n    &._form-error {\n        .input__field::placeholder {\n            color: $red;\n        }\n    }\n}\n",".dropdown {\n    display: flex;\n    flex-direction: column;\n    row-gap: 1.2rem;\n\n    @media (max-width: 48em) {\n        row-gap: 1.6rem;\n    }\n\n    // .dropdown__label\n\n    &__label {\n        color: $lightGray;\n    }\n}\n\n.select {\n    position: relative;\n\n    // .select__body\n\n    &__body {\n        position: relative;\n    }\n\n    // .select__title\n\n    &__title {\n        position: relative;\n        z-index: 3;\n        width: 100%;\n        border-radius: 1.6rem;\n        background-color: $white;\n        cursor: pointer;\n\n        @media (max-width: 48em) {\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .select__value\n\n    &__value {\n        padding: 1.6rem 2rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 2rem;\n        height: 5.6rem;\n        width: 100%;\n\n        > * {\n            flex: 1 1 auto;\n        }\n\n        &::after {\n            content: '';\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            flex: 0 0 2rem;\n            width: 2rem;\n            height: 2rem;\n            background-image: url(./assets/images/icons/sel-arr.svg);\n            background-size: contain;\n            background-position: center;\n            background-repeat: no-repeat;\n            transition: transform 0.3s ease;\n        }\n        &._select-label {\n            &::before {\n                content: attr(data-sel-label);\n                transition: color 0.3s ease;\n                ._select-filled & {\n                    display: none;\n                }\n            }\n        }\n        &._select-label::before,\n        .select__content {\n            max-width: 31.4rem;\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n\n        @media (max-width: 48em) {\n            padding: 2.4rem 3.2rem;\n            gap: 4rem;\n            height: 8.8rem;\n            &::after {\n                flex: 0 0 3.2rem;\n                width: 3.2rem;\n                height: 3.2rem;\n            }\n        }\n    }\n\n    // .select__content\n\n    &__content {\n        // hide / show selected value\n        // &:not(._select-filled &) {\n        //     display: none;\n        // }\n    }\n\n    // .select__text\n\n    &__text {\n        flex: 1 1 auto;\n    }\n\n    // .select__input\n\n    &__input {\n        width: 100%;\n        height: 100%;\n        background-color: transparent;\n    }\n\n    // .select__options\n\n    &__options {\n        position: absolute;\n        z-index: 2;\n        top: calc(100% + 0.8rem);\n        left: 0;\n        padding: 2rem;\n        min-width: 100%;\n        border-radius: 1.6rem;\n        background-color: $white;\n        box-shadow: 0 0 2rem rgba(52, 52, 52, 0.15);\n\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            border-radius: 3.2rem;\n        }\n    }\n\n    // .select__scroll\n\n    &__scroll {\n        overflow-y: auto;\n        overflow-x: hidden;\n\n        // maximum height\n        max-height: 19rem;\n\n        // scrollbar styles\n        &.simplebar-scrollable-y {\n            .simplebar-track.simplebar-vertical {\n            }\n            .simplebar-scrollbar {\n            }\n        }\n    }\n\n    // .select__option\n    &__option {\n        padding: 1.5rem 0;\n        width: 100%;\n        transition: color 0.3s ease;\n        &:first-child {\n            padding-top: 0;\n        }\n        &:last-child {\n            padding-bottom: 0;\n        }\n        &:not(:last-child) {\n            border-bottom: 1px solid $gray;\n        }\n\n        &._select-selected {\n            font-weight: 500;\n        }\n        @media (any-hover: hover) {\n            &:hover {\n                &:not(&.select__subtitle) {\n                    cursor: pointer;\n                }\n            }\n        }\n        @media (max-width: 48em) {\n            padding: 2.4rem 0;\n        }\n    }\n\n    // .select__group\n\n    &__group {\n        display: inline-flex;\n        align-items: flex-start;\n        flex-direction: column-reverse;\n    }\n\n    // .select__asset\n\n    &__asset {\n    }\n\n    // .select__text\n\n    &__text {\n    }\n\n    // .select__hint\n\n    &__hint {\n    }\n\n    // .select__subtitle\n\n    &__subtitle {\n        cursor: text;\n    }\n\n    // select state\n    &._select-opened {\n        z-index: 5;\n        .select__value::after {\n            transform: rotate(-180deg);\n        }\n    }\n    &._select-focused {\n    }\n    &._select-error {\n        &:not(&._select-filled, &._select-opened) {\n            .select__value._select-label {\n                &::before {\n                    color: $red;\n                }\n            }\n        }\n    }\n    &._select-filled {\n        &:not(&._select-opened) {\n            &:not(&._select-show-val) {\n            }\n        }\n    }\n    &._select-show-val {\n        &._select-focused,\n        &._select-filled,\n        &._select-error,\n        &._select-disabled {\n        }\n    }\n    &._select-disabled {\n    }\n    &._select-multiple {\n    }\n    &._select-active {\n    }\n    &._select-checkbox {\n    }\n}\n\n// list\n._select-list {\n    cursor: pointer;\n}\n",".accordion {\n    // .accordion__item\n\n    &__item {\n        border-radius: 2.4rem;\n        background-color: $white;\n        @media (max-width: 48em) {\n            border-radius: 5rem;\n        }\n    }\n\n    // .accordion__title\n\n    &__title {\n        padding: 2.4rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        width: 100%;\n        &._accordion-active {\n            .arr svg {\n                transform: rotate(-90deg);\n            }\n            .arr {\n                background-color: $blue;\n            }\n        }\n        .arr {\n            flex: 0 0 5rem;\n            width: 5rem;\n            height: 5rem;\n            @media (any-hover: hover) {\n                &:hover {\n                    background-color: $blue;\n                }\n            }\n        }\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            .arr {\n                flex: 0 0 9rem;\n                width: 9rem;\n                height: 9rem;\n            }\n        }\n    }\n\n    // .accordion__title-txt\n\n    &__title-txt {\n    }\n\n    // .accordion__body\n\n    &__body {\n        padding: 2.4rem;\n        padding-top: 0;\n        @media (max-width: 48em) {\n            padding: 3.2rem;\n            padding-top: 0;\n        }\n    }\n\n    // .accordion__text\n\n    &__text {\n        color: rgba(132, 132, 132, 1);\n        &:not(:last-child) {\n            margin-bottom: 1rem;\n        }\n    }\n}\n",null],"sourceRoot":""}]);
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
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev/vzmsk1.js */ "./src/js/dev/vzmsk1.js");
/* harmony import */ var _dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dev_vzmsk1_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dev/markusDM.js */ "./src/js/dev/markusDM.js");
/* harmony import */ var _dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dev_markusDM_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dev/ukik0.js */ "./src/js/dev/ukik0.js");
/* harmony import */ var _dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_dev_ukik0_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev/kie6er.js */ "./src/js/dev/kie6er.js");
/* harmony import */ var _dev_kie6er_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dev_kie6er_js__WEBPACK_IMPORTED_MODULE_7__);


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
// import './utils/modals.js';

// ---------------------------------- libs ----------------------------------

// dynamic dom
// import './libs/dd.js';

// --------------------------------------------------------------------------





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd2ZBQXdmLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sUUFBUSxVQUFVLFVBQVUsVUFBVSxLQUFLLFFBQVEsVUFBVSxLQUFLLFFBQVEsVUFBVSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLFNBQVMsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLFFBQVEsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sT0FBTyxNQUFNLFVBQVUsS0FBSyxNQUFNLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFlBQVksVUFBVSxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLE9BQU8sTUFBTSxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sT0FBTyxZQUFZLE9BQU8sb0RBQW9ELDZCQUE2QixHQUFHLFFBQVEsa0NBQWtDLDREQUE0RCxrRUFBa0UsMEJBQTBCLDRDQUE0Qyx1QkFBdUIsZ0JBQWdCLG1CQUFtQixpQkFBaUIsR0FBRyxVQUFVLHlCQUF5QiwwQkFBMEIsNENBQTRDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG1CQUFtQix3QkFBd0IseUJBQXlCLHFFQUFxRSxHQUFHLHNCQUFzQiw0Q0FBNEMsMkJBQTJCLGdCQUFnQixpQkFBaUIsb0NBQW9DLG1CQUFtQixxQkFBcUIsR0FBRyxLQUFLLG1CQUFtQixHQUFHLGVBQWUsNEJBQTRCLEdBQUcsbUNBQW1DLG9CQUFvQixzQkFBc0Isb0JBQW9CLGVBQWUsd0JBQXdCLE9BQU8sZ0JBQWdCLHdCQUF3QixPQUFPLEdBQUcsaUNBQWlDLG9CQUFvQixnQkFBZ0IsaUJBQWlCLEdBQUcsS0FBSyxvQkFBb0IsdUJBQXVCLEdBQUcsU0FBUyxrQkFBa0IsbUJBQW1CLHFCQUFxQixHQUFHLFlBQVksbUJBQW1CLHFCQUFxQixvQkFBb0IsMEJBQTBCLGlCQUFpQixvQ0FBb0MsR0FBRyxNQUFNLGlCQUFpQixnQkFBZ0IsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsZ0JBQWdCLG9CQUFvQixxQkFBcUIsR0FBRyx1R0FBdUcsK0JBQStCLGdCQUFnQixHQUFHLDBCQUEwQixpQ0FBaUMsR0FBRyxlQUFlLGtCQUFrQixtQkFBbUIsMEJBQTBCLEdBQUcsZ0NBQWdDLFlBQVksMEJBQTBCLE9BQU8sR0FBRyw4QkFBOEIsWUFBWSx5QkFBeUIsOEJBQThCLDhDQUE4QyxnRkFBZ0YsT0FBTyxjQUFjLDBCQUEwQix5Q0FBeUMsT0FBTyxvQkFBb0IsNkJBQTZCLHlIQUF5SCxPQUFPLEdBQUcseUdBQXlHLGdIQUFnSCxrQkFBa0Isc0JBQXNCLG9CQUFvQixpQkFBaUIsc0JBQXNCLGdCQUFnQixpQkFBaUIscUJBQXFCLHNCQUFzQixrTEFBa0wsb0dBQW9HLCtGQUErRix5Q0FBeUMsd0hBQXdILHlDQUF5Qyx1QkFBdUIseUJBQXlCLEdBQUcsZUFBZSx5QkFBeUIsR0FBRyxtQkFBbUIseUJBQXlCLEdBQUcsY0FBYyxxQkFBcUIsd0JBQXdCLEdBQUcscUlBQXFJLDhCQUE4QiwwQ0FBMEMsaUhBQWlILGdDQUFnQyw2QkFBNkIsOEJBQThCLFNBQVMsNEJBQTRCLHVCQUF1Qix3QkFBd0IsY0FBYywwQkFBMEIsT0FBTyxjQUFjLDRCQUE0QixvQ0FBb0MsZ0NBQWdDLFdBQVcsT0FBTyxjQUFjLDRCQUE0QixzQ0FBc0MsZ0NBQWdDLFdBQVcsT0FBTyxHQUFHLFlBQVksd0JBQXdCLGdCQUFnQixvQ0FBb0MsT0FBTyxrQ0FBa0MsNEJBQTRCLE9BQU8sR0FBRyxXQUFXLDZCQUE2QiwyQkFBMkIsMEJBQTBCLDhCQUE4Qix5QkFBeUIsMkJBQTJCLG9CQUFvQiw4Q0FBOEMsaUJBQWlCLHdDQUF3QyxtQ0FBbUMsb0JBQW9CLDZDQUE2QyxXQUFXLE9BQU8sbUJBQW1CLGVBQWUsNEJBQTRCLFdBQVcsd0JBQXdCLCtCQUErQiw0QkFBNEIsNkJBQTZCLFdBQVcsc0NBQXNDLG1DQUFtQyxxQkFBcUIsOEJBQThCLGVBQWUsNEJBQTRCLGlDQUFpQyw4QkFBOEIsaUNBQWlDLGVBQWUsV0FBVyxPQUFPLGlCQUFpQiwrQ0FBK0MseUNBQXlDLHNCQUFzQix3Q0FBd0Msd0NBQXdDLHVDQUF1QyxrQkFBa0Isc0NBQXNDLFdBQVcsdUJBQXVCLCtCQUErQixXQUFXLHNDQUFzQyx5QkFBeUIsMkJBQTJCLFdBQVcsT0FBTyx5REFBeUQscUJBQXFCLHVCQUF1Qiw0QkFBNEIscUNBQXFDLHNFQUFzRSx1QkFBdUIsc0NBQXNDLHNFQUFzRSx1QkFBdUIsb0NBQW9DLHNFQUFzRSx1QkFBdUIsbUJBQW1CLGVBQWUsV0FBVyxtQkFBbUIsdUJBQXVCLDBDQUEwQyx3QkFBd0IsOENBQThDLG1CQUFtQixlQUFlLFdBQVcsT0FBTyxrQ0FBa0MsNkJBQTZCLCtCQUErQixPQUFPLG9DQUFvQywyQkFBMkIsMEJBQTBCLHlCQUF5QixzQ0FBc0MsOEJBQThCLFdBQVcsT0FBTyxzQ0FBc0MsT0FBTyxHQUFHLHlCQUF5QixXQUFXLDRCQUE0QixPQUFPLFdBQVcsOEJBQThCLE9BQU8sWUFBWSw4QkFBOEIsT0FBTyxHQUFHLHVCQUF1QixXQUFXLDhCQUE4QixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sWUFBWSw4QkFBOEIsT0FBTyxHQUFHLHVCQUF1QixXQUFXLDhCQUE4QixPQUFPLFdBQVcsOEJBQThCLE9BQU8sWUFBWSw0QkFBNEIsT0FBTyxHQUFHLFlBQVkseUJBQXlCLDJCQUEyQixrQkFBa0Isc0JBQXNCLDZCQUE2QixtQ0FBbUMsa0JBQWtCLHNCQUFzQix5QkFBeUIsa0NBQWtDLGlDQUFpQywwQ0FBMEMsT0FBTyx5REFBeUQsbUJBQW1CLHdCQUF3Qix1Q0FBdUMsZUFBZSxXQUFXLE9BQU8sa0NBQWtDLDRDQUE0QyxvQkFBb0IsNEJBQTRCLFdBQVcsT0FBTyxHQUFHLFdBQVcsMkJBQTJCLDBCQUEwQiw4QkFBOEIscUJBQXFCLGtCQUFrQixtQkFBbUIseUJBQXlCLDhCQUE4Qiw2Q0FBNkMsb0JBQW9CLGVBQWUsdUNBQXVDLFdBQVcsT0FBTyxhQUFhLHNCQUFzQiwwQ0FBMEMsT0FBTyxtQ0FBbUMsbUJBQW1CLHNEQUFzRCxXQUFXLE9BQU8sa0NBQWtDLHlCQUF5QixzQkFBc0IsdUJBQXVCLGlCQUFpQiw0QkFBNEIsV0FBVyxPQUFPLEdBQUcsYUFBYSw2QkFBNkIsMkJBQTJCLDBCQUEwQiw4QkFBOEIsMkJBQTJCLCtCQUErQiw4REFBOEQsZ0JBQWdCLGtDQUFrQyx3QkFBd0IsT0FBTyxnQkFBZ0Isd0JBQXdCLHNDQUFzQyxPQUFPLG1DQUFtQyx1QkFBdUIsdUJBQXVCLDBEQUEwRCxnQ0FBZ0MsZUFBZSxXQUFXLE9BQU8sa0NBQWtDLGlDQUFpQywrQkFBK0IsT0FBTyxzQ0FBc0MsMkJBQTJCLE9BQU8sR0FBRyxtQkFBbUIsb0JBQW9CLDBCQUEwQixzQkFBc0IseUJBQXlCLFdBQVcsNkJBQTZCLDJCQUEyQixzQkFBc0IsMkJBQTJCLGlDQUFpQyxxQkFBcUIsNkJBQTZCLDBDQUEwQyxXQUFXLE9BQU8sa0NBQWtDLDZCQUE2QixlQUFlLHdCQUF3QixpQ0FBaUMsZUFBZSxXQUFXLE9BQU8sNENBQTRDLE9BQU8sR0FBRyw4RUFBOEUsK0JBQStCLDRCQUE0Qix1QkFBdUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcsWUFBWSx5QkFBeUIsb0JBQW9CLDZCQUE2QixzQkFBc0IscUJBQXFCLHlCQUF5Qix3QkFBd0IsNENBQTRDLHNDQUFzQyxlQUFlLFdBQVcsT0FBTyxrQ0FBa0MsMEJBQTBCLE9BQU8sMENBQTBDLCtCQUErQix5QkFBeUIsc0JBQXNCLG1DQUFtQyx5QkFBeUIsd0NBQXdDLGdDQUFnQyx3REFBd0QsMEJBQTBCLCtCQUErQiwwQ0FBMEMsV0FBVyx5QkFBeUIscUNBQXFDLDBCQUEwQixXQUFXLHNDQUFzQyxxQ0FBcUMsb0NBQW9DLFdBQVcsT0FBTywwQ0FBMEMsd0JBQXdCLDhCQUE4Qix5Q0FBeUMsMkJBQTJCLDhCQUE4Qiw0QkFBNEIsT0FBTyx1QkFBdUIsT0FBTyxxQkFBcUIsc0NBQXNDLDBCQUEwQixXQUFXLE9BQU8sR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixzQkFBc0Isa0NBQWtDLDBCQUEwQixPQUFPLDZDQUE2Qyw0QkFBNEIsT0FBTyxHQUFHLGFBQWEseUJBQXlCLHlDQUF5Qyw2QkFBNkIsT0FBTywyQ0FBMkMsNkJBQTZCLHFCQUFxQixzQkFBc0IsZ0NBQWdDLG1DQUFtQywwQkFBMEIsc0NBQXNDLG9DQUFvQyxXQUFXLE9BQU8sMkNBQTJDLCtCQUErQix3QkFBd0IseUNBQXlDLDhCQUE4QixvQkFBb0IseUJBQXlCLHNCQUFzQixpQkFBaUIsNkJBQTZCLFdBQVcsc0JBQXNCLDBCQUEwQixtQ0FBbUMsa0NBQWtDLHNDQUFzQyw2QkFBNkIsMEJBQTBCLDJCQUEyQix1RUFBdUUsdUNBQXVDLDBDQUEwQywyQ0FBMkMsOENBQThDLFdBQVcsMkJBQTJCLHlCQUF5QixnREFBZ0QsOENBQThDLHFDQUFxQyxvQ0FBb0MsbUJBQW1CLGVBQWUsV0FBVyw4REFBOEQsaUNBQWlDLCtCQUErQixrQ0FBa0Msc0NBQXNDLFdBQVcsc0NBQXNDLHFDQUFxQyx3QkFBd0IsNkJBQTZCLHdCQUF3QixtQ0FBbUMsZ0NBQWdDLGlDQUFpQyxlQUFlLFdBQVcsT0FBTywrQ0FBK0MsOEVBQThFLCtCQUErQixjQUFjLE9BQU8seUNBQXlDLHlCQUF5QixPQUFPLDJDQUEyQyxzQkFBc0IsdUJBQXVCLHdDQUF3QyxPQUFPLCtDQUErQyw2QkFBNkIscUJBQXFCLG1DQUFtQyxrQkFBa0Isd0JBQXdCLDBCQUEwQixnQ0FBZ0MsbUNBQW1DLHNEQUFzRCxzQ0FBc0MsOEJBQThCLG9DQUFvQyxXQUFXLE9BQU8sNkNBQTZDLDJCQUEyQiw2QkFBNkIseURBQXlELG1FQUFtRSxtREFBbUQsZUFBZSxvQ0FBb0MsZUFBZSxXQUFXLE9BQU8sMkNBQTJDLDRCQUE0QixzQkFBc0Isc0NBQXNDLHlCQUF5Qiw2QkFBNkIsV0FBVyx3QkFBd0IsZ0NBQWdDLFdBQVcsOEJBQThCLDZDQUE2QyxXQUFXLGdDQUFnQywrQkFBK0IsV0FBVyxxQ0FBcUMsdUJBQXVCLDZDQUE2QyxzQ0FBc0MsbUJBQW1CLGVBQWUsV0FBVyxvQ0FBb0MsZ0NBQWdDLFdBQVcsT0FBTywyQ0FBMkMsK0JBQStCLGtDQUFrQyx5Q0FBeUMsT0FBTywyQ0FBMkMsT0FBTyx5Q0FBeUMsT0FBTyx5Q0FBeUMsT0FBTyxpREFBaUQsdUJBQXVCLE9BQU8sK0NBQStDLHFCQUFxQixpQ0FBaUMseUNBQXlDLFdBQVcsT0FBTyx5QkFBeUIsT0FBTyx1QkFBdUIscURBQXFELDRDQUE0Qyw2QkFBNkIsa0NBQWtDLG1CQUFtQixlQUFlLFdBQVcsT0FBTyx3QkFBd0IsbUNBQW1DLHlDQUF5QyxlQUFlLFdBQVcsT0FBTywwQkFBMEIsK0dBQStHLFdBQVcsT0FBTywwQkFBMEIsT0FBTywwQkFBMEIsT0FBTyx3QkFBd0IsT0FBTywwQkFBMEIsT0FBTyxHQUFHLDRCQUE0QixzQkFBc0IsR0FBRyxpQkFBaUIsMENBQTBDLGdDQUFnQyxtQ0FBbUMsb0NBQW9DLGtDQUFrQyxXQUFXLE9BQU8sOENBQThDLDBCQUEwQix3QkFBd0IseUNBQXlDLDhCQUE4QixzQkFBc0IsK0JBQStCLHdCQUF3Qiw0Q0FBNEMsZUFBZSxvQkFBb0IsMENBQTBDLGVBQWUsV0FBVyxnQkFBZ0IsNkJBQTZCLDBCQUEwQiwyQkFBMkIseUNBQXlDLDJCQUEyQiw4Q0FBOEMsbUJBQW1CLGVBQWUsV0FBVyxvQ0FBb0MsOEJBQThCLG9CQUFvQixpQ0FBaUMsOEJBQThCLCtCQUErQixlQUFlLFdBQVcsT0FBTyxzREFBc0QsT0FBTyw0Q0FBNEMsMEJBQTBCLHlCQUF5QixvQ0FBb0MsOEJBQThCLDZCQUE2QixXQUFXLE9BQU8sNENBQTRDLHdDQUF3Qyw4QkFBOEIsa0NBQWtDLFdBQVcsT0FBTyxHQUFHLDBCQUEwQjtBQUM3NXdCO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pzQmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTZPO0FBQzdPO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOE1BQU87Ozs7QUFJdUw7QUFDL00sT0FBTyxpRUFBZSw4TUFBTyxJQUFJLHFOQUFjLEdBQUcscU5BQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCOztBQUU1Qjs7QUFFMEM7O0FBRTFDO0FBQ0F2TCwyREFBb0IsQ0FBQztFQUFFcEUsUUFBUSxFQUFFO0FBQU0sQ0FBQyxDQUFDOztBQUV6QztBQUNBb0UsdURBQWdCLENBQUMsQ0FBQzs7QUFFbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUM4Qjs7QUFFOUI7QUFDMkI7O0FBRTNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFeUI7QUFDRTtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL3V0aWxzL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/NmMyZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZGF0YU1lZGlhUXVlcmllcyxcbiAgX3NsaWRlVG9nZ2xlLFxuICBfc2xpZGVVcCxcbiAgX3NsaWRlRG93bixcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBjb25zdCBhY2NvcmRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuXG4gIGlmIChhY2NvcmRpb25JdGVtcy5sZW5ndGgpIHtcbiAgICBjb25zdCBpbml0QWNjb3JkaW9uID0gKGFjY29yZGlvbkl0ZW1zLCBtYXRjaE1lZGlhID0gZmFsc2UpID0+IHtcbiAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goYWNjb3JkaW9uR3JvdXAgPT4ge1xuICAgICAgICBhY2NvcmRpb25Hcm91cCA9IG1hdGNoTWVkaWEgPyBhY2NvcmRpb25Hcm91cC5pdGVtIDogYWNjb3JkaW9uR3JvdXA7XG4gICAgICAgIGlmIChtYXRjaE1lZGlhLm1hdGNoZXMgfHwgIW1hdGNoTWVkaWEpIHtcbiAgICAgICAgICBhY2NvcmRpb25Hcm91cC5jbGFzc0xpc3QuYWRkKCdfYWNjb3JkaW9uLWluaXQnKTtcbiAgICAgICAgICBpbml0QWNjb3JkaW9uQm9keShhY2NvcmRpb25Hcm91cCk7XG4gICAgICAgICAgYWNjb3JkaW9uR3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXRBY2NvcmRpb25BY3Rpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhY2NvcmRpb25Hcm91cC5jbGFzc0xpc3QucmVtb3ZlKCdfYWNjb3JkaW9uLWluaXQnKTtcbiAgICAgICAgICBpbml0QWNjb3JkaW9uQm9keShhY2NvcmRpb25Hcm91cCwgZmFsc2UpO1xuICAgICAgICAgIGFjY29yZGlvbkdyb3VwLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0QWNjb3JkaW9uQWN0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgaW5pdEFjY29yZGlvbkJvZHkgPSAoYWNjb3JkaW9uR3JvdXAsIGhpZGVBY2NvcmRpb25Cb2R5ID0gdHJ1ZSkgPT4ge1xuICAgICAgbGV0IHRpdGxlcyA9IGFjY29yZGlvbkdyb3VwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjY29yZGlvbi1pdGVtXScpO1xuICAgICAgaWYgKHRpdGxlcy5sZW5ndGgpIHtcbiAgICAgICAgdGl0bGVzID0gQXJyYXkuZnJvbSh0aXRsZXMpLmZpbHRlcihcbiAgICAgICAgICBpdGVtID0+IGl0ZW0uY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uXScpID09PSBhY2NvcmRpb25Hcm91cFxuICAgICAgICApO1xuICAgICAgICB0aXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XG4gICAgICAgICAgaWYgKGhpZGVBY2NvcmRpb25Cb2R5KSB7XG4gICAgICAgICAgICB0aXRsZS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICBpZiAoIXRpdGxlLmNsYXNzTGlzdC5jb250YWlucygnX2FjY29yZGlvbi1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICB0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmcuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgdGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBzZXRBY2NvcmRpb25BY3Rpb25zID0gZSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJykpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uLWl0ZW1dJyk7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGl0bGUuY2xvc2VzdCgnW2RhdGEtYWNjb3JkaW9uXScpO1xuICAgICAgICBjb25zdCBpc09uZUFjdGl2ZUl0ZW0gPSBncm91cC5oYXNBdHRyaWJ1dGUoJ2RhdGEtYWNjb3JkaW9uLW9uZS1hY3RpdmUnKTtcbiAgICAgICAgY29uc3QgYWNjb3JkaW9uU3BlZWQgPSBncm91cC5kYXRhc2V0LmFjY29yZGlvblNwZWVkXG4gICAgICAgICAgPyBwYXJzZUludChncm91cC5kYXRhc2V0LmFjY29yZGlvblNwZWVkKVxuICAgICAgICAgIDogNTAwO1xuXG4gICAgICAgIGlmICghZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLl9zbGlkZScpLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzT25lQWN0aXZlSXRlbSAmJlxuICAgICAgICAgICAgIXRpdGxlLmNsYXNzTGlzdC5jb250YWlucygnX2FjY29yZGlvbi1hY3RpdmUnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgaGlkZUFjY29yZGlvbkJvZHkoZ3JvdXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QudG9nZ2xlKCdfYWNjb3JkaW9uLWFjdGl2ZScpO1xuICAgICAgICAgIF9zbGlkZVRvZ2dsZSh0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmcsIGFjY29yZGlvblNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBoaWRlQWNjb3JkaW9uQm9keSA9IGFjY29yZGlvbkdyb3VwID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVRpdGxlID0gYWNjb3JkaW9uR3JvdXAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ1tkYXRhLWFjY29yZGlvbi1pdGVtXS5fYWNjb3JkaW9uLWFjdGl2ZSdcbiAgICAgICk7XG4gICAgICBjb25zdCBhY2NvcmRpb25TcGVlZCA9IGFjY29yZGlvbkdyb3VwLmRhdGFzZXQuYWNjb3JkaW9uU3BlZWRcbiAgICAgICAgPyBwYXJzZUludChhY2NvcmRpb25Hcm91cC5kYXRhc2V0LmFjY29yZGlvblNwZWVkKVxuICAgICAgICA6IDUwMDtcbiAgICAgIGlmIChhY3RpdmVUaXRsZSAmJiAhYWNjb3JkaW9uR3JvdXAucXVlcnlTZWxlY3RvckFsbCgnLl9zbGlkZScpLmxlbmd0aCkge1xuICAgICAgICBhY3RpdmVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdfYWNjb3JkaW9uLWFjdGl2ZScpO1xuICAgICAgICBfc2xpZGVVcChhY3RpdmVUaXRsZS5uZXh0RWxlbWVudFNpYmxpbmcsIGFjY29yZGlvblNwZWVkKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGFjY29yZGlvbkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWNjb3JkaW9uLWNsb3NlXScpO1xuICAgIGlmIChhY2NvcmRpb25DbG9zZS5sZW5ndGgpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWFjY29yZGlvbl0nKSkge1xuICAgICAgICAgIGFjY29yZGlvbkNsb3NlLmZvckVhY2goYWNjb3JkaW9uSXRlbUNsb3NlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYWNjb3JkaW9uSXRlbUNsb3NlLmNsb3Nlc3QoJ1tkYXRhLWFjY29yZGlvbl0nKTtcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gc3BvbGxlcnNCbG9jay5kYXRhc2V0LmFjY29yZGlvblNwZWVkXG4gICAgICAgICAgICAgID8gcGFyc2VJbnQoZ3JvdXAuZGF0YXNldC5hY2NvcmRpb25TcGVlZClcbiAgICAgICAgICAgICAgOiA1MDA7XG4gICAgICAgICAgICBhY2NvcmRpb25JdGVtQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnX2FjY29yZGlvbi1hY3RpdmUnKTtcbiAgICAgICAgICAgIF9zbGlkZVVwKGFjY29yZGlvbkl0ZW1DbG9zZS5uZXh0RWxlbWVudFNpYmxpbmcsIHNwZWVkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVnSXRlbXMgPSBBcnJheS5mcm9tKGFjY29yZGlvbkl0ZW1zKS5maWx0ZXIoZnVuY3Rpb24gKFxuICAgICAgaXRlbSxcbiAgICAgIGluZGV4LFxuICAgICAgc2VsZlxuICAgICkge1xuICAgICAgcmV0dXJuICFpdGVtLmRhdGFzZXQuYWNjb3JkaW9uLnNwbGl0KCcsJylbMF07XG4gICAgfSk7XG5cbiAgICAvLyBpbml0IHJlZ3VsYXIgYWNjb3JkaW9uIGl0ZW1zXG4gICAgaWYgKHJlZ0l0ZW1zLmxlbmd0aCkge1xuICAgICAgaW5pdEFjY29yZGlvbihyZWdJdGVtcyk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFjY29yZGlvbiBpdGVtcyB3aXRoIG1lZGlhIHF1ZXJpZXNcbiAgICBjb25zdCBtZFF1ZXJpZXNBcnJheSA9IGRhdGFNZWRpYVF1ZXJpZXMoYWNjb3JkaW9uSXRlbXMsICdhY2NvcmRpb24nKTtcblxuICAgIGlmIChtZFF1ZXJpZXNBcnJheSAmJiBtZFF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcbiAgICAgIG1kUXVlcmllc0FycmF5LmZvckVhY2gobWRRdWVyaWVzSXRlbSA9PiB7XG4gICAgICAgIC8vIGV2ZW50XG4gICAgICAgIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5pdEFjY29yZGlvbihtZFF1ZXJpZXNJdGVtLml0ZW1zQXJyYXksIG1kUXVlcmllc0l0ZW0ubWF0Y2hNZWRpYSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbml0QWNjb3JkaW9uKG1kUXVlcmllc0l0ZW0uaXRlbXNBcnJheSwgbWRRdWVyaWVzSXRlbS5tYXRjaE1lZGlhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbmFjY29yZGlvbigpO1xuIiwiLyoqXG4gKiBhZGRzIGFjdGlvbnMgdG8gZm9ybSBmaWVsZHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybUZpZWxkc0luaXQob3B0aW9ucyA9IHsgdmlld1Bhc3M6IGZhbHNlIH0pIHtcbiAgY29uc3QgZm9ybUZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgJ2lucHV0W3BsYWNlaG9sZGVyXSx0ZXh0YXJlYVtwbGFjZWhvbGRlcl0nXG4gICk7XG4gIGlmIChmb3JtRmllbGRzLmxlbmd0aCkge1xuICAgIGZvcm1GaWVsZHMuZm9yRWFjaChmb3JtRmllbGQgPT4ge1xuICAgICAgaWYgKCFmb3JtRmllbGQuaGFzQXR0cmlidXRlKCdkYXRhLXBsYWNlaG9sZGVyLW5vaGlkZScpKSB7XG4gICAgICAgIGZvcm1GaWVsZC5kYXRhc2V0LnBsYWNlaG9sZGVyID0gZm9ybUZpZWxkLnBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgICh0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdJTlBVVCcgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnZmlsZScgJiZcbiAgICAgICAgdGFyZ2V0RWxlbWVudC50eXBlICE9PSAnY2hlY2tib3gnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ3JhZGlvJyAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcucXVhbnRpdHknKSAmJlxuICAgICAgICAhdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQtcm93JykpIHx8XG4gICAgICB0YXJnZXRFbGVtZW50LnRhZ05hbWUgPT09ICdURVhUQVJFQSdcbiAgICApIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgfVxuICAgICAgaWYgKCF0YXJnZXRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1mb2N1cy1jbGFzc2VzJykpIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgIH1cbiAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgICAgZm9ybVZhbGlkYXRlLnJlbW92ZUVycm9yKHRhcmdldEVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICAodGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnSU5QVVQnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2ZpbGUnICYmXG4gICAgICAgIHRhcmdldEVsZW1lbnQudHlwZSAhPT0gJ2NoZWNrYm94JyAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnR5cGUgIT09ICdyYWRpbycgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLnF1YW50aXR5JykgJiZcbiAgICAgICAgIXRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0LXJvdycpKSB8fFxuICAgICAgdGFyZ2V0RWxlbWVudC50YWdOYW1lID09PSAnVEVYVEFSRUEnXG4gICAgKSB7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudC5kYXRhc2V0LnBsYWNlaG9sZGVyKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGxhY2Vob2xkZXIgPSB0YXJnZXRFbGVtZW50LmRhdGFzZXQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgICBpZiAoIXRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW5vLWZvY3VzLWNsYXNzZXMnKSkge1xuICAgICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWZvY3VzJyk7XG4gICAgICAgIHRhcmdldEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldEVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXZhbGlkYXRlJykpIHtcbiAgICAgICAgZm9ybVZhbGlkYXRlLnZhbGlkYXRlSW5wdXQodGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgICF0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnX2Zvcm0tZXJyb3InKSAmJlxuICAgICAgICB0YXJnZXRFbGVtZW50LnZhbHVlLnRyaW0oKVxuICAgICAgKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuY2xvc2VzdCgnLmlucHV0JykuY2xhc3NMaXN0LmFkZCgnX2ZpbGxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbG9zZXN0KCcuaW5wdXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdfZmlsbGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmlsZS1pbnB1dF0nKS5sZW5ndGgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWxlLWlucHV0XScpLmZvckVhY2goZmlsZUlucHV0ID0+IHtcbiAgICAgIGZvcm1WYWxpZGF0ZS52YWxpZGF0ZUlucHV0KGZpbGVJbnB1dCk7XG4gICAgICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvcm1WYWxpZGF0ZS52YWxpZGF0ZUlucHV0KGZpbGVJbnB1dCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnZpZXdQYXNzKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgbGV0IHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50LmNsb3Nlc3QoJ1tjbGFzcyo9XCJfX3ZpZXdwYXNzXCJdJykpIHtcbiAgICAgICAgbGV0IGlucHV0VHlwZSA9IHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdfdmlld3Bhc3MtYWN0aXZlJylcbiAgICAgICAgICA/ICdwYXNzd29yZCdcbiAgICAgICAgICA6ICd0ZXh0JztcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKCd0eXBlJywgaW5wdXRUeXBlKTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdfdmlld3Bhc3MtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gdmFsaWRhdGlvbiB2YXJcbmxldCBmb3JtVmFsaWRhdGUgPSB7XG4gIGdldEVycm9ycyhmb3JtKSB7XG4gICAgbGV0IGVycm9yID0gMDtcbiAgICBsZXQgZm9ybVJlcXVpcmVkSXRlbXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1yZXF1aXJlZF0nKTtcbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbXMubGVuZ3RoKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtcy5mb3JFYWNoKGZvcm1SZXF1aXJlZEl0ZW0gPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGZvcm1SZXF1aXJlZEl0ZW0ub2Zmc2V0UGFyZW50ICE9PSBudWxsIHx8XG4gICAgICAgICAgICBmb3JtUmVxdWlyZWRJdGVtLnRhZ05hbWUgPT09ICdTRUxFQ1QnKSAmJlxuICAgICAgICAgICFmb3JtUmVxdWlyZWRJdGVtLmRpc2FibGVkXG4gICAgICAgICkge1xuICAgICAgICAgIGVycm9yICs9IHRoaXMudmFsaWRhdGVJbnB1dChmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfSxcbiAgdmFsaWRhdGVJbnB1dChmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgbGV0IGVycm9yID0gMDtcblxuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmRhdGFzZXQucmVxdWlyZWQgPT09ICdlbWFpbCcpIHtcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUgPSBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlLnJlcGxhY2UoJyAnLCAnJyk7XG4gICAgICBpZiAodGhpcy5lbWFpbFRlc3QoZm9ybVJlcXVpcmVkSXRlbSkpIHtcbiAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgZXJyb3IrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94JyAmJlxuICAgICAgIWZvcm1SZXF1aXJlZEl0ZW0uY2hlY2tlZFxuICAgICkge1xuICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgIGVycm9yKys7XG4gICAgfSBlbHNlIGlmIChmb3JtUmVxdWlyZWRJdGVtLnR5cGUgPT09ICdmaWxlJykge1xuICAgICAgY29uc3QgdGhzID0gdGhpcztcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBtYXhTaXplID0gTnVtYmVyKGZvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5maWxlSW5wdXQpO1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybVJlcXVpcmVkSXRlbS5maWxlc1swXTtcblxuICAgICAgICBpZiAobWF4U2l6ZSAmJiBmaWxlKSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gZm9ybVJlcXVpcmVkSXRlbS5jbG9zZXN0KCcuZmlsZS1pbnB1dCcpO1xuICAgICAgICAgIGNvbnN0IHRleHQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZmlsZS10eHRdJyk7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWxlLW5hbWVdJyk7XG4gICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbGUtZXh0ZW5zaW9uXScpO1xuICAgICAgICAgIGNvbnN0IGltZyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1maWxlLWltZ10nKTtcbiAgICAgICAgICBjb25zdCBzaXplID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZpbGUtc2l6ZV0nKTtcbiAgICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBwYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVtb3ZlLWZpbGUtYnRuXScpO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUuc3BsaXQoJy4nKS5zbGljZSgwLCAtMSkuam9pbignJyksXG4gICAgICAgICAgICBzaXplOiBmaWxlLnNpemUgLyAxMDAwMDAwLFxuICAgICAgICAgICAgZXh0ZW5zaW9uOiBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaW1nID8gKGltZy5zcmMgPSBlLnRhcmdldC5yZXN1bHQpIDogbnVsbDtcbiAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICA/ICh0ZXh0LmlubmVySFRNTCA9IGDQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAINGE0LDQudC70LAgLSAke21heFNpemV9INC80LFgKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIG5hbWUgPyAobmFtZS5pbm5lckhUTUwgPSBkYXRhLm5hbWUpIDogbnVsbDtcbiAgICAgICAgICBleHRlbnNpb24gPyAoZXh0ZW5zaW9uLmlubmVySFRNTCA9IGRhdGEuZXh0ZW5zaW9uKSA6IG51bGw7XG4gICAgICAgICAgc2l6ZSA/IChzaXplLmlubmVySFRNTCA9IGRhdGEuc2l6ZS50b0ZpeGVkKDEpKSA6IG51bGw7XG5cbiAgICAgICAgICBpZiAoZGF0YS5zaXplID4gbWF4U2l6ZSkge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ19lcnJvcicpO1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gJ9CR0L7Qu9GM0YjQvtC5INGA0LDQt9C80LXRgCDRhNCw0LnQu9CwJztcbiAgICAgICAgICAgIHRocy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19lcnJvcicpO1xuICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ19maWxsZWQnKTtcbiAgICAgICAgICAgIHRocy5yZW1vdmVFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVtb3ZlQnRuKSB7XG4gICAgICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyb3InKTtcbiAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgICAgICAgICAgZm9ybVJlcXVpcmVkSXRlbS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICB0aHMucmVtb3ZlRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmZpbGVzWzBdKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmb3JtUmVxdWlyZWRJdGVtLmZpbGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICAhZm9ybVJlcXVpcmVkSXRlbS52YWx1ZS50cmltKCkgJiZcbiAgICAgICAgIWZvcm1SZXF1aXJlZEl0ZW0uaGFzQXR0cmlidXRlKCdkYXRhLXN0YXRpYycpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgZXJyb3IrKztcbiAgICAgIH0gZWxzZSBpZiAoZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LnZhbGlkYXRlID09PSAnbGV0dGVycy1vbmx5Jykge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gL1swLTlgIUAjJCVeJiooKV8rXFwtPVxcW1xcXXt9Oyc6XCJcXFxcfCwuPD5cXC8/fl0vO1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KGZvcm1SZXF1aXJlZEl0ZW0udmFsdWUpKSB7XG4gICAgICAgICAgZm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yID0gYGA7XG4gICAgICAgICAgdGhpcy5hZGRFcnJvcihmb3JtUmVxdWlyZWRJdGVtKTtcbiAgICAgICAgICBlcnJvcisrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcnJvcjtcbiAgfSxcbiAgYWRkRXJyb3IoZm9ybVJlcXVpcmVkSXRlbSkge1xuICAgIGNvbnNvbGUubG9nKGZvcm1SZXF1aXJlZEl0ZW0pO1xuICAgIGZvcm1SZXF1aXJlZEl0ZW0uY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZXJyb3InKTtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2Zvcm0tZXJyb3InKTtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2ZpbGxlZCcpO1xuICAgIGxldCBpbnB1dEVycm9yID1cbiAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lcnJvcicpO1xuICAgIGlmIChpbnB1dEVycm9yKSBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoaW5wdXRFcnJvcik7XG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0uZGF0YXNldC5lcnJvcikge1xuICAgICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwiZm9ybS1lcnJvciB0eHQxNlwiPiR7Zm9ybVJlcXVpcmVkSXRlbS5kYXRhc2V0LmVycm9yfTwvZGl2PmBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChmb3JtUmVxdWlyZWRJdGVtLmNsb3Nlc3QoJy5pbnB1dF92YWxpZGF0ZScpKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLmNsb3Nlc3QoJ2Zvcm0nKS5jbGFzc0xpc3QuYWRkKCdfZXJyb3InKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZUVycm9yKGZvcm1SZXF1aXJlZEl0ZW0pIHtcbiAgICBmb3JtUmVxdWlyZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWVycm9yJyk7XG4gICAgZm9ybVJlcXVpcmVkSXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ19mb3JtLWVycm9yJyk7XG4gICAgaWYgKGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lcnJvcicpKSB7XG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAgIGZvcm1SZXF1aXJlZEl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1lcnJvcicpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZm9ybVJlcXVpcmVkSXRlbS5jbG9zZXN0KCcuaW5wdXRfdmFsaWRhdGUnKSkge1xuICAgICAgZm9ybVJlcXVpcmVkSXRlbS5jbG9zZXN0KCdmb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJyk7XG4gICAgfVxuICB9LFxuICBmb3JtQ2xlYW4oZm9ybSkge1xuICAgIGlmICghZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2F2ZS1maWVsZHMnKSkge1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LHRleHRhcmVhJyk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSBpbnB1dHNbaW5kZXhdO1xuICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2Zvcm0tZm9jdXMnKTtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdfZm9ybS1mb2N1cycpO1xuICAgICAgICAgIGZvcm1WYWxpZGF0ZS5yZW1vdmVFcnJvcihlbCk7XG5cbiAgICAgICAgICBpZiAoZWwudHlwZSAmJiBlbC50eXBlID09PSAnZmlsZScpIHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBlbC5jbG9zZXN0KCcuZmlsZS1pbnB1dCcpLmNsYXNzTGlzdC5yZW1vdmUoJ19maWxsZWQnKTtcbiAgICAgICAgICAgIGVsLmNsb3Nlc3QoJy5maWxlLWlucHV0JykuY2xhc3NMaXN0LnJlbW92ZSgnX2Vycm9yJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBjaGVja2JveGVzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3hfX2lucHV0Jyk7XG4gICAgICAgIGlmIChjaGVja2JveGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2hlY2tib3hlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY2hlY2tib3hlc1tpbmRleF07XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH0sXG4gIGVtYWlsVGVzdChmb3JtUmVxdWlyZWRJdGVtKSB7XG4gICAgcmV0dXJuICEvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsOH0pKyQvLnRlc3QoXG4gICAgICBmb3JtUmVxdWlyZWRJdGVtLnZhbHVlXG4gICAgKTtcbiAgfSxcbn07XG5cbi8qKlxuICogYWRkcyBzdWJtaXQgbG9naWNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybVN1Ym1pdChvcHRpb25zID0geyB2YWxpZGF0ZTogdHJ1ZSB9KSB7XG4gIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuZm9ybXM7XG4gIGlmIChmb3Jtcy5sZW5ndGgpIHtcbiAgICBmb3IgKGNvbnN0IGZvcm0gb2YgZm9ybXMpIHtcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICBmb3JtU3VibWl0QWN0aW9uKGZvcm0sIGUpO1xuICAgICAgfSk7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICBmb3JtVmFsaWRhdGUuZm9ybUNsZWFuKGZvcm0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGZvcm1TdWJtaXRBY3Rpb24oZm9ybSwgZSkge1xuICAgIGNvbnN0IGVycm9yID0gIWZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLW5vLXZhbGlkYXRlJylcbiAgICAgID8gZm9ybVZhbGlkYXRlLmdldEVycm9ycyhmb3JtKVxuICAgICAgOiAwO1xuICAgIGlmIChlcnJvciA9PT0gMCAmJiAhZm9ybS5xdWVyeVNlbGVjdG9yKCcuX2Zvcm0tZXJyb3InKSkge1xuICAgICAgY29uc3QgYWpheCA9IGZvcm0uaGFzQXR0cmlidXRlKCdkYXRhLWFqYXgnKTtcbiAgICAgIGlmIChhamF4KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0QXR0cmlidXRlKCdhY3Rpb24nKVxuICAgICAgICAgID8gZm9ybS5nZXRBdHRyaWJ1dGUoJ2FjdGlvbicpLnRyaW0oKVxuICAgICAgICAgIDogJyMnO1xuICAgICAgICBjb25zdCBmb3JtTWV0aG9kID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ21ldGhvZCcpXG4gICAgICAgICAgPyBmb3JtLmdldEF0dHJpYnV0ZSgnbWV0aG9kJykudHJpbSgpXG4gICAgICAgICAgOiAnR0VUJztcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdfc2VuZGluZycpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZvcm1BY3Rpb24sIHtcbiAgICAgICAgICBtZXRob2Q6IGZvcm1NZXRob2QsXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBsZXQgcmVzcG9uc2VSZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdfc2VuZGluZycpO1xuICAgICAgICAgIGZvcm1TZW50KGZvcm0sIHJlc3BvbnNlUmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydCgnZXJyb3InKTtcbiAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ19zZW5kaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZm9ybS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZGV2JykpIHtcbiAgICAgICAgLy8gaW4gZGV2ZWxvcG1lbnQgbW9kZVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm1TZW50KGZvcm0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5fZm9ybS1lcnJvcicpO1xuICAgICAgaWYgKGZvcm1FcnJvciAmJiBmb3JtLmhhc0F0dHJpYnV0ZSgnZGF0YS1nb3RvLWVycm9yJykpIHtcbiAgICAgICAgZ290b0Jsb2NrKGZvcm1FcnJvciwgdHJ1ZSwgMTAwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGFjdGlvbnMgYWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybVxuICBmdW5jdGlvbiBmb3JtU2VudChmb3JtLCByZXNwb25zZVJlc3VsdCA9IGBgKSB7XG4gICAgLy8gc2hvdyBwb3B1cCwgaWYgcG9wdXAgbW9kdWxlIGlzIGNvbm5lY3RlZCBhbmQgZm9ybSBoYXMgc2V0dGluZ1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICBpZiAobW9kdWxlcy5tb2RhbCkge1xuICAgIC8vICAgICAgICAgY29uc3QgbW9kYWwgPSBmb3JtLmRhdGFzZXQubW9kYWxNZXNzYWdlO1xuICAgIC8vICAgICAgICAgbW9kYWwgPyBtb2R1bGVzLm1vZGFsLm9wZW4obW9kYWwpIDogbnVsbDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIDApO1xuXG4gICAgLy8gZm9ybSBzdWJtaXQgZXZlbnRcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCdmb3JtU2VudCcsIHtcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICAvLyBjbGVhbiBmb3JtXG4gICAgZm9ybVZhbGlkYXRlLmZvcm1DbGVhbihmb3JtKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgX3NsaWRlVXAsIF9zbGlkZURvd24sIF9zbGlkZVRvZ2dsZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0IHtcbiAgLy8gc2V0dXAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBjdXN0b20gc2VsZWN0IGNsYXNzZXNcbiAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAvLyBodG1sIGJ1aWxkIGNsYXNzZXNcbiAgICAgIHNlbDogJ3NlbGVjdCcsXG4gICAgICBib2R5OiAnc2VsZWN0X19ib2R5JyxcbiAgICAgIGxhYmVsOiAnc2VsZWN0X19sYWJlbCcsXG4gICAgICB0aXRsZTogJ3NlbGVjdF9fdGl0bGUnLFxuICAgICAgdmFsOiAnc2VsZWN0X192YWx1ZScsXG4gICAgICBjb250ZW50OiAnc2VsZWN0X19jb250ZW50JyxcbiAgICAgIG9wdGlvbnM6ICdzZWxlY3RfX29wdGlvbnMnLFxuICAgICAgb3B0aW9uOiAnc2VsZWN0X19vcHRpb24nLFxuICAgICAgc2Nyb2xsOiAnc2VsZWN0X19zY3JvbGwnLFxuICAgICAgZ3JvdXA6ICdzZWxlY3RfX2dyb3VwJyxcbiAgICAgIGlucDogJ3NlbGVjdF9faW5wdXQnLFxuICAgICAgYXNzZXQ6ICdzZWxlY3RfX2Fzc2V0JyxcbiAgICAgIHR4dDogJ3NlbGVjdF9fdGV4dCcsXG4gICAgICBoaW50OiAnc2VsZWN0X19oaW50JyxcblxuICAgICAgLy8gc3RhdGUgY2xhc3Nlc1xuICAgICAgYWN0aXZlOiAnX3NlbGVjdC1hY3RpdmUnLFxuICAgICAgZm9jdXNlZDogJ19zZWxlY3QtZm9jdXNlZCcsXG4gICAgICBvcGVuZWQ6ICdfc2VsZWN0LW9wZW5lZCcsXG4gICAgICBmaWxsZWQ6ICdfc2VsZWN0LWZpbGxlZCcsXG4gICAgICBzZWxlY3RlZDogJ19zZWxlY3Qtc2VsZWN0ZWQnLFxuICAgICAgZGlzYWJsZWQ6ICdfc2VsZWN0LWRpc2FibGVkJyxcblxuICAgICAgLy8gYWRkaXRpb25hbCBjbGFzc2VzXG4gICAgICBsaXN0OiAnX3NlbGVjdC1saXN0JyxcbiAgICAgIGVycm9yOiAnX3NlbGVjdC1lcnJvcicsXG4gICAgICBtdWx0aXBsZTogJ19zZWxlY3QtbXVsdGlwbGUnLFxuICAgICAgY2hlY2tib3g6ICdfc2VsZWN0LWNoZWNrYm94JyxcbiAgICAgIGxhYmVsOiAnX3NlbGVjdC1sYWJlbCcsXG4gICAgfTtcblxuICAgIC8vIGFsbCBzZWxlY3QgaXRlbXNcbiAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG4gICAgaWYgKHNlbGVjdExpc3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLmluaXQoc2VsZWN0TGlzdCk7XG4gICAgfVxuICB9XG5cbiAgLy8gc2VsZWN0IGluaXRpYWxpemF0aW9uICYgYnVpbGQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gaW5pdGlhbGl6YXRpb25cbiAgaW5pdChzZWxlY3RMaXN0KSB7XG4gICAgLy8gaW5pdFxuICAgIHNlbGVjdExpc3QuZm9yRWFjaCgoc2VsZWN0LCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5pbml0U2VsSXRlbShzZWxlY3QsIGluZGV4ICsgMSk7XG4gICAgfSk7XG5cbiAgICAvLyBldmVudHNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdmb2N1c2luJyxcbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aW9ucyhlKTtcbiAgICAgIH0uYmluZCh0aGlzKVxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdmb2N1c291dCcsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aGlzLnNldEFjdGlvbnMoZSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9XG4gIC8vIHNpbmdsZSBzZWxlY3QgaXRlbSBpbml0aWFsaXphdGlvblxuICBpbml0U2VsSXRlbShyZWxhdGl2ZVNlbCwgaW5kZXgpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBzZWxlY3QuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsKTtcbiAgICByZWxhdGl2ZVNlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocmVsYXRpdmVTZWwpO1xuICAgIHJlbGF0aXZlU2VsLmhpZGRlbiA9IHRydWU7XG4gICAgaW5kZXggPyAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxJZCA9IGluZGV4KSA6IG51bGw7XG5cbiAgICBpZiAodGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkpIHtcbiAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQub3B0UGxhY2Vob2xkZXIgPVxuICAgICAgICB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS52YWx1ZTtcbiAgICAgIGlmICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC5zaG93KSB7XG4gICAgICAgIGNvbnN0IHNlbFRpdGxlID0gdGhpcy5nZXRTZWxlY3Qoc2VsZWN0LCB0aGlzLmNsYXNzZXMudGl0bGUpLnR3aW5TZWw7XG4gICAgICAgIHNlbFRpdGxlLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICAgICAgYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMubGFiZWx9XCI+JHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpLmxhYmVsLnRleHRcbiAgICAgICAgICAgICAgPyB0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5sYWJlbC50ZXh0XG4gICAgICAgICAgICAgIDogdGhpcy5nZXRQbGFjZWhvbGRlcihyZWxhdGl2ZVNlbCkudmFsdWVcbiAgICAgICAgICB9PC9zcGFuPmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ib2R5fVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICR7XG4gICAgICAgICAgICAgICAgICAgICAgIXJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS1uby1zbGlkZScpID8gJ2hpZGRlbicgOiAnJ1xuICAgICAgICAgICAgICAgICAgICB9ICBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLm9wdGlvbnN9XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICk7XG5cbiAgICB0aGlzLmJ1aWxkKHJlbGF0aXZlU2VsKTtcblxuICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQgPSByZWxhdGl2ZVNlbC5kYXRhc2V0LnNwZWVkXG4gICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWRcbiAgICAgIDogJzE1MCc7XG4gICAgcmVsYXRpdmVTZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLmluaXRTZWxlY3Rpb25zKGUpO1xuICAgIH0pO1xuICB9XG4gIC8vIHNlbGVjdCBidWlsZFxuICBidWlsZChyZWxhdGl2ZVNlbCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAvLyBzZXQgaWRcbiAgICBzZWxlY3QuZGF0YXNldC5zZWxJZCA9IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsSWQ7XG4gICAgLy8gc2V0IHZhbHVlXG4gICAgdGhpcy5zZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAvLyBzZXQgb3B0aW9uc1xuICAgIHRoaXMuc2V0T3B0aW9ucyhzZWxlY3QsIHJlbGF0aXZlU2VsKTtcbiAgICAvLyBzZXQgY3NzIG1vZGlmaWNhdG9yXG4gICAgcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxBZGRvbkNsYXNzXG4gICAgICA/IHNlbGVjdC5jbGFzc0xpc3QuYWRkKGBzZWxlY3RfJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEFkZG9uQ2xhc3N9YClcbiAgICAgIDogbnVsbDtcbiAgICAvLyBzZXQgY2xhc3MgaWYgc2VsZWN0IGlzIG11bHRpcGxlXG4gICAgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm11bHRpcGxlKVxuICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMubXVsdGlwbGUpO1xuICAgIC8vIHNldCBjbGFzcyBpZiBzZWxlY3QgY2hlY2tib3hlcyBhcmUgc2V0XG4gICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1jaGVja2JveGVzJykgJiYgcmVsYXRpdmVTZWwubXVsdGlwbGVcbiAgICAgID8gc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNoZWNrYm94KVxuICAgICAgOiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2hlY2tib3gpO1xuICAgIC8vIGRpc2FibGUgc2VsZWN0XG4gICAgdGhpcy5kaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICAgIC8vIHNldCBzZWFyY2ggYWN0aW9ucyBpZiBkYXRhLXNlbC1zZWFyY2ggaXMgc2V0XG4gICAgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zZWFyY2gnKVxuICAgICAgPyB0aGlzLnNldFNlYXJjaEFjdGlvbnMoc2VsZWN0KVxuICAgICAgOiBudWxsO1xuICAgIC8vIHNldCBzZWxlY3QgYWN0aW9ucyBpZiBpdCdzIGluaXRpYWxseSBvcGVuZWRcbiAgICByZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLW9wZW5lZCcpID8gdGhpcy5zZXRBY3Rpb24oc2VsZWN0KSA6IG51bGw7XG5cbiAgICAvLyBzZXQgc2VsZWN0IGhpbnRcbiAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnR9PC9kaXY+YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzaG93IC8gaGlkZSBzZWxlY3Rpb24gZnJvbSBzZWxlY3QgdGl0bGVcbiAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctdmFsJykpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKCdfc2VsZWN0LXNob3ctdmFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdfc2VsZWN0LXNob3ctdmFsJyk7XG4gICAgfVxuICB9XG4gIC8vIHNldCB0d2luIHNlbGVjdCB0aXRsZSB2YWx1ZVxuICBzZXRWYWx1ZShzZWxlY3QsIHJlbGF0aXZlU2VsKSB7XG4gICAgY29uc3Qgc2VsQm9keSA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLmJvZHkpLnR3aW5TZWw7XG4gICAgY29uc3Qgc2VsVGl0bGUgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbDtcblxuICAgIGlmIChzZWxUaXRsZSkgc2VsVGl0bGUucmVtb3ZlKCk7XG4gICAgc2VsQm9keS5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICB0aGlzLmdldFZhbHVlKHNlbGVjdCwgcmVsYXRpdmVTZWwpXG4gICAgKTtcbiAgfVxuICAvLyBzZXQgdHdpbiBzZWxlY3Qgb3B0aW9uc1xuICBzZXRPcHRpb25zKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG4gICAgY29uc3QgcmVsYXRpdmVTZWxPcHRpb25zID0gdGhpcy5nZXRTZWxlY3QoXG4gICAgICBzZWxlY3QsXG4gICAgICB0aGlzLmNsYXNzZXMub3B0aW9uc1xuICAgICkucmVsYXRpdmVTZWw7XG4gICAgb3B0aW9ucy5pbm5lckhUTUwgPSB0aGlzLmdldE9wdGlvbnMocmVsYXRpdmVTZWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5nZXRPcHRpb25zKHJlbGF0aXZlU2VsKTtcbiAgICB9KTtcbiAgICBpZiAocmVsYXRpdmVTZWxPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ1tzZWxlY3RlZF0nKSkge1xuICAgICAgb3B0aW9uc1xuICAgICAgICAucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuICAvLyBkaXNhYmxlIHNlbGVjdFxuICBkaXNhYmxlU2VsZWN0KHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICBpZiAocmVsYXRpdmVTZWwuZGlzYWJsZWQpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5kaXNhYmxlZCk7XG4gICAgICB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy50aXRsZSkudHdpblNlbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1haW4gYWN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHNldCBtYWluIGFjdGlvbnNcbiAgc2V0QWN0aW9ucyhlKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdHlwZSA9IGUudHlwZTtcblxuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbCkpIHx8XG4gICAgICB0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5saXN0KSlcbiAgICApIHtcbiAgICAgIGNvbnN0IHNlbGVjdCA9IHRhcmdldC5jbG9zZXN0KCcuc2VsZWN0JylcbiAgICAgICAgPyB0YXJnZXQuY2xvc2VzdCgnLnNlbGVjdCcpXG4gICAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7XG4gICAgICAgICAgICAgIHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKS5kYXRhc2V0LnNlbGVjdElkXG4gICAgICAgICAgICB9XCJdYFxuICAgICAgICAgICk7XG4gICAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgICBpZiAodHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICBpZiAoIXJlbGF0aXZlU2VsLmRpc2FibGVkKSB7XG4gICAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLmxpc3QpKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuJHt0aGlzLmNsYXNzZXMuc2VsfVtkYXRhLXNlbC1pZD1cIiR7c2VsTGlzdC5kYXRhc2V0LnNlbElkfVwiXSAuc2VsZWN0X19vcHRpb25bZGF0YS1vcHQtdmFsPVwiJHtzZWxMaXN0LmRhdGFzZXQub3B0VmFsfVwiXWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGlvbihzZWxlY3QsIHJlbGF0aXZlU2VsLCBzZWxPcHRpb24pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsb3Nlc3QodGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMudGl0bGUpKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3Rpb24oc2VsZWN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbG9zZXN0KHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wdGlvbikpKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxPcHRpb24gPSB0YXJnZXQuY2xvc2VzdChcbiAgICAgICAgICAgICAgdGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIHNlbE9wdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmb2N1c2luJyB8fCB0eXBlID09PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCh0aGlzLmdldENsYXNzKHRoaXMuY2xhc3Nlcy5zZWwpKSkge1xuICAgICAgICAgIGlmICh0eXBlID09PSAnZm9jdXNpbicpIHtcbiAgICAgICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5mb2N1c2VkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmZvY3VzZWQpO1xuICAgICAgICAgICAgaWYgKHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpKSB7XG4gICAgICAgICAgICAgIGlmICghc2VsZWN0LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuZmlsbGVkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdrZXlkb3duJyAmJiBlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2VHcm91cCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb3NlR3JvdXAoKTtcbiAgICB9XG4gIH1cbiAgLy8gc2V0IHNpbmdsZSBzZWxlY3QgYWN0aW9uXG4gIHNldEFjdGlvbihzZWxlY3QpIHtcbiAgICBjb25zdCByZWxhdGl2ZVNlbCA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCkucmVsYXRpdmVTZWw7XG4gICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KHNlbGVjdCwgdGhpcy5jbGFzc2VzLm9wdGlvbnMpLnR3aW5TZWw7XG5cbiAgICBpZiAocmVsYXRpdmVTZWwuY2xvc2VzdCgnW2RhdGEtb25lLXNlbGVjdF0nKSkge1xuICAgICAgY29uc3Qgc2VsZWN0T25lR3JvdXAgPSByZWxhdGl2ZVNlbC5jbG9zZXN0KCdbZGF0YS1vbmUtc2VsZWN0XScpO1xuICAgICAgdGhpcy5jbG9zZUdyb3VwKHNlbGVjdE9uZUdyb3VwLCByZWxhdGl2ZVNlbCk7XG4gICAgfVxuXG4gICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tc2xpZGUnKSlcbiAgICAgICAgX3NsaWRlVG9nZ2xlKHNlbE9wdGlvbnMsIHJlbGF0aXZlU2VsLmRhdGFzZXQuc3BlZWQpO1xuICAgICAgaWYgKFxuICAgICAgICBzZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuY2xhc3Nlcy5vcGVuZWQpICYmXG4gICAgICAgIHJlbGF0aXZlU2VsLmhhc0F0dHJpYnV0ZSgnZGF0YS12YWxpZGF0ZScpICYmXG4gICAgICAgIHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXJyKHJlbGF0aXZlU2VsLCBzZWxlY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBjbG9zZSBzaW5nbGUgc2VsZWN0IGdyb3VwXG4gIGNsb3NlR3JvdXAoZ3JvdXAsIHNlbGVjdCkge1xuICAgIGNvbnN0IHNlbEdyb3VwID0gZ3JvdXAgPyBncm91cCA6IGRvY3VtZW50O1xuICAgIGNvbnN0IHNlbGVjdGlvbnMgPSBzZWxHcm91cC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMuc2VsKX0ke3RoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLm9wZW5lZCl9YFxuICAgICk7XG4gICAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoKSB7XG4gICAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0aW9uID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICFzZWxlY3QgfHxcbiAgICAgICAgICAoc2VsZWN0ICYmIHNlbGVjdGlvbi5kYXRhc2V0LnNlbElkICE9PSBzZWxlY3QuZGF0YXNldC5zZWxJZClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZUl0ZW0oc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8vIGNsb3NlIHNpbmdsZSBzZWxlY3QgaXRlbVxuICBjbG9zZUl0ZW0oc2VsZWN0KSB7XG4gICAgY29uc3QgcmVsYXRpdmVTZWwgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QpLnJlbGF0aXZlU2VsO1xuICAgIGNvbnN0IHNlbE9wdGlvbnMgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5vcHRpb25zKS50d2luU2VsO1xuXG4gICAgaWYgKCFzZWxPcHRpb25zLmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuZWQpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbm8tc2xpZGUnKSlcbiAgICAgICAgX3NsaWRlVXAoc2VsT3B0aW9ucywgcmVsYXRpdmVTZWwuZGF0YXNldC5zcGVlZCk7XG4gICAgfVxuICB9XG4gIC8vIHNldCBzaW5nbGUgb3B0aW9uIGFjdGlvbnNcbiAgc2V0T3B0aW9uQWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwsIG9wdGlvbikge1xuICAgIGlmIChyZWxhdGl2ZVNlbC5tdWx0aXBsZSkge1xuICAgICAgb3B0aW9uLmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlU2VsZWN0aW9ucyA9IHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHM7XG5cbiAgICAgIHJlbGF0aXZlU2VsZWN0aW9ucy5mb3JFYWNoKHJlbGF0aXZlU2VsZWN0aW9uID0+IHtcbiAgICAgICAgcmVsYXRpdmVTZWxlY3Rpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHR3aW5TZWxlY3Rpb25zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgIHRoaXMuZ2V0Q2xhc3ModGhpcy5jbGFzc2VzLnNlbGVjdGVkKVxuICAgICAgKTtcbiAgICAgIHR3aW5TZWxlY3Rpb25zLmZvckVhY2godHdpblNlbGVjdGlvbiA9PiB7XG4gICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7dHdpblNlbGVjdGlvbi5kYXRhc2V0Lm9wdFZhbH1cIl1gKVxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcbiAgICAgIGlmICghb3B0aW9uLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgIHJlbGF0aXZlU2VsLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICk7XG4gICAgICAgIHJlbGF0aXZlU2VsXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYG9wdGlvblt2YWx1ZT1cIiR7b3B0aW9uLmRhdGFzZXQub3B0VmFsfVwiXWApXG4gICAgICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0X19vcHRpb24nKVxuICAgICAgICAuZm9yRWFjaChvcHQgPT4gb3B0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLnNlbGVjdGVkKSk7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc2VsZWN0ZWQpO1xuICAgICAgaWYgKCFyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvdy1zZWxlY3Rpb24nKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWApXG4gICAgICAgICkge1xuICAgICAgICAgIHNlbGVjdC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYCR7dGhpcy5nZXRDbGFzcyh0aGlzLmNsYXNzZXMub3B0aW9uKX1baGlkZGVuXWBcbiAgICAgICAgICApLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmVsYXRpdmVTZWwudmFsdWUgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdC12YWwnKVxuICAgICAgICA/IG9wdGlvbi5kYXRhc2V0Lm9wdFZhbFxuICAgICAgICA6IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgIHRoaXMuc2V0QWN0aW9uKHNlbGVjdCk7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCk7XG4gICAgdGhpcy5zZXRTZWxlY3Rpb25zKHJlbGF0aXZlU2VsKTtcbiAgfVxuICAvLyBzZXQgc2VhcmNoIGFjdGlvbnNcbiAgc2V0U2VhcmNoQWN0aW9ucyhzZWxlY3QpIHtcbiAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc3Qgc2VsSW5wdXQgPSB0aGlzLmdldFNlbGVjdChzZWxlY3QsIHRoaXMuY2xhc3Nlcy5pbnApLnR3aW5TZWw7XG4gICAgY29uc3Qgc2VsT3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0KFxuICAgICAgc2VsZWN0LFxuICAgICAgdGhpcy5jbGFzc2VzLm9wdGlvbnNcbiAgICApLnR3aW5TZWwucXVlcnlTZWxlY3RvckFsbChgLiR7dGhpcy5jbGFzc2VzLm9wdGlvbn1gKTtcblxuICAgIHNlbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc2VsT3B0aW9ucy5mb3JFYWNoKHNlbE9wdGlvbiA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZWxPcHRpb24udGV4dENvbnRlbnRcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAuaW5kZXhPZihzZWxJbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpKSA+PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHNlbE9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxPcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZWxPcHRpb25zLmhpZGRlbiA9PT0gdHJ1ZSA/IF90aGlzLnNldEFjdGlvbihzZWxlY3QpIDogbnVsbDtcbiAgICB9KTtcbiAgfVxuICAvLyBzZXQgc2VsZWN0IHN1YnRpdGxlXG4gIHNldFN1YnRpdGxlKHJlbGF0aXZlU2VsKSB7fVxuXG4gIC8vIHZhbGlkYXRpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGFkZCBhbiBlcnJvciB0byBhIHNlbGVjdFxuICBhZGRFcnIocmVsYXRpdmVTZWwsIHNlbGVjdCkge1xuICAgIHNlbGVjdC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5lcnJvcik7XG5cbiAgICBpZiAocmVsYXRpdmVTZWwuZGF0YXNldC5zZWxFcnJvciAmJiAhcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxIaW50KSB7XG4gICAgICByZWxhdGl2ZVNlbC5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwic2VsZWN0X19oaW50XCI+JHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEVycm9yfTwvZGl2PmBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIHJlbW92ZSBhbiBlcnJvciBmcm9tIGEgc2VsZWN0XG4gIHJlbW92ZUVycihyZWxhdGl2ZVNlbCwgc2VsZWN0KSB7XG4gICAgaWYgKHNlbGVjdC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5jbGFzc2VzLmVycm9yKSkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmVycm9yKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0X19oaW50JykgJiZcbiAgICAgICFyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbEhpbnRcbiAgICApIHtcbiAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoXG4gICAgICAgIHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9faGludCcpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIHV0aWxzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGdldCBjdXN0b20gY2xhc3NcbiAgZ2V0Q2xhc3MoY3NzQ2xhc3MpIHtcbiAgICByZXR1cm4gYC4ke2Nzc0NsYXNzfWA7XG4gIH1cbiAgLy8gZ2V0IHNpbmdsZSBzZWxlY3QgaXRlbVxuICBnZXRTZWxlY3Qoc2VsZWN0LCBjc3NDbGFzcykge1xuICAgIHJldHVybiB7XG4gICAgICByZWxhdGl2ZVNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuICAgICAgdHdpblNlbDogc2VsZWN0LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDbGFzcyhjc3NDbGFzcykpLFxuICAgIH07XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdGVkIGl0ZW0gdmFsdWVcbiAgZ2V0VmFsdWUoc2VsZWN0LCByZWxhdGl2ZVNlbCkge1xuICAgIGxldCBhdHRyLFxuICAgICAgYXR0ckNsYXNzLFxuICAgICAgdGl0bGVWYWwgPSB0aGlzLmdldERhdGEocmVsYXRpdmVTZWwsIDIpLmh0bWw7XG5cbiAgICAvLyBzZXQgdGl0bGUgdmFsdWVcbiAgICB0aXRsZVZhbCA9IHRpdGxlVmFsLmxlbmd0aFxuICAgICAgPyB0aXRsZVZhbFxuICAgICAgOiByZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbExhYmVsXG4gICAgICA/IHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWxcbiAgICAgIDogJyc7XG5cbiAgICAvLyBzZXQgYWN0aXZlIGNsYXNzIHRvIHNlbGVjdCBpZiBpdCBjb250YWlucyBhbnkgdmFsdWVzXG4gICAgaWYgKHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkudmFsdWVzLmxlbmd0aCkge1xuICAgICAgc2VsZWN0LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmFjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5hY3RpdmUpO1xuICAgIH1cblxuICAgIC8vIHNldCBzZWxlY3QgbGFiZWxcbiAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1sYWJlbCcpKSB7XG4gICAgICBhdHRyID0gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxMYWJlbFxuICAgICAgICA/IGAgZGF0YS1zZWwtbGFiZWw9XCIke3JlbGF0aXZlU2VsLmRhdGFzZXQuc2VsTGFiZWx9XCJgXG4gICAgICAgIDogYCBkYXRhLXNlbC1sYWJlbD1cItCS0YvQsdC+0YBcImA7XG4gICAgICBhdHRyQ2xhc3MgPSBgICR7dGhpcy5jbGFzc2VzLmxhYmVsfWA7XG4gICAgfVxuXG4gICAgLy8gcHVzaCBzZWxlY3Rpb25zIHRvIHRoZSBsaXN0IGluc2lkZSBvZiBzZWxlY3QgdGl0bGVcbiAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUgJiYgcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1saXN0JykpIHtcbiAgICAgIHRpdGxlVmFsID0gdGhpcy5nZXREYXRhKHJlbGF0aXZlU2VsKVxuICAgICAgICAuZWxlbWVudHMubWFwKFxuICAgICAgICAgIG9wdGlvbiA9PlxuICAgICAgICAgICAgYDxzcGFuIGRhdGEtb3B0LWlkPVwiJHtzZWxlY3QuZGF0YXNldC5zZWxJZH1cIiBkYXRhLW9wdC12YWw9XCIke1xuICAgICAgICAgICAgICBvcHRpb24udmFsdWVcbiAgICAgICAgICAgIH1cIiBjbGFzcz1cIl9saXN0LWl0ZW1cIj4ke3RoaXMuZ2V0Q29udGVudChvcHRpb24pfTwvc3Bhbj5gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCAmJlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdClcbiAgICAgICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbGF0aXZlU2VsLmRhdGFzZXQubGlzdCkuaW5uZXJIVE1MID0gdGl0bGVWYWw7XG4gICAgICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB0aXRsZVZhbCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluaXQgc2VsZWN0IHNlYXJjaFxuICAgIGlmIChyZWxhdGl2ZVNlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXNlYXJjaCcpKSB7XG4gICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke2F0dHJ9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfVwiPjxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiB0eXBlPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGRhdGEtcGxhY2Vob2xkZXI9XCIke3RpdGxlVmFsfVwiIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuaW5wfVwiPjwvc3Bhbj48L2Rpdj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjdXN0b21DbGFzcyA9XG4gICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHMubGVuZ3RoICYmXG4gICAgICAgIHRoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc1xuICAgICAgICAgID8gYCAke3RoaXMuZ2V0RGF0YShyZWxhdGl2ZVNlbCkuZWxlbWVudHNbMF0uZGF0YXNldC5vcHRDbGFzc31gXG4gICAgICAgICAgOiAnJztcbiAgICAgIHJldHVybiBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy50aXRsZX1cIj48c3BhbiAke1xuICAgICAgICBhdHRyID8gYXR0ciA6ICcnXG4gICAgICB9IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMudmFsfSAke1xuICAgICAgICBhdHRyQ2xhc3MgPyBhdHRyQ2xhc3MgOiAnJ1xuICAgICAgfVwiPjxzcGFuIGNsYXNzPVwiJHtcbiAgICAgICAgdGhpcy5jbGFzc2VzLmNvbnRlbnRcbiAgICAgIH0ke2N1c3RvbUNsYXNzfVwiPiR7dGl0bGVWYWx9PC9zcGFuPjwvc3Bhbj48L2J1dHRvbj5gO1xuICAgIH1cbiAgfVxuICAvLyBnZXQgb3B0aW9uc1xuICBnZXRPcHRpb25zKHJlbGF0aXZlU2VsKSB7XG4gICAgY29uc3Qgc2VsU2Nyb2xsID0gcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNlbC1zY3JvbGwnKVxuICAgICAgPyBgZGF0YS1zaW1wbGViYXJgXG4gICAgICA6ICcnO1xuICAgIGNvbnN0IGRhdGEgPSBzZWxTY3JvbGxcbiAgICAgID8gcmVsYXRpdmVTZWwuZGF0YXNldC5zZWxTY3JvbGwudHJpbSgpLnNwbGl0KCcsJylcbiAgICAgIDogbnVsbDtcbiAgICBsZXQgc2VsU2Nyb2xsSGVpZ2h0ID1cbiAgICAgIHJlbGF0aXZlU2VsLmRhdGFzZXQuc2VsU2Nyb2xsICYmIGRhdGFcbiAgICAgICAgPyBgc3R5bGU9XCJtYXgtaGVpZ2h0OiR7d2luZG93LmlubmVyV2lkdGggPiA3NjggPyBkYXRhWzBdIDogZGF0YVsxXX1yZW1cImBcbiAgICAgICAgOiAnJztcbiAgICBsZXQgc2VsT3B0aW9ucyA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucyk7XG5cbiAgICBpZiAoc2VsT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGxldCBzZWxPcHRpb25zSFRNTCA9IGBgO1xuXG4gICAgICBpZiAoXG4gICAgICAgICh0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKSAmJlxuICAgICAgICAgICF0aGlzLmdldFBsYWNlaG9sZGVyKHJlbGF0aXZlU2VsKS5zaG93KSB8fFxuICAgICAgICByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgKSB7XG4gICAgICAgIHNlbE9wdGlvbnMgPSBzZWxPcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbFxuICAgICAgICA/IGA8ZGl2ICR7c2VsU2Nyb2xsfSAke3NlbFNjcm9sbEhlaWdodH0gZGF0YS1zZWwtc2Nyb2xsPVwiJHtyZWxhdGl2ZVNlbC5kYXRhc2V0LnNlbFNjcm9sbH1cIiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnNjcm9sbH1cIj5gXG4gICAgICAgIDogJyc7XG4gICAgICBzZWxPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgc2VsT3B0aW9uc0hUTUwgKz0gdGhpcy5nZXRPcHRpb24ob3B0aW9uLCByZWxhdGl2ZVNlbCk7XG4gICAgICB9KTtcbiAgICAgIHNlbE9wdGlvbnNIVE1MICs9IHNlbFNjcm9sbCA/IGA8L2Rpdj5gIDogJyc7XG4gICAgICByZXR1cm4gc2VsT3B0aW9uc0hUTUw7XG4gICAgfVxuICB9XG4gIC8vIGdldCBvcHRpb25cbiAgZ2V0T3B0aW9uKG9wdGlvbiwgcmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBzZWxlY3Rpb25zID1cbiAgICAgIG9wdGlvbi5zZWxlY3RlZCAmJiByZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICA/IGAgJHt0aGlzLmNsYXNzZXMuc2VsZWN0ZWR9YFxuICAgICAgICA6ICcnO1xuICAgIGNvbnN0IHNob3dTZWxlY3Rpb24gPVxuICAgICAgb3B0aW9uLnNlbGVjdGVkICYmXG4gICAgICAhcmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXNob3ctc2VsZWN0aW9uJykgJiZcbiAgICAgICFyZWxhdGl2ZVNlbC5tdWx0aXBsZVxuICAgICAgICA/IGBoaWRkZW5gXG4gICAgICAgIDogYGA7XG4gICAgY29uc3Qgb3B0aW9uQ2xhc3MgPSBvcHRpb24uZGF0YXNldC5vcHRDbGFzc1xuICAgICAgPyBgICR7b3B0aW9uLmRhdGFzZXQub3B0Q2xhc3N9YFxuICAgICAgOiAnJztcbiAgICBjb25zdCBvcHRpb25MaW5rID0gb3B0aW9uLmRhdGFzZXQub3B0aW9uTGlua1xuICAgICAgPyBvcHRpb24uZGF0YXNldC5vcHRpb25MaW5rXG4gICAgICA6IGZhbHNlO1xuICAgIGNvbnN0IG9wdGlvbkxpbmtUYXJnZXQgPSBvcHRpb24uaGFzQXR0cmlidXRlKCdkYXRhLW9wdGlvbi1saW5rLXRhcmdldCcpXG4gICAgICA/IGB0YXJnZXQ9XCJfYmxhbmtcImBcbiAgICAgIDogJyc7XG4gICAgbGV0IG9wdGlvbkhUTUwgPSBgYDtcblxuICAgIG9wdGlvbkhUTUwgKz0gb3B0aW9uTGlua1xuICAgICAgPyBgPGEgJHtvcHRpb25MaW5rVGFyZ2V0fSAke3Nob3dTZWxlY3Rpb259IGhyZWY9XCIke29wdGlvbkxpbmt9XCIgZGF0YS1vcHQtdmFsPVwiJHtvcHRpb24udmFsdWV9XCIgY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5vcHRpb259JHtvcHRpb25DbGFzc30ke3NlbGVjdGlvbnN9XCI+YFxuICAgICAgOiBgPGJ1dHRvbiAke3Nob3dTZWxlY3Rpb259IGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMub3B0aW9ufSR7b3B0aW9uQ2xhc3N9JHtzZWxlY3Rpb25zfVwiIGRhdGEtb3B0LXZhbD1cIiR7b3B0aW9uLnZhbHVlfVwiIHR5cGU9XCJidXR0b25cIj5gO1xuICAgIG9wdGlvbkhUTUwgKz0gdGhpcy5nZXRDb250ZW50KG9wdGlvbik7XG4gICAgb3B0aW9uSFRNTCArPSBvcHRpb25MaW5rID8gYDwvYT5gIDogYDwvYnV0dG9uPmA7XG4gICAgcmV0dXJuIG9wdGlvbkhUTUw7XG4gIH1cbiAgLy8gZ2V0IHNlbGVjdCBjb250ZW50XG4gIGdldENvbnRlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uRGF0YSA9IG9wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0XG4gICAgICA/IGAke29wdGlvbi5kYXRhc2V0Lm9wdEFzc2V0fWBcbiAgICAgIDogJyc7XG4gICAgY29uc3Qgb3B0aW9uRGF0YUhUTUwgPVxuICAgICAgb3B0aW9uRGF0YS5pbmRleE9mKCdpbWcnKSA+PSAwXG4gICAgICAgID8gYDxpbWcgc3JjPVwiJHtvcHRpb25EYXRhfVwiIGFsdD1cIlwiPmBcbiAgICAgICAgOiBvcHRpb25EYXRhO1xuICAgIGxldCBvcHRpb25Db250ZW50SFRNTCA9IGBgO1xuXG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YVxuICAgICAgPyBgPHNwYW4gY2xhc3M9XCIke3RoaXMuY2xhc3Nlcy5ncm91cH1cIj5gXG4gICAgICA6ICcnO1xuICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGFcbiAgICAgID8gYDxzcGFuIGNsYXNzPVwiJHt0aGlzLmNsYXNzZXMuYXNzZXR9XCI+YFxuICAgICAgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gb3B0aW9uRGF0YUhUTUwgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uRGF0YSA/IGA8c3BhbiBjbGFzcz1cIiR7dGhpcy5jbGFzc2VzLnR4dH1cIj5gIDogJyc7XG4gICAgb3B0aW9uQ29udGVudEhUTUwgKz0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgIG9wdGlvbkNvbnRlbnRIVE1MICs9IG9wdGlvbkRhdGEgPyBgPC9zcGFuPmAgOiAnJztcbiAgICBvcHRpb25Db250ZW50SFRNTCArPSBvcHRpb25EYXRhID8gYDwvc3Bhbj5gIDogJyc7XG4gICAgcmV0dXJuIG9wdGlvbkNvbnRlbnRIVE1MO1xuICB9XG4gIC8vIGdldCBzZWxlY3QgcGxhY2Vob2xkZXJcbiAgZ2V0UGxhY2Vob2xkZXIocmVsYXRpdmVTZWwpIHtcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IEFycmF5LmZyb20ocmVsYXRpdmVTZWwub3B0aW9ucykuZmluZChcbiAgICAgIG9wdGlvbiA9PiAhb3B0aW9uLnZhbHVlXG4gICAgKTtcblxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuc3VidGl0bGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBsYWNlaG9sZGVyLnRleHRDb250ZW50LFxuICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoLXNob3cnKSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBzaG93OiBwbGFjZWhvbGRlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsLXBoJyksXG4gICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIuZGF0YXNldC5vcHRQbGFjZWhvbGRlcixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIC8vIGdldCBzZWxlY3RlZCBvcHRpb25zIGRhdGFcbiAgZ2V0RGF0YShyZWxhdGl2ZVNlbCkge1xuICAgIGxldCBzZWxlY3Rpb25zID0gW107XG5cbiAgICBpZiAocmVsYXRpdmVTZWwubXVsdGlwbGUpIHtcbiAgICAgIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHJlbGF0aXZlU2VsLm9wdGlvbnMpXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0aW9ucy5wdXNoKHJlbGF0aXZlU2VsLm9wdGlvbnNbcmVsYXRpdmVTZWwuc2VsZWN0ZWRJbmRleF0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudHM6IHNlbGVjdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24pLFxuICAgICAgdmFsdWVzOiBzZWxlY3Rpb25zXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi52YWx1ZSlcbiAgICAgICAgLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSxcbiAgICAgIGh0bWw6IHNlbGVjdGlvbnMubWFwKG9wdGlvbiA9PiB0aGlzLmdldENvbnRlbnQob3B0aW9uKSksXG4gICAgfTtcbiAgfVxuXG4gIC8vIHNlbGVjdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIGluaXQgc2VsZWN0aW9uc1xuICBpbml0U2VsZWN0aW9ucyhlKSB7XG4gICAgY29uc3QgcmVsYXRpdmVTZWwgPSBlLnRhcmdldDtcblxuICAgIHRoaXMuYnVpbGQocmVsYXRpdmVTZWwpO1xuICAgIHRoaXMuc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCk7XG4gIH1cbiAgLy8gc2V0IHNlbGVjdGlvbnNcbiAgc2V0U2VsZWN0aW9ucyhyZWxhdGl2ZVNlbCkge1xuICAgIGNvbnN0IHNlbGVjdCA9IHJlbGF0aXZlU2VsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocmVsYXRpdmVTZWwuaGFzQXR0cmlidXRlKCdkYXRhLXN1Ym1pdCcpICYmIHJlbGF0aXZlU2VsLnZhbHVlKSB7XG4gICAgICBsZXQgdGVtcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgdGVtcEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICByZWxhdGl2ZVNlbC5jbG9zZXN0KCdmb3JtJykuYXBwZW5kKHRlbXBCdXR0b24pO1xuICAgICAgdGVtcEJ1dHRvbi5jbGljaygpO1xuICAgICAgdGVtcEJ1dHRvbi5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmVsYXRpdmVTZWwucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5maWxsZWQpO1xuICAgIHRoaXMuc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpO1xuICB9XG4gIC8vIGN1c3RvbSBzZWxlY3QgZXZlbnQgKGxpc3RlbiB0byBhbnkgc2VsZWN0aW9ucyAvIG11dGF0aW9ucylcbiAgc2VsZWN0aW9uKHNlbGVjdCwgcmVsYXRpdmVTZWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24nLCB7XG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgIHNlbGVjdDogcmVsYXRpdmVTZWwsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbm5ldyBTZWxlY3Qoe30pO1xuIiwiLyoqXG4gKiBzZXQgaGFzaCB0byB1cmxcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRIYXNoID0gaGFzaCA9PiB7XG4gIGhhc2ggPSBoYXNoID8gYCMke2hhc2h9YCA6IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF07XG4gIGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgaGFzaCk7XG59O1xuXG4vKipcbiAqIGdldCBoYXNoIGZyb20gdXJsXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEhhc2ggPSAoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcbiAgfVxufTtcblxuLy8gYm9keSBsb2NrXG5leHBvcnQgbGV0IGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbi8qKlxuICogdG9nZ2xlcyBib2R5IGxvY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheVxuICovXG5leHBvcnQgY29uc3QgYm9keUxvY2tUb2dnbGUgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2snKSkge1xuICAgIGJvZHlVbmxvY2soZGVsYXkpO1xuICB9IGVsc2Uge1xuICAgIGJvZHlMb2NrKGRlbGF5KTtcbiAgfVxufTtcbi8qKlxuICogdW5sb2NrcyBib2R5XG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJvZHlVbmxvY2sgPSAoZGVsYXkgPSA1MDApID0+IHtcbiAgaWYgKGJvZHlMb2NrU3RhdHVzKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICAgIH0sIGRlbGF5KTtcbiAgICBib2R5TG9ja1N0YXR1cyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgYm9keUxvY2tTdGF0dXMgPSB0cnVlO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxufTtcbi8qKlxuICogbG9ja3MgYm9keVxuICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gKi9cbmV4cG9ydCBjb25zdCBib2R5TG9jayA9IChkZWxheSA9IDUwMCkgPT4ge1xuICBpZiAoYm9keUxvY2tTdGF0dXMpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9jaycpO1xuXG4gICAgYm9keUxvY2tTdGF0dXMgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGJvZHlMb2NrU3RhdHVzID0gdHJ1ZTtcbiAgICB9LCBkZWxheSk7XG4gIH1cbn07XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge251bWJlcn0gZGF0YVNldFZhbHVlXG4gKiBwcm9jZXNzIG1lZGlhIHJlcXVlc3RzIGZyb20gYXR0cmlidXRlc1xuICovXG5leHBvcnQgY29uc3QgZGF0YU1lZGlhUXVlcmllcyA9IChhcnJheSwgZGF0YVNldFZhbHVlKSA9PiB7XG4gIC8vIGdldCBvYmplY3RzIHdpdGggbWVkaWEgcXVlcmllc1xuICBjb25zdCBtZWRpYSA9IEFycmF5LmZyb20oYXJyYXkpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIHNlbGYpIHtcbiAgICBpZiAoaXRlbS5kYXRhc2V0W2RhdGFTZXRWYWx1ZV0pIHtcbiAgICAgIHJldHVybiBpdGVtLmRhdGFzZXRbZGF0YVNldFZhbHVlXS5zcGxpdCgnLCcpWzBdO1xuICAgIH1cbiAgfSk7XG4gIC8vIG9iamVjdHMgd2l0aCBtZWRpYSBxdWVyaWVzIGluaXRpYWxpemF0aW9uXG4gIGlmIChtZWRpYS5sZW5ndGgpIHtcbiAgICBjb25zdCBicmVha3BvaW50c0FycmF5ID0gW107XG4gICAgbWVkaWEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IGl0ZW0uZGF0YXNldFtkYXRhU2V0VmFsdWVdO1xuICAgICAgY29uc3QgYnJlYWtwb2ludCA9IHt9O1xuICAgICAgY29uc3QgcGFyYW1zQXJyYXkgPSBwYXJhbXMuc3BsaXQoJywnKTtcbiAgICAgIGJyZWFrcG9pbnQudmFsdWUgPSBwYXJhbXNBcnJheVswXTtcbiAgICAgIGJyZWFrcG9pbnQudHlwZSA9IHBhcmFtc0FycmF5WzFdID8gcGFyYW1zQXJyYXlbMV0udHJpbSgpIDogJ21heCc7XG4gICAgICBicmVha3BvaW50Lml0ZW0gPSBpdGVtO1xuICAgICAgYnJlYWtwb2ludHNBcnJheS5wdXNoKGJyZWFrcG9pbnQpO1xuICAgIH0pO1xuICAgIC8vIGdldCB1bmlxdWUgYnJlYWtwb2ludHNcbiAgICBsZXQgbWRRdWVyaWVzID0gYnJlYWtwb2ludHNBcnJheS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICcoJyArXG4gICAgICAgIGl0ZW0udHlwZSArXG4gICAgICAgICctd2lkdGg6ICcgK1xuICAgICAgICBpdGVtLnZhbHVlICtcbiAgICAgICAgJ3B4KSwnICtcbiAgICAgICAgaXRlbS52YWx1ZSArXG4gICAgICAgICcsJyArXG4gICAgICAgIGl0ZW0udHlwZVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBtZFF1ZXJpZXMgPSB1bmlxdWVBcnJheShtZFF1ZXJpZXMpO1xuICAgIGNvbnN0IG1kUXVlcmllc0FycmF5ID0gW107XG5cbiAgICBpZiAobWRRdWVyaWVzLmxlbmd0aCkge1xuICAgICAgLy8gd29yayB3aXRoIGV2ZXJ5IGJyZWFrcG9pbnRcbiAgICAgIG1kUXVlcmllcy5mb3JFYWNoKGJyZWFrcG9pbnQgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXNBcnJheSA9IGJyZWFrcG9pbnQuc3BsaXQoJywnKTtcbiAgICAgICAgY29uc3QgbWVkaWFCcmVha3BvaW50ID0gcGFyYW1zQXJyYXlbMV07XG4gICAgICAgIGNvbnN0IG1lZGlhVHlwZSA9IHBhcmFtc0FycmF5WzJdO1xuICAgICAgICBjb25zdCBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEocGFyYW1zQXJyYXlbMF0pO1xuICAgICAgICAvLyBvYmplY3RzIHdpdGggY29uZGl0aW9uc1xuICAgICAgICBjb25zdCBpdGVtc0FycmF5ID0gYnJlYWtwb2ludHNBcnJheS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PT0gbWVkaWFCcmVha3BvaW50ICYmIGl0ZW0udHlwZSA9PT0gbWVkaWFUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtZFF1ZXJpZXNBcnJheS5wdXNoKHtcbiAgICAgICAgICBpdGVtc0FycmF5LFxuICAgICAgICAgIG1hdGNoTWVkaWEsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWRRdWVyaWVzQXJyYXk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIHNtb290aGx5IHNsaWRlcyB1cFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDAsIHNob3dtb3JlID0gMCkgPT4ge1xuICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ19zbGlkZScpKSB7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ19zbGlkZScpO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xuICAgIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGAke3RhcmdldC5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHNob3dtb3JlID8gYCR7c2hvd21vcmV9cmVtYCA6IGAwYDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuICAgIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRhcmdldC5oaWRkZW4gPSAhc2hvd21vcmUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgICAhc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JykgOiBudWxsO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XG4gICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdfc2xpZGUnKTtcbiAgICAgIC8vIGNyZWF0ZSBldmVudFxuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdzbGlkZVVwRG9uZScsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiBzbW9vdGhseSBzbGlkZXMgZG93blxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd21vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IF9zbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCwgc2hvd21vcmUgPSAwKSA9PiB7XG4gIGlmICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnX3NsaWRlJykpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnX3NsaWRlJyk7XG4gICAgdGFyZ2V0LmhpZGRlbiA9IHRhcmdldC5oaWRkZW4gPyBmYWxzZSA6IG51bGw7XG4gICAgc2hvd21vcmUgPyB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpIDogbnVsbDtcbiAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gc2hvd21vcmUgPyBgJHtzaG93bW9yZX1yZW1gIDogYDBgO1xuICAgIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XG4gICAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG4gICAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcbiAgICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xuICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnX3NsaWRlJyk7XG4gICAgICAvLyBjcmVhdGUgZXZlbnRcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnc2xpZGVEb3duRG9uZScsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiB0b2dnbGVzIHNtb290aCBzbGlkZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge251bWJlcn0gZHVyYXRpb25cbiAqIEByZXR1cm5zIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBfc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xuICBpZiAodGFyZ2V0LmhpZGRlbikge1xuICAgIHJldHVybiBfc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBfc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcbiAgfVxufTtcblxuLyoqXG4gKiBjb252ZXJ0cyByZW0gdG8gcGl4ZWxzXG4gKiBAcGFyYW0ge251bWJlcn0gcmVtVmFsdWVcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtVG9QeChyZW1WYWx1ZSkge1xuICAvLyDQn9C+0LvRg9GH0LDQtdC8INGC0LXQutGD0YnQuNC5INCx0LDQt9C+0LLRi9C5INGA0LDQt9C80LXRgCDRiNGA0LjRhNGC0LAgKGZvbnQtc2l6ZSkg0LjQtyDRjdC70LXQvNC10L3RgtCwIDxodG1sPlxuICB2YXIgaHRtbEZvbnRTaXplID0gcGFyc2VGbG9hdChcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemVcbiAgKTtcblxuICAvLyDQn9C10YDQtdCy0L7QtNC40Lwg0LfQvdCw0YfQtdC90LjQtSDQuNC3IHJlbSDQsiBweFxuICB2YXIgcHhWYWx1ZSA9IHJlbVZhbHVlICogaHRtbEZvbnRTaXplO1xuXG4gIC8vINCe0LrRgNGD0LPQu9GP0LXQvCDQt9C90LDRh9C10L3QuNC1INC00L4g0YbQtdC70YvRhSDQv9C40LrRgdC10LvQtdC5ICjQv9C+INC20LXQu9Cw0L3QuNGOKVxuICByZXR1cm4gTWF0aC5yb3VuZChweFZhbHVlKSArICdweCc7XG59XG5cbi8vIHJlbW92ZSBjbGFzcyBmcm9tIGFsbCBhcnJheSBlbGVtZW50c1xuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzZXMgPSAoYXJyYXksIGNsYXNzTmFtZSkgPT4ge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYXJyYXlbaV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG59O1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLHJlZ3VsYXIsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0ZsZXg6cmVndWxhciw1MDAsNjAwLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzpyZWd1bGFyLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBGbGV4XCI7XG4gIGZvbnQtc2l6ZTogMC41MjA4MzM1dnc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBidWdmaXggaW5maW5pdGUgMXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICMyZTJlMmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYxZjM7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYSB7XG4gIGNvbG9yOiB1bnNldDtcbn1cblxuYSxcbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuYSxcbnRleHRhcmVhIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250OiBpbmhlcml0O1xufVxuYnV0dG9uOmZvY3VzLFxuaW5wdXQ6Zm9jdXMsXG5hOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uOmFjdGl2ZSxcbmlucHV0OmFjdGl2ZSxcbmE6YWN0aXZlLFxudGV4dGFyZWE6YWN0aXZlIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udDogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudWwgbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTU2cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG5zdmcsXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuaHRtbC5sb2NrLFxuaHRtbC5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbn1cblxuLmgge1xuICBmb250LWZhbWlseTogXCJOdW5pdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEyMCU7XG59XG4uaF9oMSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbn1cbi5oX2gyIHtcbiAgZm9udC1zaXplOiAzLjRyZW07XG59XG4uaF9oMyB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xufVxuXG4udHh0MTYge1xuICBsaW5lLWhlaWdodDogMTIwJTtcbn1cbi50eHQxNl9jYXBzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDEuNnJlbSAzLjJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMS42cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgMTA2LCAxNzIpO1xufVxuLmJ0bl93aGl0ZSB7XG4gIGNvbG9yOiByZ2IoMTA1LCAxMjksIDIxNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYnRuX3doaXRlIHN2ZyBwYXRoIHtcbiAgc3Ryb2tlOiByZ2IoMTA1LCAxMjksIDIxNSk7XG59XG4uYnRuX3ByaW1hcnkgc3ZnIHtcbiAgd2lkdGg6IDIuNnJlbTtcbn1cbi5idG5fcHJpbWFyeSAuYnRuX19pY29uIHtcbiAgZmxleDogMCAwIDIuNnJlbTtcbiAgd2lkdGg6IDIuNnJlbTtcbiAgaGVpZ2h0OiAyLjFyZW07XG59XG4uYnRuX2dob3N0IHtcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbSAwLjRyZW0gMS40cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjZDc2OTdkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XG59XG4uYnRuX2dob3N0IC5hcnIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xufVxuLmJ0bl9naG9zdCAuYnRuX190eHQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJ0bl9fdHh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbkBrZXlmcmFtZXMgYXJyQW5pbTEge1xuICAzMyUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAxO1xuICB9XG4gIDY2JSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDAuNTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMC4yO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFyckFuaW0yIHtcbiAgMzMlIHtcbiAgICBzdHJva2Utb3BhY2l0eTogMC4yO1xuICB9XG4gIDY2JSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDAuNTtcbiAgfVxufVxuQGtleWZyYW1lcyBhcnJBbmltMyB7XG4gIDMzJSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDAuNTtcbiAgfVxuICA2NiUge1xuICAgIHN0cm9rZS1vcGFjaXR5OiAwLjI7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IDE7XG4gIH1cbn1cbi5saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjJyZW0pO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTgxZDc7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG5cbi5hcnIge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA0cmVtO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTc7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xufVxuLmFycl92ZXJ0aWNhbCBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uYXJyIHN2ZyB7XG4gIHdpZHRoOiAxcmVtO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4uYmFkZ2Uge1xuICBwYWRkaW5nOiAxLjZyZW0gMy4ycmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xufVxuLmJhZGdlX2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5iYWRnZV9ncmF5IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OThlOWY7XG59XG4uYmFkZ2VfX3R4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5icmVhZGNydW1icyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sdW1uLWdhcDogMS40cmVtO1xufVxuLmJyZWFkY3J1bWJzIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjODk4ZTlmO1xufVxuLmJyZWFkY3J1bWJzIGE6OmFmdGVyIHtcbiAgY29udGVudDogXCIvXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTAuNHJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT10ZWxdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMS4ycmVtO1xufVxuLmlucHV0Ll9mb3JtLWVycm9yIC5pbnB1dF9fbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogYXR0cihkYXRhLWVycm9yKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5pbnB1dF9fZmllbGQge1xuICBwYWRkaW5nOiAxLjZyZW0gMnJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBib3JkZXIgMC4zcyBlYXNlO1xufVxuLmlucHV0X19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzg5OGU5ZjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLmlucHV0X19maWVsZC5fZm9ybS1lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNzY5N2Q7XG4gIGNvbG9yOiAjZDc2OTdkO1xufVxuLmlucHV0X19sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sdW1uLWdhcDogM3JlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlOWVjZjU7XG59XG4uaW5wdXQuX2Zvcm0tZXJyb3IgLmlucHV0X19maWVsZDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2Q3Njk3ZDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcm93LWdhcDogMS4ycmVtO1xufVxuLmRyb3Bkb3duX19sYWJlbCB7XG4gIGNvbG9yOiAjZTllY2Y1O1xufVxuXG4uc2VsZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlbGVjdF9fYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWxlY3RfX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0X192YWx1ZSB7XG4gIHBhZGRpbmc6IDEuNnJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgaGVpZ2h0OiA1LjZyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlbGVjdF9fdmFsdWUgPiAqIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCAycmVtO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NlbC1hcnIuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUge1xuICBjb250ZW50OiBhdHRyKGRhdGEtc2VsLWxhYmVsKTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLl9zZWxlY3QtZmlsbGVkIC5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VsZWN0X192YWx1ZS5fc2VsZWN0LWxhYmVsOjpiZWZvcmUsXG4uc2VsZWN0X192YWx1ZSAuc2VsZWN0X19jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAzMS40cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5zZWxlY3RfX3RleHQge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5zZWxlY3RfX2lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc2VsZWN0X19vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuOHJlbSk7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMS42cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDUyLCA1MiwgNTIsIDAuMTUpO1xufVxuLnNlbGVjdF9fc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAxOXJlbTtcbn1cbi5zZWxlY3RfX29wdGlvbiB7XG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuLnNlbGVjdF9fb3B0aW9uOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uc2VsZWN0X19vcHRpb246bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLnNlbGVjdF9fb3B0aW9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNztcbn1cbi5zZWxlY3RfX29wdGlvbi5fc2VsZWN0LXNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zZWxlY3RfX2dyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG59XG4uc2VsZWN0X19zdWJ0aXRsZSB7XG4gIGN1cnNvcjogdGV4dDtcbn1cbi5zZWxlY3QuX3NlbGVjdC1vcGVuZWQge1xuICB6LWluZGV4OiA1O1xufVxuLnNlbGVjdC5fc2VsZWN0LW9wZW5lZCAuc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbn1cbi5zZWxlY3QuX3NlbGVjdC1lcnJvcjpub3QoLnNlbGVjdC5fc2VsZWN0LWVycm9yLl9zZWxlY3QtZmlsbGVkLCAuc2VsZWN0Ll9zZWxlY3QtZXJyb3IuX3NlbGVjdC1vcGVuZWQpIC5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiAjZDc2OTdkO1xufVxuLl9zZWxlY3QtbGlzdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjY29yZGlvbl9faXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDIuNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5hY2NvcmRpb25fX3RpdGxlIHtcbiAgcGFkZGluZzogMi40cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjY29yZGlvbl9fdGl0bGUuX2FjY29yZGlvbi1hY3RpdmUgLmFyciBzdmcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmFjY29yZGlvbl9fdGl0bGUuX2FjY29yZGlvbi1hY3RpdmUgLmFyciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTgxZDc7XG59XG4uYWNjb3JkaW9uX190aXRsZSAuYXJyIHtcbiAgZmxleDogMCAwIDVyZW07XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG59XG4uYWNjb3JkaW9uX19ib2R5IHtcbiAgcGFkZGluZzogMi40cmVtO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5hY2NvcmRpb25fX3RleHQge1xuICBjb2xvcjogcmdiKDEzMiwgMTMyLCAxMzIpO1xufVxuLmFjY29yZGlvbl9fdGV4dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3ZlcikgYW5kIChtaW4td2lkdGg6IDQ4ZW0pe1xuICAuYnRuX3ByaW1hcnk6aG92ZXIgc3ZnIHBhdGg6Zmlyc3QtY2hpbGQge1xuICAgIGFuaW1hdGlvbjogYXJyQW5pbTEgMC44cyBsaW5lYXIgMHMgaW5maW5pdGU7XG4gIH1cbiAgLmJ0bl9wcmltYXJ5OmhvdmVyIHN2ZyBwYXRoOm50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uOiBhcnJBbmltMiAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbiAgfVxuICAuYnRuX3ByaW1hcnk6aG92ZXIgc3ZnIHBhdGg6bGFzdC1jaGlsZCB7XG4gICAgYW5pbWF0aW9uOiBhcnJBbmltMyAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcbiAgfVxuICAuYnRuX2dob3N0OmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjk4MWQ3O1xuICB9XG4gIC5idG5fZ2hvc3Q6aG92ZXIgLmFyciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY5ODFkNztcbiAgfVxuICAubGluazpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGV4KDApO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSl7XG4gIC50eHQxNiB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpe1xuICBodG1sIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKXtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiA1cHg7XG4gICAgZm9udC1zaXplOiAxLjU2MjV2dztcbiAgICBmb250LXNpemU6IDEuMzMzMzMzMzMzM3Z3O1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgfVxuICBib2R5IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMy4ycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5oX2gyIHtcbiAgICBmb250LXNpemU6IDQuNHJlbTtcbiAgfVxuICAuaF9oMyB7XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gIH1cbiAgLmJ0bl9wcmltYXJ5IHtcbiAgICBwYWRkaW5nOiAzLjJyZW0gNXJlbTtcbiAgfVxuICAuYnRuX3ByaW1hcnkgc3ZnIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgfVxuICAuYnRuX3ByaW1hcnkgLmJ0bl9faWNvbiB7XG4gICAgZmxleDogMCAwIDRyZW07XG4gICAgd2lkdGg6IDRyZW07XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gIH1cbiAgLmJ0bl9naG9zdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLmJ0biB7XG4gICAgY29sdW1uLWdhcDogMy4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcmVtO1xuICB9XG4gIC5idG5fX3R4dCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG4gIC5saW5rIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjRyZW0gc29saWQgIzY5ODFkNztcbiAgfVxuICAubGluazo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IG5vbmU7XG4gIH1cbiAgLmFyciB7XG4gICAgZmxleDogMCAwIDVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICB9XG4gIC5hcnIgc3ZnIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICB9XG4gIC5iYWRnZSB7XG4gICAgcGFkZGluZzogMi40cmVtIDQuOHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcbiAgfVxuICAuYnJlYWRjcnVtYnMge1xuICAgIGNvbHVtbi1nYXA6IDIuNnJlbTtcbiAgfVxuICAuYnJlYWRjcnVtYnMgYTo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAtMC44cmVtO1xuICB9XG4gIC5pbnB1dCB7XG4gICAgcm93LWdhcDogMS42cmVtO1xuICB9XG4gIC5pbnB1dF9fZmllbGQge1xuICAgIHBhZGRpbmc6IDIuNHJlbSAzLjZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMy4ycmVtO1xuICB9XG4gIC5kcm9wZG93biB7XG4gICAgcm93LWdhcDogMS42cmVtO1xuICB9XG4gIC5zZWxlY3RfX3RpdGxlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XG4gIH1cbiAgLnNlbGVjdF9fdmFsdWUge1xuICAgIHBhZGRpbmc6IDIuNHJlbSAzLjJyZW07XG4gICAgZ2FwOiA0cmVtO1xuICAgIGhlaWdodDogOC44cmVtO1xuICB9XG4gIC5zZWxlY3RfX3ZhbHVlOjphZnRlciB7XG4gICAgZmxleDogMCAwIDMuMnJlbTtcbiAgICB3aWR0aDogMy4ycmVtO1xuICAgIGhlaWdodDogMy4ycmVtO1xuICB9XG4gIC5zZWxlY3RfX29wdGlvbnMge1xuICAgIHBhZGRpbmc6IDMuMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAzLjJyZW07XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9uIHtcbiAgICBwYWRkaW5nOiAyLjRyZW0gMDtcbiAgfVxuICAuYWNjb3JkaW9uX19pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xuICB9XG4gIC5hY2NvcmRpb25fX3RpdGxlIHtcbiAgICBwYWRkaW5nOiAzLjJyZW07XG4gIH1cbiAgLmFjY29yZGlvbl9fdGl0bGUgLmFyciB7XG4gICAgZmxleDogMCAwIDlyZW07XG4gICAgd2lkdGg6IDlyZW07XG4gICAgaGVpZ2h0OiA5cmVtO1xuICB9XG4gIC5hY2NvcmRpb25fX2JvZHkge1xuICAgIHBhZGRpbmc6IDMuMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKXtcbiAgLmFycjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxMDYsIDE3Mik7XG4gIH1cbiAgLmJhZGdlX2hhcy1ob3Zlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk2LCAxMzMsIDE4MCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cbiAgLnNlbGVjdF9fb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0X19vcHRpb246aG92ZXIuc2VsZWN0X19zdWJ0aXRsZSkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuYWNjb3JkaW9uX190aXRsZSAuYXJyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk4MWQ3O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fdHlwby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxlcy9fbGluay5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19hcnJvdy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19iYWRnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19icmVhZGNydW1icy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19pbnB1dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvc3R5bGVzL19zZWxlY3Quc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3VpL3N0eWxl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QUFBO0lBQ0EsY0FBQTtFVHlxQlY7QUF6REY7QVUzcUJBO0VOdUJRO0lBQ0ksbUNBQUE7RUorV1Y7RUtsWFU7SUFDSSxtQ0FBQTtJQUNBLGNMaEJSO0VBa2FOO0VRdlBjO0lBQ0ksZUFBQTtFUm1lbEI7RVN0bkJjO0lBQ0kseUJUdEJiO0VBcXNCTDtBQXRCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBGbGV4JzsgLy8g0YjRgNC40YTRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQv9C+INGB0LDQudGC0YNcXG4gICAgZm9udC1zaXplOiAwLjUyMDgzMzV2dzsgLy8g0L3QsCDRgNCw0LfRgNC10YjQtdC90LjQuCAxOTIwIDAuNTIwODM1dncgPT09IDEwcHhcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJ1Z2ZpeCBpbmZpbml0ZSAxcztcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBjb2xvcjogJGZvbnRDb2xvcjsgLy8g0YbQstC10YIg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0YLQtdC60YHRgtCwINC/0L4g0YHQsNC50YLRg1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdDb2xvcjtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYnVnZml4IGluZmluaXRlIDFzO1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuYSB7XFxuICAgIGNvbG9yOiB1bnNldDtcXG59XFxuYSxcXG5hOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuYSxcXG50ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICB9XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbnVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG51bCBsaSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxNTZyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5pbnB1dFt0eXBlPSdudW1iZXInXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXSB7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbn1cXG5cXG5zdmcsXFxuaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICBodG1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxLjU2MjV2dztcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygoMTAwIC8gMzc1KSAqIDV2dyk7IC8vINCz0LTQtSAzNzUg0Y3RgtC+INGI0LjRgNC40L3QsCDQvNC+0LEg0LLQtdGA0YHQuNC4INC80LDQutC10YLQsFxcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJvZHkge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZzogMCAzLjJyZW07IC8vINCyINC80L7QsSDQstC10YDRgdC40Lgg0L7RgtGB0YLRg9C/INC+0YIg0LrRgNCw0Y8g0LfQsNC00LDQtdC8INC00LvRjyDQstGB0LXRhSDQutC+0L3RgtC10LnQvdC10YDQvtCyLCDQsCDRgtCw0Lwg0LPQtNC1INC90LUg0L3Rg9C20L3QviDQvNC+0LbQtdC8INGC0L7Rh9C10YfQvdC+INGD0LHRgNCw0YLRjFxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXCIsXCIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWl4aW5zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbkBpbXBvcnQgJy4vbWl4aW5zJztcXG5cXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2YXJpYWJsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcblxcbi8vIGNvbG9yc1xcbiR3aGl0ZTogI2ZmZmZmZjtcXG4kYmxhY2s6ICMwMDAwMDA7XFxuJGZvbnRDb2xvcjogIzJlMmUyZTtcXG4kYmdDb2xvcjogI2VmZjFmMztcXG4kYmx1ZTogIzY5ODFkNztcXG4kbGlnaHRCbHVlOiAjNjNiM2RmO1xcbiRyZWQ6ICNkNzY5N2Q7XFxuJGdyYXk6ICNkZWUyZTc7XFxuJHRleHRHcmF5OiAjODk4ZTlmO1xcbiRsaWdodEdyYXk6ICNlOWVjZjU7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb250cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAscmVndWxhciw3MDAmZGlzcGxheT1zd2FwKTtcXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0ZsZXg6cmVndWxhciw1MDAsNjAwLDgwMCZkaXNwbGF5PXN3YXApO1xcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86cmVndWxhciw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXApO1xcblxcbi8vIGxvY2FsIGZvbnRzXFxuLy8gQGltcG9ydCAnLi9mb250cyc7XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBiYXNlIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4vLyBiYXNlIHNjc3MgZmlsZVxcbkBpbXBvcnQgJy4vc2V0JztcXG5cXG4vLyBodG1sXFxuaHRtbC5sb2NrLFxcbmh0bWwubG9jayBib2R5IHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi8vIG1haW5cXG5tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcXG59XFxuXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG5cXG4vLyBoZWFkZXIgLyBmb290ZXJcXG5AaW1wb3J0ICcuL3NlY3Rpb25zL2hlYWRlcic7XFxuQGltcG9ydCAnLi9zZWN0aW9ucy9mb290ZXInO1xcblxcbi8vIHVpXFxuQGltcG9ydCAnLi4vdWkvc3R5bGVzL3VpLnNjc3MnO1xcblxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXFxuQGltcG9ydCAnLi9kZXYvdnptc2sxLnNjc3MnO1xcbkBpbXBvcnQgJy4vZGV2L21hcmt1c0RNLnNjc3MnO1xcbkBpbXBvcnQgJy4vZGV2L3VraWswLnNjc3MnO1xcbkBpbXBvcnQgJy4vZGV2L2tpZTZlci5zY3NzJztcXG5cIixcIi5oIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBsaW5lLWhlaWdodDogMTIwJTtcXG5cXG4gICAgJl9oMSB7XFxuICAgICAgICBmb250LXNpemU6IDZyZW07XFxuICAgIH1cXG5cXG4gICAgJl9oMiB7XFxuICAgICAgICBmb250LXNpemU6IDMuNHJlbTtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA0LjRyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9oMyB7XFxuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzLjZyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLnR4dDE2IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxuXFxuICAgICZfY2FwcyB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgfVxcbn1cXG5cIixcIi5idG4ge1xcbiAgICBwYWRkaW5nOiAxLjZyZW0gMy4ycmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDEuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTMsIDEwNiwgMTcyLCAxKTtcXG5cXG4gICAgJl93aGl0ZSB7XFxuICAgICAgICBjb2xvcjogcmdiYSgxMDUsIDEyOSwgMjE1LCAxKTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gICAgICAgIHN2ZyBwYXRoIHtcXG4gICAgICAgICAgICBzdHJva2U6IHJnYmEoMTA1LCAxMjksIDIxNSwgMSk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9wcmltYXJ5IHtcXG4gICAgICAgIHN2ZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDIuNnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idG5fX2ljb24ge1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCAyLjZyZW07XFxuICAgICAgICAgICAgd2lkdGg6IDIuNnJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIuMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMy4ycmVtIDVyZW07XFxuXFxuICAgICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5idG5fX2ljb24ge1xcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgNHJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMy41cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX2dob3N0IHtcXG4gICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW0gMC40cmVtIDEuNHJlbTtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGNvbG9yOiAkcmVkO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2U7XFxuXFxuICAgICAgICAuYXJyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5idG5fX3R4dCB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICAgICAgJl9wcmltYXJ5IHtcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgc3ZnIHBhdGgge1xcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBhcnJBbmltMSAwLjhzIGxpbmVhciAwcyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFyckFuaW0yIDAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGFyckFuaW0zIDAuOHMgbGluZWFyIDBzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgJl9naG9zdCB7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRibHVlO1xcbiAgICAgICAgICAgICAgICAuYXJyIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzLjJyZW07XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHJlbTtcXG4gICAgfVxcblxcbiAgICAvLyAuYnRuX190eHRcXG5cXG4gICAgJl9fdHh0IHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBsaW5lLWhlaWdodDogMTtcXG5cXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5idG5fX2ljb25cXG5cXG4gICAgJl9faWNvbiB7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhcnJBbmltMSB7XFxuICAgIDMzJSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICA2NiUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDAuNTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAwLjI7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBhcnJBbmltMiB7XFxuICAgIDMzJSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMC4yO1xcbiAgICB9XFxuICAgIDY2JSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHN0cm9rZS1vcGFjaXR5OiAwLjU7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBhcnJBbmltMyB7XFxuICAgIDMzJSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMC41O1xcbiAgICB9XFxuICAgIDY2JSB7XFxuICAgICAgICBzdHJva2Utb3BhY2l0eTogMC4yO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgICAgc3Ryb2tlLW9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXCIsXCIubGluayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAwLjJyZW0pO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAwLjJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3ZlcikgYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZXgoMCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjRyZW0gc29saWQgJGJsdWU7XFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixcIi5hcnIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXg6IDAgMCA0cmVtO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG5cXG4gICAgJl92ZXJ0aWNhbCB7XFxuICAgICAgICBzdmcge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBzdmcge1xcbiAgICAgICAgd2lkdGg6IDFyZW07XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MywgMTA2LCAxNzIsIDEpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBmbGV4OiAwIDAgNXJlbTtcXG4gICAgICAgIHdpZHRoOiA1cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcblxcbiAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLmJhZGdlIHtcXG4gICAgcGFkZGluZzogMS42cmVtIDMuMnJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgY29sb3IgMC4zcyBlYXNlO1xcblxcbiAgICAmX2JsdWUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICB9XFxuXFxuICAgICZfZ3JheSB7XFxuICAgICAgICBjb2xvcjogJHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHRHcmF5O1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcbiAgICAgICAgJl9oYXMtaG92ZXIge1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCAxMzMsIDE4MCwgMSk7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICBwYWRkaW5nOiAyLjRyZW0gNC44cmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjByZW07XFxuICAgIH1cXG5cXG4gICAgLy8gLmJhZGdlX190eHRcXG5cXG4gICAgJl9fdHh0IHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG59XFxuXCIsXCIuYnJlYWRjcnVtYnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGNvbHVtbi1nYXA6IDEuNHJlbTtcXG5cXG4gICAgYSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBjb2xvcjogJHRleHRHcmF5O1xcblxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcvJztcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICAgIHJpZ2h0OiAtMC40cmVtO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgY29sdW1uLWdhcDogMi42cmVtO1xcblxcbiAgICAgICAgYSB7XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICByaWdodDogLTAuOHJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLy8gLmJyZWFkY3J1bWJzX190eHRcXG5cXG4gICAgJl9fdHh0IHtcXG4gICAgfVxcbn1cXG5cIixcImlucHV0W3R5cGU9J3RleHQnXSxcXG5pbnB1dFt0eXBlPSdlbWFpbCddLFxcbmlucHV0W3R5cGU9J3RlbCddLFxcbnRleHRhcmVhIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcbnRleHRhcmVhOmZvY3VzLFxcbmlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAxLjJyZW07XFxuICAgICYuX2Zvcm0tZXJyb3Ige1xcbiAgICAgICAgLmlucHV0X19sYWJlbCB7XFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtZXJyb3IpO1xcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcm93LWdhcDogMS42cmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIC5pbnB1dF9fZmllbGRcXG5cXG4gICAgJl9fZmllbGQge1xcbiAgICAgICAgcGFkZGluZzogMS42cmVtIDJyZW07XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNnJlbTtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyIDAuM3MgZWFzZTtcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBjb2xvcjogJHRleHRHcmF5O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgIH1cXG4gICAgICAgICYuX2Zvcm0tZXJyb3Ige1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRyZWQ7XFxuICAgICAgICAgICAgY29sb3I6ICRyZWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuNHJlbSAzLjZyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5pbnB1dF9fbGFiZWxcXG5cXG4gICAgJl9fbGFiZWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIGNvbG9yOiAkbGlnaHRHcmF5O1xcbiAgICB9XFxuXFxuICAgICYuX2Zvcm0tZm9jdXMge1xcbiAgICB9XFxuICAgICYuX2Zvcm0tZXJyb3Ige1xcbiAgICAgICAgLmlucHV0X19maWVsZDo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiAkcmVkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiLFwiLmRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMS4ycmVtO1xcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgcm93LWdhcDogMS42cmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIC5kcm9wZG93bl9fbGFiZWxcXG5cXG4gICAgJl9fbGFiZWwge1xcbiAgICAgICAgY29sb3I6ICRsaWdodEdyYXk7XFxuICAgIH1cXG59XFxuXFxuLnNlbGVjdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgLy8gLnNlbGVjdF9fYm9keVxcblxcbiAgICAmX19ib2R5IHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190aXRsZVxcblxcbiAgICAmX190aXRsZSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjZyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X192YWx1ZVxcblxcbiAgICAmX192YWx1ZSB7XFxuICAgICAgICBwYWRkaW5nOiAxLjZyZW0gMnJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1LjZyZW07XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgID4gKiB7XFxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOjphZnRlciB7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMnJlbTtcXG4gICAgICAgICAgICB3aWR0aDogMnJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2ltYWdlcy9pY29ucy9zZWwtYXJyLnN2Zyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3QtbGFiZWwge1xcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1zZWwtbGFiZWwpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxuICAgICAgICAgICAgICAgIC5fc2VsZWN0LWZpbGxlZCAmIHtcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmLl9zZWxlY3QtbGFiZWw6OmJlZm9yZSxcXG4gICAgICAgIC5zZWxlY3RfX2NvbnRlbnQge1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMzEuNHJlbTtcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDIuNHJlbSAzLjJyZW07XFxuICAgICAgICAgICAgZ2FwOiA0cmVtO1xcbiAgICAgICAgICAgIGhlaWdodDogOC44cmVtO1xcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMuMnJlbTtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjJyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2NvbnRlbnRcXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICAvLyBoaWRlIC8gc2hvdyBzZWxlY3RlZCB2YWx1ZVxcbiAgICAgICAgLy8gJjpub3QoLl9zZWxlY3QtZmlsbGVkICYpIHtcXG4gICAgICAgIC8vICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgLy8gfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19pbnB1dFxcblxcbiAgICAmX19pbnB1dCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX29wdGlvbnNcXG5cXG4gICAgJl9fb3B0aW9ucyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICAgICAgdG9wOiBjYWxjKDEwMCUgKyAwLjhyZW0pO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjZyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDUyLCA1MiwgNTIsIDAuMTUpO1xcblxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAzLjJyZW07XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMy4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX3Njcm9sbFxcblxcbiAgICAmX19zY3JvbGwge1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgICAgIC8vIG1heGltdW0gaGVpZ2h0XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxOXJlbTtcXG5cXG4gICAgICAgIC8vIHNjcm9sbGJhciBzdHlsZXNcXG4gICAgICAgICYuc2ltcGxlYmFyLXNjcm9sbGFibGUteSB7XFxuICAgICAgICAgICAgLnNpbXBsZWJhci10cmFjay5zaW1wbGViYXItdmVydGljYWwge1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuc2ltcGxlYmFyLXNjcm9sbGJhciB7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX29wdGlvblxcbiAgICAmX19vcHRpb24ge1xcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgICAgIH1cXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5fc2VsZWN0LXNlbGVjdGVkIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICY6bm90KCYuc2VsZWN0X19zdWJ0aXRsZSkge1xcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjRyZW0gMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X19ncm91cFxcblxcbiAgICAmX19ncm91cCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2Fzc2V0XFxuXFxuICAgICZfX2Fzc2V0IHtcXG4gICAgfVxcblxcbiAgICAvLyAuc2VsZWN0X190ZXh0XFxuXFxuICAgICZfX3RleHQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5zZWxlY3RfX2hpbnRcXG5cXG4gICAgJl9faGludCB7XFxuICAgIH1cXG5cXG4gICAgLy8gLnNlbGVjdF9fc3VidGl0bGVcXG5cXG4gICAgJl9fc3VidGl0bGUge1xcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xcbiAgICB9XFxuXFxuICAgIC8vIHNlbGVjdCBzdGF0ZVxcbiAgICAmLl9zZWxlY3Qtb3BlbmVkIHtcXG4gICAgICAgIHotaW5kZXg6IDU7XFxuICAgICAgICAuc2VsZWN0X192YWx1ZTo6YWZ0ZXIge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1mb2N1c2VkIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtZXJyb3Ige1xcbiAgICAgICAgJjpub3QoJi5fc2VsZWN0LWZpbGxlZCwgJi5fc2VsZWN0LW9wZW5lZCkge1xcbiAgICAgICAgICAgIC5zZWxlY3RfX3ZhbHVlLl9zZWxlY3QtbGFiZWwge1xcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWQ7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LWZpbGxlZCB7XFxuICAgICAgICAmOm5vdCgmLl9zZWxlY3Qtb3BlbmVkKSB7XFxuICAgICAgICAgICAgJjpub3QoJi5fc2VsZWN0LXNob3ctdmFsKSB7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1zaG93LXZhbCB7XFxuICAgICAgICAmLl9zZWxlY3QtZm9jdXNlZCxcXG4gICAgICAgICYuX3NlbGVjdC1maWxsZWQsXFxuICAgICAgICAmLl9zZWxlY3QtZXJyb3IsXFxuICAgICAgICAmLl9zZWxlY3QtZGlzYWJsZWQge1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuX3NlbGVjdC1kaXNhYmxlZCB7XFxuICAgIH1cXG4gICAgJi5fc2VsZWN0LW11bHRpcGxlIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtYWN0aXZlIHtcXG4gICAgfVxcbiAgICAmLl9zZWxlY3QtY2hlY2tib3gge1xcbiAgICB9XFxufVxcblxcbi8vIGxpc3RcXG4uX3NlbGVjdC1saXN0IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIixcIi5hY2NvcmRpb24ge1xcbiAgICAvLyAuYWNjb3JkaW9uX19pdGVtXFxuXFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi40cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4ZW0pIHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hY2NvcmRpb25fX3RpdGxlXFxuXFxuICAgICZfX3RpdGxlIHtcXG4gICAgICAgIHBhZGRpbmc6IDIuNHJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAmLl9hY2NvcmRpb24tYWN0aXZlIHtcXG4gICAgICAgICAgICAuYXJyIHN2ZyB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC5hcnIge1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYXJyIHtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgNXJlbTtcXG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICAgICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDMuMnJlbTtcXG4gICAgICAgICAgICAuYXJyIHtcXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDlyZW07XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5cmVtO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDlyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hY2NvcmRpb25fX3RpdGxlLXR4dFxcblxcbiAgICAmX190aXRsZS10eHQge1xcbiAgICB9XFxuXFxuICAgIC8vIC5hY2NvcmRpb25fX2JvZHlcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBwYWRkaW5nOiAyLjRyZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OGVtKSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMy4ycmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIC5hY2NvcmRpb25fX3RleHRcXG5cXG4gICAgJl9fdGV4dCB7XFxuICAgICAgICBjb2xvcjogcmdiYSgxMzIsIDEzMiwgMTMyLCAxKTtcXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvZ3JvdXAtY3NzLW1lZGlhLXF1ZXJpZXMtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9ncm91cC1jc3MtbWVkaWEtcXVlcmllcy1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmb3JtcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0ICogYXMgZm9ybXMgZnJvbSAnLi91dGlscy9mb3Jtcy5qcyc7XG5cbi8vIGZvcm0gZmllbGRzXG5mb3Jtcy5mb3JtRmllbGRzSW5pdCh7IHZpZXdQYXNzOiBmYWxzZSB9KTtcblxuLy8gZm9ybSBzdWJtaXRcbmZvcm1zLmZvcm1TdWJtaXQoKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1dGlscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdGFic1xuLy8gaW1wb3J0ICcuL3V0aWxzL3RhYnMuanMnO1xuXG4vLyBhY2NvcmRpb25cbmltcG9ydCAnLi91dGlscy9hY2NvcmRpb24uanMnO1xuXG4vLyBzZWxlY3RcbmltcG9ydCAnLi91dGlscy9zZWxlY3QuanMnO1xuXG4vLyBtb2RhbHNcbi8vIGltcG9ydCAnLi91dGlscy9tb2RhbHMuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxpYnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBkeW5hbWljIGRvbVxuLy8gaW1wb3J0ICcuL2xpYnMvZGQuanMnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgJy4vZGV2L3Z6bXNrMS5qcyc7XG5pbXBvcnQgJy4vZGV2L21hcmt1c0RNLmpzJztcbmltcG9ydCAnLi9kZXYvdWtpazAuanMnO1xuaW1wb3J0ICcuL2Rldi9raWU2ZXIuanMnO1xuIl0sIm5hbWVzIjpbImRhdGFNZWRpYVF1ZXJpZXMiLCJfc2xpZGVUb2dnbGUiLCJfc2xpZGVVcCIsIl9zbGlkZURvd24iLCJhY2NvcmRpb24iLCJhY2NvcmRpb25JdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImluaXRBY2NvcmRpb24iLCJtYXRjaE1lZGlhIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsImFjY29yZGlvbkdyb3VwIiwiaXRlbSIsIm1hdGNoZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbml0QWNjb3JkaW9uQm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRBY2NvcmRpb25BY3Rpb25zIiwicmVtb3ZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVBY2NvcmRpb25Cb2R5IiwidGl0bGVzIiwiQXJyYXkiLCJmcm9tIiwiZmlsdGVyIiwiY2xvc2VzdCIsInRpdGxlIiwicmVtb3ZlQXR0cmlidXRlIiwiY29udGFpbnMiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJoaWRkZW4iLCJzZXRBdHRyaWJ1dGUiLCJlIiwidGFyZ2V0IiwiZ3JvdXAiLCJpc09uZUFjdGl2ZUl0ZW0iLCJoYXNBdHRyaWJ1dGUiLCJhY2NvcmRpb25TcGVlZCIsImRhdGFzZXQiLCJwYXJzZUludCIsInRvZ2dsZSIsInByZXZlbnREZWZhdWx0IiwiYWN0aXZlVGl0bGUiLCJxdWVyeVNlbGVjdG9yIiwiYWNjb3JkaW9uQ2xvc2UiLCJhY2NvcmRpb25JdGVtQ2xvc2UiLCJzcGVlZCIsInNwb2xsZXJzQmxvY2siLCJyZWdJdGVtcyIsImluZGV4Iiwic2VsZiIsInNwbGl0IiwibWRRdWVyaWVzQXJyYXkiLCJtZFF1ZXJpZXNJdGVtIiwiaXRlbXNBcnJheSIsImZvcm1GaWVsZHNJbml0Iiwib3B0aW9ucyIsInZpZXdQYXNzIiwiZm9ybUZpZWxkcyIsImZvcm1GaWVsZCIsInBsYWNlaG9sZGVyIiwiYm9keSIsInRhcmdldEVsZW1lbnQiLCJ0YWdOYW1lIiwidHlwZSIsInBhcmVudEVsZW1lbnQiLCJmb3JtVmFsaWRhdGUiLCJyZW1vdmVFcnJvciIsInZhbGlkYXRlSW5wdXQiLCJ2YWx1ZSIsInRyaW0iLCJmaWxlSW5wdXQiLCJpbnB1dFR5cGUiLCJnZXRFcnJvcnMiLCJmb3JtIiwiZXJyb3IiLCJmb3JtUmVxdWlyZWRJdGVtcyIsImZvcm1SZXF1aXJlZEl0ZW0iLCJvZmZzZXRQYXJlbnQiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwicmVwbGFjZSIsImVtYWlsVGVzdCIsImFkZEVycm9yIiwiY2hlY2tlZCIsInRocyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJtYXhTaXplIiwiTnVtYmVyIiwiZmlsZSIsImZpbGVzIiwicGFyZW50IiwidGV4dCIsIm5hbWUiLCJleHRlbnNpb24iLCJpbWciLCJzaXplIiwicmVtb3ZlQnRuIiwiZGF0YSIsInNsaWNlIiwiam9pbiIsInBvcCIsInNyYyIsInJlc3VsdCIsImlubmVySFRNTCIsInRvRml4ZWQiLCJyZWFkQXNEYXRhVVJMIiwidmFsaWRhdGUiLCJwYXR0ZXJuIiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dEVycm9yIiwicmVtb3ZlQ2hpbGQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJmb3JtQ2xlYW4iLCJyZXNldCIsInNldFRpbWVvdXQiLCJpbnB1dHMiLCJlbCIsImNoZWNrYm94ZXMiLCJjaGVja2JveCIsImZvcm1TdWJtaXQiLCJmb3JtcyIsImZvcm1TdWJtaXRBY3Rpb24iLCJhamF4IiwiZm9ybUFjdGlvbiIsImdldEF0dHJpYnV0ZSIsImZvcm1NZXRob2QiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwicmVzcG9uc2VSZXN1bHQiLCJqc29uIiwiZm9ybVNlbnQiLCJhbGVydCIsImZvcm1FcnJvciIsImdvdG9CbG9jayIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIlNlbGVjdCIsImNvbnN0cnVjdG9yIiwiX3RoaXMiLCJjbGFzc2VzIiwic2VsIiwibGFiZWwiLCJ2YWwiLCJjb250ZW50Iiwib3B0aW9uIiwic2Nyb2xsIiwiaW5wIiwiYXNzZXQiLCJ0eHQiLCJoaW50IiwiYWN0aXZlIiwiZm9jdXNlZCIsIm9wZW5lZCIsImZpbGxlZCIsInNlbGVjdGVkIiwibGlzdCIsIm11bHRpcGxlIiwic2VsZWN0TGlzdCIsImluaXQiLCJzZWxlY3QiLCJpbml0U2VsSXRlbSIsInNldEFjdGlvbnMiLCJiaW5kIiwicmVsYXRpdmVTZWwiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic2VsSWQiLCJnZXRQbGFjZWhvbGRlciIsIm9wdFBsYWNlaG9sZGVyIiwic2hvdyIsInNlbFRpdGxlIiwiZ2V0U2VsZWN0IiwidHdpblNlbCIsImJ1aWxkIiwiaW5pdFNlbGVjdGlvbnMiLCJzZXRWYWx1ZSIsInNldE9wdGlvbnMiLCJzZWxBZGRvbkNsYXNzIiwiZGlzYWJsZVNlbGVjdCIsInNldFNlYXJjaEFjdGlvbnMiLCJzZXRBY3Rpb24iLCJzZWxIaW50Iiwic2VsQm9keSIsImdldFZhbHVlIiwicmVsYXRpdmVTZWxPcHRpb25zIiwiZ2V0T3B0aW9ucyIsIndpbmRvdyIsImdldENsYXNzIiwic2VsZWN0SWQiLCJzZWxMaXN0Iiwic2VsT3B0aW9uIiwib3B0VmFsIiwic2V0T3B0aW9uQWN0aW9uIiwiYWRkRXJyIiwicmVtb3ZlRXJyIiwiY29kZSIsImNsb3NlR3JvdXAiLCJzZWxPcHRpb25zIiwic2VsZWN0T25lR3JvdXAiLCJzZWxHcm91cCIsInNlbGVjdGlvbnMiLCJzZWxlY3Rpb24iLCJjbG9zZUl0ZW0iLCJyZWxhdGl2ZVNlbGVjdGlvbnMiLCJnZXREYXRhIiwiZWxlbWVudHMiLCJyZWxhdGl2ZVNlbGVjdGlvbiIsInR3aW5TZWxlY3Rpb25zIiwidHdpblNlbGVjdGlvbiIsIm9wdCIsInRleHRDb250ZW50Iiwic2V0U2VsZWN0aW9ucyIsInNlbElucHV0IiwidG9VcHBlckNhc2UiLCJpbmRleE9mIiwic2V0U3VidGl0bGUiLCJzZWxFcnJvciIsImNzc0NsYXNzIiwiYXR0ciIsImF0dHJDbGFzcyIsInRpdGxlVmFsIiwiaHRtbCIsInNlbExhYmVsIiwidmFsdWVzIiwibWFwIiwiZ2V0Q29udGVudCIsImN1c3RvbUNsYXNzIiwib3B0Q2xhc3MiLCJzZWxTY3JvbGwiLCJzZWxTY3JvbGxIZWlnaHQiLCJpbm5lcldpZHRoIiwic2VsT3B0aW9uc0hUTUwiLCJnZXRPcHRpb24iLCJzaG93U2VsZWN0aW9uIiwib3B0aW9uQ2xhc3MiLCJvcHRpb25MaW5rIiwib3B0aW9uTGlua1RhcmdldCIsIm9wdGlvbkhUTUwiLCJvcHRpb25EYXRhIiwib3B0QXNzZXQiLCJvcHRpb25EYXRhSFRNTCIsIm9wdGlvbkNvbnRlbnRIVE1MIiwiZmluZCIsInN1YnRpdGxlIiwicHVzaCIsInNlbGVjdGVkSW5kZXgiLCJ0ZW1wQnV0dG9uIiwiYXBwZW5kIiwiY2xpY2siLCJzZXRIYXNoIiwiaGFzaCIsImxvY2F0aW9uIiwiaHJlZiIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJnZXRIYXNoIiwiYm9keUxvY2tTdGF0dXMiLCJib2R5TG9ja1RvZ2dsZSIsImRlbGF5IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keVVubG9jayIsImJvZHlMb2NrIiwiYXJyYXkiLCJkYXRhU2V0VmFsdWUiLCJtZWRpYSIsImJyZWFrcG9pbnRzQXJyYXkiLCJwYXJhbXMiLCJicmVha3BvaW50IiwicGFyYW1zQXJyYXkiLCJtZFF1ZXJpZXMiLCJ1bmlxdWVBcnJheSIsIm1lZGlhQnJlYWtwb2ludCIsIm1lZGlhVHlwZSIsImR1cmF0aW9uIiwic2hvd21vcmUiLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW1vdmVQcm9wZXJ0eSIsInJlbVRvUHgiLCJyZW1WYWx1ZSIsImh0bWxGb250U2l6ZSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZm9udFNpemUiLCJweFZhbHVlIiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlQ2xhc3NlcyIsImNsYXNzTmFtZSIsImkiXSwic291cmNlUm9vdCI6IiJ9