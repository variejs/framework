"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Form_1 = require("./Form");
var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms.prototype.install = function (Vue) {
        Vue.mixin({
            methods: {
                createForm: function (data) {
                    return new Form_1.default(data);
                }
            }
        });
    };
    return Forms;
}());
exports.default = Forms;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGx1Z2lucy9mb3Jtcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEwQjtBQUcxQjtJQUFBO0lBVUEsQ0FBQztJQVRRLHVCQUFPLEdBQWQsVUFBZSxHQUFtQjtRQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRSxVQUFDLElBQVk7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLGNBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQzthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQUVELGtCQUFlLEtBQUssQ0FBQyJ9