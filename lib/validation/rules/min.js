"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLength = require("validator/lib/isLength");
exports.default = {
    passes: function (value, attributes) {
        return isLength(value, { min: attributes[0] });
    },
    replacers: function () {
        return ["min"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELGtCQUFlO0lBQ2IsTUFBTSxZQUFDLEtBQVUsRUFBRSxVQUFlO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0NBQ0YsQ0FBQyJ9