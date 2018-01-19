"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmail = require("validator/lib/isEmail");
exports.default = {
    passes: function (value) {
        return isEmail(value);
    },
    message: function () {
        return "Not an email.";
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9ydWxlcy9lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFpRDtBQUVqRCxrQkFBZTtJQUNiLE1BQU0sWUFBQyxLQUFVO1FBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTztRQUNMLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUMifQ==