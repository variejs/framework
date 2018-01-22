"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
var isLength = require("validator/lib/isLength");
exports.default = {
    passes: function (value, attributes) {
        if (value) {
            var min = attributes[0];
            if (util_1.isObject(value)) {
                return value.size >= (min * 1024);
            }
            else if (util_1.isArray(value)) {
                return value.length >= min;
            }
            return isLength(value, { min: min });
        }
        return true;
    },
    replacers: function () {
        return ["min", "size"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXdDO0FBQ3hDLGlEQUFtRDtBQUduRCxrQkFBZTtJQUNiLE1BQU0sWUFBQyxLQUFVLEVBQUUsVUFBZTtRQUNoQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRVQsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhCLEVBQUUsQ0FBQSxDQUFDLGVBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsY0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDO1lBQzdCLENBQUM7WUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBRWQsQ0FBQztJQUVELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUMifQ==