"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./../../utilities");
exports.default = {
    passes: function (value, parameters, data) {
        if (!value) {
            var required_1 = false;
            parameters.forEach(function (parameter) {
                var parameterValue = utilities_1.getByDot(data, parameter);
                if (required_1 === true || parameterValue) {
                    required_1 = true;
                }
            });
            return !required_1;
        }
        return true;
    },
    replacers: function () {
        return ["values"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWRfd2l0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0aW9uL3J1bGVzL3JlcXVpcmVkX3dpdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBNkM7QUFFN0Msa0JBQWU7SUFDYixNQUFNLEVBQU4sVUFBTyxLQUFVLEVBQUUsVUFBYyxFQUFFLElBQVE7UUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxVQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO2dCQUMxQixJQUFJLGNBQWMsR0FBRyxvQkFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDL0MsRUFBRSxDQUFDLENBQUMsVUFBUSxLQUFLLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN4QyxVQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsQ0FBQyxVQUFRLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDRixDQUFDIn0=