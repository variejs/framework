import Vue from "vue";

function checkForErrors(el: HTMLElement, vNode) {
  let errors = vNode.value.isValid();
  if (errors && errors[el.name]) {
    if (!hasValidationErrorElement(el)) {
      el.insertAdjacentHTML("afterend", `<div class="validation-error"></div>`);
    }
    return (el.nextSibling.innerHTML = errors[el.name]);
  }
  removeErrors(el);
}

function removeErrors(el: HTMLElement) {
  if (hasValidationErrorElement(el)) {
    el.nextSibling.remove();
  }
}

function hasValidationErrorElement(el: HTMLElement) {
  let sibling = el.nextSibling;
  if (sibling && sibling.classList) {
    return sibling.classList.contains("validation-error");
  }
  return false;
}

Vue.directive("validate", {
  inserted: (el: HTMLElement, vNode) => {
    el.onblur = () => {
      checkForErrors(el, vNode);
    };
  },
  update: (el: HTMLElement, vNode) => {
    if (hasValidationErrorElement(el)) {
      checkForErrors(el, vNode);
    }
  }
});
