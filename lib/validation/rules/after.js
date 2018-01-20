"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isAfter = require("validator/lib/isAfter");
exports.default = {
    passes: function (value, parameters) {
        if (value) {
            return isAfter(value, parameters[0]);
        }
    },
    replacers: function () {
        return ['date'];
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdGlvbi9ydWxlcy9hZnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFpRDtBQUVqRCxrQkFBZTtJQUNiLE1BQU0sWUFBQyxLQUFVLEVBQUUsVUFBZ0I7UUFDakMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFDIn0=