import Vue from "vue";

function checkForErrors(el: HTMLInputElement, vNode) {
  if (!vNode.value.isValid()) {
    let errors = vNode.value.errors();
    if (errors && errors[el.name]) {
      if (!hasValidationErrorElement(el)) {
        el.insertAdjacentHTML(
          "afterend",
          `<div class="validation-error"></div>`
        );
      }
      if (el.nextSibling) {
        // @ts-ignore
        return (el.nextSibling.innerHTML = errors[el.name]);
      }
    }
  }
  removeErrors(el);
}

function removeErrors(el: HTMLInputElement) {
  if (hasValidationErrorElement(el)) {
    if (el.nextSibling) {
      // @ts-ignore
      el.nextSibling.remove();
    }
  }
}

function hasValidationErrorElement(el: HTMLInputElement) {
  let sibling = el.nextSibling;
  // @ts-ignore
  if (sibling && sibling.classList) {
    // @ts-ignore
    return sibling.classList.contains("validation-error");
  }
  return false;
}

// @ts-ignore
Vue.directive("form", {
  inserted: (form: HTMLInputElement, vNode) => {
    // @ts-ignore
    form.querySelectorAll("*[validate]").forEach((el: HTMLInputElement) => {
      switch (el.type) {
        case "radio":
        case "checkbox":
          el.onchange = () => {
            checkForErrors(el, vNode);
          };
          break;
        default:
          el.onblur = () => {
            checkForErrors(el, vNode);
            el.oninput = () => {
              checkForErrors(el, vNode);
            };
          };
          break;
      }
    });
  }
});
