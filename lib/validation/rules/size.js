"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./../../utilities");
exports.default = {
    passes: function (value, parameters, data) {
        // TODO - array or string, or file size
        return value.length === utilities_1.getByDot(data, parameters[0]).length;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0aW9uL3J1bGVzL3NpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBNkM7QUFFN0Msa0JBQWU7SUFDYixNQUFNLEVBQU4sVUFBTyxLQUFVLEVBQUUsVUFBYyxFQUFFLElBQVE7UUFDekMsdUNBQXVDO1FBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLG9CQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUMvRCxDQUFDO0NBQ0YsQ0FBQyJ9