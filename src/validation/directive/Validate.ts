import Vue from "vue";

function checkForErrors(el: HTMLElement, vNode) {
  if (!vNode.value.isValid()) {
    let errors = vNode.value.errors();
    if (errors && errors[el.attributes["name"]]) {
      if (!hasValidationErrorElement(el)) {
        el.insertAdjacentHTML(
          "afterend",
          `<div class="validation-error"></div>`
        );
      }
      if (el.nextSibling) {
        return (el.nextSibling.innerHTML = errors[el.attributes["name"]]);
      }
    }
  }
  removeErrors(el);
}

function removeErrors(el: HTMLElement) {
  if (hasValidationErrorElement(el)) {
    if (el.nextSibling) {
      el.nextSibling.remove();
    }
  }
}

function hasValidationErrorElement(el: HTMLElement) {
  let sibling = el.nextSibling;
  if (sibling && sibling.classList) {
    return sibling.classList.contains("validation-error");
  }
  return false;
}

Vue.directive("form", {
  inserted: (form: HTMLElement, vNode) => {
    form.querySelectorAll("*[validate]").forEach(el => {
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
