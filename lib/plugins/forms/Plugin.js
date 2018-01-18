"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Form_1 = require("./Form");
var inversify_1 = require("inversify");
var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms.prototype.install = function (Vue) {
        var _this = this;
        Vue.mixin({
            methods: {
                createForm: function (data) {
                    return new Form_1.default(data, _this._validator);
                }
            }
        });
    };
    __decorate([
        inversify_1.inject('$validator'),
        __metadata("design:type", Object)
    ], Forms.prototype, "_validator", void 0);
    Forms = __decorate([
        inversify_1.injectable()
    ], Forms);
    return Forms;
}());
exports.default = Forms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BsdWdpbnMvZm9ybXMvUGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTBCO0FBQzFCLHVDQUErQztBQUsvQztJQUFBO0lBY0EsQ0FBQztJQVRRLHVCQUFPLEdBQWQsVUFBZSxHQUFtQjtRQUFsQyxpQkFRQztRQVBDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFLFVBQUMsSUFBWTtvQkFDdkIsTUFBTSxDQUFDLElBQUksY0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFWRDtRQURDLGtCQUFNLENBQUMsWUFBWSxDQUFDOzs2Q0FDMkI7SUFINUMsS0FBSztRQURWLHNCQUFVLEVBQUU7T0FDUCxLQUFLLENBY1Y7SUFBRCxZQUFDO0NBQUEsQUFkRCxJQWNDO0FBRUQsa0JBQWUsS0FBSyxDQUFDIn0=