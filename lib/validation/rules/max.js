"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isLength = require("validator/lib/isLength");
exports.default = {
    passes: function (value, attributes) {
        return isLength(value, { max: attributes[0] });
    },
    replacers: function () {
        return ["max", "size"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELGtCQUFlO0lBQ2IsTUFBTSxZQUFDLEtBQVUsRUFBRSxVQUFlO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUMifQ==