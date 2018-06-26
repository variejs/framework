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
        return ["date"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZ0ZXJfb3JfZXF1YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9ydWxlcy9hZnRlcl9vcl9lcXVhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUErQztBQUMvQywrQ0FBaUQ7QUFFakQsa0JBQWU7SUFDYixNQUFNLFlBQUMsS0FBVSxFQUFFLFVBQWU7UUFDaEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQyJ9