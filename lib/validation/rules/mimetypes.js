"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");
exports.default = {
    passes: function (files, parameters) {
        if (files) {
            if (!util_1.isArray(files)) {
                files = [files];
            }
            var validLength_1 = 0;
            var regex_1 = new RegExp(parameters.join('|').replace('*', '.+') + "$", 'i');
            files.forEach(function (file) {
                if (regex_1.test(file.type)) {
                    validLength_1++;
                }
            });
            return validLength_1 === files.length;
        }
        return true;
    },
    replacers: function () {
        return ["values"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltZXR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWltZXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQThCO0FBRTlCLGtCQUFlO0lBQ2IsTUFBTSxZQUFDLEtBQVUsRUFBRSxVQUFlO1FBRWhDLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFVCxFQUFFLENBQUEsQ0FBQyxDQUFDLGNBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFDRCxJQUFJLGFBQVcsR0FBRyxDQUFDLENBQUM7WUFFcEIsSUFBTSxPQUFLLEdBQUcsSUFBSSxNQUFNLENBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFN0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLE9BQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsYUFBVyxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxhQUFXLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0QyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUMifQ==