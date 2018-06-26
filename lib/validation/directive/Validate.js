"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
function checkForErrors(el, vNode) {
    if (!vNode.value.isValid()) {
        var errors = vNode.value.errors();
        if (errors && errors[el.name]) {
            if (!hasValidationErrorElement(el)) {
                el.insertAdjacentHTML("afterend", "<div class=\"validation-error\"></div>");
            }
            return (el.nextSibling.innerHTML = errors[el.name]);
        }
    }
    removeErrors(el);
}
function removeErrors(el) {
    if (hasValidationErrorElement(el)) {
        el.nextSibling.remove();
    }
}
function hasValidationErrorElement(el) {
    var sibling = el.nextSibling;
    if (sibling && sibling.classList) {
        return sibling.classList.contains("validation-error");
    }
    return false;
}
vue_1.default.directive("form", {
    inserted: function (form, vNode) {
        form.querySelectorAll("*[validate]").forEach(function (el) {
            switch (el.type) {
                case "radio":
                case "checkbox":
                    el.onchange = function () {
                        checkForErrors(el, vNode);
                    };
                    break;
                default:
                    el.onblur = function () {
                        checkForErrors(el, vNode);
                        el.oninput = function () {
                            checkForErrors(el, vNode);
                        };
                    };
                    break;
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9kaXJlY3RpdmUvVmFsaWRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBc0I7QUFFdEIsd0JBQXdCLEVBQWUsRUFBRSxLQUFLO0lBQzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDbkIsVUFBVSxFQUNWLHdDQUFzQyxDQUN2QyxDQUFDO1lBQ0osQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsQ0FBQztJQUNELFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBRUQsc0JBQXNCLEVBQWU7SUFDbkMsRUFBRSxDQUFDLENBQUMseUJBQXlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztBQUNILENBQUM7QUFFRCxtQ0FBbUMsRUFBZTtJQUNoRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRCxhQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtJQUNwQixRQUFRLEVBQUUsVUFBQyxJQUFpQixFQUFFLEtBQUs7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7WUFDN0MsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUssT0FBTyxDQUFDO2dCQUNiLEtBQUssVUFBVTtvQkFDYixFQUFFLENBQUMsUUFBUSxHQUFHO3dCQUNaLGNBQWMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQztvQkFDRixLQUFLLENBQUM7Z0JBQ1I7b0JBQ0UsRUFBRSxDQUFDLE1BQU0sR0FBRzt3QkFDVixjQUFjLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUMxQixFQUFFLENBQUMsT0FBTyxHQUFHOzRCQUNYLGNBQWMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQzVCLENBQUMsQ0FBQztvQkFDSixDQUFDLENBQUM7b0JBQ0YsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyJ9