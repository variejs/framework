"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLength = require("validator/lib/isLength");
exports.default = {
    passes: function (value, attributes) {
        return isLength(value, { max: attributes[0] });
    },
    message: function () {
        return "The :attribute length is :max. Your :input is length :value";
    },
    replacers: function () {
        return ["max"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELGtCQUFlO0lBQ2IsTUFBTSxZQUFDLEtBQVUsRUFBRSxVQUFlO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLENBQUMsNkRBQTZELENBQUM7SUFDdkUsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQyJ9