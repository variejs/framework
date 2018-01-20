"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isBefore = require("validator/lib/isBefore");
exports.default = {
    passes: function (value, parameters) {
        if (value) {
            return isBefore(value, parameters[0]);
        }
    },
    replacers: function () {
        return ['date'];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVmb3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvYmVmb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELGtCQUFlO0lBQ2IsTUFBTSxZQUFDLEtBQVUsRUFBRSxVQUFnQjtRQUNqQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUMifQ==