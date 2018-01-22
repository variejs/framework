"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var isLength = require("validator/lib/isLength");
exports.default = {
    passes: function (value, attributes) {
        if (value) {
            var max = attributes[0];
            if (util_1.isObject(value)) {
                return value.size <= (max * 1024);
            }
            else if (util_1.isArray(value)) {
                return value.length <= max;
            }
            return isLength(value, { max: max });
        }
        return true;
    },
    replacers: function () {
        return ["max", "size"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXdDO0FBQ3hDLGlEQUFtRDtBQUVuRCxrQkFBZTtJQUNiLE1BQU0sWUFBQyxLQUFVLEVBQUUsVUFBZTtRQUNoQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRVQsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQSxDQUFDLGVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsY0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFBO1lBQzVCLENBQUM7WUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUMifQ==