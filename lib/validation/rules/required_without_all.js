"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("./../../utilities");
exports.default = {
    passes: function (value, parameters, data) {
        if (parameters === void 0) { parameters = []; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZWRfd2l0aG91dF9hbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9ydWxlcy9yZXF1aXJlZF93aXRob3V0X2FsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUE2QztBQUU3QyxrQkFBZTtJQUNiLE1BQU0sRUFBTixVQUFPLEtBQVUsRUFBRSxVQUFlLEVBQUUsSUFBUTtRQUF6QiwyQkFBQSxFQUFBLGVBQWU7UUFDaEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxhQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO2dCQUMxQixJQUFJLGNBQWMsR0FBRyxvQkFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDL0MsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDbkIsYUFBVyxFQUFFLENBQUM7Z0JBQ2hCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxDQUFDLGFBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELFNBQVM7UUFDUCxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0YsQ0FBQyJ9