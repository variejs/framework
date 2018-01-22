"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toDate = require("validator/lib/toDate");
exports.default = {
    passes: function (value) {
        if (value) {
            return toDate(value) ? true : false;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0aW9uL3J1bGVzL2RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBK0M7QUFFL0Msa0JBQWU7SUFDYixNQUFNLFlBQUMsS0FBVTtRQUNmLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN0QyxDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMifQ==