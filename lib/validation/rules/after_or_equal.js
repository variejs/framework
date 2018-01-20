"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toDate = require("validator/lib/toDate");
var isAfter = require("validator/lib/isAfter");
exports.default = {
    passes: function (value, parameters) {
        var date = toDate(parameters[0]);
        if (value) {
            date.setDate(date.getDate() - 1);
            return isAfter(value, date.toLocaleDateString("en-US"));
        }
    },
    replacers: function () {
        return ['date'];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZ0ZXJfb3JfZXF1YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9ydWxlcy9hZnRlcl9vcl9lcXVhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUErQztBQUMvQywrQ0FBaUQ7QUFFakQsa0JBQWU7SUFDYixNQUFNLFlBQUMsS0FBVSxFQUFFLFVBQWdCO1FBQ2pDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUMifQ==