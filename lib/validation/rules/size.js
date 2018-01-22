"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var isLength = require("validator/lib/isLength");
exports.default = {
    passes: function (value, parameters) {
        if (value) {
            var size = parameters[0];
            if (util_1.isObject(value)) {
                return value.size === (size * 1024);
            }
            else if (util_1.isArray(value)) {
                return value.length === size;
            }
            return isLength(value, size);
        }
        return true;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0aW9uL3J1bGVzL3NpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBd0M7QUFDeEMsaURBQW1EO0FBRW5ELGtCQUFlO0lBQ2IsTUFBTSxFQUFOLFVBQU8sS0FBVSxFQUFFLFVBQWM7UUFDL0IsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6QixFQUFFLENBQUEsQ0FBQyxlQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLGNBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQztZQUMvQixDQUFDO1lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDOUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQyJ9