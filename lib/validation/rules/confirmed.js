"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./../../utilities");
exports.default = {
    passes: function (value, parameters, data) {
        console.info(value);
        return value === utilities_1.getByDot(data, parameters[0]);
    },
    replacers: function () {
        return ["other"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybWVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvY29uZmlybWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTZDO0FBRTdDLGtCQUFlO0lBQ2IsTUFBTSxFQUFOLFVBQU8sS0FBVSxFQUFFLFVBQWUsRUFBRSxJQUFTO1FBQzNDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsTUFBTSxDQUFDLEtBQUssS0FBSyxvQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFDIn0=