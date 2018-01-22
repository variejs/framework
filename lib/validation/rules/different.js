"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./../../utilities");
exports.default = {
    passes: function (value, parameters, data) {
        if (parameters === void 0) { parameters = []; }
        return value !== utilities_1.getByDot(data, parameters[0]);
    },
    replacers: function () {
        return ["other"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZmVyZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRpb24vcnVsZXMvZGlmZmVyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTZDO0FBRTdDLGtCQUFlO0lBQ2IsTUFBTSxFQUFOLFVBQU8sS0FBVSxFQUFFLFVBQWUsRUFBRSxJQUFRO1FBQXpCLDJCQUFBLEVBQUEsZUFBZTtRQUNoQyxNQUFNLENBQUMsS0FBSyxLQUFLLG9CQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTO1FBQ1AsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNGLENBQUMifQ==