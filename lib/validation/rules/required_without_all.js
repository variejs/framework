"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./../../utilities");
exports.default = {
    passes: function (value, parameters, data) {
        console.info(parameters);
        if (!value) {
            var validLength_1 = 0;
            parameters.forEach(function (parameter) {
                var parameterValue = utilities_1.getByDot(data, parameter);
                if (parameterValue) {
                    validLength_1++;
                }
            });
            if (validLength_1 === 0) {
                return false;
            }
        }
        return true;
    },
    replacers: function () {
        return ["values"];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWRfd2l0aG91dF9hbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9ydWxlcy9yZXF1aXJlZF93aXRob3V0X2FsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE2QztBQUU3QyxrQkFBZTtJQUNiLE1BQU0sRUFBTixVQUFPLEtBQVUsRUFBRSxVQUFjLEVBQUUsSUFBUTtRQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksYUFBVyxHQUFHLENBQUMsQ0FBQztZQUNwQixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztnQkFDMUIsSUFBSSxjQUFjLEdBQUcsb0JBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQy9DLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLGFBQVcsRUFBRSxDQUFDO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FBQyxhQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxTQUFTO1FBQ1AsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUMifQ==