"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Rule_1 = require("./Rule");
var Integer = /** @class */ (function (_super) {
    __extends(Integer, _super);
    function Integer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Integer.prototype.passes = function (attribute, value) {
        return value.isInteger();
    };
    Integer.prototype.message = function () {
        return "Not a number.";
    };
    return Integer;
}(Rule_1.default));
exports.default = Integer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0aW9uL3J1bGVzL0ludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBRTFCO0lBQXFDLDJCQUFJO0lBQXpDOztJQVFBLENBQUM7SUFQQyx3QkFBTSxHQUFOLFVBQU8sU0FBYyxFQUFFLEtBQVU7UUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQseUJBQU8sR0FBUDtRQUNFLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBcUMsY0FBSSxHQVF4QyJ9