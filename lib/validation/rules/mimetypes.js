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
            var regex_1 = new RegExp(parameters.join("|").replace("*", ".+") + "$", "i");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltZXR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvbWltZXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQStCO0FBRS9CLGtCQUFlO0lBQ2IsTUFBTSxZQUFDLEtBQVUsRUFBRSxVQUFlO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFDRCxJQUFJLGFBQVcsR0FBRyxDQUFDLENBQUM7WUFFcEIsSUFBTSxPQUFLLEdBQUcsSUFBSSxNQUFNLENBQ25CLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBRyxFQUM3QyxHQUFHLENBQ0osQ0FBQztZQUVGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNoQixFQUFFLENBQUMsQ0FBQyxPQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLGFBQVcsRUFBRSxDQUFDO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsYUFBVyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdEMsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Q0FDRixDQUFDIn0=