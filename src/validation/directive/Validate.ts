import Vue from "vue";
import Form from "../../plugins/forms/Form";

function checkForErrors(formElement, form: Form) {
  let errors = form.errors();
  formElement.querySelectorAll("*[validate]").forEach(el => {
    console.info(el.name, el.hasAttribute("touched"));
    if (el.hasAttribute("touched") && errors[el.name]) {
      return attachError(el, errors[el.name]);
    }
    removeErrors(el);
  });
}

function attachError(el: HTMLInputElement, error) {
  let validationElement = getValidationErrorElement(el);
  if (!validationElement) {
    el.insertAdjacentHTML(
      "afterend",
      `<div class="validation-error">${error}</div>`
    );
  } else {
    // @ts-ignore
    validationElement.innerHTML = error;
  }
}

function removeErrors(el: HTMLInputElement) {
  let validationElement = getValidationErrorElement(el);
  if (validationElement) {
    // @ts-ignore
    validationElement.remove();
  }
}

function getValidationErrorElement(
  el: HTMLInputElement
): HTMLInputElement | boolean {
  let sibling = el.nextSibling;
  // @ts-ignore
  if (sibling && sibling.classList) {
    // @ts-ignore
    return sibling.classList.contains("validation-error") && sibling;
  }
  return false;
}

// @ts-ignore
Vue.directive("form", {
  inserted(formElement: HTMLInputElement, vNode) {
    // @ts-ignore
    formElement
      .querySelectorAll("*[validate]")
      .forEach((el: HTMLInputElement) => {
        switch (el.type) {
          case "radio":
          case "checkbox":
            el.onchange = () => {
              el.setAttribute("touched", "true");
              checkForErrors(formElement, vNode.value);
            };
            break;
          default:
            el.oninput = () => {
              checkForErrors(formElement, vNode.value);
              el.onblur = () => {
                el.setAttribute("touched", "true");
                checkForErrors(formElement, vNode.value);
              };
            };
            break;
        }
      });
  }
});
