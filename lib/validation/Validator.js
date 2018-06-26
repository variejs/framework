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
var Form_1 = require("../plugins/forms/Form");
var Validator = /** @class */ (function (_super) {
    __extends(Validator, _super);
    function Validator(data) {
        var _this = _super.call(this, data, $app.make("$validator")) || this;
        _this.rules = {};
        _this.messages = {};
        return _this;
    }
    return Validator;
}(Form_1.default));
exports.default = Validator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZhbGlkYXRpb24vVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUV6QztJQUF1Qyw2QkFBSTtJQUl6QyxtQkFBWSxJQUFZO1FBQXhCLFlBQ0Usa0JBQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsU0FDckM7UUFMTSxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFJckIsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVBELENBQXVDLGNBQUksR0FPMUMifQ==