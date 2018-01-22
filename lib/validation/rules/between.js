"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
exports.default = {
    passes: function (value, parameters) {
        if (value) {
            var min = parameters[0];
            var max = parameters[1];
            if (util_1.isObject(value)) {
                var minSize = (min * 1024);
                var maxSize = (max * 1024);
                return minSize <= value.size && maxSize >= value.size;
            }
            else if (util_1.isArray(value)) {
                return min <= value.length && max >= value.length;
            }
            return min <= value && max >= value;
        }
    },
    replacers: function () {
        return ["min", "max"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92YWxpZGF0aW9uL3J1bGVzL2JldHdlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBd0M7QUFFeEMsa0JBQWU7SUFDYixNQUFNLFlBQUMsS0FBVSxFQUFFLFVBQWU7UUFDaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVULElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEIsRUFBRSxDQUFBLENBQUMsZUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUMzQixNQUFNLENBQUUsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDekQsQ0FBQztZQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxjQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUE7WUFDbkQsQ0FBQztZQUVELE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUM7UUFDdEMsQ0FBQztJQUVILENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFDIn0=