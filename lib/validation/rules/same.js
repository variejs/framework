"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./../../utilities");
exports.default = {
    passes: function (value, parameters, data) {
        return value === utilities_1.getByDot(data, parameters[0]);
    },
    replacers: function () {
        return ["other"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0aW9uL3J1bGVzL3NhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBNkM7QUFFN0Msa0JBQWU7SUFDYixNQUFNLEVBQU4sVUFBTyxLQUFVLEVBQUUsVUFBYyxFQUFFLElBQVE7UUFDekMsTUFBTSxDQUFDLEtBQUssS0FBSyxvQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFDIn0=